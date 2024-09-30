"use client";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";
import Accordion from "react-bootstrap/Accordion";
import "bootstrap/dist/css/bootstrap.min.css";
import SideForm from "@/components/SideForm";

function Page() {
    const syllabusData = [
        { semester: "What's the MBA (IB) Programme?", content: "The MBA (IB) focuses on international business. Unlike other B-schools, IIFT students receive a general MBA and learn about international perspectives on multiple topics through courses, including global marketing, finance, strategy, and others." },
        { semester: "What specializations does the IIFT MBA (IB) Program offer?", content: "In the first year, a three-trimester core course covers all management functions. In the third trimester, students learn foreign concepts in three functional domains. Students can specialize in marketing, finance, trade, or systems in the second year." },
        { semester: "What is the mode of the IIFT exam?", content: "IIFT entrance exam is computer-based. It's done in one sitting at test centers. Every applicant will be given a computer to enter their answers with a mouse at the exam center." },
        { semester: "IIFT exam preparation takes how many months?", content: "Candidates for the IIFT exam should prepare for six to nine months. The exam preparation should involve studying a chapter, doing sample problems, and memorizing equations for six to eight hours daily. " },
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
                    <h2 className="inner-banner__title">IIFT</h2>
                </div>
            </section>
            <section className="course-details">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="course-details__content">
                                <div className="course-details__top">
                                    <div className="course-details__top-left">
                                        <h2 className="course-details__title">IIFT</h2>
                                    </div>
                                </div>

                                <div className="tab-content course-details__tab-content ">
                                    <div className="tab-pane show active  animated fadeInUp" role="tabpanel" id="overview">
                                        <p className="course-details__tab-text">The Indian Institute of Foreign Trade (IIFT) is a highly esteemed institution that offers courses in international business management. To get into its MBA in International Business (IB) program, you must take the IIFT entrance exam, which is conducted nationally by the National Testing Agency (NTA). 
                                        </p>
                                        <h2 className="become-teacher__subtitle">IIFT Exam Eligibility Criteria
                                        </h2>

                                        <ul className="">
                                            <li>The candidate must have a graduation degree of 3 years in any discipline.
                                            </li>
                                            <li>There is no age limit for appearing for this exam.
                                            </li>
                                            <li>Final-year students who are waiting for their results can also appear. 
                                            </li>
                                        </ul>
                                        <h2 className="become-teacher__subtitle">IIFT  Registration & Application</h2>

                                        <ol type="1">
                                        <li>Register at the NTA-IIFT website.</li>
<li>Log in and fill out the application form.</li>
<li>Upload photos, signatures, and certificates.</li>
<li>Verify your email address.</li>
<li>Pay the application fee.</li>

                                        </ol>

                                        <h2 className="become-teacher__subtitle">IIFT Syllabus
                                        </h2>
                                        <p className="course-details__tab-text">Following are the topics included in the IIFT Syllabus:
                                        </p>
                                        <ul>
                                        <li><strong>Verbal Ability and Reading Comprehension:</strong> This component includes reading comprehension, identifying synonyms, grammatically correct/incorrect sentences, one-word substitution, and jumbled paragraphs.</li>
<li><strong>Data Interpretation and Logical Reasoning:</strong> This part covers line graph + bar, bar graph + line, table, pie chart + table, circular arrangement, tournaments, scheduling, linear arrangement, coding, and puzzles.</li>
<li><strong>Quantitative Reasoning:</strong> Questions in this part usually cover arithmetic, geometry, algebra, modern mathematics, and numbers.</li>
<li><strong>General Awareness:</strong> This part involves current affairs and static GK questions.</li>

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
