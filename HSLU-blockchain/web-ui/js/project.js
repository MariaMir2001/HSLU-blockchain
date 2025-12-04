const registryAddress = "0x4631BCAbD6dF18D94796344963cB60d44a4136b6"; // deployed ProjectRegistry
const poolAddress = "0x86A2EE8FAf9A840F7a2c64CA3d51209F9A02081D"; // deployed FundingPool

// ABIs 
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
const poolAbi = [
    {
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
    }
  ];

let selectedWallet = null;

// ------------------ Wallet Handling ------------------
function showWalletPopup(callback) {
    const popup = document.getElementById('wallet-popup');
    popup.style.display = 'block';
    
    const walletSelect = document.getElementById('wallet-select');
    walletSelect.innerHTML = '';
    getAddresses().forEach(w => {
        const option = document.createElement('option');
        option.value = w.address;
        option.textContent = w.address;
        walletSelect.appendChild(option);
    });

    // Button-Handler: wenn eine Wallet ausgewählt wird, schließen und callback aufrufen
    document.getElementById('select-wallet').onclick = () => {
        selectedWallet = walletSelect.value;
        popup.style.display = 'none';
        console.log("Selected wallet:", selectedWallet);
        if (callback) callback(selectedWallet);
    };
}

// Für Change Wallet Button
document.getElementById('change_address').onclick = () => {
    showWalletPopup();
};




// ------------------ Helper Functions ------------------
async function callContractMethod(addr, abi, method, params = []) {
    const web3 = new Web3(Web3.givenProvider || "http://localhost:8545");
    const contract = new web3.eth.Contract(abi, addr);
    return await contract.methods[method](...params).call({ from: selectedWallet });
}

async function sendTransaction(addr, abi, method, params = [], from, valueWei) {
    const web3 = new Web3(Web3.givenProvider || "http://localhost:8545");
    const contract = new web3.eth.Contract(abi, addr);
    
   
    return await contract.methods[method](...params).send({ 
        from: from,
        value: valueWei || 0
    });
}


// ------------------ ProjectRegistry ------------------
/*document.getElementById('create_project').onclick = async () => {
    const name = document.getElementById('project_name').value;
    const payout = document.getElementById('project_payout').value;
    const ipfs = document.getElementById('project_ipfs').value;
   
    const ssi = document.getElementById('project_ssi').value;

    await sendTransaction(registryAddress, registryAbi, 'createProject', [name, payout, ipfs, ssi], selectedWallet);
};*/
// ------------------ Create Project ------------------
document.getElementById('create_project').onclick = async () => {

    if (!selectedWallet) {
        alert("Please select a wallet first!");
        showWalletPopup();
        return;
    }

    const name = document.getElementById('project_name').value;
    const payout = document.getElementById('project_payout').value;
    const ssi = document.getElementById('project_ssi').value;

    const fileInput = document.getElementById('uploadFile');
    const file = fileInput.files[0];

    if (!file) {
        alert("Please select a file first.");
        return;
    }

    const output = document.getElementById('output');
    output.innerText = "Uploading file to IPFS...";

    try {
        // 1) Datei nach IPFS hochladen
        const cid = await uploadFileToIPFS(file);
        output.innerText = "File uploaded. CID: " + cid + "\nCreating project...";

        // 2) Projekt erstellen
        const tx = await sendTransaction(
            registryAddress,
            registryAbi,
            'createProject',
            [name, payout, cid, ssi],
            selectedWallet
        );
        

        if (!tx.status){
          throw new Error("Transaction failed on-chain");
          output.innerText =
            "fail";
        }else{
           output.innerText =
            "Project created successfully!\n\n" +
            "Transaction Hash:\n" + tx.transactionHash;

        }

       
    } catch (err) {

        let message = err.message || err.toString();
        if (message.includes("revert"))
            message = "Transaction reverted: " + message.split("revert")[1].trim();

        output.innerText =
            "Project NOT created.\n" +
            "Reason:\n" + message;
    }
};

async function uploadFileToIPFS(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        const ipfs = window.IpfsHttpClient.create({ 
            host: 'localhost', 
            port: '5001', 
            protocol: 'http' 
        });

        reader.onload = async (event) => {
            try {
                const content = new Uint8Array(event.target.result);
                const result = await ipfs.add(content);
                resolve(result.cid.toString());
                document.getElementById('project_ipfs').value = result.cid.toString();
            } catch (err) {
                reject(err);
            }
        };

        reader.readAsArrayBuffer(file);
    });
}


