import { web3 } from "../components/Web3/NodeProvider";


export const latestTransactions = async () => {
    const latestBlockNumber = await web3.eth.getBlockNumber();
    const getTxnsData = []
    for (var l = 0; l < latestBlockNumber; l++) {
    const block = await web3.eth.getBlock(latestBlockNumber - l);

    const txnAccount = await web3.eth.getBlockTransactionCount(block.hash)

    for (var i = 0; i < txnAccount; i++) {

        const txns = await web3.eth.getTransaction(block.transactions[i]);

        const datatxns = {
          key: txns.hash,
          hash: txns.hash,
          from: txns.from,
          to: txns.to,
          value: web3.utils.fromWei(txns.value, 'ether'),
          number: txns.blockNumber
        }

        getTxnsData.push(datatxns);

        console.log(JSON.stringify(getTxnsData))

        return getTxnsData
        
      }

    }



  }