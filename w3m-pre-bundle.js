import { Web3Modal } from "@web3modal/html";
import {
	configureChains,
	createClient,
	// watchAccount,
	getNetwork,
	switchNetwork,
	getContract,
	fetchSigner,
	readContract,
	writeContract,
	prepareWriteContract,
	getAccount
} from "@wagmi/core";
import { arbitrum, mainnet, polygon, goerli, optimism } from "@wagmi/core/chains";
import { EthereumClient, modalConnectors, walletConnectProvider } from "@web3modal/ethereum";

window.w3m = { Web3Modal, EthereumClient, modalConnectors, walletConnectProvider };
window.wagmi = {
	configureChains,
	createClient,
	// watchAccount,
	getNetwork,
	switchNetwork,
	getContract,
	fetchSigner,
	readContract,
	writeContract,
	prepareWriteContract,
	getAccount,
	chains: { arbitrum, mainnet, polygon, goerli, optimism },
};
