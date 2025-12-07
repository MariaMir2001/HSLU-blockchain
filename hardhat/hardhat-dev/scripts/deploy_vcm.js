const { ethers } = require("hardhat");

async function main() {
  const [deployer] = await ethers.getSigners();
  console.log("Deploying with:", deployer.address);

  // 1) ProjectRegistry
  const ProjectRegistry = await ethers.getContractFactory("ProjectRegistry");
  const projectRegistry = await ProjectRegistry.deploy();
  await projectRegistry.deployed();
  console.log("ProjectRegistry deployed to:", projectRegistry.address);

  // 2) InvestmentCertificate
  const Certificate = await ethers.getContractFactory("InvestmentCertificate");
  const certificate = await Certificate.deploy("VCM Certificate", "VCMCERT");
  await certificate.deployed();
  console.log("InvestmentCertificate deployed to:", certificate.address);

  // 3) FundingPool (wie dein aktueller Solidity-Code: nur registryAddress)
// 3) FundingPool (Constructor: registryAddress, certificateAddress)
const FundingPool = await ethers.getContractFactory("FundingPool");
const fundingPool = await FundingPool.deploy(
  projectRegistry.address,
  certificate.address
);
await fundingPool.deployed();
console.log("FundingPool deployed to:", fundingPool.address);


  // 4) Zertifikat erfährt, wer der FundingPool ist
  const tx = await certificate.setFundingPool(fundingPool.address);
  await tx.wait();
  console.log("FundingPool set as certificate.fundingPool");

  console.log("\n=== Adressen für vcm.js ===");
  console.log("registryAddress    =", projectRegistry.address);
  console.log("fundingPoolAddress =", fundingPool.address);
  console.log("certificateAddress =", certificate.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
