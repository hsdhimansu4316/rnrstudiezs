import Link from "next/link";
import React from "react";

function About() {
    return (
        <>
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
                                            <p className="about-two__single-text abouttxt">Personalised Psychometric Assessment</p>
                                        </div>
                                    </div>
                                    <div className="about-two__single">
                                        <div className="about-two__single-icon">
                                            <i className="kipso-icon-knowledge" />
                                        </div>
                                        <div className="about-two__single-content">
                                            <p className="about-two__single-text abouttxt">Pick The Right College</p>
                                        </div>
                                    </div>
                                </div>
                                <Link href="/about-us" className="thm-btn">
                                    Learn More
                                </Link>
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
        </>
    );
}

export default About;
