const { configureChains, createClient } = require("@wagmi/core");

const { arbitrum, mainnet, polygon } = require("@wagmi/core/chains");

const { Web3Modal } = require("@web3modal/html");

const { EthereumClient, modalConnectors, walletConnectProvider } = require("@web3modal/ethereum");


window.w3m = { Web3Modal, EthereumClient, modalConnectors, walletConnectProvider }; 

window.wagmi = { configureChains, createClient }; 

window.wagmi.chains = { arbitrum, mainnet, polygon };