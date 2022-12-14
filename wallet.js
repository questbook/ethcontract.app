import { Web3Modal } from "@web3modal/html";
import {
	configureChains,
	createClient,
	getNetwork,
	getAccount,
	sendTransaction,
	waitForTransaction,
} from "@wagmi/core";
import { arbitrum, mainnet, polygon } from "@wagmi/core/chains";
import { EthereumClient, modalConnectors, walletConnectProvider } from "@web3modal/ethereum";

window.w3m = { Web3Modal, EthereumClient, modalConnectors, walletConnectProvider };
window.wagmi = {
	configureChains,
	createClient,
	getNetwork,
	getAccount,
	sendTransaction,
	waitForTransaction,
	chains: { arbitrum, mainnet, polygon },
};
