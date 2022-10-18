/* eslint-disable no-self-compare */
/* eslint-disable no-redeclare */
/* eslint-disable no-loop-func */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { web3 } from '../../Web3/NodeProvider'
import './TableTransactions/TableTxns.css'
import bigGasLimitTransactionFormatter from '../../Web3/bigGasLimitTransactionFormatter';




web3.extend({
  methods: [{
    name: 'getBigGasLimitTransaction',
    call: 'eth_getTransactionByHash',
    params: 1,
    inputFormatter: [null],
    outputFormatter: bigGasLimitTransactionFormatter
  }]
});

const Transactions = () => {

  const [txnsTen, setTxns] = useState([]);
  const { getAddress } = useParams();


  const latestTransactions = async () => {
    const latestBlockNumber = await web3.eth.getBlockNumber();

    const getTxnsData = []
    for (var i = 0; i < 50000; i++) {
      const block = await web3.eth.getBlock(latestBlockNumber - i);

      const txnAccount = await web3.eth.getBlockTransactionCount(block.hash)

      const txnsData = async () => {
        for (var i = 0; i < txnAccount; i++) {

          const txns = await web3.getBigGasLimitTransaction(block.transactions[i]);

          const value = Intl.NumberFormat('es-MX').format(web3.utils.fromWei(txns.value, 'ether'))
          const txnFee = txns.gas * txns.gasPrice

          const valueTxnFee = Intl.NumberFormat('es-MX').format(web3.utils.fromWei(txnFee.toString(), 'ether'))


          const sumData = txns.blockNumber * 5

          const datatxns = {
            id: sumData,
            number: txns.blockNumber,
            hash: txns.hash,
            from: txns.from,
            to: txns.to,
            value: value,
            txnFee: valueTxnFee
          };

          const from = datatxns.from;
          const to = datatxns.to;

          //getTxnsData.push(datatxns);
          //setTxns(getTxnsData)


          for (var i = 0; i <= 1000; i++) {
            if (from === getAddress) {
              getTxnsData.push(datatxns);

              let result = getTxnsData.filter((item, index) => {
                return getTxnsData.indexOf(item) === index;
              });


              setTxns(result);
            } else if (to === getAddress) {
              getTxnsData.push(datatxns);

              let result = getTxnsData.filter((item, index) => {
                return getTxnsData.indexOf(item) === index;
              });


              setTxns(result);
            }
          }
        }
      }

      txnsData()

    }






  }

  useEffect(() => {
    //setInterval(() => {
    latestTransactions();
    //}, 1000);

  }, []);




  //console.log(txnsTen);




  return (
    <div>
      <React.StrictMode>
        <table className='table-data table'>
          <thead className='tx-thead-table'>
            <tr className='tr-Table'>
              <th className='th-Table'>Txns Hash</th>
              <th className='th-Table2'>Method</th>
              <th className='th-Table3'>Block</th>
              <th className='th-Table4'>From</th>
              <th className='th-Table5'>To</th>
              <th className='th-Table6'>Value</th>
              <th className='th-Table7'>Txn Fee</th>
            </tr>
          </thead>
          {txnsTen.map(data => (
            <>

              <tbody>
                <tr key={data.id} className='tr-Table2'>
                  <td className='td-Table'>{<a className='a-blocks1' href={`/tx/${data.hash}`}>{data.hash}</a>}</td>
                  <td className='td-Table2'>{data.method}</td>
                  <td className='td-Table3'>{<a className='a-blocks1' href={`/block/${data.number}`}>{data.number}</a>}</td>
                  <td className='td-Table4'>{<a className='a-blocks1' href={`/address/${data.from}`}>{data.from}</a>}</td>
                  <td className='td-Table-to'><p className="table-txn"><a className='a-blocks1' href={`/address/${data.to}`}>{data.to}</a></p></td>
                  <td className='td-Table6'>{data.value} POL</td>
                  <td className='td-Table7'>{data.txnFee}</td>
                </tr>
              </tbody>

            </>
          ))}
        </table>
      </React.StrictMode>
    </div>
  )
}

export default Transactions