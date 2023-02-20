const { ethers, BigNumber } = require('hardhat');


const LINK_TOKEN = "0x326C977E6efc84E512bB9C30f76E30c160eD06FB";
const VRF_COORDINATOR = "0x8C7382F9D8f56b33781fE506E897a4F1e2d17255";
const KEY_HASH =
  "0x6e75b569a01ef56d18cab6a8e71e6600d6ce853834d4a5748b720d06f878b3a4";
const FEE = ethers.utils.parseEther('0.00001');

module.exports= {LINK_TOKEN, VRF_COORDINATOR, KEY_HASH, FEE}

// reference https://docs.chain.link/vrf/v2/introduction to get the variable above

/**
 * COMMENTS FROM THE GRAPH SCHEMA
 *   "Note that the ! indicates that the feild is required"
  " the ID stands for the gameId in the smart contract"
  "maxPlayers keep track of the maxPlayers in the game"
  "entryFee is the fee for entering the game, it is uint256 remember, and that is why it is a BigInt"
  "winner is an address, and you know address are hexadecimals string, and that is why it is a Bytes type"
  "the requestId is also a hexadecimal string, so it is a Bytes type"
  "players hold a list of addresses"
 */

