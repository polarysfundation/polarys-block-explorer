/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import { web3 } from '../../Web3/NodeProvider'
import Logo from '../../../assets/images/ListTX.png'

const TotalTransactions = () => {
  const [totalTxns, setTotalTxns] = useState([]);
  const [TPS, setTPS] = useState([])

  const getTxns = async () => {
    const latest = await web3.eth.getBlockNumber();
 
    const txns = []
    const block = []


    const TPSl = await web3.eth.getBlock(latest) // get latest full block
    const dataTPS = {                           // get the size for make the calc for the TPS 
      size: TPSl.size,                       
    }                                           
    block.push(dataTPS.size);  
    setTPS(block)                               

    

    // Blocks scanned = 174631
    // Update each 100k blocks
    for(var i = 0; i < latest; i++){
      const totalTransactions = await web3.eth.getBlockTransactionCount( latest - i); //SCANNED ALL BLOCKS
      txns.push(totalTransactions)
    };

    setTotalTxns(txns)

  };

  useEffect(() => {
    setInterval(() => {
      getTxns();
    }, 3000);

}, []);

const sum = totalTxns.reduce((prev, curr) => prev + curr, 0);

let totalTxnsCounter = 40 

const currentTx = totalTxnsCounter 

const CurrentTPS = TPS / currentTx / 3

setInterval(CurrentTPS, 2000)

const currentTPS = CurrentTPS.toPrecision(2)


    return (
      <div className="container-price">
          <div className="container-price1">
              <div className="container-price2">
                  <div className="container-price3">
                      <div className="container-pricebox">
                          <img src={Logo} alt="Logo Price" className="logo-price" />
                          <div className="price-box">
                              <h1 className="price-h1">TRANSACTIONS</h1>
                              <div className="price-chart">
                                  <h1 className="price-h1-2">{totalTxnsCounter}</h1>
                                  <h1 className="price-h1-3">({currentTPS} TPS)</h1>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  )
}

export default TotalTransactions