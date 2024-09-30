"use client";
import Link from "next/link";
import React, { useState } from "react";
import PopupForm from "@/components/PopupForm";

function HorizontalCta() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <section className="mt-70">
                <div className="custom-section d-flex justify-content-between flex-wrap">
                    <div className="container">
                        <div className="row align-items-center"> {/* Added align-items-center */}
                            <div className="col-sm-8">
                                <div className="content">
                                    <h2 className="ctahead">Book A Career Counselling Session With Our Experts</h2>
                                    <p className="">We have professional career counselors who can assess your position and advise you in the right direction. Our career guidance can help you turn your professional dreams into reality.</p>
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="buttons d-flex flex-column align-items-center align-items-md-end" style={{ marginTop: "16px" }}> {/* Adjusted alignment */}
                                    <Link href="#">
                                        <button type="button" className="thm-btn become-teacher__form-btn applybtn" onClick={handleShow}>
                                            Talk To Our Consultant
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <PopupForm show={show} handleClose={handleClose} />
            </section>
        </>
    );
}

export default HorizontalCta;
