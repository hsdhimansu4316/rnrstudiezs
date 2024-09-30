"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";

function Navbar() {
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
            <header className={`site-header site-header__header-one ${isScrolled ? "scrolled" : ""}`}>
                <nav className="navbar navbar-expand-lg navbar-light header-navigation stricky">
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
                        <div className={`main-navigation ${isMenuOpen ? "open" : ""}`}>
                            <ul className="navigation-box">
                                <li className="current">
                                    <a href="/">Home</a>
                                </li>
                                <li>
                                    <a href="/about-us">About</a>
                                </li>
                                <li>
                                    <a >Courses</a>
                                    <ul className="sub-menu">
                                        <li>
                                            <Link href="/mba">MBA</Link>
                                            {/* <ul className="sub-menu">
                                                <li>
                                                    <a href="/mat">MAT</a>
                                                </li>
                                                <li>
                                                    <a href="/gmat">GMAT</a>
                                                </li>
                                                <li>
                                                    <a href="/gre">GRE</a>
                                                </li>
                                                <li>
                                                    <a href="/nmat">NMAT</a>
                                                </li>
                                                <li>
                                                    <a href="/cat">CAT</a>
                                                </li>
                                            </ul> */}
                                        </li>
                                        <li>
                                            {/* <Link href="">MBBS</Link> */}
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
                                                    <a href="">Karnataka</a>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>

                                <li>
                                    <Link href="">Entrance</Link>
                                    <ul className="sub-menu">
                                        <li>
                                            <a>Abroad Exam</a>
                                            <ul className="sub-menu">
                                                <li>
                                                    <a href="/abroad-exam/toefl">TOEFL</a>
                                                </li>
                                                <li>
                                                    <a href="/abroad-exam/ielts">IELTS</a>
                                                </li>
                                               
                                                <li>
                                                    <a href="/abroad-exam/gre">GRE</a>
                                                </li>
                                                <li>
                                                    <a href="/abroad-exam/gmat">GMAT</a>
                                                </li>
                                               
                                            </ul>
                                        </li>
                                        <li>
                                            <a>Indian Exam</a>
                                            <ul className="sub-menu">
                                            <li>
                                                    <a href="/mat">MAT</a>
                                                </li>
                                               
                                                <li>
                                                    <a href="/nmat">NMAT</a>
                                                </li>
                                                <li>
                                                    <a href="/cat">CAT</a>
                                                </li>
                                                <li>
                                                    <a href="/indian-exam/iift">IIFT</a>
                                                </li>
                                                <li>
                                                    <a href="/indian-exam/ibsat">IBSAT
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="/indian-exam/cmat">CMAT
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="/indian-exam/xat">XAT</a>
                                                </li>
                                                <li>
                                                    <a href="/indian-exam/atma">ATMA
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="/indian-exam/snap">SNAP</a>
                                                </li>
                                                

                                            </ul>
                                        </li>
                                    </ul>
                                </li>

                                <li>
                                    <a href="/contact-us">Contact</a>
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

export default Navbar;
