/*const registryAddress = "0xF32D39ff9f6Aa7a7A64d7a4F00a54826Ef791a55";   // aus logs
const fundingPoolAddress = "0x99dBE4AEa58E518C50a1c04aE9b48C9F6354612f";
const certificateAddress = "0xd6e1afe5cA8D00A2EFC01B89997abE2De47fdfAf";
*/
const registryAddress    = "0x5FC8d32690cc91D4c39d9d3abcBD16989F875707";
const fundingPoolAddress = "0xa513E6E4b8f2a923D98304ec87F64353C4D5C853";
const certificateAddress = "0x0165878A594ca255338adfa4d48449f69242Eb8F";


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


const certificateAbi = [
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_name",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_symbol",
				"type": "string"
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
				"name": "owner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "approved",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "Approval",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "Transfer",
		"type": "event"
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
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "approve",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "account",
				"type": "address"
			}
		],
		"name": "balanceOf",
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
		"name": "certificates",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "projectId",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "amountWei",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "timestamp",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "fundingPool",
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
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "getApproved",
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
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "getCertificate",
		"outputs": [
			{
				"internalType": "address",
				"name": "certOwner",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "projectId",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "amountWei",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "timestamp",
				"type": "uint256"
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
				"name": "projectId",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "amountWei",
				"type": "uint256"
			}
		],
		"name": "mintCertificate",
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
		"inputs": [],
		"name": "name",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
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
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "ownerOf",
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
				"name": "_fundingPool",
				"type": "address"
			}
		],
		"name": "setFundingPool",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "symbol",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "totalSupply",
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
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "transferFrom",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	}
];
// Adressen hast du schon:
/// const registryAddress = "...";
/// const fundingPoolAddress = "...";
/// const registryAbi = [ ... ];
/// const fundingPoolAbi = [ ... ];

// 1. Verbindung & Contract-Objekte
const web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));

const registry = new web3.eth.Contract(registryAbi, registryAddress);
const pool     = new web3.eth.Contract(fundingPoolAbi, fundingPoolAddress);
const certificate = new web3.eth.Contract(certificateAbi, certificateAddress);


// 2. Rollen (Hardhat-Accounts simulieren die Stakeholder)
let accounts;
let owner, verifier, creator, investor;
let verifiers = [];   // unsere 5 Verifier
let investors = [];   // unsere 5 Investoren

async function loadAccounts() {
  if (!accounts) {
    accounts = await web3.eth.getAccounts();

    owner    = accounts[0];  // Owner des Systems
    verifiers = [
      accounts[1],
      accounts[4],
      accounts[5],
      accounts[6],
      accounts[7]
    ];
    creator  = accounts[2];  // Projekt-Ersteller
    investors = [
      accounts[3],
      accounts[8],
      accounts[9],
      accounts[10],
      accounts[11],
    ];
  // Haupt-Investor für das einfache Demo

    // fünf Verifier: Accounts 1..5
    //verifiers = accounts.slice(4, 8);
    

    // fünf Investoren: Accounts 3..7 (optional für später)
    //investors = accounts.slice(9, 13);

    console.log("Roles:", { owner, verifier, creator, investor});
  }
}

