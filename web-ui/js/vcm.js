const registryAddress = "0x4ed7c70F96B99c776995fB64377f0d4aB3B0e1C1";   // aus logs
const fundingPoolAddress = "0x322813Fd9A801c5507c9de605d63CEA4f2CE6c44";

const registryAbi = [
    {
      "inputs": [],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "projectId",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "verifier",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "approvalsCount",
          "type": "uint256"
        }
      ],
      "name": "ProjectApproved",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "projectId",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "string",
          "name": "name",
          "type": "string"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "creator",
          "type": "address"
        }
      ],
      "name": "ProjectCreated",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "projectId",
          "type": "uint256"
        }
      ],
      "name": "ProjectEnded",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "projectId",
          "type": "uint256"
        }
      ],
      "name": "ProjectVerified",
      "type": "event"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "v",
          "type": "address"
        }
      ],
      "name": "addVerifier",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "id",
          "type": "uint256"
        }
      ],
      "name": "approveProject",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "name",
          "type": "string"
        },
        {
          "internalType": "address",
          "name": "payoutAddress",
          "type": "address"
        },
        {
          "internalType": "string",
          "name": "ipfsHash",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "ssiDidHash",
          "type": "string"
        }
      ],
      "name": "createProject",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "id",
          "type": "uint256"
        }
      ],
      "name": "endProject",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "id",
          "type": "uint256"
        }
      ],
      "name": "getProject",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "pid",
          "type": "uint256"
        },
        {
          "internalType": "string",
          "name": "name",
          "type": "string"
        },
        {
          "internalType": "address",
          "name": "payoutAddress",
          "type": "address"
        },
        {
          "internalType": "string",
          "name": "ipfsHash",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "ssiDidHash",
          "type": "string"
        },
        {
          "internalType": "uint8",
          "name": "status",
          "type": "uint8"
        },
        {
          "internalType": "uint256",
          "name": "approvalsCount",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "creator",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "name": "hasApproved",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "name": "isVerifier",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "owner",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "projectCount",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "projects",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "id",
          "type": "uint256"
        },
        {
          "internalType": "string",
          "name": "name",
          "type": "string"
        },
        {
          "internalType": "address",
          "name": "payoutAddress",
          "type": "address"
        },
        {
          "internalType": "string",
          "name": "ipfsHash",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "ssiDidHash",
          "type": "string"
        },
        {
          "internalType": "enum ProjectRegistry.ProjectStatus",
          "name": "status",
          "type": "uint8"
        },
        {
          "internalType": "uint256",
          "name": "approvalsCount",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "creator",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "v",
          "type": "address"
        }
      ],
      "name": "removeVerifier",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "requiredApprovals",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "n",
          "type": "uint256"
        }
      ],
      "name": "setRequiredApprovals",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ];
const fundingPoolAbi = [     {
      "inputs": [
        {
          "internalType": "address",
          "name": "registryAddress",
          "type": "address"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "payer",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "netToPool",
          "type": "uint256"
        }
      ],
      "name": "Deposit",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "treasuryAmt",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "verifiersAmt",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "communityAmt",
          "type": "uint256"
        }
      ],
      "name": "FeesPaid",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "OwnerWithdraw",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "projectId",
          "type": "uint256"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "payoutAddress",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "ProjectPayout",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "totalDistributed",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "publishedCount",
          "type": "uint256"
        }
      ],
      "name": "QuarterDistributed",
      "type": "event"
    },
    {
      "inputs": [],
      "name": "deposit",
      "outputs": [],
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "feeCommunityBP",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "feeRecipientCommunity",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "feeRecipientTreasury",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "feeRecipientVerifiers",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "feeTreasuryBP",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "feeVerifiersBP",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "owner",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "ownerWithdraw",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "poolBalance",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "registry",
      "outputs": [
        {
          "internalType": "contract ProjectRegistry",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "treasury",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "treasuryBP",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "verifiers",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "verifiersBP",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "community",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "communityBP",
          "type": "uint256"
        }
      ],
      "name": "setFeesAndRecipients",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "simulateQuarterDistribute",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "stateMutability": "payable",
      "type": "receive"
    } ];

const web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));

const registry = new web3.eth.Contract(registryAbi, registryAddress);
const pool     = new web3.eth.Contract(fundingPoolAbi, fundingPoolAddress);



async function createProject() {
  const accounts = await web3.eth.getAccounts();
  const from = accounts[0]; // Hardhat Account 0

  const name = document.getElementById("projName").value;
  const payout = document.getElementById("projPayout").value;
  const ipfs = document.getElementById("projIpfs").value;
  const did = document.getElementById("projDid").value;

  try {
    const tx = await registry.methods
      .createProject(name, payout, ipfs, did)
      .send({ from });

    console.log("Project created:", tx);
    alert("Project created! Tx hash: " + tx.transactionHash);
  } catch (err) {
    console.error("Error creating project:", err);
    alert("Error creating project (see console).");
  }
}


async function approveProject() {
  const accounts = await web3.eth.getAccounts();
  const from = accounts[0]; // this account must be a verifier!

  const id = document.getElementById("approveId").value;

  try {
    const tx = await registry.methods
      .approveProject(id)
      .send({ from });

    console.log("Project approved:", tx);
    alert("Project approved!");
  } catch (err) {
    console.error("Error approving project:", err);
    alert("Error approving project (see console).");
  }
}

async function deposit() {
  const accounts = await web3.eth.getAccounts();
  const from = accounts[0];

  const amountEth = document.getElementById("depositAmount").value;
  const valueWei = web3.utils.toWei(amountEth, "ether");

  try {
    const tx = await pool.methods
      .deposit()
      .send({ from, value: valueWei });

    console.log("Deposit done:", tx);
    alert("Deposit successful!");
  } catch (err) {
    console.error("Error depositing:", err);
    alert("Error depositing (see console).");
  }
}

async function distribute() {
  const accounts = await web3.eth.getAccounts();
  const from = accounts[0]; // owner of the pool

  try {
    const tx = await pool.methods
      .simulateQuarterDistribute()
      .send({ from });

    console.log("Distribution done:", tx);
    alert("Distribution successful!");
  } catch (err) {
    console.error("Error distributing:", err);
    alert("Error distributing (see console).");
  }
}



