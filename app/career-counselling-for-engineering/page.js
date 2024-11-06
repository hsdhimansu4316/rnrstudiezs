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
        { semester: "What is engineering career counselling?", content: "Engineering Career Counselling helps people explore engineering career options and choose the right path based on their talents, interests, and academic background." },
        { semester: "What makes career counselling important for aspiring engineers?", content: "Career counselling helps choose an engineering major, set goals, and plan educational steps for a successful profession. " },
        {
            semester: "What engineering disciplines can you choose from?",
            content: "The top engineering branches include Mechanical, Civil, Electrical, Computer Science, Electronics, Chemical, and Biomedical engineering. A counsellor can help match your abilities and interests to the best major."
        },
    ];

    return (
        <>
            <Metadata title="Career Counselling for Engineering Students | RNR Studiezs" description=" Unlock your potential with expert career counselling for engineering students. Get guidance on career paths, internships, and skills to succeed in the industry." />
            <TopNav />
            <Navbar />
            <section className="inner-banner innermba">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 mba_banner_left">
                            <h2 className="course-details__title" style={{ color: "#fff" }}>
                                Career Counselling For Engineering Students
                            </h2>
                            <p className="banner_text_mba">Explore your career options, make wise choices, and meet your professional goals.</p>
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
                                        <h2 className="course-details__title">Engineering Counselling - Paving The Way For Future Engineers</h2>
                                    </div>
                                </div>
                                <div className="tab-content course-details__tab-content ">
                                    <div className="tab-pane show active animated fadeInUp" role="tabpanel" id="overview">
                                        {/* <p className="course-details__tab-text">Dip into the business world with a two-year postgraduate MBA program that will sharpen your intellectual, managerial, and business skills. </p> */}
                                        <br />
                                        <p className="course-details__tab-text">For most students, the search for the best engineering college starts as soon as the school ends. After all, it is one of the most sought-after career options. Engineers offer the most rigorous standards of skill, professionalism, and ethics to make a difference. Engineers work across fields with a never-ending desire for knowledge and enthusiasm for new ideas to create a better tomorrow. Their problem-solving skills make the world a better place.</p>
                                        <MbbsBox />
                                        <h2 className="become-teacher__subtitle">Eligibility</h2>
                                        <ul>
                                            <li>Candidates must first decide which engineering discipline or specialisation they want to pursue.</li>
                                            <li>AA minimum of 50% on a recognised institution's 10+2 or equivalent examination is required.</li>
                                            <li>Candidates need to have physics, chemistry, and math in Class 12.</li>
                                        </ul>

                                        <h2 className="become-teacher__subtitle">Entrance Exams</h2>
                                        <p className="course-details__tab-text">
                                            {" "}
                                            <strong> Joint Entrance Examination Advanced (JEE Advanced):</strong> JEE Main is the exam for admission to BTech, BArch, and BPlan courses at NITs, IIITs, other CFTIs, and institutions/universities funded/recognised by participating State Governments.
                                        </p>
                                        <p className="course-details__tab-text">
                                            {" "}
                                            <strong> Joint Entrance Examination Main (JEE Main):</strong> JEE-Advanced is an annual academic exam in India that tests applicants' physics, chemistry, and math skills for engineering, science, and architecture admissions.
                                        </p>
                                        <p className="course-details__tab-text">
                                            {" "}
                                            <strong> Graduate Aptitude Test in Engineering (GATE):</strong> Graduate Aptitude Test in Engineering (GATE) is a national exam that assesses undergraduate knowledge of engineering, technology, architecture, science, commerce, arts, and humanities courses.
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
