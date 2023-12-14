require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  defaultNetwork: "mumbai",
  networks: {
    hardhat: {
    },
    mumbai: {
      url: process.env.MUMBAI_RPC,
      accounts: [process.env.MUMBAI_PRIVATE_KEY]
    },
    shibuya: {
      url: process.env.SHIBUYA_RPC,
      accounts: [process.env.SHIBUYA_PRIVATE_KEY]
    },
    moonbase: {
      url: process.env.MOONBASE_RPC,
      accounts: [process.env.MOONBASE_PRIVATE_KEY]
    }
  },
  solidity: {
    version: "0.8.19",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },
  paths: {
    sources: "./contracts",
    tests: "./test",
    cache: "./cache",
    artifacts: "./artifacts"
  },
  mocha: {
    timeout: 40000
  }
}