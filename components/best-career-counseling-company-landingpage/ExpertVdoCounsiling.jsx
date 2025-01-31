"use client";
import React, { useState } from "react";
import PopupForm from "../PopupForm";

function ExpertVdoCounsiling() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <section className="option-sec paddingTop secondary-sec">
                <div className="expert-counselling-container">
                    <div className="container">
                        <div className="row">
                            {/* Left Column: Image */}
                            <div className="col-md-6 order-1 order-md-2 image-column">
                                <div className="image-wrapper">
                                    <img src="/assets/images/img/sideimg.png" alt="Counselling" className="background-image" />
                                </div>
                            </div>

                            {/* Right Column: Content */}
                            <div className="col-md-6 order-2 order-md-1">
                                <h3>Expert Video Counseling To Make it to Your Dream B-School!</h3>
                                <p>You must take more than just the CAT if you want an MBA. Top MBA colleges require entrance exams and interviews. The interview season runs from January to April, whereas most admission exams occur between November and February. All of the admission exams are of the objective type and are administered mostly online. Some of the most common types of exams are:</p>

                                <ul>
                                    <li>
                                        <strong>CAT:</strong> It opens doors to 20 IIMs and 100+ elite schools. It is held in the last week of November.
                                    </li>
                                    <li>
                                        <strong>XAT:</strong> It leads to XLRI and 170+ other institutes. It takes place every January.
                                    </li>
                                    <li>
                                        <strong>SNAP:</strong> Symbiosis&#39;s entrance exam for over 17 management schools. It usually takes place in December.
                                    </li>
                                    <li>
                                        <strong>TISS-NET:</strong> Tata Institute of Social Science conducts this for MBA admissions. It usually happens in February.
                                    </li>
                                    <li>
                                        <strong>GMAT:</strong> GMAT is taken for undergraduate management degrees at overseas universities and institutes.
                                    </li>
                                    <li>
                                        <strong>CMAT:</strong> Take the CMAT to test their general awareness, quantitative method, logical thinking, and language comprehension.
                                    </li>
                                </ul>

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

export default ExpertVdoCounsiling;
