/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react'
import logo from '../../assets/images/02220.png'
import './Navbar.css'



function Navbar() {
    return (
        <div className="container-navbar">
            <div className="container-navbar2">
                <div className="container-navbar3">
                    <div className="container-navbar4">
                        <div className="container-navbar5">
                            <div className="container-navbar6">
                                <a href="/" className="link-logo">

                                    <img src={logo} alt="Logo" className="navbar-img" />

                                    <h1 className="navbar-h1">Polarys</h1>
                                </a>
                            </div>

                            <ul className="navbar-ul">
                                <li className="navbar-li"><a href="/" className="navbar-a">Home</a><span></span></li>
                                <li className="navbar-li"><a href="" className="navbar-a">Blockchain</a><span></span></li>
                                <li className="navbar-li"><a href="" className="navbar-a">Validators</a><span></span></li>
                                <li className="navbar-li"><a href="" className="navbar-a">Tokens</a><span></span></li>
                                <li className="navbar-li"><a href="" className="navbar-a">Resources</a><span></span></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar