"use client";
import React, { useState } from "react";

import "./bestCc.css";
import PopupForm from "../PopupForm";

function BannerCe() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div
            style={{
                position: "relative", // Position the parent relative to overlay
                backgroundImage: 'url("/assets/images/banner/banner12.png")',
                backgroundSize: "cover",
                backgroundPosition: "center",
                width: "100%",
                minHeight: "700px",
                display: "flex",
                alignItems: "center",
            }}
            className="banner-height"
        >
            {/* Color Overlay */}
            <div
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    backgroundColor: "rgba(0, 0, 0, 0.5)", // Black overlay with 50% opacity
                    zIndex: 1, // Place below content
                }}
            ></div>

            {/* Content */}
            <div className="container" style={{ position: "relative", zIndex: 2 }}>
                <div className="row">
                    <div className="col-md-6 d-flex justify-content-center align-items-center" style={{ minHeight: "400px" }}>
                        <div className="counselling-section">
                            <div className="counselling-banner">Guiding Your Path with Precision and Purpose</div>
                            <div className="counselling-content">
                                {/* <h2 className="text-white"></h2> */}
                                <h2 className="text-white text-left">One to One Counselling For Personalised Expert Guidance</h2>
                                <ul className="counselling-list">
                                    <li className="text-white">➤ Explore the Best Engineering Colleges for Your Future</li>
                                    <li className="text-white">➤ Understand the Career Opportunities Post-Engineering</li>
                                    <li className="text-white">➤ Get Expert Guidance for Engineering College Admissions</li>
                                </ul>
                                <button className="counselling-button float-left" onClick={handleShow}>Get Started Now</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 d-flex justify-content-center align-items-center">
                        {/* Rotating background image */}
                        <div className="compassWrapper">
                            {/* Rotating compass */}
                            <img src="/assets/images/img/comapss.png" alt="Compass" className="compass" />
                           {/* Front images rotating */}
                            <div className="imageContainer">
                                <img src="/assets/images/img/student1.png" alt="Graduate 1" className="rotatingImage img1" />
                                <img src="/assets/images/img/student4.png" alt="Graduate 3" className="rotatingImage img4" />
                                <img src="/assets/images/img/student3.png" alt="Graduate 3" className="rotatingImage img3" />
                                <img src="/assets/images/img/student2.png" alt="Graduate 2" className="rotatingImage img2" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <PopupForm show={show} handleClose={handleClose} />
        </div>
    );
}

export default BannerCe;