document.getElementById('add_verifier').onclick = async () => {
    const output = document.getElementById('return_message');
    const verifier = document.getElementById('add_verifier_id').value.trim();

    // Reset output
    output.textContent = "";

    // 1. Input-Check
    if (!verifier || !/^0x[a-fA-F0-9]{40}$/.test(verifier)) {
        output.textContent = "Invalid Ethereum address";
        return;
    }

    try {
        output.textContent = "Sending transaction...";

        const receipt = await sendTransaction(
            registryAddress,
            registryAbi,
            "addVerifier",
            [verifier],
            selectedWallet
        );
        
        if (!receipt.status) {
          throw new Error("Transaction failed on-chain");
        }else{
        output.textContent = 
            "Verifier added successfully!\n\n" +
            "Transaction Hash:\n" + receipt;
        }

    }
    catch (err) {
        console.error(err);

        let message = err.message || err.toString();

        // Optional: "revert" Infos extrahieren
        if (message.includes("revert")) {
            message = "Transaction reverted: " + message.split("revert")[1].trim();
        }

        output.textContent = message;
    }
};



document.getElementById('approve_project').onclick = async () => {
   

    
    try {
          const pid = parseInt(document.getElementById('approve_project_id').value);
          const p = await sendTransaction(registryAddress, registryAbi, 'approveProject', [pid], selectedWallet);
          document.getElementById('project_info').textContent = JSON.stringify(p, null, 2);
        

        
        
        
        document.getElementById('project_info').textContent = JSON.stringify(p, null, 2);

    } catch (err) {
        console.error(err);
        document.getElementById('project_info').textContent =
            "Error while approving():\n" + err.message;
    }
};

document.getElementById('end_project').onclick = async () => {
    const pid = parseInt(document.getElementById('end_project_id').value);
    await sendTransaction(registryAddress, registryAbi, 'endProject', [pid], selectedWallet);
};

/*document.getElementById('get_project').onclick = async () => {
    const pid = parseInt(document.getElementById('get_project_id').value);
    const p = await callContractMethod(registryAddress, registryAbi, 'getProject', [pid]);
    document.getElementById('project_info').textContent = JSON.stringify(p, null, 2);
};*/
document.getElementById('count_projects').onclick = async () => {
    const p = await callContractMethod(registryAddress, registryAbi, 'projectCount', []);
    document.getElementById('project_info').textContent = JSON.stringify(p, null, 2);
};

document.getElementById('get_project').onclick = async () => {
    const pid = parseInt(document.getElementById('get_project_id').value);

    try {
        const count = await callContractMethod(registryAddress, registryAbi, 'projectCount', []);
        console.log("projectCount:", count);

        const p = await callContractMethod(registryAddress, registryAbi, 'getProject', [pid]);
        console.log("Project:", p);
        document.getElementById('project_info').textContent = JSON.stringify(p, null, 2) + "Count: " + count.toString();

    } catch (err) {
        console.error(err);
        document.getElementById('project_info').textContent =
            "Error while calling getProject():\n" + err.message;
    }
};


// ------------------ FundingPool ------------------
async function updatePoolBalance() { const balanceWei = await callContractMethod(poolAddress, poolAbi, 'poolBalance'); const web3 = new Web3(Web3.givenProvider || "http://localhost:8545"); document.getElementById('pool_balance').textContent = web3.utils.fromWei(balanceWei, 'ether'); } 

//document.getElementById('deposit').onclick = async () => { const amount = document.getElementById('deposit_amount').value; const web3 = new Web3(Web3.givenProvider || "http://localhost:8545"); await sendTransaction(poolAddress, poolAbi, 'deposit', [], selectedWallet, { value: web3.utils.toWei(amount, 'ether') }); await updatePoolBalance(); };
// .js Code:
document.getElementById('deposit').onclick = async () => {
    const amount = document.getElementById('deposit_amount').value;
    const web3 = new Web3(Web3.givenProvider || "http://localhost:8545");
    const valueWei = web3.utils.toWei(amount, 'ether');

    await sendTransaction(
        poolAddress,
        poolAbi,
        'deposit',
        [],
        selectedWallet,
        valueWei  // <-- Dieser Wert wird jetzt in der sendTransaction genutzt
    );

    await updatePoolBalance();
};



document.getElementById('simulate_distribution').onclick = async () => {
    

    try {
        
        

        const p = await sendTransaction(poolAddress, poolAbi, 'simulateQuarterDistribute', [], selectedWallet);
        await updatePoolBalance();
        
        document.getElementById('project_info').textContent = JSON.stringify(p, null, 2);

    } catch (err) {
        console.error(err);
        document.getElementById('project_info').textContent =
            "Error while Simulating():\n" + err.message;
    }
};



// ------------------ Wallet Button ------------------
/*document.getElementById('change_address').onclick = () => {
    showWalletPopup();
    document.getElementById('select-wallet').onclick = () => getSelectedWallet();
};*/

// ------------------ On Load ------------------
window.onload = async () => {
    if (!selectedWallet) showWalletPopup();
    await updatePoolBalance();
};





