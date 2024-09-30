"use client";
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import SideForm from "./SideForm";

function Banner() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <div className="banner-wrapper">
                <section className="banner-one banner-carousel__one no-dots">
                    <div className="swiper-container swiper-container-initialized swiper-container-horizontal">
                        <div className="swiper-wrapper">
                            <div className="swiper-slide banner-one__slide banner-one__slide-one">
                                <div className="container">
                                    <div className="row align-items-start">
                                        {/* Left Side: Content (7 columns) */}
                                        <div className="col-md-7">
                                            <h3 className="banner-one__title banner-one__light-color">
                                                Your Dream Career <br />
                                                Starts Here
                                            </h3>
                                            <p className="banner-one__tag-line">Are you ready to learn?</p>
                                            <a href="#none" className="thm-btn banner-one__btn" onClick={handleShow}>
                                                Learn More
                                            </a>
                                        </div>

                                        {/* Right Side: Sticky Form (3 columns) */}
                                        <div className="col-md-3 offset-md-2">
                                            <div className="sticky-form-wrapper">
                                                <SideForm />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

           
        </>
    );
}

export default Banner;
