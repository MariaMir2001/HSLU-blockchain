// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

/// ---------------------------
/// ProjectRegistry (MVP + Ended Status)
/// ---------------------------
contract ProjectRegistry {
    address public owner;
    uint256 public projectCount;
    uint256 public requiredApprovals = 1;

    enum ProjectStatus { Pending, Verified, Published, Ended }

    struct Project {
        uint256 id;
        string name;
        address payoutAddress;
        string ipfsHash;
        string ssiDidHash;
        ProjectStatus status;
        uint256 approvalsCount;
        address creator;
    }

    mapping(uint256 => Project) public projects;
    mapping(address => bool) public isVerifier;
    mapping(uint256 => mapping(address => bool)) public hasApproved;

    event ProjectCreated(uint256 indexed projectId, string name, address creator);
    event ProjectApproved(uint256 indexed projectId, address verifier, uint256 approvalsCount);
    event ProjectVerified(uint256 indexed projectId);
    event ProjectEnded(uint256 indexed projectId);

    modifier onlyOwner() {
        require(msg.sender == owner, "not owner");
        _;
    }

    modifier onlyVerifier() {
        require(isVerifier[msg.sender], "not verifier");
        _;
    }

    modifier projectExists(uint256 id) {
        require(id > 0 && id <= projectCount, "project not found");
        _;
    }

    constructor() {
        owner = msg.sender;
        projectCount = 0;
    }

    function addVerifier(address v) external onlyOwner {
        require(v != address(0), "zero address");
        isVerifier[v] = true;
    }

    function removeVerifier(address v) external onlyOwner {
        require(isVerifier[v], "not a verifier");
        isVerifier[v] = false;
    }

    function setRequiredApprovals(uint256 n) external onlyOwner {
        require(n > 0, "must be > 0");
        requiredApprovals = n;
    }

    function createProject(
        string calldata name,
        address payoutAddress,
        string calldata ipfsHash,
        string calldata ssiDidHash
    ) external returns (uint256) {
        require(bytes(name).length > 0, "name required");
        require(payoutAddress != address(0), "invalid payout");
        require(bytes(ipfsHash).length > 0, "ipfsHash required");
        require(bytes(ssiDidHash).length > 0, "ssiDidHash required");

        projectCount++;
        uint256 id = projectCount;

        projects[id] = Project({
            id: id,
            name: name,
            payoutAddress: payoutAddress,
            ipfsHash: ipfsHash,
            ssiDidHash: ssiDidHash,
            status: ProjectStatus.Pending,
            approvalsCount: 0,
            creator: msg.sender
        });

        emit ProjectCreated(id, name, msg.sender);
        return id;
    }

    function approveProject(uint256 id) external onlyVerifier projectExists(id) {
        require(!hasApproved[id][msg.sender], "already approved");
        Project storage p = projects[id];
        require(p.status == ProjectStatus.Pending, "project not pending");

        hasApproved[id][msg.sender] = true;
        p.approvalsCount++;

        emit ProjectApproved(id, msg.sender, p.approvalsCount);

        if (p.approvalsCount >= requiredApprovals) {
            p.status = ProjectStatus.Verified;
            // automatically publish for MVP
            p.status = ProjectStatus.Published;
            emit ProjectVerified(id);
        }
    }

    /// @notice set project to Ended so it no longer receives funds
    function endProject(uint256 id) external onlyOwner projectExists(id) {
        Project storage p = projects[id];
        require(p.status != ProjectStatus.Ended, "already ended");
        p.status = ProjectStatus.Ended;
        emit ProjectEnded(id);
    }

    /// @notice getProject returns project info. Status returned as uint8 for compatibility
    function getProject(uint256 id)
        external
        view
        projectExists(id)
        returns (
            uint256 pid,
            string memory name,
            address payoutAddress,
            string memory ipfsHash,
            string memory ssiDidHash,
            uint8 status,
            uint256 approvalsCount,
            address creator
        )
    {
        Project storage p = projects[id];
        return (
            p.id,
            p.name,
            p.payoutAddress,
            p.ipfsHash,
            p.ssiDidHash,
            uint8(p.status), // cast enum to uint8
            p.approvalsCount,
            p.creator
        );
    }
}

/// ---------------------------
/// Simple Reentrancy Guard
/// ---------------------------
abstract contract ReentrancyGuard {
    uint256 private _status;
    constructor() { _status = 1; }
    modifier nonReentrant() {
        require(_status == 1, "reentrant");
        _status = 2;
        _;
        _status = 1;
    }
}

