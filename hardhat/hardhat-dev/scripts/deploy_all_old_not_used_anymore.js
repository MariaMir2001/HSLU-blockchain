const { ethers } = require("hardhat");
const { keccak256 } = ethers.utils;

async function main() {
    // Deploy ProjectRegistry
    const ProjectRegistry = await ethers.getContractFactory("ProjectRegistry");
    const projectRegistry = await ProjectRegistry.deploy();
    await projectRegistry.deployed();
    console.log("ProjectRegistry deployed to:", projectRegistry.address);

      // Deploy ProjectRegistry
    const FundingPool = await ethers.getContractFactory("FundingPool");
    const fundingPool = await FundingPool.deploy(projectRegistry.address);
    await fundingPool.deployed();
    console.log("FundingPool deployed to:", fundingPool.address);


      // 4) Zertifikat erfährt, wer der FundingPool ist
  const tx = await certificate.setFundingPool(fundingPool.address);
  await tx.wait();
  console.log("FundingPool set as certificate.fundingPool");
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
    console.error(error);
    process.exit(1);
    });
    