# ⚡ Electricity Marketplace dApp

## 📖 Introduction / Research Summary

This project was developed as part of a research/thesis initiative while I was working as a Research Assistant under the supervision of my professor. The goal of this research was to explore and demonstrate the use of blockchain technology for decentralized energy trading. The Electricity Marketplace dApp simulates a peer-to-peer platform where users can list, buy, and sell units of electricity securely and transparently using Ethereum smart contracts. This work contributes to the academic study of decentralized marketplaces, energy trading, and blockchain-based applications, and was completed as a core component of my research assistantship.

---

A decentralized marketplace for buying and selling "electricity" units, built with Ethereum smart contracts, Truffle, React, and Ganache.

---

## 🚀 What is This Project?

This project is a simple decentralized application (dApp) that lets users:

- List "electricity" for sale
- Buy electricity from others
- All transactions are recorded on the blockchain for transparency and security

It's perfect for learning how blockchain, smart contracts, and web3 frontends work together, and serves as a research prototype for decentralized energy trading systems.

---

## 🛠️ Tech Stack

- **Solidity**: Smart contract language
- **Truffle**: Smart contract development framework
- **Ganache**: Local Ethereum blockchain for development/testing
- **React**: Frontend user interface
- **Web3.js**: Connects the frontend to the blockchain
- **MetaMask**: Browser wallet for managing accounts and signing transactions

---

## 📦 Project Structure

```
.
├── src/
│   ├── contracts/        # Solidity smart contracts
│   ├── abis/             # Compiled contract ABIs
│   ├── components/       # React components (UI)
│   └── index.js          # React entry point
├── migrations/           # Truffle migration scripts
├── public/               # Static frontend assets
├── test/                 # Smart contract tests
├── package.json          # Project dependencies
└── truffle-config.js     # Truffle configuration
```

---

## 📝 How It Works

1. **Ganache** runs a local blockchain on your computer.
2. **Truffle** deploys the smart contract (`Marketplace.sol`) to Ganache.
3. **React** frontend lets users interact with the marketplace.
4. **MetaMask** connects your browser to the blockchain and signs transactions.
5. All actions (add/buy electricity) are recorded on the blockchain.

---

## 🖥️ Getting Started

### 1. Prerequisites

- [Node.js (v16 recommended)](https://nodejs.org/)
- [npm](https://www.npmjs.com/)
- [Truffle](https://trufflesuite.com/truffle/) (`npm install -g truffle`)
- [Ganache](https://trufflesuite.com/ganache/) (GUI or CLI)
- [MetaMask](https://metamask.io/) (browser extension for Chrome/Firefox/Brave/Edge)

### 2. Install Dependencies

```sh
npm install
```

### 3. Start Ganache

**Option A: Ganache GUI**

- Open Ganache app and start a workspace (default port: 7545).

**Option B: Ganache CLI**

```sh
npx ganache-cli --port 7545
```

### 4. Deploy Smart Contracts

```sh
npx truffle migrate --reset
```

### 5. Configure MetaMask

- Add a new network:
  - **Network Name:** Ganache
  - **RPC URL:** http://127.0.0.1:7545
  - **Chain ID:** 1337 (or 5777)
- Import a Ganache account using its private key.

### 6. Start the React App

```sh
npm start
```

- Open [http://localhost:3000](http://localhost:3000) in Chrome (with MetaMask).

---

## 🧑‍💻 Usage

- **Add Electricity:** Enter a name and price, then click "Add." Approve the transaction in MetaMask.
- **Buy Electricity:** Click "Buy" next to an item. Approve the transaction in MetaMask.
- All actions are simulated on your local blockchain (no real ETH required).

---

## 📚 How Each Component Works

- **MetaMask:** Manages your Ethereum accounts and signs transactions.
- **Ganache:** Simulates the Ethereum blockchain for local development.
- **Truffle:** Compiles and deploys smart contracts.
- **Smart Contract:** Handles the marketplace logic and stores data on the blockchain.
- **React App:** Provides the user interface and interacts with the smart contract via Web3.js.

---

## 🧪 Running Tests

To run smart contract tests:

```sh
npx truffle test
```

---

## 📝 License

MIT

---

## 🙋‍♂️ Questions?

If you have any questions or want to learn more about how this project works, feel free to open an issue or reach out!
