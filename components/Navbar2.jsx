"use client"
import Link from "next/link";
import React, { useState, useEffect } from "react";

function Navbar2() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    useEffect(() => {
        const handleScroll = () => {
            console.log("Scroll position:", window.scrollY); // Log scroll position
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
            <header className={`site-header site-header__header-one ${isScrolled ? 'scrolled' : ''}`}>
                <nav className="navbar navbar-expand-lg navbar-light header-navigation stricky" style={{padding:'20px'}}>
                    <div className="container clearfix">
                        {/* Brand and toggle get grouped for better mobile display */}
                        <div className="logo-box clearfix">
                            <a className="navbar-brand" href="/">
                                <img src="/assets/images/logo/rnrlogo.png" className="main-logo" width={128} alt="Awesome Image" />
                            </a>

                            <button className="menu-toggler" onClick={toggleMenu}>
                                <span className="kipso-icon-menu" />
                            </button>
                        </div>
                        {/* /.logo-box */}
                        {/* Collect the nav links, forms, and other content for toggling */}
                        <div className={`main-navigation ${isMenuOpen ? 'open' : ''}`}>
                            <ul className="navigation-box">
                                <li className="current">
                                    <a href="/" style={{color:`fff`}}></a>
                                </li>
                                <li>
                                    <a href="#"></a>
                                </li>
                                <li>
                                    <Link href=""></Link>
                                    <ul className="sub-menu">
                                        <li>
                                            <Link href="/mba">MBA</Link>
                                            <ul className="sub-menu">
                                                <li>
                                                    <a href="">Odisha</a>
                                                </li>
                                                <li>
                                                    <a href="">Andhra Pradesh</a>
                                                </li>
                                                <li>
                                                    <a href="i">Telangana</a>
                                                </li>
                                                <li>
                                                    <a href="">West Bengal</a>
                                                </li>
                                                <li>
                                                    <a href="">Chhattisgarh</a>
                                                </li>
                                                <li>
                                                    <a href="">Karnataka</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <Link href="">MBBS</Link>
                                            <ul className="sub-menu">
                                                <li>
                                                    <a href="">Odisha</a>
                                                </li>
                                                <li>
                                                    <a href="">Andhra Pradesh</a>
                                                </li>
                                                <li>
                                                    <a href="">Telangana</a>
                                                </li>
                                                <li>
                                                    <a href="">West Bengal</a>
                                                </li>
                                                <li>
                                                    <a href="">Chhattisgarh</a>
                                                </li>
                                                <li>
                                                    <a href=""> Karnataka</a>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                   
                                </li>

                                <li>
                                    <a href="/contact-us"></a>
                                </li>
                            </ul>
                        </div>
                        
                    </div>
                    {/* /.container */}
                </nav>
            </header>
        </>
    );
}

export default Navbar2;
