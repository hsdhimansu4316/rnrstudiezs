"use client";
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import SideForm from "./SideForm";

function Banner() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const NextArrow = (props) => {
        const { onClick } = props;
        return (
            <div className="slick-arrow slick-next" onClick={onClick}>
                <i className="fas fa-chevron-right"></i>
            </div>
        );
    };

    const PrevArrow = (props) => {
        const { onClick } = props;
        return (
            <div className="slick-arrow slick-prev" onClick={onClick}>
                <i className="fas fa-chevron-left"></i>
            </div>
        );
    };

    const sliderSettings = {
        dots: false,
        infinite: true,
        speed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: true,
        fade: true,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
    };
    return (
        <>
            <div className="banner-wrapper">
                <section className="banner-one banner-carousel__one no-dots">
                    <Slider {...sliderSettings}>
                        <div className="swiper-slide banner-one__slide banner-one__slide-one">
                            <div className="container">
                                <div className="row align-items-start">
                                    <div className="col-md-7">
                                        <h3 className="banner-one__title banner-one__light-color">Ace GMAT, Ace Success</h3>
                                        <p className="banner-one__tag-line">We&#39;ll Guide You Through Every Step!</p>
                                        <a href="#none" className="thm-btn banner-one__btn" onClick={handleShow}>
                                            Learn More
                                        </a>
                                    </div>

                                    <div className="col-md-3 sideform offset-md-2"></div>
                                </div>
                            </div>
                        </div>

                        <div className="swiper-slide banner-one__slide2 banner-one__slide-two">
                            <div className="container">
                                <div className="row align-items-start">
                                    <div className="col-md-7">
                                        <h3 className="banner-one__title banner-one__light-color">Your NMAT Journey, Made Simple</h3>
                                        <p className="banner-one__tag-line">Success is Just A Consultation Away!</p>
                                        <a href="#none" className="thm-btn banner-one__btn" onClick={handleShow}>
                                            Learn More
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="swiper-slide banner-one__slide3 banner-one__slide-two">
                            <div className="container">
                                <div className="row align-items-start">
                                    <div className="col-md-7">
                                        <h3 className="banner-one__title banner-one__light-color">From Preparation to Admission</h3>
                                        <p className="banner-one__tag-line">Prep Smart for XAT With Us!</p>
                                        <a href="#none" className="thm-btn banner-one__btn" onClick={handleShow}>
                                            Learn More
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="swiper-slide banner-one__slide4 banner-one__slide-two">
                            <div className="container">
                                <div className="row align-items-start">
                                    <div className="col-md-7">
                                        <h3 className="banner-one__title banner-one__light-color">Dream Big, Score High</h3>
                                        <p className="banner-one__tag-line">Expert Guidance for CAT Aspirants!</p>
                                        <a href="#none" className="thm-btn banner-one__btn" onClick={handleShow}>
                                            Learn More
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="swiper-slide banner-one__slide5 banner-one__slide-two">
                            <div className="container">
                                <div className="row align-items-start">
                                    <div className="col-md-7">
                                        <h3 className="banner-one__title banner-one__light-color">Prepare, Succeed, Lead</h3>
                                        <p className="banner-one__tag-line">Your MAT Success is Our Mission!</p>
                                        <a href="#none" className="thm-btn banner-one__btn" onClick={handleShow}>
                                            Learn More
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Slider>
                </section>
            </div>
        </>
    );
}

export default Banner;
