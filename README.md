# openDenzent: Decentralized Science Crowdfunding Platform
openDenzent is an open-source, decentralized crowdfunding platform for scientific research projects. It aims to provide an alternative to traditional research funding models by connecting researchers directly with interested donors, without the need for intermediaries such as universities, research institutions, or funding agencies.

# How it Works
openDenzent operates on the Polygon Mumbai testnet, a fast and low-cost Ethereum-compatible network. The smart contracts are developed using the Hardhat framework, and the contracts are managed using thirdweb, a decentralized smart contract management platform.

Researchers can create a funding campaign for their project, set a funding goal and timeline, and describe the research in detail. Donors can browse and search for projects that interest them, and contribute to the ones they want to support.

Once a funding goal is reached, the funds are released to the researcher, who is then responsible for carrying out the research and providing regular updates to the donors. If the funding goal is not reached within the specified timeline, all donations are returned to the donors.

# Getting Started
To get started with openDenzent, you'll need to have some familiarity with Ethereum and smart contract development using Hardhat. You'll also need to have the following tools installed:

* Vite: A fast and minimalist web framework for building JavaScript applications
* MetaMask: A browser extension for interacting with Ethereum and Polygon networks
  Once you have these tools installed, you can clone the openDenzent repository and run the following commands to install the required packages:

Copy code <br>
* ` npm install `<br>
You can then start the development server by running:


Copy code <br>
* `npm run dev` <br>

This will start a local development server at http://localhost:3000, where you can interact with the openDenzent UI.

To deploy the smart contracts to the Polygon Mumbai testnet, you'll need to create a `.env` file with your Polygon Mumbai testnet RPC URL and your wallet private key:

makefile  <br>
Copy code <br>
* `POLYGON_MUMBAI_RPC_URL=<your_rpc_url>`<br>
* `WALLET_PRIVATE_KEY=<your_wallet_private_key>`<br>
You can then run the following command to compile and deploy the smart contracts:


Copy code<br>
* `npm run deploy:mumbai`

# Contributing
openDenzent is an open-source project, and contributions are welcome. If you'd like to contribute, please see our contributing guidelines for more information.

# License
openDenzent is released under the MIT License.
