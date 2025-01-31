"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";

function Navbar3() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    useEffect(() => {
        const handleScroll = () => {
            // console.log("Scroll position:", window.scrollY); 
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <>
            <header className={`site-header site-header__header-one ${isScrolled ? "scrolled" : ""}`}>
                <nav className="navbar navbar-expand-lg navbar-light header-navigation stricky">
                    <div className="container clearfix">
                        {/* Brand and toggle get grouped for better mobile display */}
                        <div className="logo-box clearfix">
                            <a className="navbar-brand" href="#">
                                <img src="/assets/images/logo/rnrlogo.png" className="main-logo" width={128} alt="Awesome Image" />
                            </a>

                            <button className="menu-toggler" onClick={toggleMenu}>
                                <span className="kipso-icon-menu" />
                            </button>
                        </div>
                        {/* /.logo-box */}
                        {/* Collect the nav links, forms, and other content for toggling */}
                        <div className={`main-navigation ${isMenuOpen ? "open" : ""}`}>
                            <ul className="navigation-box">
                               
                           
                              
                              
                                <li>
                                <a  href="tel:+918455035666">    <button className="contact-btn"> <i className="fa fa-phone fa-flip-horizontal" aria-hidden="true"></i>&nbsp; 84550 35666</button></a>
                                </li>
                            </ul>
                        </div>
                        {/* /.navbar-collapse */}
                    </div>
                    {/* /.container */}
                </nav>
            </header>
        </>
    );
}

export default Navbar3;
