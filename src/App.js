import React, { useState } from 'react';
import './App.css';
import Home from './pages/Home';
import Header from './components/Header';
import Explore from './pages/Explore';
import Collectors from './pages/Collectors';
import Minter from './Minter';
import {HashRouter as Router,Route,Routes} from 'react-router-dom';
// import Web3 from 'web3/dist/web3.min';
import Web3 from 'web3';
import { Web3ReactProvider } from '@web3-react/core';
import NFTViewer from './NFTViewer';
import GigListing from './pages/Gig-Listing';
import GigDetails from './pages/Gig-Details';
import Profile from './Profile';
import SellNFT from './SellNFT';

// import Nft from '../src/abis/Nft.json';

// import {pinJSONToIPFS} from './pinata.js';

// require('dotenv').config();
// const REACT_ALCHEMY_KEY = process.env.REACT_ALCHEMY_KEY;
// const { createAlchemyWeb3 } = require("@alch/alchemy-web3");
// const web3 = createAlchemyWeb3(REACT_ALCHEMY_KEY);

// const contractABI = require("../src/abis/NFT.json");
// const contractAddress = "0x73922D78C4e035e6b19644d52C557083314c956b" ;

// export const mintNFT = async (url, name, description) => {
//   if (url.trim() === "" || (name.trim() === "" || description.trim() === "")) { 
//     return {
//      success: false,
//      status: "❗Please make sure all fields are completed before minting.",
//     }
//    }

//   const metadata = new Object();
//   metadata.name = name;
//   metadata.image = url;
//   metadata.description = description;

//   //make pinata call
//   const pinataResponse = await pinJSONToIPFS(metadata);
//   if (!pinataResponse.success) {
//       return {
//           success: false,
//           status: "😢 Something went wrong while uploading your tokenURI.",
//       }
//   } 
//   const tokenURI = pinataResponse.pinataUrl;
//   window.contract = await new web3.eth.Contract(contractABI, contractAddress);
  
//   //set up your Ethereum transaction
//  const transactionParameters = {
//   to: contractAddress, // Required except during contract publications.
//   from: window.ethereum.selectedAddress, // must match user's active address.
//   'data': window.contract.methods.mintNFT(window.ethereum.selectedAddress, tokenURI).encodeABI()//make call to NFT smart contract 
// };

// //sign the transaction via Metamask
// try {
// const txHash = await window.ethereum
//   .request({
//       method: 'eth_sendTransaction',
//       params: [transactionParameters],
//   });
// return {
//   success: true,
//   status: "✅ Check out your transaction on Etherscan: https://ropsten.etherscan.io/tx/" + txHash
// }
// } catch (error) {
// return {
//   success: false,
//   status: "😥 Something went wrong: " + error.message
// }

// }
// }

function getLibrary(provider){
  return new Web3(provider);
}

function App() {
  const [isConnected, setIsConnected] = useState(false);
  const [currentAccount, setCurrentAccount] = useState(null);

  const onLogin = async (provider) => {
    // const web3 = new Web3(provider);
    const web3 = new Web3(provider);
    const accounts = await web3.eth.getAccounts();
    if(accounts.length === 0) {
      console.log("Please connect to MetaMask!")
    }
    else if (accounts[0] !== currentAccount) {
      setCurrentAccount(accounts[0]);
      setIsConnected(true);
    }
  };

  const onLogout = () => {
    setIsConnected(false);
  };

  return (
    <div>
      <Router>
        <Web3ReactProvider getLibrary={getLibrary}>
            <Header onLogin={onLogin} onLogout={onLogout} />
              <Routes>
                <Route exact path='/' element={<Home/>} />
                <Route path='/Explore' element={<Explore/>} />
                <Route path='/Collectors' element={<Collectors/>} />
                <Route path='/Minter' element={<Minter /> } />
                <Route path='/NFTViewer' element={<NFTViewer />} />
                <Route path='/GigListing' element={<GigListing />} />
                <Route path='/GigDetails' element={<GigDetails />} />
                <Route path='/Profile' element={<Profile />} />
                <Route path='/SellNFT' element={<SellNFT />} />
              </Routes>
        </Web3ReactProvider>
      </Router>
    </div>
  )
}
export default App;
