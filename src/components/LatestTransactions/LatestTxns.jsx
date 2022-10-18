/* eslint-disable no-loop-func */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import { web3 } from '../Web3/NodeProvider';
import TableTransactions from '../Table/TableTransactions';
import './LatestTxns.css'
import bigGasLimitTransactionFormatter from '../Web3/bigGasLimitTransactionFormatter';
//import TableTransactions2 from '../Table/TableTransactions2'




web3.extend({
  methods: [{
    name: 'getBigGasLimitTransaction',
    call: 'eth_getTransactionByHash',
    params: 1,
    inputFormatter: [null],
    outputFormatter: bigGasLimitTransactionFormatter
  }]
});

const LatestTxns = () => {

  const [txnsTen, setTxns] = useState([]);

  const latestTransactions = async () => {
    const latestBlockNumber = await web3.eth.getBlockNumber();

    const getTxnsData = [];


    for (let i = 0; i < 1000; i++) {
      
      const blockData = await web3.eth.getBlock(latestBlockNumber - i);

      const txnAccount = await web3.eth.getBlockTransactionCount(blockData.hash)

      const TxnsData = async () =>{
        
        for (let i = 0; i < txnAccount; i++) {
      

          const txns = await web3.getBigGasLimitTransaction(blockData.transactions[i]);
    
          const datatxns = {
            id: txns.blockHash,
            hash: txns.hash,
            from: txns.from,
            to: txns.to,
            value: web3.utils.fromWei(txns.value, 'ether')
          };
    
          getTxnsData.push(datatxns);
    
          setTxns(getTxnsData);
    
          
        }
      }

      TxnsData();
      
    }

    






  }

  useEffect(() => {
    //setInterval(() => {
    latestTransactions();
    //}, 1000);

  }, []);




  //const getData = localStorage.setItem("data", txnsTen)

  console.log(txnsTen)

  return (
    <div>
      <div className="container-tabletx">
        <div className="container-tabletx2">
          <div className="container-tabletx3">
            <h1 className="tabletx-h1">Latest Transactions</h1>

            <div className="container-tabletx-blockdata">
              {txnsTen && txnsTen.length > 0 &&
              txnsTen.map(data => (

                <>
                  <hr className="tabletx-hr" />
                  <TableTransactions
                    key={data.id}
                    hash={<a className='a-blocks1' href={`/txn/${data.hash}`}>{data.hash}</a>}
                    from={<a className='a-blocks1' href={`/address/${data.from}`}>{data.from}</a>}
                    to={<a className='a-blocks1' href={`/address/${data.to}`}>{data.to}</a>}
                    value={data.value}
                  />

                </>


              ))
              
              }
            </div>
            <hr className="tabletx-hr" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default LatestTxns