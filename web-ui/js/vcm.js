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

async function loadAccounts() {
  if (!accounts) {
    accounts = await web3.eth.getAccounts();
    owner    = accounts[0];  // Owner des Systems
    verifier = accounts[1];  // Prüfer
    creator  = accounts[2];  // Projekt-Ersteller
    investor = accounts[3];  // Investor
    console.log("Roles:", { owner, verifier, creator, investor });
  }
}

/* ---------- OWNER-FUNKTIONEN ---------- */

// Owner: Verifier setzen
async function ownerAddVerifier() {
  await loadAccounts();
  const addr = document.getElementById("ownerVerifierAddress").value.trim();
  if (!addr) { alert("Bitte eine Verifier-Adresse eingeben."); return; }

  try {
    const already = await registry.methods.isVerifier(addr).call();
    if (already) {
      alert("Adresse ist bereits Verifier.");
      return;
    }
    const tx = await registry.methods
      .addVerifier(addr)
      .send({ from: owner });

    console.log("Verifier added:", tx);
    alert("Verifier wurde gesetzt.");
  } catch (err) {
    console.error("Error in ownerAddVerifier:", err);
    alert("Fehler beim Setzen des Verifiers (siehe Konsole).");
  }
}

// Owner: Anzahl benötigter Approvals setzen
async function ownerSetRequiredApprovals() {
  await loadAccounts();
  const nStr = document.getElementById("ownerRequiredApprovals").value.trim();
  if (!nStr) { alert("Bitte eine Zahl eingeben."); return; }
  const n = parseInt(nStr, 10);
  if (n <= 0) { alert("Approvals müssen > 0 sein."); return; }

  try {
    const tx = await registry.methods
      .setRequiredApprovals(n)
      .send({ from: owner });

    console.log("Required approvals set:", tx);
    alert("Required approvals aktualisiert.");
  } catch (err) {
    console.error("Error in ownerSetRequiredApprovals:", err);
    alert("Fehler beim Setzen (siehe Konsole).");
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
    alert("Verteilung durchgeführt.");
  } catch (err) {
    console.error("Error in ownerDistribute:", err);
    alert("Fehler bei der Verteilung (siehe Konsole).");
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
    alert("Bitte alle Felder ausfüllen.");
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
        registry:  "blockchain"          // oder "db"
      })
    });

    if (!res.ok) {
      const text = await res.text();
      console.error("Issuer HTTP error:", res.status, text);
      alert("SSI-Issuer Fehler (Details in der Konsole).");
      return;
    }

    // 👉 HIER hat es bei dir gefehlt:
    const issued = await res.json();
    console.log("Issued credential:", issued);

    // 4. Credential lokal speichern – key = documentHash
    const ssiRef = issued.documentHash;
    if (!ssiRef) {
      alert("Issuer hat keinen documentHash zurückgegeben.");
      return;
    }

    const stored = JSON.parse(localStorage.getItem("vcmCredentials") || "{}");
    stored[ssiRef] = issued;
    localStorage.setItem("vcmCredentials", JSON.stringify(stored));

    // 5. Projekt im Smart Contract anlegen
    const tx = await registry.methods
      .createProject(name, payout, ipfs, ssiRef)
      .send({ from });

    console.log("Project created (with SSI ref):", tx);
    alert("Projekt mit SSI-Referenz erstellt! Tx: " + tx.transactionHash);

  } catch (err) {
    console.error("Error creating project with SSI:", err);
    alert("Fehler beim Erstellen (Konsole ansehen).");
  }
}




/* ---------- VERIFIER-FUNKTION ---------- */

// Verifier: Projekt approven
async function verifierApproveProject() {
  await loadAccounts();

  const idStr = document.getElementById("verifierProjectId").value.trim();
  if (!idStr) { alert("Bitte eine Projekt-ID eingeben."); return; }
  const id = parseInt(idStr, 10);

  try {
    const tx = await registry.methods
      .approveProject(id)
      .send({ from: verifier });

    console.log("Project approved:", tx);
    alert("Projekt genehmigt.");
  } catch (err) {
    console.error("Error approving project:", err);
    alert("Fehler beim Approve (siehe Konsole).");
  }
}

/* ---------- INVESTOR-FUNKTION ---------- */

// Investor: Deposit in den FundingPool
async function investorDeposit() {
  await loadAccounts();

  const amountStr = document.getElementById("investorDepositAmount").value.trim();
  if (!amountStr) { alert("Bitte einen Betrag eingeben."); return; }
  const valueWei = web3.utils.toWei(amountStr, "ether");

  try {
    const tx = await pool.methods
      .deposit()
      .send({ from: investor, value: valueWei });

    console.log("Deposit:", tx);
    alert("Deposit erfolgreich.");
  } catch (err) {
    console.error("Error depositing:", err);
    alert("Fehler beim Deposit (siehe Konsole).");
  }
}

const SSI_VERIFIER_URL = "http://localhost:9002/verify-credential"; // wie in deinem SSI-Template

async function verifierVerifyAndApprove() {
  await loadAccounts();

  const idStr = document.getElementById("verifierProjectId").value.trim();
  if (!idStr) { alert("Bitte eine Projekt-ID eingeben."); return; }
  const id = parseInt(idStr, 10);

  try {
    // 1. Projekt aus dem Registry-Contract lesen
    const p = await registry.methods.getProject(id).call();
    const ssiRef = p.ssiDidHash;  // das ist dein documentHash
    console.log("Project from chain:", p);

    if (!ssiRef) {
      alert("Dieses Projekt hat keine SSI-Referenz.");
      return;
    }

    // 2. Credential lokal holen (siehe Creator-Speicher)
    const stored = JSON.parse(localStorage.getItem("vcmCredentials") || "{}");
    const credential = stored[ssiRef];

    if (!credential) {
      alert("Kein Credential zu dieser SSI-Referenz gefunden (Browser-Speicher).");
      return;
    }

    // 3. Beim SSI-Verifier prüfen lassen
    const res = await fetch(SSI_VERIFIER_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(credential)
    });

    if (!res.ok) {
      const text = await res.text();
      console.error("Verifier HTTP error:", res.status, text);
      alert("Fehler beim SSI-Check (siehe Konsole).");
      return;
    }

    const result = await res.json();
    console.log("SSI verify result:", result);

    if (!result.valid) {
      alert("SSI-Verifikation fehlgeschlagen – Projekt wird NICHT approved.");
      return;
    }

    // 4. Wenn alles OK: on-chain approven
    const tx = await registry.methods
      .approveProject(id)
      .send({ from: verifier });

    console.log("Project approved:", tx);
    alert("Projekt ist SSI-validiert und on-chain genehmigt!");

  } catch (err) {
    console.error("Error in verifierVerifyAndApprove:", err);
    alert("Fehler beim Verifizieren/Approven (Konsole ansehen).");
  }
}





