// const { SignClient } = require("@walletconnect/sign-client");
// const { Web3Modal } = require("@web3modal/standalone");

// window.SignClient = SignClient;
// window.Web3Modal = Web3Modal;

import { Web3Modal } from "@web3modal/html";
import { configureChains, createClient } from "@wagmi/core";
import { arbitrum, mainnet, polygon } from "@wagmi/core/chains";
import { EthereumClient, modalConnectors, walletConnectProvider } from "@web3modal/ethereum";

window.w3m = { Web3Modal, EthereumClient, modalConnectors, walletConnectProvider };
window.wagmi = { configureChains, createClient, chains: { arbitrum, mainnet, polygon } };