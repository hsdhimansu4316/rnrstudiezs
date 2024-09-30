"use client"
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";
import Accordion from "react-bootstrap/Accordion";
import 'bootstrap/dist/css/bootstrap.min.css';
import SideForm from "@/components/SideForm";

function Page() {
    const syllabusData = [
        { semester: "How early should I register for the GRE?", content: "Register three to four months in advance for in-person tests to secure your preferredtest center, time, and date.", },
        { semester: "Can I retake the GRE in 21 days with a different account?", content: "Retakes are allowed within 21 days of the last GRE test. You can also take the GRE five times a year." },
        { semester: "Can one take the GRE General and Subject tests again?", content: "The computer-based GRE General test can be retaken once every 30 days and five times yearly. You can take GRE topic tests whenever they&#39;re offered. Repeat the test if you think your scores don&#39;t reflect your skills." },
        { semester: "Does the GRE General Test have an age limit?", content: "All graduate and business school applicants globally can take the GRE General test. There is no age limit." },
      
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
                    <h2 className="inner-banner__title">GRE</h2>
                </div>
            </section>
            <section className="course-details">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="course-details__content">
                                <div className="course-details__top">
                                    <div className="course-details__top-left">
                                        <h2 className="course-details__title">GRE</h2>
                                    </div>
                                </div>

                                <div className="tab-content course-details__tab-content ">
                                    <div className="tab-pane show active  animated fadeInUp" role="tabpanel" id="overview">
                                        <p className="course-details__tab-text">Beyond submitting a Statement of Purpose (SOP), Letters of Recommendation (LORs), and, if necessary, English proficiency test scores, a minimum percentile in competitive exams is required to study abroad. While the SAT and ACT are essential for undergraduate entrance, the Graduate Record Examination (GRE) is also crucial for postgraduate students.</p>
                                        <h2 className="become-teacher__subtitle">GRE Exam Eligibility Criteria</h2>
                                        <p className="course-details__tab-text">The eligibility for the GRE are:</p>
                                        <ul className="">
                                            <li>The candidate must have a graduation degree.</li>
                                            <li>Nationality is not restricted since this exam is a standardized test for pursuing a master's in various countries.</li>
                                            <li>Applicants should be 18 years or above.</li>
                                        </ul>
                                        <h2 className="become-teacher__subtitle">GRE Registration & Application</h2>
                                        <ol type="1">
                                            <li> Visit www.ets.org/gre/rrc (official site).</li>
                                            <li> Create Account.</li>
                                            <li> Provide all required information. Other than that, the ETS Account name should match the passport name.</li>
                                            <li> Choose a username and password. Additionally, this selects the security question and enters a memorable answer.</li>
                                            <li> Check and correct the information. Click back to modify. If no changes are needed, submit.</li>
                                            <li> The account is created.</li>
                                            <li> Choose the two GRE registration dates preceding your selected dates.</li>
                                            <li> Pay the GRE fee.</li>
                                        </ol>

                                        <h2 className="become-teacher__subtitle">GRE Syllabus</h2>
                                        <p className="course-details__tab-text">Following are the topics included in the GRE Syllabus:</p>
                                        <ul>
                                            <li>Analytical Writing: This component tests students' ability to simplify complicated ideas straightforwardly.</li>
                                            <li>Talking Reason: This part covers idioms, vocabulary, parallelism, critical reasoning, reading comprehension, nouns, pronouns, adjectives, text completion, verbs and tenses, subject-verb agreement, and pronoun agreement.</li>
                                            <li>Quantitative Reasoning: Questions in this part usually cover geometry, algebra, and data analysis. Read our GRE quant syllabus blog to understand this topic.</li>
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
                           <SideForm/>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
}

export default Page;
