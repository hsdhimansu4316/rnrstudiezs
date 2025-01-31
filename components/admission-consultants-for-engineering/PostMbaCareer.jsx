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
                                Beyond The Engineering Degree <br /> Expert Guidance For Aspiring Engineers
                                </h3>
                                <p>Engineering is more than just a degree—it&#39;s a way to bring ideas to life. As you learn and
build new skills, you prepare to solve real-world problems and create things that matter.
It helps you build skills, solve problems, and work on projects that make a difference.
The right guidance opens doors to great opportunities and a bright future.</p>

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