/// ---------------------------
/// FundingPool (MVP + Ended Check)
/// ---------------------------
contract FundingPool is ReentrancyGuard {
    address public owner;
    ProjectRegistry public registry;

    uint256 public poolBalance;//:)wei retained for distribution.

    // Fee recipients and basis points (parts per 10_000)
    address public feeRecipientTreasury;
    address public feeRecipientVerifiers;
    address public feeRecipientCommunity;
    uint256 public feeTreasuryBP;   // e.g., 1050 for 10.5%
    uint256 public feeVerifiersBP;  // e.g., 300  for 3%
    uint256 public feeCommunityBP;  // e.g., 150  for 1.5%

    event Deposit(address indexed payer, uint256 amount, uint256 netToPool);
    event FeesPaid(uint256 treasuryAmt, uint256 verifiersAmt, uint256 communityAmt);
    event QuarterDistributed(uint256 totalDistributed, uint256 publishedCount);
    event ProjectPayout(uint256 indexed projectId, address indexed payoutAddress, uint256 amount);
    event OwnerWithdraw(address indexed to, uint256 amount);

    modifier onlyOwner() {
        require(msg.sender == owner, "not owner");
        _;
    }

    constructor(address registryAddress) {
        owner = msg.sender;
        require(registryAddress != address(0), "invalid registry");
        registry = ProjectRegistry(registryAddress);

        // default fee recipients set to owner for MVP
        feeRecipientTreasury = owner;
        feeRecipientVerifiers = owner;
        feeRecipientCommunity = owner;

        // default fee split matching earlier: 10.5%, 3%, 1.5% = 15%
        feeTreasuryBP = 1050; // 10.5%
        feeVerifiersBP = 300; // 3.0%
        feeCommunityBP = 150; // 1.5%
    }

    function setFeesAndRecipients(
        address treasury,
        uint256 treasuryBP,
        address verifiers,
        uint256 verifiersBP,
        address community,
        uint256 communityBP
    ) external onlyOwner {
        require(treasury != address(0) && verifiers != address(0) && community != address(0), "zero address");
        uint256 totalBP = treasuryBP + verifiersBP + communityBP;
        require(totalBP <= 10000, "fees > 100%");
        feeRecipientTreasury = treasury;
        feeTreasuryBP = treasuryBP;
        feeRecipientVerifiers = verifiers;
        feeVerifiersBP = verifiersBP;
        feeRecipientCommunity = community;
        feeCommunityBP = communityBP;
    }

    function deposit() external payable nonReentrant {
        require(msg.value > 0, "no eth sent");
        uint256 incoming = msg.value;

        uint256 treasuryAmt = (incoming * feeTreasuryBP) / 10000;
        uint256 verifiersAmt = (incoming * feeVerifiersBP) / 10000;
        uint256 communityAmt = (incoming * feeCommunityBP) / 10000;

        uint256 feesTotal = treasuryAmt + verifiersAmt + communityAmt;
        uint256 net = incoming - feesTotal;

        if (treasuryAmt > 0) { (bool okT, ) = feeRecipientTreasury.call{value: treasuryAmt}(""); require(okT, "treasury transfer failed"); }
        if (verifiersAmt > 0) { (bool okV, ) = feeRecipientVerifiers.call{value: verifiersAmt}(""); require(okV, "verifiers transfer failed"); }
        if (communityAmt > 0) { (bool okC, ) = feeRecipientCommunity.call{value: communityAmt}(""); require(okC, "community transfer failed"); }

        poolBalance += net;

        emit FeesPaid(treasuryAmt, verifiersAmt, communityAmt);
        emit Deposit(msg.sender, incoming, net);
    }

    function simulateQuarterDistribute() external onlyOwner nonReentrant {
        uint256 totalPool = poolBalance;
        require(totalPool > 0, "no funds to distribute");

        uint256 countPublished = 0;
        uint256 totalProjects = registry.projectCount();

        // Count only Published projects
        for (uint256 i = 1; i <= totalProjects; i++) {
            (, , , , , uint8 status, , ) = registry.getProject(i);
            if (status == uint8(ProjectRegistry.ProjectStatus.Published)) {
                countPublished++;
            }
        }

        require(countPublished > 0, "no published projects");

        uint256 share = totalPool / countPublished;
        require(share > 0, "share would be zero");

        uint256 distributed = 0;
        for (uint256 i = 1; i <= totalProjects; i++) {
            (uint256 pid, , address payout, , , uint8 status, , ) = registry.getProject(i);
            if (status == uint8(ProjectRegistry.ProjectStatus.Published)) {
                (bool ok, ) = payable(payout).call{value: share}("");
                require(ok, "payout transfer failed");
                distributed += share;
                emit ProjectPayout(pid, payout, share);
            }
        }

        poolBalance -= distributed;
        emit QuarterDistributed(distributed, countPublished);
    }

    function ownerWithdraw(address to, uint256 amount) external onlyOwner nonReentrant {
        require(to != address(0), "zero address");
        require(amount <= poolBalance, "amount > poolBalance");
        poolBalance -= amount;
        (bool ok, ) = payable(to).call{value: amount}("");
        require(ok, "withdraw failed");
        emit OwnerWithdraw(to, amount);
    }

    receive() external payable {
        poolBalance += msg.value;
        emit Deposit(msg.sender, msg.value, msg.value);
    }
}
