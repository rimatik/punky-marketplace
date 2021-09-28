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
    const [owner] = await ethers.getSigners();
    const address = "";
    const tokenUri = ""

    const minting = await ethers.getContractAt('PUNKYNFT', ETH_CONTRACT);

    const tx = await minting.safeMint(address,tokenUri);
    const reciept = await tx.wait();
    console.log(reciept);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
