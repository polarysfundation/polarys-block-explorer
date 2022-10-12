import React from 'react'
import Logo from '../../../assets/images/Logo.png'
import './Price.css'

const Price = () => {
    return (
        <div className="container-price">
            <div className="container-price1">
                <div className="container-price2">
                    <div className="container-price3">
                        <div className="container-pricebox">
                            <img src={Logo} alt="Logo Price" className="logo-price" />
                            <div className="price-box">
                                <h1 className="price-h1">POL PRICE</h1>
                                <div className="price-chart">
                                    <h1 className="price-h1-2">NaN</h1>
                                    <h1 className="price-h1-3">@ 0.00000000 BTC</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Price