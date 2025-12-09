const { ethers } = require("hardhat");

async function main() {
  const [deployer] = await ethers.getSigners();
  console.log("Deploying with:", deployer.address);

  const Certificate = await ethers.getContractFactory("InvestmentCertificate");
  const certificate = await Certificate.deploy("VCM Certificate", "VCMCERT");

  // ethers v5:
  await certificate.deployed();

  console.log("InvestmentCertificate deployed to:", certificate.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

