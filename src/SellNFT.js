import React, { useState, useEffect } from 'react';
import { IconContext } from 'react-icons';
import { FaDollarSign } from 'react-icons/fa';
import { MdOutlineTimelapse } from 'react-icons/md';
import { GrFormAdd } from 'react-icons/gr';
import { RiDeleteBin6Line } from 'react-icons/ri';
import Select from 'react-select';
import {useLocation} from 'react-router-dom';

const SellNFT = ({ nftMetadata }) => {

    const [isActive, setActive] = useState(false);
    const [showContent, setShowContent] = useState(false);
    const [showRoyalty, setShowRoyalty] = useState(false);
    const [addInput, setAddInput] = useState([]);
    // const [addInput, setAddInput] = useState([0,0,0,0,0,0,0,0,0,0]);
    const [inputWallet, setInputWallet] = useState(null);
    const [percentage, setPercentage] = useState([]);

    const toggleClass = () => {
      setActive(!isActive);
      setShowContent(!showContent)
    };

    const toggleRoyalties = (e) => {
        setShowRoyalty(!showRoyalty)
    }

    const addInputField = (e) => {
        const add = addInput
        const size = add.length + 1
        add.push(size)
        setAddInput([...add])
        percentage.push(0)
        e.preventDefault();
    }

    const options = [
        { value: 10, label: '10%' },
        { value: 20, label: '20%' },
        { value: 30, label: '30%' },
        { value: 40, label: '40%' },
        { value: 50, label: '50%' },
        { value: 60, label: '60%' },
        { value: 70, label: '70%' },
        { value: 80, label: '80%' },
        { value: 90, label: '90%' },
        { value: 100, label: '100%' },
    ]

    const customStyles = {
        control: base => ({
          ...base,
          height: 50,
          width: 100,
        })
    };

    const handleChange = (onChangeEvent, walletIndex) => {
        const value = percentage.map((item, index) => (
            index === walletIndex ? onChangeEvent.value : item
        ))
        setPercentage([...value])
        console.log(value)
    }

    const removeWallet = (onClickEvent, selectedIndex) => {
        addInput.map((item, index) => (
            index === selectedIndex ? addInput.splice(selectedIndex, 1) && percentage.splice(selectedIndex, 1)  : item
        ))
        setAddInput([...addInput])
        setPercentage([...percentage])
    }

    // const addChildInputField = (e) => {
    //     const addchild = addChild
    //     const childSize = addchild.length + 1
    //     addchild.push(childSize)
    //     setAddChild(addchild)
    //     e.preventDefault();
    // }

    // const obj = JSON.parse(nftMetadata.metadata);
    // console.log(obj)

    console.log(nftMetadata)

    let location = useLocation();
    console.log(location)

    // rewrite ipfs:// uris to dweb.link gateway URLs
    function makeGatewayURL(ipfsURI) {
        return ipfsURI.replace(/^ipfs:\/\//, "https://dweb.link/ipfs/");
    }

    return (
        <div>
            <form>
                <div className='split-container'>
                    <div className='left-container'>
                        <div className='item-details'>
                            <h2 style={{fontWeight: "650"}}>List item for sale</h2>
                            <br/>
                            <h3 style={{color: "rgb(78, 77, 77)"}}>Type</h3>
                            <div className='sell-type-container'>
                                <div className={isActive ? 'fixed-price' : 'fixed-price-active'} onClick={toggleClass}>
                                    <IconContext.Provider value={{className: 'dollar-sign'}}><FaDollarSign /></IconContext.Provider>
                                    Fixed Price
                                </div>
                                <div className={!isActive ? 'auction' : 'auction-active'} onClick={toggleClass}>
                                    <IconContext.Provider value={{className: 'timer-sign'}}><MdOutlineTimelapse /></IconContext.Provider>
                                    Timed Auction
                                </div>
                            </div>
                            <div className='sell-type-content'> 
                                {/* <div style={{backgroundColor: 'blue'}}> */}
                                    {!showContent 
                                        ? 
                                        (
                                            <div className='price-content'>
                                                <br/><br/>
                                                <h3 style={{color: "rgb(78, 77, 77)"}}>Price</h3>
                                                <div className='price-container'>
                                                    <label className='price-label'><i className="fab fa-ethereum" style={{ fontSize: "24px", marginLeft: "20px", marginRight: "20px" }}/> ETH</label>
                                                    <input className='price-input' type="text" placeholder='Amount'></input>
                                                </div>
                                                <br/><br/>
                                                <div className='royalties'>
                                                    <h3 style={{color: "rgb(78, 77, 77)"}}>Royalties</h3>
                                                    <label class="switch">
                                                        <input type="checkbox" className='toggle-switch' onClick={toggleRoyalties} />
                                                        <span class="slider round"></span>
                                                    </label>
                                                </div>
                                                {showRoyalty 
                                                    ?
                                                    (
                                                        <div className='add-wallet'>
                                                            <br/>
                                                            <p style={{fontFamily:"Arial Black"}}>No maximum wallets : </p>
                                                            <div className='wallet-input-container'>
                                                                {addInput/*.slice(0,10)*/.map((i, index) => {
                                                                    return (                                                                     
                                                                        <div key={i} className="input-array">
                                                                            <p style={{color: "black", fontWeight: "500", width: "10px"}}>{index + 1}.</p>
                                                                            <input type="text" className='wallet-input' placeholder='Your wallet address ...' onChange={e => {setInputWallet(e.target.value)}} />
                                                                             <Select options={options} placeholder="%" className="drop" styles={customStyles} onChange={(e) => handleChange(e, index)} />
                                                                            <button className='removewallet-btn' onClick={(e) => removeWallet(e, index)}><IconContext.Provider value={{className: 'removewallet-sign'}}><RiDeleteBin6Line /></IconContext.Provider></button>
                                                                        </div>
                                                                    )
                                                                })}
                                                            </div>
                                                            <div className='button-percentage'>
                                                                <button className='addwallet-btn' onClick={addInputField} disabled={percentage.reduce((a,b) => a+b,0) >= 100}>
                                                                <IconContext.Provider value={{className: 'addwallet-sign'}}><GrFormAdd />ADD</IconContext.Provider>  
                                                                </button>
                                                                {percentage.reduce((a,b) => a+b,0) > 100 ? <p className='percentage-error'>Total percentage cannot exceed 100%</p> 
                                                                : percentage.reduce((a,b) => a+b,0) == 100 ? <p className='percentage-full'>{percentage.reduce((a,b) => a+b,0)}%/100%</p> 
                                                                : <p className='percentage-display'>{percentage.reduce((a,b) => a+b,0)}%/100%</p> }
                                                            </div>
                                                        </div>
                                                    ) 
                                                    :
                                                    null 
                                                }
                                            </div>
                                        )
                                        : 
                                        (
                                            <div className='auction-content'>
                                                
                                            </div>
                                        )
                                    }
                                    <button className='complete-listing' disabled={percentage.reduce((a,b) => a+b,0) > 100} >Complete Listing</button>
                                {/* </div> */}
                            </div>
                        </div>
                    </div>
                    <div className='right-container'>
                        <div className='preview-item'>
                            <h3>Preview</h3>
                       
                       
                        

                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}
export default SellNFT