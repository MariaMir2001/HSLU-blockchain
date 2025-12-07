// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

/// @title InvestmentCertificate
/// @notice Simple ERC721‑like certificate NFT for proof of investment in projects
contract InvestmentCertificate {
    // Basic ERC721 events
    event Transfer(address indexed from, address indexed to, uint256 indexed tokenId);
    event Approval(address indexed owner, address indexed approved, uint256 indexed tokenId);

    string public name;
    string public symbol;

    address public owner;            // contract owner (can set funding pool)
    address public fundingPool;      // FundingPool contract allowed to mint

    uint256 public totalSupply;

    struct CertificateData {
        uint256 projectId;           // ID of the project in ProjectRegistry
        uint256 amountWei;           // amount of the investor’s contribution (or allocated share)
        uint256 timestamp;           // time of mint
    }

    // tokenId => owner
    mapping(uint256 => address) private _owners;
    // owner => balance
    mapping(address => uint256) private _balances;
    // tokenId => approved address
    mapping(uint256 => address) private _tokenApprovals;
    // tokenId => certificate data
    mapping(uint256 => CertificateData) public certificates;

    modifier onlyOwner() {
        require(msg.sender == owner, "not owner");
        _;
    }

    modifier onlyFundingPool() {
        require(msg.sender == fundingPool, "not funding pool");
        _;
    }

    constructor(string memory _name, string memory _symbol) {
        owner = msg.sender;
        name = _name;
        symbol = _symbol;
    }

    /// @notice set FundingPool contract that is allowed to mint certificates
    function setFundingPool(address _fundingPool) external onlyOwner {
        require(_fundingPool != address(0), "zero address");
        fundingPool = _fundingPool;
    }

    /// --------- ERC721 minimal view functions ---------

    function balanceOf(address account) external view returns (uint256) {
        require(account != address(0), "zero address");
        return _balances[account];
    }

    function ownerOf(uint256 tokenId) public view returns (address) {
        address _owner = _owners[tokenId];
        require(_owner != address(0), "nonexistent token");
        return _owner;
    }

    function getApproved(uint256 tokenId) external view returns (address) {
        require(_owners[tokenId] != address(0), "nonexistent token");
        return _tokenApprovals[tokenId];
    }

    /// --------- Core internal mint/transfer logic ---------

    function _exists(uint256 tokenId) internal view returns (bool) {
        return _owners[tokenId] != address(0);
    }

    function _mint(address to, uint256 tokenId) internal {
        require(to != address(0), "mint to zero");
        require(!_exists(tokenId), "token exists");

        _owners[tokenId] = to;
        _balances[to] += 1;

        emit Transfer(address(0), to, tokenId);
    }

    function _transfer(address from, address to, uint256 tokenId) internal {
        require(ownerOf(tokenId) == from, "not owner");
        require(to != address(0), "transfer to zero");

        // clear approval
        _approve(address(0), tokenId);

        _balances[from] -= 1;
        _balances[to] += 1;
        _owners[tokenId] = to;

        emit Transfer(from, to, tokenId);
    }

    function _approve(address to, uint256 tokenId) internal {
        _tokenApprovals[tokenId] = to;
        emit Approval(ownerOf(tokenId), to, tokenId);
    }

    /// --------- Public transfer/approve (optional for MVP) ---------

    function approve(address to, uint256 tokenId) external {
        address tokenOwner = ownerOf(tokenId);
        require(msg.sender == tokenOwner, "not token owner");
        _approve(to, tokenId);
    }

    function transferFrom(address from, address to, uint256 tokenId) external {
        address tokenOwner = ownerOf(tokenId);
        require(
            msg.sender == tokenOwner || msg.sender == _tokenApprovals[tokenId],
            "not approved"
        );
        _transfer(from, to, tokenId);
    }

    /// --------- Certificate minting ---------

    /// @notice Mint a new investment certificate NFT to to
    /// @dev Can only be called by FundingPool after allocation to a project
    function mintCertificate(
        address to,
        uint256 projectId,
        uint256 amountWei
    ) external onlyFundingPool returns (uint256) {
        require(to != address(0), "zero address");
        require(projectId > 0, "invalid project");
        require(amountWei > 0, "amount must be > 0");

        totalSupply += 1;
        uint256 newId = totalSupply;

        certificates[newId] = CertificateData({
            projectId: projectId,
            amountWei: amountWei,
            timestamp: block.timestamp
        });

        _mint(to, newId);
        return newId;
    }

    /// @notice convenience getter for full certificate info
    function getCertificate(uint256 tokenId)
        external
        view
        returns (
            address certOwner,
            uint256 projectId,
            uint256 amountWei,
            uint256 timestamp
        )
    {
        certOwner = ownerOf(tokenId);
        CertificateData storage data = certificates[tokenId];
        projectId = data.projectId;
        amountWei = data.amountWei;
        timestamp = data.timestamp;
    }
}