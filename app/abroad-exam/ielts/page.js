"use client";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";
import Accordion from "react-bootstrap/Accordion";
import "bootstrap/dist/css/bootstrap.min.css";
import SideForm from "@/components/SideForm";

function Page() {
    const syllabusData = [
        { semester: "Is the IELTS exam difficult to clear?", content: "If you speak English well, you can do well in IELTS. In IELTS, there is no pass or fail. You must set a target score to qualify for your desired school. Focus on the IELTS Syllabus section-by-section to prepare for the test." },
        { semester: " What's in the IELTS Academic Writing Paper?", content: "Testers must complete both Writing module tasks. In the first exercise, describe visual information in your own words. The second task requires discussing an argument, topic, or viewpoint." },
        { semester: "Can I take a test if my passport expires after booking?", content: "The IELTS test date must be rescheduled, and if the passport has expired, a valid passport must be brought to the test center." },
        { semester: "What happens if a candidate cannot take the IELTS?", content: "A candidate who fails to arrive for the test will be deemed absent and not refunded." },
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
                    <h2 className="inner-banner__title">IELTS</h2>
                </div>
            </section>
            <section className="course-details">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="course-details__content">
                                <div className="course-details__top">
                                    <div className="course-details__top-left">
                                        <h2 className="course-details__title">IELTS</h2>
                                    </div>
                                </div>

                                <div className="tab-content course-details__tab-content ">
                                    <div className="tab-pane show active  animated fadeInUp" role="tabpanel" id="overview">
                                        <p className="course-details__tab-text">IELTS has two types: academic and general training for immigration and work. It is approved at most universities globally and tests skills on four dimensions. Like TOEFL, IELTS is approved internationally and ranges from 0 to 9, with 7 being the ideal score for elite B-school admission abroad. Certain Canadian universities accept IELTS 5.5 and 6.</p>
                                        <h2 className="become-teacher__subtitle">IELTS Exam Eligibility Criteria</h2>
                                        <p className="course-details__tab-text">The eligibility for the IELTS are:</p>
                                        <ul className="">
                                            <li>IDP only requires candidates to be 16 to register for the IELTS exam.</li>
                                        </ul>
                                        <h2 className="become-teacher__subtitle">IELTS Registration & Application</h2>

                                        <ol type="1">
                                            <li>Visit the IDP Registration page.</li>
                                            <li>Select 'Register for IELTS' to create their IDP IELTS Login.</li>
                                            <li>Candidates must choose between computer-delivered and paper-based IELTS exams.</li>
                                            <li>Candidates must next choose IELTS Academic or General Training.</li>
                                            <li>Students must next choose a test city from India's IELTS test centers.</li>
                                            <li>The preceding processes will yield a list of preferred dates for candidates. Choose your date and time.</li>
                                            <li>Candidates must fill out an online application. You must also provide a clear, scanned color passport copy to finish.</li>
                                            <li>Provide registration info.</li>
                                            <li>Upload your passport copies.</li>
                                            <li>Choose which institutions to send your Score Report to.</li>
                                            <li>Recheck your information before paying.</li>
                                            <li>Pay the IELTS exam registration cost.</li>
                                            <li>Upon payment. You can print acknowledgment receipts.</li>
                                        </ol>

                                        <h2 className="become-teacher__subtitle">IELTS Syllabus</h2>
                                        <p className="course-details__tab-text">Following are the topics included in the IELTS Syllabus:</p>
                                        <ul>
                                            <li>IELTS Listening Section: The test requires listening to four recorded texts and answering questions.</li>
                                            <li>IELTS Reading Section: Test takers must read three substantial texts and answer 40 questions.</li>
                                            <li>IELTS Writing Section: Candidates must complete Writing Tasks 1 and 2 on relevant topics.</li>
                                            <li>IELTS Speaking Section: The Speaking Section has three parts: basic questions about the candidate, cue card discussions on a topic, and Part 2 questions.</li>
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
