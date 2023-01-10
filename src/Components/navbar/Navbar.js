import React from 'react'
import { useState, useEffect } from 'react';
import './Navbar.css';

export default function Navbar() {
  const [navbacColor, setnavbacColor] = useState("transparent");
  // const [navColor, setnavColor] = useState("#444444");
  const listenScrollEvent = () => {
    window.scrollY > 10 ? setnavbacColor("#444444") : setnavbacColor("transparent");
    // window.scrollY > 10 ? setnavColor("white") : setnavColor("#444444");
  };
 
  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    return () => {
      window.removeEventListener("scroll", listenScrollEvent);
    };
  }, []);
  // const [isHover, setIsHover] = useState(false);

  // const handleMouseEnter = () => {
  //    setIsHover(true);
  // };
  // const handleMouseLeave = () => {
  //    setIsHover(false);
  // };

  // const boxStyle = {
    // justifyContent: 'center',
    // alignItems: 'center',
    // borderRadius: "50px",
    // border: isHover? "2px solid black": "none",
    // padding:"10px",
  //   color: isHover ? 'white' : '#A88600',
  // };
  return (
            <>
                <header id="header" className="header d-flex align-items-center fixed-top"  
                style={{
          backgroundColor: navbacColor,
          transition: "all 1s"
        }}
        >
                    <div className="container-fluid container-xl d-flex align-items-center justify-content-center">
                        <nav id="navbar" className="navbar"  >
                            <ul >
                                <li ><a 
                                // style={ {color:navColor}}

                                 href="#hero"
                                  // onMouseEnter={handleMouseEnter}
                                //  onMouseLeave={handleMouseLeave}
                                 >Home</a></li>
                                <li><a 
                                // style={{color:navColor}}
                                //  onMouseEnter={handleMouseEnter}
                                //  onMouseLeave={handleMouseLeave}
                                 href="#about">About</a></li>
                                <li><a 
                                // style={{color:navColor}}
                                //  onMouseEnter={handleMouseEnter}
                                //  onMouseLeave={handleMouseLeave}
                                 href="#services">Services</a></li>
                                <a href="index.html" className="logo d-flex align-items-center">
                                    {/* <!-- Uncomment the line below if you also wish to use an image logo --> */}
                                    <img src="img/logo.png" alt="" />
                                </a>
                                <li><a 
                                // style={{color:navColor}}
                                //  onMouseEnter={handleMouseEnter}
                                //  onMouseLeave={handleMouseLeave}
                                 href="#portfolio">Portfolio</a></li>
                                <li><a 
                                // style={{color:navColor}}
                                //  onMouseEnter={handleMouseEnter}
                                //  onMouseLeave={handleMouseLeave}
                                 href="#team">Career</a></li>
                                <li><a 
                                // style={{color:navColor}}
                                //  onMouseEnter={handleMouseEnter}
                                //  onMouseLeave={handleMouseLeave}
                                 href="#footer">Contact</a></li>
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
