import React from 'react'
import '../LatestTransactions/LatestTxns.css'

const tabletxTransactions = ({ hash, from, to, value }) => {
  return (
    <div className="container-tabletx4">
      <div className="container-tabletx6">
        <div className="container-tabletx-block"><h1 className="block-h1">Tx</h1></div>
        <div className="container-tabletx-time">
          <div className="container-tabletx-block1" ><p className="hashblock">{hash}</p></div>
        </div>

      </div>
      <div className="container-txns">
        <div className="container-tabletx5">
          <div className="container-tabletx7">
            <div className="container-tabletx-miner">From </div>
            <div className="container-tabletx-miner2">{from}</div>
          </div>
          <div className="container-table-to">
            <div className="container-tabletx-block2">To</div>
            <div className="container-tabletx-block3" >{to}</div>
          </div>
        </div>
        <div className="container-value">
          <div className="container-tabletx-block2">
            <span className="container-badge u-label u-label--xs u-label--badge-in u-label--secondary text-center text-nowrap" data-toggle="tooltip" title="" data-original-title="Amount" >{value} POL</span>
          </div>
        </div>
      </div>

    </div>
  )
}

export default tabletxTransactions