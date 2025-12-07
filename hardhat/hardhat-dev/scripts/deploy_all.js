const { ethers } = require("hardhat");
const { keccak256 } = ethers.utils;

async function main() {

    // Deploy Counter
    const Counter = await ethers.getContractFactory("Counter");
    const counter = await Counter.deploy();
    await counter.deployed();
    console.log("Counter deployed to:", counter.address);

    // Deploy MyToken
    const MyToken = await ethers.getContractFactory("MyToken");
    const myToken = await MyToken.deploy();
    await myToken.deployed();
    console.log("MyToken deployed to:", myToken.address);

    // Deploy MyNFT
    const MyNFT = await ethers.getContractFactory("MyNFT");
    const myNFT = await MyNFT.deploy();
    await myNFT.deployed();
    console.log("MyNFT deployed to:", myNFT.address);

    // Deploy DIDRegistry using create2
    const DIDRegistry = await ethers.getContractFactory("DIDRegistry");
    const didRegistry = await DIDRegistry.deploy();
    await didRegistry.deployed();
    console.log("DIDRegisstry deployed to:", didRegistry.address);

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
    