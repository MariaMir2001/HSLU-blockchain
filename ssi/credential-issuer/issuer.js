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
    // 1. Keys laden
    const privateKey = fs.readFileSync(`./keys/${issuer}_private.pem`, 'utf8');
    const publicKey  = fs.readFileSync(`./keys/${issuer}_public.pem`, 'utf8');
    console.log(`Loaded keys for issuer: ${issuer}`);

    // 2. DID Document bauen
    const didDocument = {
      id: did,
      publicKey,
      authentication: 'exampleAuthentication',
      service: [],
      issuer
    };
    console.log('Created DID document:', didDocument);

    // 3. Im Registry-Service speichern (optional)
    try {
// ---- Issuer ----
        if (registry === 'db') {
        await axios.post('http://did-registry:9003/dids/db', didDocument);
        } else if (registry === 'blockchain') {
        await axios.post('http://did-registry:9003/dids/blockchain', didDocument);
        }

    } catch (e) {
      console.warn('WARN: Could not store DID document. SSI läuft trotzdem weiter:', e.response?.data || e.message);
    }

    // 4. Credential-Objekt erstellen (noch ohne Hash/Signatur)
    const issuedCredential = {
      content: credential,
      issuedTo: did,
      issuedAt: new Date().toISOString(),
      issuer,
      registry
    };

    // 5. Hash berechnen
    const jsonString   = JSON.stringify(issuedCredential);
    const documentHash = crypto.createHash('sha256').update(jsonString).digest('hex');
    console.log('Created document hash:', documentHash);

    // 6. Signatur erstellen
    const sign = crypto.createSign('SHA256');
    sign.update(documentHash);
    sign.end();
    const signature = sign.sign(privateKey, 'base64');
    console.log('Created signature:', signature);

    // 7. Signatur (und Hash) anhängen  ⬅️⬅️⬅️ WICHTIG
    issuedCredential.documentHash = documentHash;
    issuedCredential.signature    = signature;

    // 8. Antwort schicken
    return res.json(issuedCredential);

  } catch (error) {
    console.error('Error issuing credential:', error);
    return res.status(500).json({ error: 'Error issuing credential' });
  }
});

app.listen(port, () => {
  console.log(`Credential issuer running at http://localhost:${port}`);
});
