// hardhat-dev/scripts/deploy_project_registry.js
const { ethers } = require("hardhat");

async function main() {
  const [deployer] = await ethers.getSigners();
  console.log("Deploying with:", deployer.address);

  // 1. ProjectRegistry
  const ProjectRegistry = await ethers.getContractFactory("ProjectRegistry");
  const projectRegistry = await ProjectRegistry.deploy();
  await projectRegistry.deployed();
  console.log("ProjectRegistry deployed to:", projectRegistry.address);

  // 2. FundingPool – bekommt die Registry-Adresse in den Konstruktor
  const FundingPool = await ethers.getContractFactory("FundingPool");
  const fundingPool = await FundingPool.deploy(projectRegistry.address);
  await fundingPool.deployed();
  console.log("FundingPool deployed to:", fundingPool.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
