"use client";
import React, { useState } from "react";
import PopupForm from "../PopupForm";

function ExpertVdoCounsilingCe() {
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
                                <h3>Your Dream Engineering School, Just A Career Session Away!</h3>
                                <p>If you&#39;re preparing for JEE Main, you must understand that clearing the exam is just the
first step in your journey. Admission to top engineering colleges also involves meeting
eligibility criteria, participating in counselling processes, and staying updated with
essential deadlines. There are many admission exams that an aspiring engineering
student can take, including:</p>

                                <ul>
                                    <li>
                                        <strong>JEE MAIN:</strong> JEE-Main is a standardised computer-based test that admits
students to technical undergraduate engineering, architecture, and planning
programs. It is usually held twice a year, in January and April. The first JEE Main
2025 exam session will be held on January 22, 23, 24, 28, 29, and 30.
                                    </li>
                                    <li>
                                        <strong>KIITEE (PHASE 1):</strong> KIITEE is KIIT University’s entrance exam. It is a
standard Kalinga Institute of Industrial Technology course entrance test
(excluding MBBS, BDS, PG Medical, and PG Dental). KIITEE Phase 1 will take
place from April 16 to 20, 2025.
                                    </li>
                                    <li>
                                        <strong>MHT CET:</strong> The Maharashtra Common Entrance Test (MHT CET) is an annual
state-level entrance exam for undergraduate engineering and pharmacy degrees
at Maharashtra colleges.
                                    </li>
                                    <li>
                                        <strong>BITSAT:</strong> BITS, Pilani, conducts the BITSAT for undergraduate engineering
                                        courses (BE) at its Pilani, Goa, and Hyderabad campuses.
                                    </li>
                                    <li>
                                        <strong>SRMJEEE:</strong> The SRM Institute of Science and Technology annually holds a two-
phase Joint Engineering Entrance Exam. Candidates seeking admission to
Bachelor of Technology programs offered at multiple SRM Institute college
campuses must take this exam.
                                    </li>
                                    <li>
                                        <strong>VITEEE:</strong>The Vellore Institute of Technology conducts an annual engineering
entrance exam, known as VITEEE, for BTech admission to participating
institutes.
                                    </li>
                                    <li>
                                        <strong>COMEDK:</strong>The COMEDK UGET exam is a common entrance exam
administered nationally for admission to around 190 unaided private engineering
institutes in Karnataka.
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

export default ExpertVdoCounsilingCe;
