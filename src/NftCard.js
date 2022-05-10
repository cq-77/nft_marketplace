import React, { useState } from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { BsTagFill } from 'react-icons/bs';
import { IconContext } from 'react-icons';
import {Link} from 'react-router-dom';
import SellNFT from './SellNFT';

const NftCard = ({ nft }) => {

    const [anchorEl, setAnchorEl] = useState(null);
     
    const obj = JSON.parse(nft.metadata);
    console.log(obj)

    // rewrite ipfs:// uris to dweb.link gateway URLs
    function makeGatewayURL(ipfsURI) {
        return ipfsURI.replace(/^ipfs:\/\//, "https://dweb.link/ipfs/");
    }

    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
      console.log(event)
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
   
    return (
        <div className='card nft-card'>
            <div className='nft-card-image'>
                 {obj.image.endsWith('.jpg') || obj.image.endsWith('.png') || obj.image.endsWith('.gif') || obj.image.endsWith('.svg') 
                    ? <img src={makeGatewayURL(obj.image)} /> 
                    : obj.image.endsWith('.mp4') || obj.image.endsWith('.webm')  
                    ? <video width="100%" controls><source src={makeGatewayURL(obj.image)}/></video> 
                    : obj.image.endsWith('.mp3') ||obj.image.endsWith( '.wav')  || obj.image.endsWith('.ogg')
                    ? <audio controls className="viewerAudio" src={makeGatewayURL(obj.image)}></audio> 
                    : obj.image.endsWith('.glb')  || obj.image.endsWith('.gltf')
                    ? <model-viewer loading="eager" camera-controls auto-rotate src={makeGatewayURL(obj.image)}></model-viewer> 
                    : null }    
            </div>
            <br/>   
            <h6>{obj.name != null ? obj.name : null}</h6>
            <hr/>
            <div className='option-btn' onClick={handleClick}/>
            <Menu
                anchorEl={anchorEl}
                id="account-menu"
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                PaperProps={{
                elevation: 0,
                sx: {
                    overflow: 'visible',
                    filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                    mt: 1.0,
                    ml: 2,
                    '& .MuiAvatar-root': {
                    width: 32,
                    height: 32,
                    ml: -0.5,
                    mr: 1,
                    },
                    '&:before': {
                    content: '""',
                    display: 'block',
                    position: 'absolute',
                    top: 0,
                    right: 10,
                    width: 10,
                    height: 10,
                    bgcolor: 'background.paper',
                    transform: 'translateY(-50%) rotate(45deg)',
                    zIndex: 0,
                    },
                },
                }}
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
            >
                <MenuItem>
                {/* <SellNFT nftMetadata={obj.image}/> */}
                <Link to="/SellNFT" className='sellNft-link'><IconContext.Provider value={{ className: "menutag" }}><BsTagFill /></IconContext.Provider> Sell</Link>
                </MenuItem>
                {/* <MenuItem>
                My account
                </MenuItem> */}
            </Menu>
        </div>
    )
}
export default NftCard