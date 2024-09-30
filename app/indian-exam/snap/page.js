"use client";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";
import Accordion from "react-bootstrap/Accordion";
import "bootstrap/dist/css/bootstrap.min.css";
import SideForm from "@/components/SideForm";

function Page() {
    const syllabusData = [
        { semester: "What is the SNAP test?", content: "Candidates for MBA programs at the Institute of Symbiosis International (Deemed University) [SIU] must take the common, required Symbiosis National Aptitude (SNAP) Computer-Based Test (CBT) at Test Centers." },
        { semester: "Can SNAP be written multiple times?", content: "ICandidates can take three SNAP tests. If a candidate takes multiple tests, the better score will be used for percentile calculation without normalization. A thorough, statistically validated process will frame distinct questions under a specific theme across question papers. Normal spread ensures that applicants who take one or more tests are not unfairly favored." },
        { semester: "Is it necessary to apply to business school programs separately from SNAP?", content: "Yes, you need to apply to business school programs independently of SNAP. Enrolling in any of these courses costs Rs. 1000/-." },
        { semester: "What are the eligibility requirements for the SNAP Entrance Test?", content: "Graduate from any recognized/statutory university or institute with at least 50% (45% for SC/ST). The Association of Indian Universities (AIU) issues equivalency certificates to foreign university graduates. Candidates must verify all foreign degrees/qualifications with AIU before applying to SIU programs. Final-year students can take SNAP. " },
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
                    <h2 className="inner-banner__title">SNAP</h2>
                </div>
            </section>
            <section className="course-details">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="course-details__content">
                                <div className="course-details__top">
                                    <div className="course-details__top-left">
                                        <h2 className="course-details__title">SNAP</h2>
                                    </div>
                                </div>

                                <div className="tab-content course-details__tab-content ">
                                    <div className="tab-pane show active  animated fadeInUp" role="tabpanel" id="overview">
                                        <p className="course-details__tab-text">For admission to the Master of Business Administration and Postgraduate Diploma in Management programs offered by its sixteen member institutes, Symbiosis International (Deemed) University administers the Symbiosis National Aptitude Test, commonly known as the SNAP Test. Courses in MBA and PGDM are available at the SIU in a wide range of popular and specialty specializations. When applying for MBA degrees, SNAP scores are accepted by SIU constituent institutes and JK Business School-Gurgaon.</p>
                                        <h2 className="become-teacher__subtitle">SNAP Exam Eligibility Criteria</h2>

                                        <ul className="">
                                            <li>SNAP is open to graduates of recognized universities and institutes with at least 50% aggregate (45% for SC/ST/PWD candidates).</li>
                                            <li>Candidates in their final year of graduation can also take SNAP.</li>
                                            <li>SNAP has no age limit, but candidates must be 18 or older to graduate.</li>
                                            <li>International students must receive an AIU certificate of equivalency to apply for SNAP.</li>
                                        </ul>
                                        <h2 className="become-teacher__subtitle">SNAP Registration & Application</h2>

                                        <ol type="1">
                                            <li>Visit snaptest.org or the SNAP website.</li>
                                            <li>Click 'Apply Now'.</li>
                                            <li>On the new page, click 'Register.'</li>
                                            <li>Click the check box after reading the instructions.</li>
                                            <li>Enter all requested information.</li>
                                            <li>Choose exam dates and cities.</li>
                                            <li>Upload a recent passport photo.</li>
                                            <li>Save and next to the next page.</li>
                                            <li>Pay the exam charges.</li>
                                            <li>Enter academic info, choose courses, and fill in the address box.</li>
                                            <li>A payment window for college selection will appear.</li>
                                            <li>Your SNAP application will be sent after payment.</li>
                                        </ol>

                                        <h2 className="become-teacher__subtitle">SNAP Syllabus</h2>
                                        <p className="course-details__tab-text">Following are the topics included in the SNAP Syllabus:</p>
                                        <ul>
                                            <li>
                                                <strong>General English (Verbal Reasoning, Verbal Ability):</strong> Syllogisms, Analogies, Grammar, Antonym-Synonym, One Word Substitution, Similar Sounding Words, Para jumbles, Fill in the Blanks.
                                            </li>
                                            <li>
                                                <strong>Quantitative, Data interpretation & Data Sufficiency (QA, DI-DS):</strong> Trigonometry, Geometry, Algebra, Ratio and Proportion, Percentages, Partnership, Time-Speed-Distance, Data Interpretation.
                                            </li>
                                            <li>
                                                <strong>Analytical and Logical Reasoning (A-LR):</strong> Column Graphs, Pie Chart, Coding and Decoding, Puzzles.
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
