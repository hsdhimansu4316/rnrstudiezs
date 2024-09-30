"use client";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";
import Accordion from "react-bootstrap/Accordion";
import "bootstrap/dist/css/bootstrap.min.css";

function Page() {
    const syllabusData = [
        { semester: "What is GMAT?", content: "The quantitative and verbal reasoning components of the GMAT entrance exam assess candidates&#39; analytical skills. Even though the GMAT is for MBA admissions, students need not study management. GMAT assesses basic math and linguistic skills required for B-School. Students without management experience should not worry about GMAT preparation. Students with logical skills can take the GMAT." },
        { semester: "How often is the GMAT conducted every year?", content: "Students in India and abroad take GMAT throughout the year. Though GMAT is administered year-round, individual exam centers may have date deviations. GMAT exam dates fill up quickly, so students may not always have their preferred day." },
        { semester: "Can I reschedule a GMAT?", content: "Log into your GMAT account at mba.com to reschedule, but it costs. Rescheduling your GMAT exam more than seven days before your appointment costs $50; seven days or less costs $250. Remember that GMAT appointments cannot be rescheduled or canceled within 24 hours." },
        { semester: "Can I retake the GMAT exam?", content: "The GMAT exam can be taken up to five times per calendar year." },
    ];

    return (
        <>
            <Navbar />
            <section className="gre_inner-banner">
                <div className="container">
                    <ul className="list-unstyled thm-breadcrumb">
                        <li>
                            <a href="#">Home</a>
                        </li>
                        <li className="active">
                            <a href="#">MBA</a>
                        </li>
                    </ul>
                    <h2 className="inner-banner__title">GMAT</h2>
                </div>
            </section>
            <section className="course-details">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="course-details__content">
                                <div className="course-details__top">
                                    <div className="course-details__top-left">
                                        <h2 className="course-details__title">GMAT</h2>
                                    </div>
                                </div>

                                <div className="tab-content course-details__tab-content ">
                                    <div className="tab-pane show active  animated fadeInUp" role="tabpanel" id="overview">
                                        <p className="course-details__tab-text">GMAC administers the GMAT, a global entrance exam. Using a computer-adaptive format, it tests applicants&#39; Standard English writing, analysis, verbal communication, quantitative reasoning, and reading comprehension. The GMAT is taken by applicants for top business institutions, especially for Master of Finance, MBA, and associated programs. Many top international business schools and colleges demand the GMAT.</p>
                                        <h2 className="become-teacher__subtitle">GMAT Exam Eligibility Criteria</h2>
                                        <p className="course-details__tab-text">The eligibility criteria for GMAT is:</p>
                                        <ul className="">
                                            <li>Applicants must be 18 years old. Candidates with GMAT eligibility can be any age.</li>
                                            <li>Parents or legal guardians must give written permission (NOC) to candidates aged 13–17.</li>
                                            <li>GMAC has not officially stated GMAT eligibility requirements.</li>
                                            <li>GMAT eligibility does not require work experience. However, applicants will be asked about their overall work experience upon registering.</li>
                                        </ul>
                                        <h2 className="become-teacher__subtitle">GMAT Registration &amp; Application</h2>
                                        <p className="course-details__tab-text">Here are the steps to register for GMAT:</p>
                                        <ol type="1">
                                            <li>Visit the official GMAT website.</li>
                                            <li>Create your account.</li>
                                            <li>Give your basic details like name, address, etc.</li>
                                            <li>Provide your academic and work details.</li>
                                            <li>Verify and submit your details.</li>
                                            <li>Schedule your exam. Choose your closest or preferred GMAT test center, then select the exam date.</li>
                                            <li>Once you have selected the preferred date, you must choose a suitable exam time.</li>
                                            <li>Pay the GMAT Registration fee online through a debit or credit card.</li>
                                        </ol>

                                        <h2 className="become-teacher__subtitle">GMAT Syllabus</h2>
                                        <p className="course-details__tab-text">The exam has four sections:</p>
                                        <ul>
                                            <li>Verbal Section: This section tests candidates' English reading comprehension, critical thinking, and sentence correction.</li>
                                            <li>Analytical Writing Test: Candidates must examine an argument and compose a clear essay expressing their viewpoints in this area.</li>
                                            <li>Quantitative Section: This section tests problem-solving and data sufficiency in math.</li>
                                            <li>Integrated Reasoning: Candidates are tested on their ability to evaluate and interpret complicated data in graphs, tables, and charts.</li>
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
