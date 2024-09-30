"use client";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";
import Accordion from "react-bootstrap/Accordion";
import "bootstrap/dist/css/bootstrap.min.css";
import SideForm from "@/components/SideForm";

function Page() {
    const syllabusData = [
        { semester: "What's the TOEFL score validity?", content: "TOEFL scores last two years. After this period, universities may stop considering admission scores. " },
        { semester: "Does the TOEFL need a specific course or program?", content: "No course or program enrollment is required to take the TOEFL. English language proficiency can be assessed for academic, professional, and immigration purposes." },
        { semester: "What language prerequisites are there for TOEFL?", content: "TOEFL test-takers should speak English well. Candidates from all languages can take the exam, as there are no language requirements." },
        { semester: "Can I take the TOEFL before graduating high school?", content: "Candidates can take the TOEFL in high school if they meet the age and educational requirements." },
    ];

    return (
        <>
            <Navbar />
            <section className="gre_inner-banner new_inner">
                <div className="container">
                    <ul className="list-unstyled thm-breadcrumb">
                        <li>
                            <a href="#">Home</a>
                        </li>
                        <li className="active">
                            <a href="#">Abroad Exam</a>
                        </li>
                    </ul>
                    <h2 className="inner-banner__title">TOEFL</h2>
                </div>
            </section>
            <section className="course-details">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="course-details__content">
                                <div className="course-details__top">
                                    <div className="course-details__top-left">
                                        <h2 className="course-details__title">TOEFL</h2>
                                    </div>
                                </div>

                                <div className="tab-content course-details__tab-content ">
                                    <div className="tab-pane show active  animated fadeInUp" role="tabpanel" id="overview">
                                        <p className="course-details__tab-text">The TOEFL is the oldest of the tests and is accepted at more than 10,000 schools, colleges, and other groups in nearly 150 countries. With the Test of English as a Foreign Language, you can see how well you know English by checking your reading, writing, speaking, and listening skills. The score is then found using a scale from 0 to 120, with 30 points for each part. You need a score between 90 and 100 to study abroad.</p>
                                        <h2 className="become-teacher__subtitle">TOEFL Exam Eligibility Criteria</h2>
                                        <p className="course-details__tab-text">The eligibility for the TOEFL are:</p>
                                        <ul className="">
                                            <li>ETS does not require any academic requirement for TOEFL eligibility. Students taking the TOEFL exam must have completed 10+2 from a recognized board of education.</li>
                                            <li>ETS, which conducts the TOEFL exam, has no age limit for applicants.</li>
                                        </ul>
                                        <h2 className="become-teacher__subtitle">TOEFL Registration & Application</h2>
                                       
                                        <ol type="1">
                                            <li>To make an account with ETS, visit their official website.</li>
                                            <li>The form requires you to provide personal details such as your name, address, and email address.</li>
                                            <li>The information you give must correspond with the details on your passport.</li>
                                            <li>Choose the date and test location that best suits you for taking the TOEFL.</li>
                                            <li>Please verify your choice.</li>
                                            <li>Make the payment for the application.</li>
                                            <li>Save a copy of the acknowledgment form on paper for your records.</li>
                                        </ol>

                                        <h2 className="become-teacher__subtitle">TOEFL Syllabus</h2>
                                        <p className="course-details__tab-text">Following are the topics included in the TOEFL Syllabus:</p>
                                        <ul>
                                            <li>TOEFL Reading Section: Candidates for the TOEFL Reading part must read various texts and answer 20 questions.</li>
                                            <li>TOEFL Listening Section: Candidates for the TOEFL Listening part must answer questions about brief lectures or classroom discussions.</li>
                                            <li>TOEFL Speaking Section: Candidates for the TOEFL Speaking Section must describe a known topic and stuff they've read and heard.</li>
                                            <li>TOEFL Writing Section: TOEFL Writing Section candidates must read a piece, listen to a recording, and then type their response.</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="mb-4">
                    <div className="container">
                <div className="row">
                        <div className="col-md-6">
                            <Accordion className="greacco ">
                                <div className="course-details__top-left">
                                    <h2 className="course-details__title faqhead">FAQs</h2>
                                </div>
                                {syllabusData.map((item, index) => (
                                    <Accordion.Item eventKey={String(index)} key={index}>
                                        <Accordion.Header>
                                            <h2 className="electivehead">{item.semester}</h2>
                                        </Accordion.Header>
                                        <Accordion.Body>
                                            <p>{item.content}</p>
                                            <p>{item.content2}</p>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                ))}
                            </Accordion>
                        </div>
                        <div className="col-md-6">
                            <SideForm />
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
}

export default Page;
