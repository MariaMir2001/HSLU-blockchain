const express = require('express');
const cors = require('cors');
const axios = require('axios');
const crypto = require('crypto');
const app = express();
const port = 9002;

app.use(cors());
app.use(express.json());

app.post('/verify-credential', async (req, res) => {
  try {
    // 1. Sowohl {credential:{...}} als auch {...} akzeptieren
    const credential = req.body.credential || req.body;
    console.log("Received verification request for:", credential);

    if (!credential || !credential.issuedTo) {
      return res
        .status(400)
        .json({ valid: false, error: "Missing credential or issuedTo" });
    }

    const did      = credential.issuedTo;
    const registry = credential.registry || "db";

    console.log("Querying DID registry for DID:", did);

    // 2. DID Document aus deiner DID-Registry holen
    let didDocRes;
    if (registry === "db") {
      didDocRes = await axios.get(
        `http://did-registry:9003/dids/db/${encodeURIComponent(did)}`
      );
    } else if (registry === "blockchain") {
      didDocRes = await axios.get(
        `http://did-registry:9003/dids/blockchain/${encodeURIComponent(did)}`
      );
    } else {
      return res
        .status(400)
        .json({ valid: false, error: `Unknown registry: ${registry}` });
    }

    const didDocument = didDocRes.data;
    console.log("DID Document:", didDocument);

    // 3. Hash bestimmen:
    //    a) Wenn documentHash mitgeschickt wird, den verwenden
    //    b) Sonst wie bisher aus den Kernfeldern berechnen
    let documentHash = credential.documentHash;
    if (!documentHash) {
      const core = {
        content:  credential.content,
        issuedTo: credential.issuedTo,
        issuedAt: credential.issuedAt,
        issuer:   credential.issuer,
        registry: credential.registry,
      };
      const jsonString = JSON.stringify(core);
      documentHash = crypto
        .createHash("sha256")
        .update(jsonString)
        .digest("hex");
    }
    console.log("Using documentHash:", documentHash);

    // 4. Signatur prüfen
    const verify = crypto.createVerify("SHA256");
    verify.update(documentHash);
    verify.end();

    const isValidSignature = verify.verify(
      didDocument.publicKey,
      credential.signature,
      "base64"
    );

    console.log("Signature valid:", isValidSignature);

    if (!isValidSignature) {
      return res
        .status(400)
        .json({ valid: false, error: "Invalid credential signature" });
    }

    // Optional: Hash aus Credential mit berechnetem vergleichen
    if (credential.documentHash && credential.documentHash !== documentHash) {
      return res
        .status(400)
        .json({ valid: false, error: "Document hash mismatch" });
    }

    return res.json({ valid: true });
  } catch (err) {
    console.error("Error verifying credential:", err);
    return res
      .status(500)
      .json({ valid: false, error: "Error verifying credential" });
  }
});

app.listen(port, () => {
    console.log(`Credential verifier running at http://localhost:${port}`);
});
