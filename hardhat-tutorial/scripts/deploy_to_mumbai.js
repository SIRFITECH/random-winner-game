const { ethers } = require('hardhat');
require('dotenv').config({path: '.env'});
const { FEE, VRF_COORDINATOR, LINK_TOKEN, KEY_HASH} = require('../constants');

async function main(){
    // initialize the contractFactory
    const randomWinnerGame = await ethers.getContractFactory('RandomWinnerGame');

    // deploy the randomeWinnerGame
    const deployedRandomWinnerGame = await randomWinnerGame.deploy(
        VRF_COORDINATOR, LINK_TOKEN,  KEY_HASH, FEE,  
    );

    // await the deployment to be completed
    await deployedRandomWinnerGame.deployed();

    // console the deploy address
    console.log('Verify Contract Addresss: ', deployedRandomWinnerGame.address);

    // wait for the deployed contract address to be seen
    console.log('Sleeping.....');
    await sleep(30000);

    // verify the contract after deployment
    await hre.run('verify:verify', {
        address : deployedRandomWinnerGame.address,
        constructorArguments: [VRF_COORDINATOR, LINK_TOKEN, KEY_HASH,FEE],
    });
}

function sleep(ms){
    return new Promise((resolve)=> setTimeout(resolve,ms));
}

main()
.then(()=>process.exit(0))
.catch((error)=>{
    console.log(error);
    process.exit(1)
})


// contract deploy @ 0xCEe76b16Bfc51457C891d524D42B91aB6A970d4e
// date: 14-02-2023
// verified @ 
// https://mumbai.polygonscan.com/address/0xCEe76b16Bfc51457C891d524D42B91aB6A970d4e#code