async function investorLoadCertificates() {
  await loadAccounts();

  const investor = getCurrentInvestorAddress();
  if (!investor) {
    showMessage("warning", "Please select an investor first.", "investorMessages");
    return;
  }

  const listDiv = document.getElementById("investorCertificates");
  if (!listDiv) return;
  listDiv.innerHTML = "";

  const totalStr = await certificate.methods.totalSupply().call();
  const total = Number(totalStr);

  if (total === 0) {
    listDiv.textContent = "No certificates have been issued yet.";
    return;
  }

  const table = document.createElement("table");
  table.className = "table table-sm";

  const thead = document.createElement("thead");
  thead.innerHTML = `
    <tr>
      <th>Token ID</th>
      <th>Project</th>
      <th>Amount (ETH)</th>
      <th>Offset (kg CO₂)</th>
      <th>Date</th>
    </tr>
  `;
  table.appendChild(thead);

  const tbody = document.createElement("tbody");

  for (let tokenId = 1; tokenId <= total; tokenId++) {
    let owner;
    try {
      owner = await certificate.methods.ownerOf(tokenId).call();
    } catch {
      continue; // überspringen, falls Token nicht existiert
    }

    if (owner.toLowerCase() !== investor.toLowerCase()) continue;

    const cert = await certificate.methods.getCertificate(tokenId).call();
    const projectId = Number(cert.projectId ?? cert[1]);
    const amountWei = cert.amountWei ?? cert[2];
    const ts        = Number(cert.timestamp ?? cert[3]);

    const amountEth = web3.utils.fromWei(amountWei, "ether");

    // einfache Demo: 1 ETH = 100 kg CO₂
    
    const offsetKg = Number(amountEth) * 100;
    const dateStr = new Date(ts * 1000).toLocaleString();
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${tokenId}</td>
      <td>${projectId === 0 ? "Pool-Beitrag" : "#" + projectId}</td>
      <td>${amountEth}</td>
      <td>${offsetKg.toFixed(2)}</td>
      <td>${dateStr}</td>
      <td>
      <button class="btn btn-sm btn-outline-secondary"
        onclick="downloadCertificatePdf({
          tokenId: ${tokenId},
          projectId: ${projectId},
          projectLabel: '${projectId === 0 ? "Pool-Contribution" : ("#" + projectId)}',
          amountEth: '${amountEth}',
          offsetKg: '${offsetKg.toFixed(2)}',
          date: '${dateStr}',
          owner: '${investor}'
        })">
        Download
      </button>
    </td>
    `;
    tbody.appendChild(tr);
  }

  table.appendChild(tbody);
  listDiv.appendChild(table);

  if (!tbody.children.length) {
    listDiv.textContent = "This investor does not own any certificates yet.";
  }
}



/* ---------- OWNER-FUNKTIONEN ---------- */

// Owner: Verifier setzen
function shortAddress(addr) {
  if (!addr) return "";
  return addr.slice(0, 6) + "…" + addr.slice(-4);
}

function labelForInvestor(addr) {
  if (investors && investors.length) {
    const idx = investors.findIndex(
      (a) => a.toLowerCase() === addr.toLowerCase()
    );
    if (idx !== -1) {
      return shortAddress(addr);;
    }
  }
  return shortAddress(addr); // show address instead of "—"
}


let ownerPayoutChart = null;

async function refreshOwnerFundingOverview() {
  const balanceSpan        = document.getElementById("ownerPoolBalance");
  const totalDistSpan      = document.getElementById("ownerTotalDistributed");
  const feesTreasurySpan   = document.getElementById("ownerFeesTreasury");
  const feesVerifiersSpan  = document.getElementById("ownerFeesVerifiers");
  const feesCommunitySpan  = document.getElementById("ownerFeesCommunity");
  const payoutsDiv         = document.getElementById("ownerPayouts");
  const pieCanvas          = document.getElementById("ownerPayoutPie");

  // if we’re not on the owner page, silently do nothing
  if (!balanceSpan && !payoutsDiv && !pieCanvas && !totalDistSpan) return;

  // --- 1. current pool balance ---
  try {
    const poolBalanceWei = await pool.methods.poolBalance().call();
    const poolBalanceEth = web3.utils.fromWei(poolBalanceWei, "ether");
    if (balanceSpan) balanceSpan.textContent = poolBalanceEth;
  } catch (err) {
    console.error("Error loading pool balance:", err);
    if (balanceSpan) balanceSpan.textContent = "?";
  }

  // --- 2. load all ProjectPayout events ---
  if (!payoutsDiv && !pieCanvas && !totalDistSpan) return;

  let payoutEvents;
  try {
    payoutEvents = await pool.getPastEvents("ProjectPayout", {
      fromBlock: 0,
      toBlock: "latest",
    });
  } catch (err) {
    console.error("Error loading ProjectPayout events:", err);
    if (payoutsDiv) {
      payoutsDiv.textContent =
        "Error loading payouts (see console).";
    }
    return;
  }

  if (!payoutEvents.length) {
    if (payoutsDiv) {
      payoutsDiv.textContent =
        "No payouts to projects have been made yet.";
    }
    if (ownerPayoutChart) {
      ownerPayoutChart.destroy();
      ownerPayoutChart = null;
    }
    if (totalDistSpan) totalDistSpan.textContent = "0";
    return;
  }

  // --- 3. aggregate per project & total distributed ---
  const BN = web3.utils.BN;

  const perProjectWei = {};        // projectId -> BN(amountWei)
  let totalDistributedWei = new BN("0");

  for (const ev of payoutEvents) {
    const projectId = ev.returnValues.projectId;
    const amountWei = new BN(ev.returnValues.amount);

    if (!perProjectWei[projectId]) {
      perProjectWei[projectId] = new BN("0");
    }
    perProjectWei[projectId] = perProjectWei[projectId].add(amountWei);
    totalDistributedWei = totalDistributedWei.add(amountWei);
  }

  if (totalDistSpan) {
    const totalEth = web3.utils.fromWei(totalDistributedWei, "ether");
    totalDistSpan.textContent = totalEth;
  }

  // --- 4. build table: Project | Recipient | Investor | Amount ---
  if (payoutsDiv) {
    payoutsDiv.innerHTML = "";

    const table = document.createElement("table");
    table.className = "table table-sm align-middle mb-0";

    const thead = document.createElement("thead");
    thead.innerHTML = `
      <tr>
        <th>Project</th>
        <th>Investor</th>
        <th class="text-end">Amount (ETH)</th>
      </tr>
    `;

    const tbody = document.createElement("tbody");

    // cache project names so we don’t call getProject too often
    const projectNames = {};

    for (const ev of payoutEvents) {
      const projectId   = ev.returnValues.projectId;
      const payoutAddr  = ev.returnValues.payoutAddress;
      const amountWei   = new BN(ev.returnValues.amount);
      const amountEth   = web3.utils.fromWei(amountWei, "ether");

      // get project name once per id
      if (!projectNames[projectId]) {
        try {
          const p = await registry.methods.getProject(projectId).call();
          projectNames[projectId] = p.name || `Project ${projectId}`;
        } catch (err) {
          console.error("Error in getProject for", projectId, err);
          projectNames[projectId] = `Project ${projectId}`;
        }
      }

      const tr = document.createElement("tr");
      tr.innerHTML = `
        <td>#${projectId} – ${projectNames[projectId]}</td>
        <td>${labelForInvestor(payoutAddr)}</td>
        <td class="text-end">${amountEth}</td>
      `;
      tbody.appendChild(tr);
    }

    table.appendChild(thead);
    table.appendChild(tbody);
    payoutsDiv.appendChild(table);
  }

  // --- 5. pie chart: total per project ---
  if (pieCanvas) {
    const labels = [];
    const data   = [];

    for (const [projectId, amtWei] of Object.entries(perProjectWei)) {
      labels.push("Project " + projectId);
      data.push(
        Number(web3.utils.fromWei(amtWei, "ether"))
      );
    }

    if (ownerPayoutChart) {
      ownerPayoutChart.destroy();
    }

    const ctx = pieCanvas.getContext("2d");
    ownerPayoutChart = new Chart(ctx, {
      type: "pie",
      data: {
        labels,
        datasets: [
          {
            data,
          },
        ],
      },
    });
  }

  // --- 6. optional: show total fees from FeesPaid events ---
  // (only if elements exist)
  if (feesTreasurySpan || feesVerifiersSpan || feesCommunitySpan) {
    try {
      const feeEvents = await pool.getPastEvents("FeesPaid", {
        fromBlock: 0,
        toBlock: "latest",
      });

      let sumTreasury = new BN("0");
      let sumVer      = new BN("0");
      let sumComm     = new BN("0");

      for (const fe of feeEvents) {
        sumTreasury = sumTreasury.add(new BN(fe.returnValues.treasuryAmt));
        sumVer      = sumVer.add(new BN(fe.returnValues.verifiersAmt));
        sumComm     = sumComm.add(new BN(fe.returnValues.communityAmt));
      }

      if (feesTreasurySpan) {
        feesTreasurySpan.textContent =
          web3.utils.fromWei(sumTreasury, "ether");
      }
      if (feesVerifiersSpan) {
        feesVerifiersSpan.textContent =
          web3.utils.fromWei(sumVer, "ether");
      }
      if (feesCommunitySpan) {
        feesCommunitySpan.textContent =
          web3.utils.fromWei(sumComm, "ether");
      }
    } catch (err) {
      console.error("Error loading FeesPaid events:", err);
    }
  }
}


async function ownerAddVerifier() {
  await loadAccounts();
  const addr = document.getElementById("ownerVerifierAddress").value.trim();
  if (!addr) { showMessage("warning", "Please enter a verifier address."); return; }

  try {
    const already = await registry.methods.isVerifier(addr).call();
    if (already) {
      //alert("Adresse ist bereits Verifier.");
      showMessage("info", "The address is already a verifier.");
      return;
    }
    const tx = await registry.methods
      .addVerifier(addr)
      .send({ from: owner });

    console.log("Verifier added:", tx);
    //alert("Verifier wurde gesetzt.");
    showMessage("success", "Verifier is set.");
  } catch (err) {
    console.error("Error in ownerAddVerifier:", err);
    //alert("Fehler beim Setzen des Verifiers (siehe Konsole).");
    showMessage("danger", "Error setting verifier. See console for details.");
}
}

// Owner: Anzahl benötigter Approvals setzen
async function ownerSetRequiredApprovals() {
  await loadAccounts();
  const n = 5; // immer 5 Verifier nötig

  try {
    const tx = await registry.methods
      .setRequiredApprovals(n)
      .send({ from: owner });

    console.log("Required approvals set:", tx);

    const sel = document.getElementById("ownerRequiredApprovals");
    if (sel) sel.value = String(n);

    
    showMessage("success", "Required approvals set to 5.");
  } catch (err) {
    console.error("Error in ownerSetRequiredApprovals:", err);
    showMessage("danger", "Error setting required approvals. See console for details.");
  }
}


// Owner: Quartalsverteilung auslösen
async function ownerDistribute() {
  await loadAccounts();
  try {
    const tx = await pool.methods
      .simulateQuarterDistribute()
      .send({ from: owner });

    console.log("Distribution:", tx);
    showMessage("success", "Distribution completed.");

    // ⬅️ UI aktualisieren:
    await refreshOwnerFundingOverview();
  } catch (err) {
    console.error("Error in ownerDistribute:", err);
    showMessage("danger", "Error during distribution. See console for details.");
  }
}


/* ---------- CREATOR-FUNKTION ---------- */

// Projekt-Ersteller: Projekt anlegen
// Projekt-Ersteller: Projekt anlegen
const ISSUER_ID = "issuer1";                  // muss zu deinen key-Dateien passen
const SSI_ISSUER_URL = "http://localhost:9001/issue-credential";

async function creatorCreateProject() {
  await loadAccounts();                       // lädt z.B. creator = accounts[2]
  const from = creator;

  const name   = document.getElementById("projName").value.trim();
  const payout = document.getElementById("projPayout").value.trim();
  const ipfs   = document.getElementById("projIpfs").value.trim();

  if (!name || !payout || !ipfs) {
    showMessage("warning", "Please fill in all fields.");
    return;
  }

  try {
    // 1. DID erzeugen
    const did = `did:eth:${from}`;   // z.B. did:eth:0xabc123...

    // 2. Credential-Inhalt bauen
    const credentialPayload = {
      projectName:     name,
      payoutAddress:   payout,
      ipfsHash:        ipfs,
      projectCreator:  from
    };

// 3. Credential beim Issuer anfordern
const res = await fetch(SSI_ISSUER_URL, {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    issuer:    ISSUER_ID,
    did:       did,
    credential: credentialPayload,
    registry:  "blockchain"
  })
});

if (!res.ok) {
  const text = await res.text();
  console.error("Issuer HTTP error:", res.status, text);
  showMessage("danger", "SSI-Issuer error (see console for details).");
  return;
}

// ⬅️ SEHR WICHTIG:
const issued = await res.json();
console.log("Issued credential:", issued);

// 4. Unsere on-chain Referenz
const ssiRef = issued.documentHash;
if (!ssiRef) {
  showMessage("danger", "Issuer did not return a documentHash.");
  return;
}

// 5. Credential im Browser speichern (Demo)
const stored = JSON.parse(localStorage.getItem("vcmCredentials") || "{}");
stored[ssiRef] = issued;
localStorage.setItem("vcmCredentials", JSON.stringify(stored));

// 6. Projekt im Smart Contract anlegen
const tx = await registry.methods
  .createProject(name, payout, ipfs, ssiRef)
  .send({ from });


    console.log("Project created (with SSI ref):", tx);
    //alert("Projekt mit SSI-Referenz erstellt! Tx: " + tx.transactionHash);
    showMessage("success", "Project created with SSI reference! Tx: " + tx.transactionHash);

  } catch (err) {
    console.error("Error creating project with SSI:", err);
    showMessage("danger", "Error creating project (see console).");
  }
}




/* ---------- VERIFIER-FUNKTION ---------- */

// Verifier: Projekt approven
async function verifierApproveProject() {
  await loadAccounts();

  const idStr = document.getElementById("verifierProjectId").value.trim();
  if (!idStr) { showMessage("warning", "Please enter a project ID."); return; }
  const id = parseInt(idStr, 10);

  try {
    const tx = await registry.methods
      .approveProject(id)
      .send({ from: verifier });

    console.log("Project approved:", tx);
    showMessage("success", "Project approved.");
  } catch (err) {
    console.error("Error approving project:", err);
    showMessage("danger", "Error during approval (see console).");
  }
}

/* ---------- INVESTOR-FUNKTION ---------- */

// Investor: Deposit in den FundingPool
// Investor: Deposit in den FundingPool
async function investorDeposit() {
  await loadAccounts();

  const from = getCurrentInvestorAddress();
  if (!from) {
    showMessage("warning", "Please select an investor first.", "investorMessages");
    return;
  }

  const amountStr = document.getElementById("investorDepositAmount").value.trim();
  if (!amountStr) {
    showMessage("warning", "Please enter an amount.", "investorMessages");
    return;
  }

  const valueWei = web3.utils.toWei(amountStr, "ether");

  try {
    const tx = await pool.methods
      .deposit()
      .send({ from, value: valueWei });

    console.log("Deposit:", tx);
    showMessage("success", "Deposit successful.", "investorMessages");
  } catch (err) {
    console.error("Error depositing:", err);
    showMessage("danger", "Error during deposit (see console).", "investorMessages");
  }
}


const SSI_VERIFIER_URL = "http://localhost:9002/verify-credential"; // wie in deinem SSI-Template

async function verifierVerifyAndApprove() {
  await loadAccounts();

  const idStr = document.getElementById("verifierProjectId").value.trim();
  if (!idStr) {
    showMessage("warning", "Please select a project.");
    return;
  }
  const id = parseInt(idStr, 10);

  try {
    // --- 0. Adresse des Verifiers ---
    const from = getCurrentVerifierAddress();
    if (!from) {
      showMessage("warning", "No verifier address selected.");
      return;
    }

    // --- 1. Prüfen, ob Verifier dieses Projekt schon approved hat ---
    const already = await registry.methods.hasApproved(id, from).call();
    if (already) {
      showMessage("info", "You have already approved this project.");
      return; // KEIN Transaktionsversuch → kein Revert
    }

    // --- 2. Projekt-Status prüfen ---
    const p = await registry.methods.getProject(id).call();
    const status = Number(p.status);      // 0 = Pending
    const approvals = Number(p.approvalsCount);
    const ssiRef = p.ssiDidHash;

    if (status !== 0) { // nicht Pending
      showMessage(
        "info",
        "This project is no longer in the Pending status (already published or ended)."
      );
      return;
    }

    if (!ssiRef) {
      showMessage("warning", "This project has no SSI reference.");
      return;
    }

    // --- 3. SSI Credential holen & prüfen (dein bestehender Code) ---
    const stored = JSON.parse(localStorage.getItem("vcmCredentials") || "{}");
    const credential = stored[ssiRef];

    if (!credential) {
      showMessage("warning", "No credential for this SSI reference in browser storage.");
      return;
    }

    const res = await fetch(SSI_VERIFIER_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ credential })
    });

    if (!res.ok) {
      const text = await res.text();
      console.error("Verifier HTTP error:", res.status, text);
      showMessage("danger", "Error during SSI check (see console).");
      return;
    }

    const result = await res.json();
    console.log("SSI verify result:", result);

    if (!result.valid) {
      showMessage("warning", "SSI verification failed – project will NOT be approved.");
      return;
    }

 
    const tx = await registry.methods
      .approveProject(id)
      .send({ from });

    console.log("Project approved:", tx);
    showMessage("success", "Project is SSI-validated and approved on-chain!");

    // Update dropdown to immediately reflect approval count/checkmarks
    await populateVerifierProjectSelect();

  } catch (err) {
    console.error("Unexpected error in verifierVerifyAndApprove:", err);
    showMessage("danger", "Unexpected error during verification/approval.");
  }
}


function getCurrentVerifierAddress() {
  const sel = document.getElementById("verifierAddress");
  if (sel && sel.value) {
    return sel.value;            // Adresse aus dem Dropdown
  }

  // Fallback: erster Verifier aus dem Array
  if (verifiers && verifiers.length > 0) {
    return verifiers[0];
  }

  return null;                    // nichts gefunden
}

function getCurrentInvestorAddress() {
  const sel = document.getElementById("investorAddress");
  if (sel && sel.value) {
    return sel.value;            // Adresse aus dem Investor-Dropdown
  }

  // Fallback: erster Investor aus dem Array
  if (investors && investors.length > 0) {
    return investors[0];
  }

  return null;                    // nichts gefunden
}





// -------- UI-Initialisierung (Dropdowns) --------

async function initDropdowns() {
  try {

    await loadAccounts(); // lädt owner, verifier, creator, investor
     const didInput = document.getElementById("projDid");
      if (didInput) {
        didInput.value = `did:eth:${creator}`;
      }
      
      const creatorInput = document.getElementById("projCreator");
      if (creatorInput) {
        creatorInput.value = creator; // full address of the project creator
      }
    await ensureVerifiersOnChain();  

    populateOwnerVerifierSelect();
    populateOwnerApprovalsSelect();
    populateCreatorPayoutSelect();
    populateVerifierAddressSelect();
    populateInvestorAddressSelect(); 
    await populateVerifierProjectSelect();
    initIpfsUpload();
    refreshOwnerFundingOverview().catch(console.error);

  } catch (err) {
    console.error("Error in initDropdowns:", err);
  }
}

// Owner: Verifier-Adresse
function populateOwnerVerifierSelect() {
  const sel = document.getElementById("ownerVerifierAddress");
  if (!sel || !accounts) return;

  sel.innerHTML = "";
  const ph = document.createElement("option");
  ph.value = "";
  ph.textContent = "Select address…";
  ph.disabled = true;
  ph.selected = true;
  sel.appendChild(ph);

  accounts.forEach((addr, idx) => {
    if (idx === 0) return; // Owner selbst nicht anbieten

    const opt = document.createElement("option");
    let role = `Account ${idx}`;
    if (idx === 1) role = "Verifier (Standard)";
    if (idx === 4) role = "Verifier (Standard)";
    if (idx === 5) role = "Verifier (Standard)";
    if (idx === 6) role = "Verifier (Standard)";
    if (idx === 7) role = "Verifier (Standard)";
    if (idx === 2) role = "Project Creator";
    if (idx === 3) role = "Investor";

    opt.value = addr;
    opt.textContent = `${role} – ${addr}`;
    sel.appendChild(opt);
  });
}

// Owner: Required Approvals 1..(Anzahl Accounts-1)
function populateOwnerApprovalsSelect() {
  const sel = document.getElementById("ownerRequiredApprovals");
  if (!sel) return;

  sel.innerHTML = "";
  const opt = document.createElement("option");
  opt.value = "5";
  opt.textContent = "5 (all Verifiers)";
  sel.appendChild(opt);

  sel.value = "5";
  sel.disabled = true; // Fixwert 5, nicht änderbar
}


// Creator: Payout-Adresse (alle außer Creator selbst)
function populateCreatorPayoutSelect() {
  const sel = document.getElementById("projPayout");
  if (!sel || !accounts) return;

  sel.innerHTML = "";
  const ph = document.createElement("option");
  ph.value = "";
  ph.textContent = "Choose address…";
  ph.disabled = true;
  ph.selected = true;
  sel.appendChild(ph);

  accounts.forEach((addr, idx) => {
    if (idx === 2) return; // Creator selbst nicht

    const opt = document.createElement("option");
    let role = `Account ${idx}`;
    if (idx === 0) role = "Owner";
    if (idx === 1) role = "Verifier";
    if (idx === 3) role = "Investor";

    opt.value = addr;
    opt.textContent = `${role} – ${addr}`;
    if (idx === 3) opt.selected = true; // Investor als Standard
    sel.appendChild(opt);
  });
}

// Verifier: Projekte aus dem Registry-Contract
async function populateVerifierProjectSelect() {
  const sel = document.getElementById("verifierProjectId");
  if (!sel) return;

  try {
    const countStr = await registry.methods.projectCount().call();
    const count = Number(countStr);

    sel.innerHTML = "";
    const ph = document.createElement("option");
    ph.value = "";
    ph.disabled = true;
    ph.selected = true;
    ph.textContent =
      count === 0 ? "No projects available yet" : "Select project…";
    sel.appendChild(ph);

    for (let id = 1; id <= count; id++) {
      const p = await registry.methods.getProject(id).call();
      const status = Number(p.status);
      const approvals = Number(p.approvalsCount);

      const isDone =
        approvals >= 5 || status >= 2; // 2 = Published

      const opt = document.createElement("option");
      opt.value = String(id);

      const check = isDone ? "✓ " : "";
      opt.textContent = `${check}${id}: ${p.name} (Approvals: ${approvals}/${5})`;

      sel.appendChild(opt);
    }
  } catch (err) {
    console.error("Error loading project list:", err);
  }
}


// Verifier-Dashboard: Auswahl der Verifier-Adresse
function populateVerifierAddressSelect() {
  const sel = document.getElementById("verifierAddress");
  if (!sel || !verifiers.length) return;

  sel.innerHTML = "";
  const ph = document.createElement("option");
  ph.value = "";
  ph.textContent = "Select verifier…";
  ph.disabled = true;
  ph.selected = true;
  sel.appendChild(ph);

  verifiers.forEach((addr, idx) => {
    const opt = document.createElement("option");
    opt.value = addr;
    opt.textContent = `Verifier ${idx + 1} – ${addr}`;
    sel.appendChild(opt);
  });
}

// Investor-Dashboard: Auswahl der Investor-Adresse
function populateInvestorAddressSelect() {
  const sel = document.getElementById("investorAddress");
  if (!sel || !investors.length) return;

  sel.innerHTML = "";
  const ph = document.createElement("option");
  ph.value = "";
  ph.textContent = "Select investor…";
  ph.disabled = true;
  ph.selected = true;
  sel.appendChild(ph);

  investors.forEach((addr, idx) => {
    const opt = document.createElement("option");
    opt.value = addr;
    opt.textContent = `Investor ${idx + 1} – ${addr}`;
    sel.appendChild(opt);
  });
}


// Registriert alle verifiers[] im Smart Contract (nur wenn noch nicht gesetzt)
async function ensureVerifiersOnChain() {
  await loadAccounts();

  for (const addr of verifiers) {
    const already = await registry.methods.isVerifier(addr).call();
    if (!already) {
      console.log("Adding verifier on-chain:", addr);
      await registry.methods
        .addVerifier(addr)
        .send({ from: owner });  // nur Owner darf addVerifier
    } else {
      console.log("Already verifier:", addr);
    }
  }
}




// Diese Zeile ganz am Ende von vcm.js:
initDropdowns().catch(console.error);




// Simple Bootstrap-Alert Helper
function showMessage(type, text, targetId = "verifierMessages") {
  const container = document.getElementById(targetId);
  if (!container) {
    // Fallback, falls div vergessen wurde
    showMessage("danger", text);
    return;
  }

  const wrapper = document.createElement("div");
  wrapper.className = `alert alert-${type} alert-dismissible fade show`;
  wrapper.setAttribute("role", "alert");
  wrapper.innerHTML = `
    ${text}
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
  `;

  container.appendChild(wrapper);

  // Alert nach 5 Sekunden automatisch schließen
  setTimeout(() => {
    const alertInstance = bootstrap.Alert.getOrCreateInstance(wrapper);
    alertInstance.close();
  }, 5000);
}

// ---- IPFS Upload (einfaches HTTP-API) ----

const IPFS_ADD_URL = "http://localhost:5001/api/v0/add"; // ggf. anpassen

async function uploadFileToIpfs(file) {
  const formData = new FormData();
  formData.append("file", file);

  const response = await fetch(IPFS_ADD_URL, {
    method: "POST",
    body: formData,
  });

  if (!response.ok) {
    throw new Error("IPFS HTTP error: " + response.status);
  }

  // go-ipfs liefert NDJSON (eine oder mehrere JSON-Zeilen)
  const text = await response.text();
  const firstLine = text.trim().split("\n")[0];
  const data = JSON.parse(firstLine);

  // typische Antwort: { Name, Hash, Size }
  if (data.Hash) return data.Hash;

  // Falls andere Struktur:
  if (data.cid) return data.cid.toString();
  if (data.Cid && data.Cid["/"]) return data.Cid["/"];

  throw new Error("Could not find IPFS hash in response: " + text);
}

function initIpfsUpload() {
  const fileInput = document.getElementById("uploadFile");
  const ipfsInput = document.getElementById("projIpfs");

  // Wenn wir nicht auf der Creator-Seite sind, einfach nichts tun
  if (!fileInput || !ipfsInput) return;

  fileInput.addEventListener("change", async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    try {
      showMessage("info", "Uploading file to IPFS …", "creatorMessages");

      const hash = await uploadFileToIpfs(file);

      ipfsInput.value = hash;
      showMessage(
        "success",
        "File successfully uploaded to IPFS. Hash: " + hash,
        "creatorMessages"
      );
    } catch (err) {
      console.error("Error during IPFS upload:", err);
      showMessage(
        "danger",
        "Error during IPFS upload (details in console).",
        "creatorMessages"
      );
    }
  });
}

function downloadCertificatePdf(cert) {
  const { jsPDF } = window.jspdf;

  // A4 hochkant
  const doc = new jsPDF({
    orientation: "portrait",
    unit: "mm",
    format: "a4",
  });

  const pageWidth = doc.internal.pageSize.getWidth();

  // --- Header-Balken ---
  doc.setFillColor(34, 139, 34); // dunkelgrün
  doc.rect(0, 0, pageWidth, 30, "F");

  doc.setTextColor(255, 255, 255);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(20);
  doc.text("VCM Investment Certificate", pageWidth / 2, 18, {
    align: "center",
  });

  // zurück zu normalem Text
  doc.setTextColor(0, 0, 0);
  doc.setFont("helvetica", "normal");
  doc.setFontSize(12);

  let y = 45;

  // --- Abschnittstitel ---
  doc.setFont("helvetica", "bold");
  doc.text("Certificate Details", 20, y);
  doc.setLineWidth(0.3);
  doc.line(20, y + 2, pageWidth - 20, y + 2);
  y += 10;
  doc.setFont("helvetica", "normal");

  // Werte sicher parsen
  const amountEth = parseFloat(cert.amountEth);
  const offsetKg = amountEth * 100; // dein Faktor für CO2
  const amountStr = isNaN(amountEth) ? cert.amountEth : amountEth.toFixed(4);
  const offsetStr = isNaN(offsetKg) ? "-" : offsetKg.toFixed(2);

  // --- Detailzeilen ---
  doc.text(`Token ID: ${cert.tokenId}`, 20, y); y += 8;
  doc.text(`Investor: ${cert.owner}`, 20, y); y += 8;
  doc.text(`Project: ${cert.projectLabel}`, 20, y); y += 8;
  doc.text(`Amount: ${amountStr} ETH`, 20, y); y += 8;
  doc.text(`Offset: ${offsetStr} kg CO2`, 20, y); y += 8;  // KEIN Sonderzeichen
  doc.text(`Date: ${cert.date}`, 20, y); y += 20;

  // --- Erklärungstext / Footer ---
  doc.setFont("helvetica", "italic");
  const disclaimer =
    "This certificate confirms the contribution of funds to the VCM Funding Pool. " +
    "The actual liability arises from the entry of the " +
    "InvestmentCertificate smart contract on the blockchain.";

  doc.text(disclaimer, 20, y, { maxWidth: pageWidth - 40 });

  // Optional: kleine Footer-Zeile mit Contract / Chain
  if (cert.contractAddress && cert.chainName) {
    doc.setFontSize(9);
    doc.setFont("helvetica", "normal");
    doc.text(
      `Chain: ${cert.chainName} – Contract: ${cert.contractAddress}`,
      20,
      290
    );
  }

  doc.save(`vcm_certificate_${cert.tokenId}.pdf`);
}


// ---- IPFS-Dokument im Browser anzeigen ----

const IPFS_GATEWAY_URL = "http://localhost:8080/ipfs/"; // dein lokaler Gateway

async function verifierOpenProjectDocument() {
  await loadAccounts();

  const idStr = document.getElementById("verifierProjectId").value.trim();
  if (!idStr) {
    showMessage("warning", "Please select a project first.", "verifierMessages");
    return;
  }

  const id = parseInt(idStr, 10);

  try {
    const p = await registry.methods.getProject(id).call();
    const hash = p.ipfsHash;

    if (!hash) {
      showMessage("warning", "No IPFS hash stored for this project.", "verifierMessages");
      return;
    }

    // Open new tab/window with the file
    const url = IPFS_GATEWAY_URL + hash;
    window.open(url, "_blank");
  } catch (err) {
    console.error("Error loading project / IPFS document:", err);
    showMessage("danger", "Error opening IPFS document (details in console).", "verifierMessages");
  }
}







