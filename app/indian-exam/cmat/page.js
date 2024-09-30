"use client";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";
import Accordion from "react-bootstrap/Accordion";
import "bootstrap/dist/css/bootstrap.min.css";
import SideForm from "@/components/SideForm";

function Page() {
    const syllabusData = [
        { semester: "Who can take the CMAT?", content: "The fundamental CMAT eligibility standards require three years of graduation." },
        { semester: "What is the CMAT exam's maximum age?", content: "The CMAT has no age limit. Candidates of any age can take it if they meet the other conditions." },
        { semester: "Does CMAT eligibility depend on number of attempts?", content: "The number of attempts does not affect CMAT eligibility. Candidates who pass CMAT qualifying conditions can take as many attempts as they choose." },
        { semester: "Does CMAT eligibility alter annually?", content: "No, CMAT eligibility does not change annually. However, the governing body can make modifications as needed." },
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
                    <h2 className="inner-banner__title">CMAT

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
                                        <h2 className="course-details__title">CMAT

                                        </h2>
                                    </div>
                                </div>

                                <div className="tab-content course-details__tab-content ">
                                    <div className="tab-pane show active  animated fadeInUp" role="tabpanel" id="overview">
                                        <p className="course-details__tab-text">The Common Management Admission Test (CMAT) is a computer-based exam managed by the National Testing Agency and administered online. 
This test makes it easier for participating institutions associated with the AICTE to choose qualified graduate applicants for admission to their management courses.
</p>
                                        <h2 className="become-teacher__subtitle">CMAT Exam Eligibility Criteria
                                        </h2>

                                        <ul className="">
                                        <li>Candidates must be Indian.</li>
<li>They need a Bachelor's degree from a recognized institution or institute.</li>
<li>Bachelor's degrees must be three years or longer.</li>
<li>Candidates must have scored at least 50% (45% for reserved categories) in the qualifying test.</li>
<li>Students in their last year (10+2+3) are eligible for the CMAT. However, they must submit their results and degree certificates for admission.</li>
<li>The CMAT exam is open to all ages.</li>

                                        </ul>
                                        <h2 className="become-teacher__subtitle">CMAT Registration & Application
                                        </h2>

                                        <ol type="1">
                                        <li>Online registration</li>
<li>Filling out the CMAT application form 2024</li>
<li>Uploading scanned photo and signature</li>
<li>Payment of CMAT fees</li>
<li>Selecting test center</li>

                                        </ol>

                                        <h2 className="become-teacher__subtitle">CMAT  Syllabus
                                        </h2>
                                        <p className="course-details__tab-text">Following are the topics included in the CMAT Syllabus:
                                        </p>
                                        <ul>
                                        <li><strong>Quantitative Techniques & Data Interpretation:</strong> Algebra, Time-Speed-Distance, Alligation & Mixtures, Geometry, Graph, Quadratic and Linear Equations, etc.</li>
<li><strong>Logical Reasoning:</strong> Analytical Reasoning, Linear Arrangements, Number Series, Matrix Arrangements, Blood Relationship Tests, etc.</li>
<li><strong>Language Comprehension:</strong> Reading Comprehension, Grammar, English Usage Errors, Parajumbles, etc.</li>
<li><strong>General Awareness:</strong> Economy, Business, World, Politics, Sports, Culture, Society</li>
<li><strong>Innovation & Entrepreneurship:</strong> Questions related to innovation, entrepreneurship and start-up business</li>

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
