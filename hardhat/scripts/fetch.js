// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.

const {
    ETH_CONTRACT
  } = process.env;

const hardhat = require("hardhat");

async function main() {

    const {ethers} = hardhat;

    const punkyNft = await ethers.getContractAt('PUNKYNFT', ETH_CONTRACT);
    const tokenId = 2;
    const tokenURI = await punkyNft.tokenURI(tokenId);
  
    console.log(`Token uri:`, tokenURI);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
