"use client";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";
import Accordion from "react-bootstrap/Accordion";
import "bootstrap/dist/css/bootstrap.min.css";
import SideForm from "@/components/SideForm";

function Page() {
    const syllabusData = [
        { semester: "What is the ATMA exam marking scheme?", content: "ATMA exam marks are +1 for correct answers and 0.25 for incorrect answers. " },
        { semester: "What are the ATMA Quantitative Skills exam's key topics? ", content: "Arithmetic, Algebra, Percentage, Profit and Loss, Ratio and Proportion, Modern Math, Geometry, Number System, Permutation and Combination, Time, Speed and Distance, and Quadratic Equations are significant ATMA quantitative skills topics. " },
        { semester: "How do you download the ATMA test admission card? ", content: "ATMA test admission cards can be downloaded from the official website when the exam authority makes the link public. " },
        { semester: "What are the ATMA exam selection pre-admission rounds?", content: "If the applicants pass the Group Discussion, Written Ability Test, and Personal Interview, ATMA institutions will choose candidates. " },
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
                    <h2 className="inner-banner__title">ATMA
                    </h2>
                </div>
            </section>
            <section className="course-details">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="course-details__content">
                                <div className="course-details__top">
                                    <div className="course-details__top-left">
                                        <h2 className="course-details__title">ATMA
                                        </h2>
                                    </div>
                                </div>

                                <div className="tab-content course-details__tab-content ">
                                    <div className="tab-pane show active  animated fadeInUp" role="tabpanel" id="overview">
                                        <p className="course-details__tab-text">The national entrance test ATMA is conducted by AIMS (Association of Indian Management School). It is a single-window test for MBA, PGDM, MMS, and other postgraduate degrees and is conducted 4-5 times a year. Over 500 Indian colleges accept ATMA results.
                                        </p>
                                        <h2 className="become-teacher__subtitle">ATMA Exam Eligibility Criteria
                                        </h2>

                                        <ul className="">
                                        <li>A bachelor's degree from a recognized university is required. Students in their last year can apply.</li>
<li>Candidates with CA degrees can apply.</li>
<li>An undergraduate degree with at least 50% grades is required.</li>
<li>Only Indians can apply for ATMA.</li>
<li>Applicants must be 21 or older. ATMA has no maximum age.</li>
<li>ATMA attempts are unlimited.</li>

                                        </ul>
                                        <h2 className="become-teacher__subtitle">ATMA  Registration & Application</h2>

                                        <ol type="1">
                                        <li>Online ATMA registration begins with fee payment.</li>
<li>After paying fees, candidates can fill out ATMA applications.</li>
<li>In the ATMA application form, candidates must enter PID, name, postal address, email ID, date of birth, mobile number, preferred test city, educational qualification, exact percentage in SSC, HSC, and Graduation, and choice of institutes for reporting ATMA score.</li>
<li>Upload all relevant documents, including passport photo and digital signature.</li>
<li>After registration, candidates will receive ATMA login credentials. The password will be sent to their email addresses.</li>

                                        </ol>

                                        <h2 className="become-teacher__subtitle">ATMA  Syllabus</h2>
                                        <p className="course-details__tab-text">Following are the topics included in the ATMA Syllabus:</p>
                                        <ul>
                                        <li><strong>Analytical Reasoning:</strong> Linear Arrangements, Number Series, Circular Arrangements, Blood Relationship Tests, Family Trees, etc.</li>
<li><strong>Verbal Skills:</strong> Reading Comprehension, Grammar, English Usage Errors, Para jumbles, etc.</li>
<li><strong>Quantitative Skills:</strong> Algebra, Time-Speed-Distance, Geometry, Graph, Quadratic and Linear Equations, Number Systems, etc.</li>

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
