"use client";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";
import Accordion from "react-bootstrap/Accordion";
import "bootstrap/dist/css/bootstrap.min.css";
import SideForm from "@/components/SideForm";
import Metadata from "../Metadata";

function Page() {
    return (
        <>
            <Metadata title="Top Career Counselling Programs for Students | RNR Studiezs" description="Explore expert career counselling programs at RNR Studiezs. Get personalized guidance for students and graduates in Bhubaneswar to shape your future today!" />
            <Navbar />
            <section className="gre_inner-banner new_inner">
                <div className="container">
                    <ul className="list-unstyled thm-breadcrumb">
                        <li>
                            <a href="/">Home</a>
                        </li>
                        {/* <li className="active">
                            <a href="#">Abroad Exam</a>
                        </li> */}
                    </ul>
                    <h2 className="inner-banner__title">CAREER COUNSILING</h2>
                </div>
            </section>
            <section className="course-details">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="course-details__content">
                                {/* <div className="course-details__top">
                                    <div className="course-details__top-left">
                                        <h2 className="course-details__title">TOEFL</h2>
                                    </div>
                                </div> */}

                                <div className="tab-content course-details__tab-content ">
                                    <div className="tab-pane show active  animated fadeInUp" role="tabpanel" id="overview">
                                        <h2 className="become-teacher__subtitle">Find The Career That Suits You Best With Career Counselling Programs</h2>
                                        <p className="course-details__tab-text">Are you looking for the right career path as a fresh graduate but unsure where to start? With expert career guidance and counselling for students, RnR Studiezs can help you choose the right path to professional fulfillment.</p>
                                        <p className="course-details__tab-text">Our goal is to give you the confidence and clarity to make smart decisions, reach your potential, and have a successful career. </p>

                                        <h2 className="become-teacher__subtitle">Our goal is to give you the confidence and clarity to make smart decisions, reach your potential, and have a successful career. </h2>

                                        <ol type="1">
                                            <li>
                                                <strong>Helps choose a career: </strong>
                                            </li>
                                            <p>Counseling is about guiding. A lack of knowledge and direction may lead you to choose a course that doesn't match your ambitions. This is where career counselling for college students helps! They are professionals who assess your interests, aptitude, and personality and recommend the best choice for your growth.</p>
                                            <li>
                                                <strong>Boost confidence: </strong>
                                            </li>
                                            <p>Lack of knowledge and direction might hinder career success and confidence. Career coaching provides the necessary information to overcome these difficulties and chart a successful career path.</p>
                                            <li>
                                                <strong>Inspire students to learn: </strong>
                                            </li>
                                            <p>Career mentoring goes beyond confidence. It gives unique insights to help you improve professionally. </p>
                                        </ol>

                                        <h2 className="become-teacher__subtitle">How Can We Help?</h2>
                                        <p className="course-details__tab-text">RnR Studiezs is a leading choice for career counselling after graduation. We are here to help students at a crucial point in their educational journey by providing them with the career coaching they need.</p>
                                        <ul>
                                            <li>
                                                <strong>Career Assessments</strong>
                                            </li>
                                            <p>With our career counselling programs, you can explore your passions, learn about your personality type, and evaluate your skill level. We conduct thorough assessments to learn more about your goals and interests and then recommend career choices that are a good fit.</p>
                                            <li>
                                                <strong>Career Counselling </strong>
                                            </li>
                                            <p>Our professional career guidance and counselling help us to understand your passions and strengths in a way that is uniquely suited to you. Together, you and our team of seasoned experts can create a unique strategy for your professional future.</p>
                                            <li>
                                                <strong>Availability And Convenience </strong>
                                            </li>
                                            <p>By providing both online and phone sessions, we ensure that the best career counselling for students is accessible to everybody, regardless of where they live.</p>
                                            <li>
                                                <strong>Expert Guidance</strong>
                                            </li>
                                            <p>Our education counsellor for students can help you identify and develop the skills needed for your chosen career path.</p>
                                        </ul>
                                        <h2 className="become-teacher__subtitle">Ready To Explore Your Career Options? Get Started Right Away!</h2>
                                        <p className="course-details__tab-text">Our expert career counselling in Bhubaneswar is here to help you reach your full potential in your professional life. Contact our dedicated team to get the help you need to succeed!</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
}

export default Page;
