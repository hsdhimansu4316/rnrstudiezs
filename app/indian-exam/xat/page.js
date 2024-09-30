"use client";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";
import Accordion from "react-bootstrap/Accordion";
import "bootstrap/dist/css/bootstrap.min.css";
import SideForm from "@/components/SideForm";

function Page() {
    const syllabusData = [
        { semester: "What is the XAT exam?", content: "The Xavier Aptitude Test (XAT) is a national-level test given by XLRI Jamshedpur to people who want to get into MBA and PGDM programs at more than 160 of India's best business schools." },
        { semester: "What are the requirements for applying for the XAT?", content: "To take the XAT, students must have a bachelor's degree from a recognized university earned over at least three years in any field. Last-year students who are waiting for their results can also apply." },
        { semester: "What does the XAT test include?", content: "The XAT test includes Verbal and Logical Ability, Quantitative Ability and Data Interpretation, Decision Making, General Knowledge, and Essay Writing. It is computer-based and lasts 3.5 hours." },
        { semester: "Does the XAT test have negative markings?", content: "Yes, you lose -0.25 points for every wrong answer and -0.10 points for not answering more than eight questions in a row. The only part that doesn't lose points is the General Knowledge section." },
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
                            <a href="#">Indian Exam</a>
                        </li>
                    </ul>
                    <h2 className="inner-banner__title">XAT</h2>
                </div>
            </section>
            <section className="course-details">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="course-details__content">
                                <div className="course-details__top">
                                    <div className="course-details__top-left">
                                        <h2 className="course-details__title">XAT</h2>
                                    </div>
                                </div>

                                <div className="tab-content course-details__tab-content ">
                                    <div className="tab-pane show active  animated fadeInUp" role="tabpanel" id="overview">
                                        <p className="course-details__tab-text">XAT is a popular national-level MBA entrance exam conducted by the Xavier Labour Relation Institute (XLRI) in Jamshedpur, India. With over 70 years of history, XLRI's XAT selects the best applicants for its prestigious management programs. XAT results, one of the hardest entrance tests, are accepted by 11 XAMI member institutes, 83 associate institutes, and over 600 other top Indian B-schools. 
 
                                        </p>
                                        <h2 className="become-teacher__subtitle">XAT Exam Eligibility Criteria

                                        </h2>

                                        <ul className="">
                                        <li>A Bachelor's degree from a recognized university, with at least three years of study in any field.</li>
<li>You can still apply even if you are waiting for the results of your last year of college.</li>
<li>There are no set age or grade requirements.</li>

                                        </ul>
                                        <h2 className="become-teacher__subtitle">XAT Registration & Application
                                        </h2>

                                        <ol type="1">
                                        <li>To register for the XAT, go to xatonline.in and click on the "register" tab.</li>
<li>Make a new account to get the XAT ID and link to register.</li>
<li>Choose a password to protect your XAT account.</li>
<li>Sign in and choose the XAT test city you want to take.</li>
<li>Put your picture and name online.</li>
<li>Pick your country and school, then fill in the rest of the information asked for.</li>
<li>You need to pay the registration fee and send in your application.</li>


                                        </ol>

                                        <h2 className="become-teacher__subtitle">XAT Syllabus
                                        </h2>
                                        <p className="course-details__tab-text">Following are the topics included in the XAT Syllabus:
                                        </p>
                                        <ul>
                                        <li><strong>Verbal and Logical Ability:</strong> Reading Comprehension, Vocabulary, Analogy, Parajumble, Grammar, Critical Reasoning, Fill in the Blanks, etc.</li>
<li><strong>Decision Making:</strong> Data Arrangement, Conditioning, Grouping, Complex Arrangement, Caselets, Assumptions, Premises, Conclusions, etc.</li>
<li><strong>Quantitative Ability & Data Interpretation:</strong> Arithmetic, Geometry, Mensuration, Percentage, Surds and Indices, Algebra, Mensuration, Bar Diagrams, Pie Charts, Tables, Data Interpretation, etc.</li>
<li><strong>General Knowledge:</strong> Science, Economy, Business, Politics, Static GK, Sports, Prize and Award, World, Government, Constitution of India, etc.</li>


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
