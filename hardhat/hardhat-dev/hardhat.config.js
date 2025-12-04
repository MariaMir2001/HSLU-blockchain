require("@nomiclabs/hardhat-ethers");
require("@nomicfoundation/hardhat-chai-matchers");

module.exports = {
  defaultNetwork: "localhost",
  networks: {
    hardhat: {},
    localhost: {
      url: "http://hardhat-hardhat-node-1:8545",
      accounts: {
        mnemonic: "test test test test test test test test test test test junk"
      }
    }
  },
  solidity: "0.8.20",
};
