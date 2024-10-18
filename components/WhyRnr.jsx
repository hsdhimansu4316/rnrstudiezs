import React from "react";

function WhyRnr() {
    return (
        <>
            <section className="image-text-section ">
                <div className="overlay"></div> {/* Overlay for semi-transparent background */}
                <div className="container">
                    
                    <div className="row align-items-center">
                        <div className="col-md-5 text-center">
                            <img src="https://lp.onlinejain.com/images/Online-Group.svg" alt="Person with laptop" className="img-fluid" />
                        </div>
                        <div className="col-md-7 text-white">
                            <div className="row">
                                {/* First row with two points */}
                                <div className="block-title">
            <h2 className="block-title__title">Why Choose RNR</h2>
            <div className="underline choose-underline"></div>
          </div>
                                <div className="about-two__single-wrap margin-btwn">
                                    <div className="about-two__single">
                                        <div className="about-two__single-icon">
                                            <img className="icon-img" src="/assets/images/icons/1-03.png" alt="" />
                                        </div>
                                        <div className="about-two__single-content">
                                            <p className="about-two__single-text">Expert Team with 10+ Years Experience</p>
                                        </div>
                                    </div>
                                    <div className="about-two__single">
                                        <div className="about-two__single-icon">
                                            <img className="icon-img" src="/assets/images/icons/1-02.png" alt="" />
                                        </div>
                                        <div className="about-two__single-content">
                                            <p className="about-two__single-text">Proven Track Record of Admissions Success</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                {/* Second row with two points */}
                                <div className="about-two__single-wrap" style={{ marginTop: "16px" }}>
                                    <div className="about-two__single">
                                        <div className="about-two__single-icon">
                                            <img className="icon-img" src="/assets/images/icons/1-01.png" alt="" />
                                        </div>
                                        <div className="about-two__single-content">
                                            <p className="about-two__single-text">Personalized Guidance for Each Client</p>
                                        </div>
                                    </div>
                                    <div className="about-two__single">
                                        <div className="about-two__single-icon">
                                            <img className="icon-img" src="/assets/images/icons/1-04.png" alt="" />
                                        </div>
                                        <div className="about-two__single-content">
                                            <p className="about-two__single-text">Global Network of MBA Alumni</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default WhyRnr;
