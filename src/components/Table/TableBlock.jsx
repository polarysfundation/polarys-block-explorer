import React from 'react'
import './TableBlock.css'



const TableBlock = ({ number, miner, hash, transactions, timestamp }) => {
  return (
    <div className="container-table4">
      <div className="container-table6">
        <div className="container-table-block"><h1 className="block-h1">Bk</h1></div>
        <div className="container-table-time">
          <div className="container-table-block1"><p className='p-tblock2'>{number}</p></div>
          <div className="container-table-block1"><p className='p-tblock1'>{timestamp}</p></div>
        </div>

      </div>
      <div className="container-table5">
        <div className="container-table7">
          <div className="container-table-miner">Validated by {miner}</div>
          <div className="container-table-miner"> </div>
        </div>
        <div className="container-table-block2">{transactions} txns</div>
      </div>
    </div>
  )
}

export default TableBlock