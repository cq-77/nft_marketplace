import React from 'react';
import {Link} from 'react-router-dom';
import { useState, useEffect} from 'react';
import { injected } from '../connectors';
import { useWeb3React } from '@web3-react/core';
import { Dropdown, DropdownMenu, DropdownItem } from "reactstrap";
import { CgProfile } from 'react-icons/cg';
import { IconContext } from 'react-icons';
import { FiHeart, FiSettings, FiSearch } from 'react-icons/fi';

const Header = (props) => {

    const { active, account, activate, deactivate } = useWeb3React();
    const [isConnecting, setIsConnecting] = useState(false);
    const [dropdownOpen1, setDropdownOpen1] = useState(false);

    useEffect(() => {
        injected
          .isAuthorized()
          .then((isAuthorized) => {
            if (isAuthorized && !active) {
                // activate(injected)
                connect()
            }
          })
      }, [])

    async function connect() {
        try{
            await activate(injected)
        }
        catch(ex){
            console.log(ex);
        }
    }

    async function disconnect() {
        try{
            deactivate();
        }
        catch(ex) {
            console.log(ex);
        }
    }

    const detectProvider = () => {
        let provider;
        if (window.ethereum) {
            provider = window.ethereum;
        }
        else if (window.web3) {
            provider = window.web3.currentProvider;
        }
        else {
            window.alert("No Ethereum browser detected! Check out MetaMask.");
        }
            return provider;
    };
    
    const onLoginHandler = async () => {
        const provider = detectProvider();

        if (provider) {
            if(provider !== window.ethereum) {
                 console.error("Not window.ethereum provider. Do you have multiple wallets installed ?");
            }
            setIsConnecting(true);
            await provider.request({
                method: "eth_requestAccounts",
            });
            setIsConnecting(false);
            props.onLogin(provider);
        } 
    };
    
       const toggle1 = () => {
        setDropdownOpen1(prevState => (
          !prevState
        ));
      }

      const onMouseEnter = () => {
        setDropdownOpen1( true );
      }
    
      const onMouseLeave = () => {
        setDropdownOpen1( false );
      }

        return(
            <div>
                <header>
                    <Link to="/" id="logo"></Link>
                    <input className="search-bar" placeholder="Search items, collections, creators"/>
                    {/* <a href=""><div class="login-btn">Connect</div></a> */}
                    <div onClick={onLoginHandler && connect} className="login-btn" type="button">
                         {active ? <span onClick={disconnect}>Disconnect</span> : !isConnecting && "Connect"}
                    </div>
                    <Dropdown
                        className="d-inline-block"
                        onMouseOver={onMouseEnter}
                        onMouseLeave={onMouseLeave}
                        isOpen={dropdownOpen1}
                        toggle={toggle1}
                        style={{ position: 'relative', float: 'right' }}
                        >
                        {active ? <div className="accountNumber"><span>{account}</span></div> : null}
                        <DropdownMenu style={{ marginTop: '60px' }} className="dropdownMenu">
                            {/* <DropdownItem header>Submenu 1</DropdownItem> */}
                            <DropdownItem className="item-links" tag={Link} to="/Profile"><IconContext.Provider value={{ color: 'black', size: '20px', float: 'left', style:{marginRight: '5px', marginBottom: '2px'} }}><CgProfile /></IconContext.Provider>Profile</DropdownItem>
                            <DropdownItem className="item-links"><IconContext.Provider value={{ color: 'black', size: '20px', float: 'left', style:{marginRight: '5px', marginBottom: '2px'} }}><FiHeart /></IconContext.Provider>Favourites</DropdownItem>
                            <DropdownItem className="item-links"><IconContext.Provider value={{ color: 'black', size: '20px', float: 'left', style:{marginRight: '5px', marginBottom: '2px'} }}><FiSettings /></IconContext.Provider>Settings</DropdownItem>
                            <DropdownItem className="item-links" tag={Link} to="/NFTViewer"><IconContext.Provider value={{ color: 'black', size: '20px', float: 'left', style:{marginRight: '5px', marginBottom: '2px'} }}><FiSearch /></IconContext.Provider>View NFT</DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                    
                    <ul id="menu">
                    <li><Link to="/Explore">Explore</Link></li>
                    <li><Link to="/Collectors">Collectors</Link></li>
                    <li><Link to="/GigListing">Metaverse Gigs</Link></li> 
                    </ul>

                    <nav> 
                    <a href="" id="menuToggle" title="show menu"><span className="navClosed"></span></a>
                    <a className="search-m-link"><input className="search-m" placeholder="Search items, collections..."/></a>              
                    <div onClick={ onLoginHandler && connect } className="login-btn" type="button">
                        {/* {active ? <span>{account}</span> : !isConnecting && "Connect"} */}
                         {active ? <span onClick={disconnect}>Disconnect</span> : !isConnecting && "Connect"}
                    </div>
                    <Dropdown
                        className="d-inline-block"
                        onMouseOver={onMouseEnter}
                        onMouseLeave={onMouseLeave}
                        isOpen={dropdownOpen1}
                        toggle={toggle1}
                        style={{ position: 'relative', float: 'right' }}
                        >
                        {active ? <div className="accountNumber"><span>{account}</span></div> : null}
                        <DropdownMenu style={{ marginTop: '70px' }} className="dropdownMenu">
                            {/* <DropdownItem header>Submenu 1</DropdownItem> */}
                            <DropdownItem className="item-links"><IconContext.Provider value={{ color: 'black', size: '20px', float: 'left', style:{marginRight: '5px', marginBottom: '2px'} }}><CgProfile /></IconContext.Provider>Profile</DropdownItem>
                            <DropdownItem className="item-links"><IconContext.Provider value={{ color: 'black', size: '20px', float: 'left', style:{marginRight: '5px', marginBottom: '2px'} }}><FiHeart /></IconContext.Provider>Favourites</DropdownItem>
                            <DropdownItem className="item-links"><IconContext.Provider value={{ color: 'black', size: '20px', float: 'left', style:{marginRight: '5px', marginBottom: '2px'} }}><FiSettings /></IconContext.Provider>Settings</DropdownItem>
                            <DropdownItem className="item-links" tag={Link} to="/NFTViewer"><IconContext.Provider value={{ color: 'black', size: '20px', float: 'left', style:{marginRight: '5px', marginBottom: '2px'} }}><FiSearch /></IconContext.Provider>View NFT</DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                    <Link to="/Explore">Explore</Link>
                    <Link to="/Collectors">Collectors</Link>
                    <Link to="/GigListing">Metaverse Gigs</Link>
                    </nav>
                </header>
            </div>
        )
}
export default Header