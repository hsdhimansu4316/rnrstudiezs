import Link from "next/link";
import React from "react";

function Footer() {
    return (
        <>
            <footer className="site-footer">
                <div className="site-footer__upper">
                    <div className="container">
                        <div className="row " style={{ paddingTop: "40px" }}>
                            <div className="col-xl-4 col-lg-6 col-sm-12">
                                <div className="flogo ">
                                    <img src="/assets/images/logo/footer-logo.png" style={{ height: "170px" }} alt="" />
                                </div>
                                <div className="footer-widget footer-widget__about">
                                    <p className="footer-widget__text">RNR Studiezs is India's most advanced career evaluation, guidance, and counseling website for students. We provide career evaluation and innovative career counseling to help you find your dream career.</p>
                                    {/* <div className="footer-widget__btn-block">
                                        <a href="/contact-us" className="thm-btn">
                                            Contact
                                        </a>
                                    </div> */}
                                </div>
                            </div>

                            <div className="col-xl-4 col-lg-6 col-sm-12">
                                <div className="footer-widget footer-widget__link">
                                    <h2 className="footer-widget__title">Explore</h2>
                                    <div className="footer-widget__link-wrap">
                                        <ul className="list-unstyled footer-widget__link-list">
                                            <li>
                                                <a href="">About</a>
                                            </li>
                                     
                                            <li><a href="#">Blog</a></li>
                                            <li><a href="#">Contact</a></li>
                                               <li> <a href="/mba">MBA</a>
                                            </li>
                                            <li>
                                                <a href="">MBBS</a>
                                            </li>
                                            <li><a href="#">BTECH</a></li>
                                          

                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-6 col-sm-12">
                                <div className="footer-widget footer-widget__contact">
                                    <h2 className="footer-widget__title">Address</h2>
                                    <ul className="list-unstyled footer-widget__course-list">
                                        <li>
                                            <h2>
                                                <a>Plot No:-1148/1729/1656, 2nd Floor, Bomikhal, Bhubaneswar</a>
                                            </h2>
                                            {/* <p>Mike Hardson</p> */}
                                        </li>
                                        <li>
                                        <h2>
                                                <a> +91 84550 35666 </a>
                                            </h2>
                                            <h2>
                                                <a> +91 78470 06811</a>
                                            </h2>
                                            <h2>
                                                <a> +91 97767 28999</a>
                                            </h2>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="site-footer__bottom">
                    <div className="container">
                        <p className="site-footer__copy">
                            © 2024 RNR | All Rights Reserved. Developed By
                            <Link target="_blank" href="https://thetechnovate.com/">
                                Technovate
                            </Link>
                        </p>

                        <div className="site-footer__social">
                            <a href="https://www.linkedin.com/company/rnrstudiezs/" target="blank">
                                <i className="fab fa-linkedin" />
                            </a>
                            <a href="https://x.com/RnRStudiezs " target="blank">
                                <i className="fab fa-twitter" />
                            </a>
                            <a href="https://www.facebook.com/profile.php?id=61560586528016" target="blank">
                                <i className="fab fa-facebook-square" />
                            </a>
                            <a href="https://www.instagram.com/rnrstudiezs/" target="blank">
                                <i className="fab fa-instagram" />
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default Footer;
