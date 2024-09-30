"use client";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";
import Accordion from "react-bootstrap/Accordion";
import "bootstrap/dist/css/bootstrap.min.css";

function Page() {
    const syllabusData = [
        { semester: "1. What is NMAT?", content: "The NMAT is an MBA entrance exam for top Indian and international business institutions. GMAC administers the NMAT annually during a testing window. NMAT results are accepted for MBA admissions at NMIMS, TAPMI, SDA Bocconi, ISB, and others." },
        { semester: "How can I schedule the NMAT exam?", content: "Candidates can schedule the NMAT exam by choosing the &quot;Exam Scheduling tab&quot; on their dashboard. Candidates can select their test day, time, and location." },
        { semester: "After receiving the admission card, can you reschedule?", content: "Candidates can reschedule NMAT at least 72 hours before the exam." },
        { semester: "When can candidates get NMAT scores?", content: "After the test, candidates can get their NMAT 2024 scorecard within 48 hours." },
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
                            <a href="#">MBA</a>
                        </li>
                    </ul>
                    <h2 className="inner-banner__title">NMAT</h2>
                </div>
            </section>
            <section className="course-details">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="course-details__content">
                                <div className="course-details__top">
                                    <div className="course-details__top-left">
                                        <h2 className="course-details__title">NMAT</h2>
                                    </div>
                                </div>

                                <div className="tab-content course-details__tab-content ">
                                    <div className="tab-pane show active  animated fadeInUp" role="tabpanel" id="overview">
                                        <p className="course-details__tab-text">Candidates for MBAs or other graduate management degrees in India must decide which tests to take to pursue their dream careers. NMAT by GMAC is a national MBA entrance test for prestigious management institutes, including NMIMS, Alliance University, SRM University, BML Munjal University, VIT University, ICFAI Business School (IBS), and Ansal University. NMAT by GMAC, a computer-based test, is administered by Pearson VUE at 46 sites in India. Candidates have the option to choose their exam venue/date/time.</p>
                                        <h2 className="become-teacher__subtitle">NMAT Exam Eligibility Criteria</h2>
                                        <p className="course-details__tab-text">The eligibility criteria for NMAT is:</p>
                                        <ul className="">
                                            <li>Graduation from any stream under 10+2+3 or four years is required.</li>
                                            <li>Minimum 50% aggregate in the final year of graduation.</li>
                                            <li>NMAT is also open to students awaiting results or in their final year.</li>
                                            <li>Provisional admission is given until the graduation mark sheet and qualifying exam certificate are provided.</li>
                                        </ul>
                                        <h2 className="become-teacher__subtitle">NMAT Registration &amp; Application</h2>
                                        <p className="course-details__tab-text">Here are the steps to register for NMAT:</p>
                                        <ol type="1">
                                            <li>Visit mba.com/nmat &amp; click on "Register for NMAT by GMAC."</li>
                                            <li>Create your mba.com account by filling in the required details</li>
                                            <li>Complete your NMAT profile by filling in your mobile number and country</li>
                                            <li>Open the verification email, verify your email ID &amp; re-login by using the same email ID &amp; password</li>
                                            <li>On the NMAT Login Window, click on NMAT by the GMAC dashboard</li>
                                            <li>Fill out the NMAT registration form &amp; proceed with the payment</li>
                                        </ol>

                                        <h2 className="become-teacher__subtitle">NMAT Syllabus</h2>
                                        <p className="course-details__tab-text">The NMAT exam consists of 3 sections:</p>
                                        <ul>
                                            <li>Language Skills: Reading Comprehension, Para Forming, Error Identification, Prepositions, Sentence Completion, Analogies.</li>

                                            <li>Logical Reasoning: Critical Reasoning, Analytical Puzzles, Deductions, Other Reasoning.</li>

                                            <li>Quantitative Skills: Number Properties, Arithmetic, Algebra and Probability, DI Caselets and Tables, DI Graphs and Charts, Data Sufficiency.</li>
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
            </section>
            <Footer />
        </>
    );
}

export default Page;
