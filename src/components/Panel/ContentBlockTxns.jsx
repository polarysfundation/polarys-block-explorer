import React from 'react'
import Block from '../LatestBlocks/Block'
import LatestTxns from '../LatestTransactions/LatestTxns'
import './Contentcbt.css'



function ContentBlockTxns() {
    return (
        <div>
            <div className="container-cbt">
                <div className="container-cbt1">
                    <div className="container-cbt2">
                        <Block />
                    </div>

                    <div className="container-cbt3">
                        <LatestTxns />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContentBlockTxns