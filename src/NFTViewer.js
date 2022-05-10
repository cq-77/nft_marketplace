import { Card, InputNumber, Space } from "antd";
import { LoadingOutlined } from '@ant-design/icons';
import React, { useState } from "react";
import Web3 from 'web3';
import Nft from '../src/abis/Nft.json';
import '@google/model-viewer';
import 'antd/lib/input-number/style/css';
import {Link} from 'react-router-dom';
  
    // rewrite ipfs:// uris to dweb.link gateway URLs
    function makeGatewayURL(ipfsURI) {
        return ipfsURI.replace(/^ipfs:\/\//, "https://dweb.link/ipfs/");
      }
      
      async function fetchIPFSJSON(ipfsURI) {
        const url = makeGatewayURL(ipfsURI);
        const resp = await fetch(url);
        return resp.json();
      }
      
      async function getNFT({tokenId}) {

        const web3 = new Web3(window.ethereum)
        const accounts = await web3.eth.getAccounts()
        const networkId = await web3.eth.net.getId()
        console.log(networkId)
        const networkData = Nft.networks[networkId]
        console.log(networkData)

        if(networkData){
            const abi = Nft.abi;
            const address = networkData.address;
            console.log(address)
            const contract = new web3.eth.Contract(abi, address)
            console.log(contract)
            
            const metadataURI = await contract.methods.tokenURI(tokenId).call();
            console.log('metadata uri: ', metadataURI);
            
            const metadata = await fetchIPFSJSON(metadataURI);
            console.log('metadata: ', metadata)
        
            if (metadata.image) {
            metadata.image = makeGatewayURL(metadata.image);
            }
            
            return metadata;
        }
        else {
          alert("The chosen network is not supported! Please switch to other Ethereum networks.")
        }
      }
      
      function NFTCard ({
        nftData,
      }){
        return (
          <Card>
            <div className="nft-image">
                {nftData.image.endsWith('.jpg') || nftData.image.endsWith('.png') || nftData.image.endsWith('.gif') || nftData.image.endsWith('.svg') 
                ? <img src={nftData.image} style={{maxWidth: "800px"}} /> 
                : nftData.image.endsWith('.mp4') || nftData.image.endsWith('.webm')  
                ? <video width="100%" controls><source src={nftData.image}/></video> 
                : nftData.image.endsWith('.mp3') ||nftData.image.endsWith( '.wav')  || nftData.image.endsWith('.ogg')
                ? <audio controls className="viewerAudio" src={nftData.image}></audio> 
                : nftData.image.endsWith('.glb')  || nftData.image.endsWith('.gltf')
                ? <model-viewer loading="eager" camera-controls auto-rotate src={nftData.image}></model-viewer> 
                : null }
            </div> 
            &nbsp;
            <div>
            <h6>Name: </h6>{nftData.name}
            </div>
            <div className="nft-description">
            <h6>Description: </h6>{nftData.description}
            </div>
            &nbsp;
          </Card>
        );
      }
      
export default function NFTViewer ({provider}) {

    const [contract, setContract] = useState(null);

    const web3 = new Web3(window.ethereum)
    const networkId = web3.eth.net.getId()
    const networkData = Nft.networks[networkId]
    if(networkData) {
        const abi = Nft.abi;
        const address = networkData.address;
        const contract = new web3.eth.Contract(abi, address)
        console.log(contract)
        setContract(contract);
    }

  const [selectedToken, setSelectedToken] = useState(null);
  const [nftData, setNFTData] = useState(null);
  const [loading, setLoading] = useState(selectedToken && !nftData);
  const [errorMessage, setErrorMessage] = useState(null);

  let tokenView = "";
  if (nftData) {
    tokenView = NFTCard({ contract, provider, tokenId: selectedToken, nftData });
  }

  let errorView = "";
  if (errorMessage) {
    errorView = 
    <div className="errorView">
      <span style={{color: "red", fontSize: '15px', width: '100%'}}>Query for non-existent token! Please mint your assets.</span>
      <br/>
      <Link to="/Minter" className='errorLink'>Mint your NFT here.</Link>
    </div>;
  }

  const tokenIdChanged = newTokenId => {
    if (!newTokenId) {
      return;
    }
    setSelectedToken(newTokenId);
    setLoading(true);
    getNFT({ contract, provider, tokenId: newTokenId }).then(nft => {
      setNFTData(nft);
      setLoading(false);
      setErrorMessage("");
    }).catch(e => {
      console.log('error getting token: ', e);
      setLoading(false);
      setErrorMessage(e.message);
      setNFTData(null);
    })
  }

  return (
    <div className="viewer">
        <div className="viewer-title">
            View your NFT
        </div>
        <div className="viewer-container">
          <div className="viewer-token">
            <h3 className="input-title">Enter your Token ID:</h3>
            <div className="inputNumber">
                <InputNumber value={selectedToken} onChange={tokenIdChanged} min={0} />
            </div>
            <br/>
            {loading && <LoadingOutlined/>}
            <br/>
            {tokenView}
            {errorView}
        </div>
      </div>
    </div>
  );
}