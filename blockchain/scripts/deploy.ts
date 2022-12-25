import { ethers } from "hardhat";

async function main() {
    const SBT = await ethers.getContractFactory("MindStreamToken");
    const sbt = await SBT.deploy();
    await sbt.deployed();
    console.log("SBT address: ", sbt.address);

    const VERIFIER = await ethers.getContractFactory("Verifier");
    const verifier = await VERIFIER.deploy();
    await verifier.deployed();
    console.log("Verifier is deployed to:", verifier.address);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});