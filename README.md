# Ethcontract
Ever tried using a smart contract that doesn't have frontend? Tried using etherscan? Then, you know that it sucks 🥴 

Worry no more! We got you covered 🎉 

Ethcontract is an app to share contracts that users can interact with - without the fuss.

Here's an example of how it'd be easy to vote on compoundfinance governor: [[open in ethcontract ↗️]](https://ethcontract.app/0xc0da01a04c3f3e0be433606045bb7017a7323e38/?abi=912566e60597cb4fe913748e08114d24&network=1&pinned=propose%2CcastVote)

![image](https://user-images.githubusercontent.com/67156051/208602102-edcc0dff-4ea3-4458-9b3f-2f028f2b99f4.png)

## Features 
- dynamic, easy-to-use interface for any contract 
- pin functions in the ui and share the ui with your frens in a single click
- mobile friendly (yes, you heard that right, thanks to [wallet connect and web3modal](https://github.com/WalletConnect/web3modal)) and that also means you can use it with your favorite mobile wallets like rainbow, trust etc!
- supports all major chains like ethereum, polygon, optimism, arbitrum, goerli  
- completely open-source  

## Contributing
### Clone the Project
    git clone https://github.com/questbook/ethcontract.app

### Setup the project locally 
#### 1. Install packages 
    npm install
#### 2. Start MongoDB
    brew services start mongodb-community@6.0
#### 3. Start Nodemon Server 
    npm run dev

### Bundling Web3Modal
`Web3Modal` and `Wagmi` are not directly available in a single cdn link. Hence, we need to bundle it using webpack incase any new `Wagmi` or `Web3Modal` features needs to be added.
#### 1. Make required changes in `w3m-pre-bundle.js`
#### 2. Bundle it 
    npx webpack
#### 3. Include the output bundle in `wallet.jade`
```jade
script(src="/js/w3m.js") 
```

## Contributors 
- [Sahil Vasava](https://github.com/SahilVasava)
- [Madhavan Malolan](https://github.com/madhavanmalolan)
- [Dhaiwat](https://github.com/Dhaiwat10)
- [Sudham Jayanthi](https://github.com/sudhamjayanthi) : Made mobile friendly & Integrated Web3Modal
