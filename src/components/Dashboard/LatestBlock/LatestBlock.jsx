import React, { useEffect, useState } from 'react'
import'./LatestBlock.css'
import Logo from '../../../assets/images/Blocks.png'
import { web3 } from '../../Web3/NodeProvider';

const LatestBlock = () => {

    const [latestBlock, setLatestBlock] = useState([]);

    const updateBlock = async () =>{

        const latestBlockNo = []
        const blockNo = await web3.eth.getBlockNumber();

        latestBlockNo.push(blockNo);

        setLatestBlock(latestBlockNo);
    };

    useEffect(() => {
        setInterval(() => {
            updateBlock();
        }, 3000);

    }, []);


  return (
    <div className="container-price">
            <div className="container-price1">
                <div className="container-price2">
                    <div className="container-price3">
                        <div className="container-pricebox">
                            <img src={Logo} alt="Logo Price" className="logo-price" />
                            <div className="price-box">
                                <h1 className="price-h1">LATEST BLOCK</h1>
                                <div className="price-chart">
                                    <h1 className="price-h1-2">{latestBlock}</h1>
                                    {/*<h1 className="price-h1-3">@ 0.00000000 BTC</h1>*/}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default LatestBlock