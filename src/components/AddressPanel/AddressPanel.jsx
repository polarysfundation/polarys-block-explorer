import React from 'react'
import './AddressPanel.css'
import Transactions from './Transactions/Transactions'



const AddressPanel = ({ balance, address, transactions }) => {
    return (
        <div>
            <div className="container-address-data">
                <div className="container-address-data1">
                    <div className="container-address-data2">
                        <div className="container-address-data3">
                            <hr className="address-data-hr" />



                            <div className="container-address-data5">
                                <div className="container-address-data6">
                                    <div className="container-address-data7">
                                        <div className="container-address-data8">Overview</div>
                                        <hr className="address-data-hr" />

                                        <div className="container-address-data9">
                                            <div className="container-address-balance">Balance:</div>
                                            <div className="container-address-balance2">{balance}</div>
                                            <div className="container-address-balance2">POL</div>
                                        </div>
                                        <hr className="address-data-hr" />
                                        <div className="container-address-data9">
                                            <div className="container-address-balance">POL Value:</div>
                                            <div className="container-address-balance2">$0</div>
                                            <div className="container-address-balance3">(@$0/POL)</div>
                                        </div>

                                        <hr className="address-data-hr" />
                                        <div className="container-address-data9">
                                            <div className="container-address-balance4">Token:</div>
                                            <div className="container-address-balance2">$0</div>
                                        </div>
                                    </div>
                                </div>

                                <div className="container-moreinfo">
                                    <div className="container-moreinfo2">
                                        <div className="container-moreinfo3">
                                            <div className="container-moreinfo4">More Info</div>
                                            <hr className="address-data-hr" />


                                            <div className="container-address-data9">
                                                <div className="container-address-balance">Identify Address</div>
                                                <div className="container-address-balance2">Claim Here</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>



                            </div>

                            <div className="container-address-txns">
                                <Transactions/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddressPanel
