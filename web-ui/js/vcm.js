const registryAddress = "0xDc64a140Aa3E981100a9becA4E685f962f0cF6C9";   // aus logs
const fundingPoolAddress = "0x5FC8d32690cc91D4c39d9d3abcBD16989F875707";


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

// Adressen hast du schon:
/// const registryAddress = "...";
/// const fundingPoolAddress = "...";
/// const registryAbi = [ ... ];
/// const fundingPoolAbi = [ ... ];

// 1. Verbindung & Contract-Objekte
const web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));

const registry = new web3.eth.Contract(registryAbi, registryAddress);
const pool     = new web3.eth.Contract(fundingPoolAbi, fundingPoolAddress);

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
      return `Investor ${idx + 1} (${shortAddress(addr)})`;
    }
  }
  return shortAddress(addr);
}

let ownerPayoutChart = null;

async function refreshOwnerFundingOverview() {
  // Wenn wir nicht auf der Owner-Seite sind, einfach leise beenden
  const balanceSpan = document.getElementById("ownerPoolBalance");
  const payoutsDiv  = document.getElementById("ownerPayouts");
  const pieCanvas   = document.getElementById("ownerPayoutPie");

  if (!balanceSpan && !payoutsDiv && !pieCanvas) return;

  // 1. Pool-Balance laden
  try {
    const poolBalanceWei = await pool.methods.poolBalance().call();
    const poolBalanceEth = web3.utils.fromWei(poolBalanceWei, "ether");
    if (balanceSpan) balanceSpan.textContent = poolBalanceEth;
  } catch (err) {
    console.error("Fehler beim Laden der Pool-Balance:", err);
    if (balanceSpan) balanceSpan.textContent = "?";
  }

  // 2. ProjectPayout-Events laden
  if (!payoutsDiv) return;

  let events;
  try {
    events = await pool.getPastEvents("ProjectPayout", {
      fromBlock: 0,
      toBlock: "latest",
    });
  } catch (err) {
    console.error("Fehler beim Laden der ProjectPayout-Events:", err);
    payoutsDiv.textContent = "Fehler beim Laden der Auszahlungen (Konsole ansehen).";
    return;
  }

  if (!events.length) {
    payoutsDiv.textContent = "Bisher wurden noch keine Auszahlungen an Projekte vorgenommen.";
    if (ownerPayoutChart) {
      ownerPayoutChart.destroy();
      ownerPayoutChart = null;
    }
    return;
  }

  // 2a. Liste im Text
  payoutsDiv.innerHTML = "";
  const list = document.createElement("ul");
  list.className = "list-group";

  // Aggregiert pro Projekt für das Kreisdiagramm
  const perProject = {};

  for (const ev of events) {
    const projectId = ev.returnValues.projectId;
    const amountWei = web3.utils.toBN(ev.returnValues.amount);
    const amountEth = web3.utils.fromWei(amountWei, "ether");

    if (!perProject[projectId]) {
      perProject[projectId] = web3.utils.toBN("0");
    }
    perProject[projectId] = perProject[projectId].add(amountWei);

    const li = document.createElement("li");
    li.className = "list-group-item d-flex justify-content-between align-items-center";
    li.innerHTML = `
      <span>Project #${projectId}</span>
      <span>${amountEth} ETH</span>
    `;
    list.appendChild(li);
  }

  payoutsDiv.appendChild(list);

  // 2b. Kreisdiagramm aus den aggregierten Werten
  if (!pieCanvas) return;

  const labels = [];
  const data   = [];

  for (const [projectId, amtWei] of Object.entries(perProject)) {
    labels.push("Project " + projectId);
    data.push(Number(web3.utils.fromWei(amtWei, "ether")));
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
    showMessage("warning", "Bitte alle Felder ausfüllen.");
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
    showMessage("success", "Projekt mit SSI-Referenz erstellt! Tx: " + tx.transactionHash);

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
  if (!idStr) { showMessage("warning", "Bitte eine Projekt-ID eingeben."); return; }
  const id = parseInt(idStr, 10);

  try {
    const tx = await registry.methods
      .approveProject(id)
      .send({ from: verifier });

    console.log("Project approved:", tx);
    showMessage("success", "Projekt genehmigt.");
  } catch (err) {
    console.error("Error approving project:", err);
    showMessage("danger", "Fehler beim Approve (siehe Konsole).");
  }
}

/* ---------- INVESTOR-FUNKTION ---------- */

// Investor: Deposit in den FundingPool
// Investor: Deposit in den FundingPool
async function investorDeposit() {
  await loadAccounts();

  const from = getCurrentInvestorAddress();
  if (!from) {
    showMessage("warning", "Bitte zuerst einen Investor auswählen.", "investorMessages");
    return;
  }

  const amountStr = document.getElementById("investorDepositAmount").value.trim();
  if (!amountStr) {
    showMessage("warning", "Bitte einen Betrag eingeben.", "investorMessages");
    return;
  }

  const valueWei = web3.utils.toWei(amountStr, "ether");

  try {
    const tx = await pool.methods
      .deposit()
      .send({ from, value: valueWei });

    console.log("Deposit:", tx);
    showMessage("success", "Deposit erfolgreich.", "investorMessages");
  } catch (err) {
    console.error("Error depositing:", err);
    showMessage("danger", "Fehler beim Deposit (siehe Konsole).", "investorMessages");
  }
}


const SSI_VERIFIER_URL = "http://localhost:9002/verify-credential"; // wie in deinem SSI-Template

async function verifierVerifyAndApprove() {
  await loadAccounts();

  const idStr = document.getElementById("verifierProjectId").value.trim();
  if (!idStr) {
    showMessage("warning", "Bitte ein Projekt auswählen.");
    return;
  }
  const id = parseInt(idStr, 10);

  try {
    // --- 0. Adresse des Verifiers ---
    const from = getCurrentVerifierAddress();
    if (!from) {
      showMessage("warning", "Keine Verifier-Adresse ausgewählt.");
      return;
    }

    // --- 1. Prüfen, ob Verifier dieses Projekt schon approved hat ---
    const already = await registry.methods.hasApproved(id, from).call();
    if (already) {
      showMessage("info", "Du hast dieses Projekt bereits genehmigt.");
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
        "Dieses Projekt ist nicht mehr im Pending-Status (bereits veröffentlicht oder beendet)."
      );
      return;
    }

    if (!ssiRef) {
      showMessage("warning", "Dieses Projekt hat keine SSI-Referenz.");
      return;
    }

    // --- 3. SSI Credential holen & prüfen (dein bestehender Code) ---
    const stored = JSON.parse(localStorage.getItem("vcmCredentials") || "{}");
    const credential = stored[ssiRef];

    if (!credential) {
      showMessage("warning", "Kein Credential zu dieser SSI-Referenz im Browser-Speicher.");
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
      showMessage("danger", "Fehler beim SSI-Check (siehe Konsole).");
      return;
    }

    const result = await res.json();
    console.log("SSI verify result:", result);

    if (!result.valid) {
      showMessage("warning", "SSI-Verifikation fehlgeschlagen – Projekt wird NICHT approved.");
      return;
    }

    // --- 4. Jetzt erst die on-chain Transaktion senden ---
    const tx = await registry.methods
      .approveProject(id)
      .send({ from });

    console.log("Project approved:", tx);
    showMessage("success", "Projekt ist SSI-validiert und on-chain genehmigt!");

    // Dropdown aktualisieren, damit Approvals-Zähler/✓ sofort passen
    await populateVerifierProjectSelect();

  } catch (err) {
    console.error("Unerwarteter Fehler in verifierVerifyAndApprove:", err);
    showMessage("danger", "Unerwarteter Fehler beim Verifizieren/Approven.");
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
    console.error("Fehler bei initDropdowns:", err);
  }
}

