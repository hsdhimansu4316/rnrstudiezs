import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import TopNav from "@/components/TopNav";
import React from "react";

function page() {
    return (
        <>
        <TopNav/>
        <Navbar/>
        <section className="gre_inner-banner">
                <div className="container forpadding">
                    <ul className="list-unstyled thm-breadcrumb">
                        <li>
                            <a href="#">Home</a>
                        </li>
                        <li className="active">
                            <a href="#">ABOUT</a>
                        </li>
                    </ul>
                    
                </div>
            </section>
            <section className="about-two">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6">
                            <div className="about-two__content">
                                <div className="block-title text-left">
                                    <h2 className="block-title__title">Explore, Plan, Succeed Career Counseling You Can Trust</h2>
                                </div>
                                <p className="about-two__text">At RNR Studiezs , we believe in empowering you to navigate your career path. We have top-notch qualified counselors, reliable career assessments, and in-depth career counseling sessions to help you choose the right path in your professional life.</p>
                                
                                <div className="about-two__single-wrap">
                                    <div className="about-two__single">
                                        <div className="about-two__single-icon">
                                            <i className="kipso-icon-professor" />
                                        </div>
                                        <div className="about-two__single-content">
                                            <p className="about-two__single-text">Personalised Psychometric Assessment</p>
                                        </div>
                                    </div>
                                    <div className="about-two__single">
                                        <div className="about-two__single-icon">
                                            <i className="kipso-icon-knowledge" />
                                        </div>
                                        <div className="about-two__single-content">
                                            <p className="about-two__single-text">Pick The Right College</p>
                                        </div>
                                    </div>
                                </div>
                                {/* <a href="#" className="thm-btn">
                                    Learn More
                                </a> */}
                            </div>
                        </div>
                        <div className="col-xl-6 d-flex justify-content-xl-end justify-content-sm-center">
                            <div className="about-two__image">
                                <span className="about-two__image-dots" />
                                <img src="assets/images/about.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer/>
        </>
    );
}

export default page;
