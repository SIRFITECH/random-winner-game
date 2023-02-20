require("@nomicfoundation/hardhat-toolbox");
require('dotenv').config({path: '.env'});

ALCHEMY_HTTP_URL= process.env.ALCHEMY_HTTP_URL

PRIVATE_KEY= process.env.PRIVATE_KEY

POLYGONSCAN_KEY= process.env.POLYGONSCAN_KEY

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  networks: {
    mumbai:{
      url: ALCHEMY_HTTP_URL,
      accounts: [PRIVATE_KEY],
    },
  },
  etherscan:{
    apiKey: process.env.POLYGONSCAN_KEY
  }
};

// contract deploy @ 0xCEe76b16Bfc51457C891d524D42B91aB6A970d4e
// date: 14-02-2023
// verified @ 
// https://mumbai.polygonscan.com/address/0xCEe76b16Bfc51457C891d524D42B91aB6A970d4e#code