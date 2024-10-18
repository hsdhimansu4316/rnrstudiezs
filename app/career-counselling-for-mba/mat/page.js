"use client";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";
import Accordion from "react-bootstrap/Accordion";
import "bootstrap/dist/css/bootstrap.min.css";

function Page() {
    const syllabusData = [
        { semester: "What is MAT?", content: "Each year, lakhs of candidates apply to top management schools to study finance, information systems, strategy, marketing, or operations for a global career. To get into a B-school, one can take management entrance examinations. The Management Aptitude Test is an all-India test. AIMA&#39;s Centre for Management Services (CMS) provides testing and other management services." },
        { semester: "Who can appear for MAT?", content: "Students who have graduated from approved universities can take the MAT. Those who are in their final years can also apply." },
        { semester: "How often is MAT held annually?", content: "The MAT is administered four times yearly: in February, May, September, and December. The scorecard can be used for the whole year." },
        { semester: "Does the CAT exam have any age requirements?", content: "No, there is no upper age limit to take the CAT exam." },
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
                    <h2 className="inner-banner__title">MAT</h2>
                </div>
            </section>
            <section className="course-details">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="course-details__content">
                                <div className="course-details__top">
                                    <div className="course-details__top-left">
                                        <h2 className="course-details__title">MAT</h2>
                                    </div>
                                </div>

                                <div className="tab-content course-details__tab-content ">
                                    <div className="tab-pane show active  animated fadeInUp" role="tabpanel" id="overview">
                                        <p className="course-details__tab-text">In India, the Management Aptitude Test (MAT) is one of the most well-known entrance
exams for admission to different management programs. Nationwide, aspiring
management professionals practice extensively to ace this test.</p>
                                        <h2 className="become-teacher__subtitle">MAT Exam Eligibility Criteria</h2>
                                        <p className="course-details__tab-text">Want to take the MAT exam? Here are the eligibility requirements:</p>
                                        <ul className="">
                                        <li>Candidates must have graduated from a recognized university in any field.</li>
<li>Professional degrees like CA, CS, and ICWA are eligible for the MAT entrance exam.</li>
<li>Candidates in their final year of college can take MAT.</li>
<li>AIMA does not set MAT age limits.</li>
<li>CGPA and grade percentages will be calculated using a technique certified by the respective Institute in compliance with the participating management institute's qualifying criteria.</li>
<li>Candidates can take the MAT exam multiple times till they pass.</li>
<li>No work experience is needed for MAT.</li>


                                        </ul>
                                        <h2 className="become-teacher__subtitle">MAT Registration &amp; Application</h2>
                                        <p className="course-details__tab-text">Here’s how to register for the MAT exam:</p>
                                        <ol type="1">
                                        <li>Candidates must register with their email and mobile number to apply for the MAT.</li>
<li>Candidates will then receive an OTP to validate their email and mobile number.</li>
<li>Candidates can check in to the platform with their login credentials after verification.</li>
<li>MAT applicants must supply scanned copies of their passport-sized photo and signature to complete the application. The standards require that all information be presented in the correct format.</li>


                                        </ol>

                                        <h2 className="become-teacher__subtitle">MAT Syllabus</h2>
                                        <p className="course-details__tab-text">The MAT exam syllabus 2024 typically covers the following sections:</p>
                                        <ul>
                                        <li>Language Comprehension: This component tests English reading comprehension, grammar, vocabulary, and verbal reasoning.</li>
    <li>Math Skills: This component tests candidates' knowledge of arithmetic, algebra, geometry, trigonometry, and statistics.</li>
    <li>Data Analysis and Sufficiency: Candidates must interpret and analyze data from tables, charts, graphs, and diagrams.</li>
    <li>Intelligent and Critical Reasoning: This component tests applicants' logical reasoning, critical thinking, and analytical skills using puzzles, analogies, series, and syllogisms.</li>
    <li>Current Business &amp; Economic Conditions: This component covers economics, global issues, awards, films, sports, and conventional general knowledge.</li>

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
