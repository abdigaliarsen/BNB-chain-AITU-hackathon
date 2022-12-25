import Web3 from "web3/dist/web3.min.js";

const VERIFIER_CONTRACT_ABI = require("./ABI/Verifier.json").abi;
const SBT_CONTRACT_ABI = require("./ABI/MindStreamToken.json").abi;

const VERIFIER_CONTRACT_ADDRESS = '0xa2A209fF3f063b5a5002b959e13Edb69fB027d33';
const SBT_CONTRACT_ADDRESS = '0x4374633438945121723EB4B6a3805dE99cc59917';

export async function sbtInteract() {
    const web3 = new Web3(Web3.givenProvider || "http://localhost:7545");

    try {
        const contactList = new web3.eth.Contract(SBT_CONTRACT_ABI, SBT_CONTRACT_ADDRESS);
        return contactList
    } catch (error) {
        console.error(error);
    }
}

export async function verifierInteract() {
    const web3 = new Web3(Web3.givenProvider || "http://localhost:7545");

    try {
        const contactList = new web3.eth.Contract(VERIFIER_CONTRACT_ABI, VERIFIER_CONTRACT_ADDRESS);
        return contactList
    } catch (error) {
        console.error(error);
    }
}