"use client";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";
import Accordion from "react-bootstrap/Accordion";
import "bootstrap/dist/css/bootstrap.min.css";

function Page() {
    const syllabusData = [
        { semester: "What is CAT?", content: "Every other year, IIMs administer the Common Admission Test to candidates seeking admission to their management and business programs. There are three components to the CAT exam:" },
        { semester: "What are the requirements for CAT eligibility?", content: "To be eligible for the CAT, a candidate must have completed or be appearing for their final year bachelor&#39;s degree examination with at least a 50% aggregate score." },
        { semester: "What is the best time to begin CAT preparation?", content: "A whole year ahead is the ideal time to begin exam preparation. With increased competitiveness and peer pressure, it is advised that CAT candidates start studying at least 11–12 months before the exam. You can review the fundamentals one more time in the last one to two months if you have free time.." },
        { semester: "Does the CAT exam have any age requirements?", content: "No, there is no upper age limit to take the CAT exam." },
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
                    <h2 className="inner-banner__title">CAT</h2>
                </div>
            </section>
            <section className="course-details">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="course-details__content">
                                <div className="course-details__top">
                                    <div className="course-details__top-left">
                                        <h2 className="course-details__title">CAT</h2>
                                    </div>
                                </div>

                                <div className="tab-content course-details__tab-content ">
                                    <div className="tab-pane show active  animated fadeInUp" role="tabpanel" id="overview">
                                        <p className="course-details__tab-text">The CAT Exam is the most in-demand MBA entrance exam conducted annually. Many
people aspire to pursue an MBA degree from a reputable institution. The CAT Exam is
required for candidates who are applying for MBA programs. If you are a graduate or
final-year student who aspires to pursue an MBA from a prestigious business school in
India, you must take the CAT.</p>
                                        <h2 className="become-teacher__subtitle">CAT Exam Eligibility Criteria</h2>
                                        <p className="course-details__tab-text">Want to take the CAT exam? Here are the eligibility requirements:</p>
                                        <ul className="">
                                        <li>You need to have a bachelor’s degree in any field.</li>
<li>Your degree should be from a recognized university.</li>
<li>You should have scored at least 50% (45% for SC, ST, and PWD/DA candidates) in your degree or an equivalent CGPA.</li>
<li>Final-year students can also take the exam.</li>

                                        </ul>
                                        <h2 className="become-teacher__subtitle">CAT Registration &amp; Application</h2>
                                        <p className="course-details__tab-text">To apply for CAT, you must visit the official website and complete the following steps:</p>
                                        <ol type="1">
                                        <li>To register on the website, you must provide basic details, including your email address, phone number, and password.</li>
<li>Please verify your enrollment by entering the one-time password (OTP).</li>
<li>Please provide your academic information and personal identification number, such as your Aadhaar, Voter ID, or passport number.</li>
<li>Submit a scanned signature and photograph.</li>
<li>Select your preferred test cities and the IIMs and courses you intend to apply for.</li>
<li>Pay the application fee through net banking or a debit/credit card.</li>

                                        </ol>

                                        <h2 className="become-teacher__subtitle">CAT Syllabus</h2>
                                        <p className="course-details__tab-text">The exam includes important topics like Math, Logic, Data Analysis, English, and
                                        Reading. Here are some subjects to focus on:</p>
                                        <ul>
                                        <li>Verbal Ability &amp; Reading Comprehension (VARC): Para Jumbles, Para Summary, Reading Comprehension, and Odd Sentence Out</li>
<li>Data Interpretation &amp; Logical Reasoning (DILR): Set Theory (Variables), Set Theory Puzzles, Puzzles with Additional Data, Coding-Decoding, and Series</li>
<li>Quantitative Aptitude (QA): Algebra, Geometry, Arithmetic, Number System, and Mensuration</li>

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
