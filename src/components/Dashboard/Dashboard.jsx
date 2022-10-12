import React from 'react'
import './Dashboard.css'
import TotalTransactions from './Transactions/TotalTransactions'
import Price from './Price/Price'
import Marketcap from './MarketCap/Marketcap'
import LatestBlock from './LatestBlock/LatestBlock'



const Dashboard = () => {
    return (
        <div className="container-dash">
            <div className="container-dash1">
                <div className="container-dash2">
                    <div className="container-dash3">
                        <div className="container-price">
                            <Price/>
                            <hr className='h-hr' />
                            <Marketcap/>
                        </div>
                            <hr className='v-hr'/>
                        <div className="container-transactions-count">
                            <TotalTransactions />
                            <hr className='h-hr' />
                            <LatestBlock />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard