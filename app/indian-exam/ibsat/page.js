"use client";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";
import Accordion from "react-bootstrap/Accordion";
import "bootstrap/dist/css/bootstrap.min.css";
import SideForm from "@/components/SideForm";

function Page() {
    const syllabusData = [
        { semester: "How difficult is IBSAT compared to other MBA admission exams?", content: "While moderately challenging, IBSAT is easier than CAT, XAT, CMAT, and NMAT." },
        { semester: "How much time do I need to prepare for IBSAT?", content: "You can prepare for the IBSAT and other tests together! You can also self-study or get expert instruction. Two to three months is the ideal duration for IBSAT prep." },
        { semester: "Are MBA programs at ICFAI colleges tied to a management quota?", content: "There is no quota for management or non-resident Indians." },
        { semester: "How does the Final Selection Process work?", content: "The two parts of the IBS selection process are the group discussion and the individual interview." },
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
                    <h2 className="inner-banner__title">IBSAT
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
                                        <h2 className="course-details__title">IBSAT
                                        </h2>
                                    </div>
                                </div>

                                <div className="tab-content course-details__tab-content ">
                                    <div className="tab-pane show active  animated fadeInUp" role="tabpanel" id="overview">
                                        <p className="course-details__tab-text">IBS is widely recognized as a top business school in India. Offering a wide range of courses and a huge platform for students to access education brings new inspiration into their lives. With IBS's help, students can choose a fulfilling career path. Those seeking admission to the Master of Business Administration (MBA) program in Business Management at IBS must take the online entrance exam, the ICFAI Business Studies Aptitude Test (IBSAT).</p>
                                        <h2 className="become-teacher__subtitle">IBSAT Exam Eligibility Criteria</h2>

                                        <ul className="">
                                            <li>Candidates must have completed a three or four-year graduate degree from a recognized institute or university in the 10, +2, +3, or 10, +2, +4 pattern.</li>
                                            <li>Applicants need at least 50% in their bachelor's degree test (final year). Graduate students in their last year can take the IBSAT.</li>
                                        </ul>
                                        <h2 className="become-teacher__subtitle">IBSAT Registration & Application</h2>

                                        <ol type="1">
                                            <li>Read the eligibility requirements before applying to IBSAT.</li>
                                            <li>Go to the ICFAI Business School website and click “Apply to IBS.”</li>
                                            <li>Fill out the IBSAT application with a valid email, mobile number, and postal address.</li>
                                            <li>IBSAT exam fees must be paid. Candidates will receive IBSAT login credentials via email after payment.</li>
                                            <li>Complete the IBSAT application online by logging in.</li>
                                            <li>Recheck and edit all details.</li>
                                            <li>Payment of IBS registration costs follows final submission.</li>
                                            <li>The screen will show the final payment receipt after submitting the application fees. Print it for future reference.</li>
                                        </ol>

                                        <h2 className="become-teacher__subtitle">IBSAT Syllabus</h2>
                                        <p className="course-details__tab-text">Following are the topics included in the IBSAT Syllabus:</p>
                                        <ul>
                                            <li>
                                                <strong>Verbal Ability:</strong> The Verbal Ability section includes questions on vocabulary, grammar, synonyms, antonyms, fill-in-the-blanks, word relationships, error spotting, phrase replacement, jumbled sentences, and other themes.
                                            </li>
                                            <li>
                                                <strong>Reading Comprehension:</strong> The Reading Comprehension syllabus includes challenging passages on Current Affairs, Business & Economics, Social Issues, Literature, and other themes.
                                            </li>
                                            <li>
                                                <strong>Quantitative Aptitude:</strong> The questions are designed to assess the quantitative aptitude of candidates with a basic understanding of arithmetic, algebra, geometry, mensuration, and modern maths.
                                            </li>
                                            <li>
                                                <strong>Data Adequacy & Data Interpretation:</strong> Tables, Bar Charts, Pie Charts, Line Graphs, Data Tables, Statements-Inference, Statement-Conclusion based on Data & Graphs.
                                            </li>
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