// Owner: Verifier-Adresse
function populateOwnerVerifierSelect() {
  const sel = document.getElementById("ownerVerifierAddress");
  if (!sel || !accounts) return;

  sel.innerHTML = "";
  const ph = document.createElement("option");
  ph.value = "";
  ph.textContent = "Adresse auswählen…";
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
  opt.textContent = "5 (alle Verifier)";
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
  ph.textContent = "Adresse auswählen…";
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
      count === 0 ? "Noch keine Projekte vorhanden" : "Projekt auswählen…";
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
    console.error("Fehler beim Laden der Projektliste:", err);
  }
}


// Verifier-Dashboard: Auswahl der Verifier-Adresse
function populateVerifierAddressSelect() {
  const sel = document.getElementById("verifierAddress");
  if (!sel || !verifiers.length) return;

  sel.innerHTML = "";
  const ph = document.createElement("option");
  ph.value = "";
  ph.textContent = "Verifier auswählen…";
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
  ph.textContent = "Investor auswählen…";
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

  throw new Error("Konnte IPFS-Hash in Antwort nicht finden: " + text);
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
      showMessage("info", "Lade Datei zu IPFS hoch …", "creatorMessages");

      const hash = await uploadFileToIpfs(file);

      ipfsInput.value = hash;
      showMessage(
        "success",
        "Datei erfolgreich auf IPFS hochgeladen. Hash: " + hash,
        "creatorMessages"
      );
    } catch (err) {
      console.error("Fehler beim IPFS-Upload:", err);
      showMessage(
        "danger",
        "Fehler beim IPFS-Upload (Details in der Konsole).",
        "creatorMessages"
      );
    }
  });
}

// ---- IPFS-Dokument im Browser anzeigen ----

const IPFS_GATEWAY_URL = "http://localhost:8080/ipfs/"; // dein lokaler Gateway

async function verifierOpenProjectDocument() {
  await loadAccounts();

  const idStr = document.getElementById("verifierProjectId").value.trim();
  if (!idStr) {
    showMessage("warning", "Bitte zuerst ein Projekt auswählen.", "verifierMessages");
    return;
  }

  const id = parseInt(idStr, 10);

  try {
    const p = await registry.methods.getProject(id).call();
    const hash = p.ipfsHash;

    if (!hash) {
      showMessage("warning", "Für dieses Projekt ist kein IPFS-Hash gespeichert.", "verifierMessages");
      return;
    }

    // Neues Tab/Fenster mit der Datei öffnen
    const url = IPFS_GATEWAY_URL + hash;
    window.open(url, "_blank");
  } catch (err) {
    console.error("Fehler beim Laden des Projekts / IPFS-Dokuments:", err);
    showMessage("danger", "Fehler beim Öffnen des IPFS-Dokuments (Details in der Konsole).", "verifierMessages");
  }
}







