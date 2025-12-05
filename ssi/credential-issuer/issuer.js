const express = require('express');
const cors = require('cors');
const crypto = require('crypto');
const fs = require('fs');
const axios = require('axios');
const app = express();
const port = 9001;

app.use(cors());
app.use(express.json());

app.post('/issue-credential', async (req, res) => {
    const { issuer, did, credential, registry } = req.body;
    console.log(`Received request to issue credential for DID: ${did}, Issuer: ${issuer}, Registry: ${registry}`);

    try {
        // 1) Private Key laden
        const privateKey = fs.readFileSync(`./keys/${issuer}_private.pem`, 'utf8');
        const publicKey  = fs.readFileSync(`./keys/${issuer}_public.pem`, 'utf8');
        console.log(`Loaded keys for issuer: ${issuer}`);

        // 2) DID Document bauen
        const didDocument = {
            id: did,
            publicKey,
            authentication: "exampleAuthentication",
            service: [],
            issuer
        };
        console.log('Created DID document:', didDocument);

        // 3) DID-Registry informieren
        let registryResponse;
        if (registry === 'db') {
            registryResponse = await axios.post('http://did-registry:9003/did', {
                did,
                document: JSON.stringify(didDocument)
            });
        } else if (registry === 'blockchain') {
            registryResponse = await axios.post('http://did-registry:9003/did', {
                did,
                document: JSON.stringify(didDocument)
            });
        }
        console.log('Registered DID document:', registryResponse.data);

        // 4) Credential "ausstellen"
        const issuedCredential = {
            content: credential,
            issuedTo: did,
            issuedAt: new Date().toISOString(),
            issuer,
            registry
        };

        const jsonString = JSON.stringify(issuedCredential);
        console.log('JSON string being hashed:', jsonString);

        // 5) Hash und Signatur erzeugen
        const documentHash = crypto.createHash('sha256').update(jsonString).digest('hex');
        console.log(`Created document hash: ${documentHash}`);

        const sign = crypto.createSign('SHA256');
        sign.update(documentHash);
        sign.end();
        const signature = sign.sign(privateKey, 'base64');
        console.log(`Created signature: ${signature}`);

        const verify = crypto.createVerify('SHA256');
        verify.update(documentHash);
        verify.end();
        const isValidSignature = verify.verify(publicKey, signature, 'base64');
        console.log(`Signature valid on issuer side: ${isValidSignature}`);

        // 6) WICHTIG: Hash & Signatur an Frontend schicken
        issuedCredential.documentHash = documentHash;
        issuedCredential.signature    = signature;

        return res.json(issuedCredential);

    } catch (error) {
        console.error('Error issuing credential:', error.toString());
        if (error.response) {
            console.error('Downstream error body:', error.response.data);
        }
        res.status(500).json({ error: 'Error issuing credential' });
    }
});

app.listen(port, () => {
    console.log(`Credential issuer running at http://localhost:${port}`);
});

