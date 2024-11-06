"use client";
import React, { useState } from "react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Accordion from "react-bootstrap/Accordion";
import "bootstrap/dist/css/bootstrap.min.css";
import SideForm from "@/components/SideForm";
import Cta2 from "@/components/Cta2";
import PopupForm from "@/components/PopupForm";
import TopNav from "@/components/TopNav";
import HorizontalCta from "@/components/HorizontalCta";
import Metadata from "../Metadata";
import MbbsBox from "@/components/MbbsBox";

function Page() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const syllabusData = [
        { semester: "What is medical career counselling?", content: "Medical career counselling offers guidance and support to aspiring medical candidates.  It covers job paths, education, specialisation, and professional development." },
        { semester: "Who can attend medical career counselling?", content: "Medical career counselling is useful for anybody who wants to become a doctor, from high school seniors to current healthcare workers considering a change or promotion." },
        { semester: "What do medical career counsellors offer?", content: `<p>A medical career counsellor can help with many different things, including: </p>
            <ul> 
            <li>Tips on how to choose a medical school </li>
            <li>Guidance on medical subspecialties </li>
            <li>Assessment and guidance for the medical school admissions process</li>
            <li>Medical profession job search and career planning </li>

            </ul>` },
    ];

    return (
        <>
            <Metadata title="Expert Career Guidance for MBA Students | Free Counseling Online" description="Unlock your potential with tailored career guidance for MBA students. Get free online counseling from expert career counselors to enhance your career path today!" />
            <TopNav />
            <Navbar />
            <section className="inner-banner innermba">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 mba_banner_left">
                            <h2 className="course-details__title" style={{ color: "#fff" }}>
                            Medical Career Counselling
                            </h2>
                            <p className="banner_text_mba">1-on-1 consultation for a medical career roadmap that fits your strengths, goals, and commitments.
                            </p>
                            <button type="button" className="thm-btn become-teacher__form-btn applybtn" onClick={handleShow}>
                                Book Your Consultation
                            </button>
                        </div>
                        <div className="col-md-4" style={{ paddingTop: "15px" }}>
                            <div className="sticky-side-form">
                                <SideForm />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="course-details">
                <div className="container mbacontainer">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="course-details__content">
                                <div className="course-details__top">
                                    <div className="course-details__top-left">
                                        <h2 className="course-details__title">Medical Counselling: The Guidance You Need To Build Your Future In Healthcare</h2>
                                    </div>
                                </div>
                                <div className="tab-content course-details__tab-content ">
                                    <div className="tab-pane show active animated fadeInUp" role="tabpanel" id="overview">
                                        {/* <p className="course-details__tab-text">Dip into the business world with a two-year postgraduate MBA program that will sharpen your intellectual, managerial, and business skills. </p> */}
                                        <br />
                                        <p className="course-details__tab-text">Taking care of people and ensuring their health can be a satisfying job. Due to this, the demand for medical positions is quite high and well-paying. From doctors and nurses to therapists, the medical field offers many opportunities to those wanting to join this industry. If you are interested in this field, medical career counselling can help you choose the right path. 
                                        </p>
                                       <MbbsBox/>
                                        <h2 className="become-teacher__subtitle">Eligibility</h2>
                                        <ul>
                                            <li>An MBBS degree is the most important credential for entering the medical field. To take this course, one must pass the NEET examination.  The eligibility criteria to sit for this exam is 10+2 or equivalent with Science subjects.
                                            </li>
                                            <li>Apart from NEET, many private universities conduct their entrance examinations for admissions.
                                            </li>
                                            </ul>
                                       
                                        <h2 className="become-teacher__subtitle">Entrance Exams
                                        </h2>
                                        <p className="course-details__tab-text">NEET: National Eligibility cum Entrance Test (NEET) is an Indian medical entrance exam. Strictly enforced by the Indian government, one must pass the National Entrance Examination (NEET) to pursue medical education in India or overseas. 
                                        </p>
                                       
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <div className="col-lg-3">
                            <div className="sticky-side-form">
                                <SideForm />
                            </div>
                        </div> */}
                    </div>
                </div>

                <HorizontalCta />
                <section className="mt-70">
                    <div className="container">
                        <Accordion>
                            <div className="course-details__top-left">
                                <h2 className="course-details__title faqhead">FAQs</h2>
                            </div>
                            {syllabusData.map((item, index) => (
                                <Accordion.Item eventKey={String(index)} key={index}>
                                    <Accordion.Header>
                                        <h2 className="electivehead">{item.semester}</h2>
                                    </Accordion.Header>
                                    <Accordion.Body>
                                    <div dangerouslySetInnerHTML={{ __html: item.content }} />
                                        <p>{item.content2}</p>
                                    </Accordion.Body>
                                </Accordion.Item>
                            ))}
                        </Accordion>
                    </div>
                </section>
            </section>
            <Cta2 />
            <Footer />
            <PopupForm show={show} handleClose={handleClose} />
        </>
    );
}

export default Page;


