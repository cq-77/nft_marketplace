import { useWeb3React } from '@web3-react/core';
import { useState, useEffect } from 'react';
import ReactTooltip from "react-tooltip";
import { IconContext } from 'react-icons';
import { BsBookmarkStar, BsTagFill } from 'react-icons/bs';
import { GrFavorite } from 'react-icons/gr';
import Web3 from 'web3';
import { injected } from './connectors';
import { useMoralis } from "react-moralis";
import NftCollections from './NftCollections';

const Profile = () => {

    const { active, account, activate } = useWeb3React();
    const { isInitialized, Moralis } = useMoralis();
    const [Nfts, setNfts] = useState([]);
   
    const copy = async () => {
        await navigator.clipboard.writeText(account);
    }

    async function connect() {
        try{
            await activate(injected)
            await window.ethereum.request({
              method: "eth_requestAccounts",
            });
        }
        catch(ex){
            console.log(ex);
        }
    }

    function makeGatewayURL(ipfsURI) {
        return ipfsURI.replace(/^ipfs:\/\//, "https://dweb.link/ipfs/");
    }

    async function fetchIPFSJSON(ipfsURI) {
        const url = makeGatewayURL(ipfsURI);
        const resp = await fetch(url);
        return resp.json();
    }

    Moralis.initialize("z3GKCJm0vzMtbTJGxq1c0j9YFoqxkeLtfR8uQ5Nk")
    Moralis.serverURL = "https://1xmnt9o4gskm.usemoralis.com:2053/server"

    useEffect(async () => {
        const web3 = new Web3(window.ethereum)
        const accounts = await web3.eth.getAccounts()
        const chain = await web3.eth.net.getNetworkType()

        const options = { chain: chain, address: accounts }

        if (isInitialized) {
          const nfts = await Moralis.Web3API.account.getNFTs(options);
          console.log(nfts.result)
          setNfts(nfts.result)

        }
    }, [isInitialized, Moralis]);
    
      if (!isInitialized) {
        return null;
      }

    return (
        <div>
            <div className="profile-banner">
                <div className="profile-holder">
                    <button className="address-holder" onClick={copy} data-tip data-for="copytext"> 
                        <i className="fab fa-ethereum" style={{ color: "gray", fontSize: "18px", marginTop: "10px" }}>
                            {active ? <label style={{ marginLeft: "10px", cursor: "pointer"}}>{account.substring(0,6) + "..." +account.slice(account.length - 4)}</label> : null} 
                        </i>     
                    </button>
                    <ReactTooltip id="copytext" place="top" effect="solid">
                        Copy
                    </ReactTooltip>
                </div>
            </div>
            <ul class="nav nav-pills mb-3 shadow-sm" id="pills-tab" role="tablist">
                <li class="nav-item"><a class="nav-link active" id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true">Collected <IconContext.Provider value={{ className: "bookmark" }}><BsBookmarkStar /></IconContext.Provider></a></li>
                <li class="nav-item"> <a class="nav-link" id="pills-profile-tab" data-toggle="pill" href="#pills-profile" role="tab" aria-controls="pills-profile" aria-selected="false">Favourited <IconContext.Provider value={{ className: "bookmark" }}><GrFavorite /></IconContext.Provider></a> </li>
                <li class="nav-item"> <a class="nav-link" id="pills-contact-tab" data-toggle="pill" href="#pills-contact" role="tab" aria-controls="pills-contact" aria-selected="false">Listings <IconContext.Provider value={{ className: "bookmark" }}><BsTagFill /></IconContext.Provider></a> </li>
            </ul>
            <div class="tab-content" id="pills-tabContent p-3">
                {/* 1st card */}
                <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab"> 
                    <NftCollections nfts={Nfts}/>
                </div> 
                {/* 2nd card */}
                <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                    
                </div> 
                {/* 3nd card */}
                <div class="tab-pane fade third" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">
                    
                </div>
            </div>
        </div>
    )
}
export default Profile