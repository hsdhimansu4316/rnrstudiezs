"use client";
import React, { useState } from "react";
import PopupForm from "../PopupForm";

function PostMbaCareer() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <section className="option-sec paddingTop">
                <div className="expert-counselling-container">
                    <div className="container">
                        <div className="row">
                            {/* Left Column */}
                            <div className="col-md-6 image-column">
                                <div className="image-wrapper">
                                <img src="/assets/images/img/sideimg.png" alt="Counselling" className="background-image" />

                                </div>
                            </div>

                            {/* Right Column */}
                            <div className="col-md-6 ">
                                <h3>
                                    Your MBA is Just the Beginning <br /> Expert Guidance for Post-MBA Careers
                                </h3>
                                <p>The MBA entrance examinations are just the beginning. Earning a Master of Business Administration degree is about expanding your business knowledge and preparing yourself for leadership positions of increasing responsibility. It comes with intricate profiles and incredibly lucrative wages.</p>

                                <button className="book-slot-btn" onClick={handleShow}>
                                    Book Slot
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <PopupForm show={show} handleClose={handleClose} />
            </section>
        </>
    );
}

export default PostMbaCareer;
