import * as dotenv from "dotenv";
dotenv.config();

import { HardhatUserConfig, task } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "@nomiclabs/hardhat-etherscan";
import "@nomiclabs/hardhat-waffle";
import "@typechain/hardhat";
import "hardhat-gas-reporter";
import "solidity-coverage";
import "hardhat-circom";

const config: HardhatUserConfig = {
  solidity: "0.8.0",
  networks: {
    ropsten: {
      url: `https://ropsten.infura.io/v3/${process.env.INFURA_KEY}` || "",
      accounts:
        process.env.PRIVATE_KEY !== undefined ? [`0x${process.env.PRIVATE_KEY}`] : [],
    },
    rinkeby: {
      url: `https://rinkeby.infura.io/v3/${process.env.INFURA_KEY}` || "",
      accounts:
        process.env.PRIVATE_KEY !== undefined ? [`0x${process.env.PRIVATE_KEY}`] : [],
    },
    bsc_test: {
      url: "https://data-seed-prebsc-2-s3.binance.org:8545/",
      chainId: 97,
      accounts: [`0x${process.env.PRIVATE_KEY}`],
    }
  },
  gasReporter: {
    enabled: process.env.REPORT_GAS !== undefined,
    currency: "USD",
  },
  etherscan: {
    apiKey: process.env.ETHERSCAN_API_KEY,
  },
  circom: {
    inputBasePath: "./circuits",
    ptau: "powersOfTau28_hez_final_12.ptau",
    circuits: [{ name: "main" }],
    outputBasePath: "./circuits"
  },
};

export default config;