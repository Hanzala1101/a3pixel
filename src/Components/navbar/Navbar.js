import React, { Component } from 'react'
import './Navbar.css';
export default class Navbar extends Component {
    render() {
        return (
            <>
                <header id="header" className="header d-flex align-items-center fixed-top">
                    <div className="container-fluid container-xl d-flex align-items-center justify-content-center">
                        <nav id="navbar" className="navbar">
                            <ul>
                                <li><a href="#hero">Home</a></li>
                                <li><a href="#about">About</a></li>
                                <li><a href="#services">Services</a></li>
                                <a href="index.html" className="logo d-flex align-items-center">
                                    {/* <!-- Uncomment the line below if you also wish to use an image logo --> */}
                                    <img src="img/logo.png" alt="" />
                                </a>
                                <li><a href="#portfolio">Portfolio</a></li>
                                <li><a href="#team">Team</a></li>
                                <li><a href="#contact">Contact</a></li>
                            </ul>
                        </nav>
                        {/* <!-- .navbar --> */}
                        <i className="mobile-nav-toggle mobile-nav-show bi bi-list"></i>
                        <i className="mobile-nav-toggle mobile-nav-hide d-none bi bi-x"></i>
                    </div>
                </header>
                {/* <!-- End Header --> */}
            </>
        )
    }
}
