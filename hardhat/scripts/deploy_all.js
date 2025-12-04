// Deploy ProjectRegistry
const ProjectRegistry = await ethers.getContractFactory("ProjectRegistry");
const projectRegistry = await ProjectRegistry.deploy();
await projectRegistry.deployed();
console.log("ProjectRegistry deployed to:", projectRegistry.address);

// Deploy FundingPool
const FundingPool = await ethers.getContractFactory("FundingPool");
const fundingPool = await FundingPool.deploy(projectRegistry.address);
await fundingPool.deployed();
console.log("FundingPool deployed to:", fundingPool.address);
