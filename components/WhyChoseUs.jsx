import React from "react";

function WhyChoseUs() {
    return (
        <>
            <div className="container py-5">
                <div className="block-title">
                    <h2 className="block-title__title">Why Choose Us</h2>
                    <div className="underline"></div>
                </div>

                <div className="row align-items-center">
                    {/* Left column for image */}
                    <div className="col-md-6 text-center">
                        <img src="https://finkeyz.com/wp-content/uploads/2024/06/headerimgtop-1.webp" alt="Expert Team" className="img-fluid" />
                    </div>
                    {/* Right column for points */}
                    <div className="col-md-6">
                        <div className="row">
                            {/* First row with two points */}
                            <div className="about-two__single-wrap margin-btwn">
                                <div className="about-two__single">
                                    <div className="about-two__single-icon">
                                        <img className="icon-img" src="/assets/images/icons/2-03.png" alt="" />
                                    </div>
                                    <div className="about-two__single-content">
                                        <p className="about-two__single-text">Expert Team with 10+ Years Experience</p>
                                    </div>
                                </div>
                                <div className="about-two__single">
                                    <div className="about-two__single-icon">
                                        <img className="icon-img" src="/assets/images/icons/2-02.png" alt="" />
                                    </div>
                                    <div className="about-two__single-content">
                                        <p className="about-two__single-text">Proven Track Record of Admissions Success</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            {/* Second row with two points */}
                            <div className="about-two__single-wrap" style={{ marginTop: '16px' }}>
                                <div className="about-two__single">
                                    <div className="about-two__single-icon">
                                        <img className="icon-img" src="/assets/images/icons/2-01.png" alt="" />
                                    </div>
                                    <div className="about-two__single-content">
                                        <p className="about-two__single-text">Personalized Guidance for Each Client</p>
                                    </div>
                                </div>
                                <div className="about-two__single">
                                    <div className="about-two__single-icon">
                                        <img className="icon-img" src="/assets/images/icons/2-04.png" alt="" />
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
        </>
    );
}

export default WhyChoseUs;
