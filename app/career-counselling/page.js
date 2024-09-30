"use client";
import React, { useState } from "react";


import Accordion from "react-bootstrap/Accordion";
import "bootstrap/dist/css/bootstrap.min.css";
import SideForm from "@/components/SideForm";
import Cta2 from "@/components/Cta2";
import PopupForm from "@/components/PopupForm";
import TopNav from "@/components/TopNav";
import HorizontalCta from "@/components/HorizontalCta";
import MbaBox from "@/components/MbaBox";
import Navbar2 from "@/components/Navbar2";
import Footer2 from "@/components/Footer2";

function Page() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const syllabusData = [
        { semester: "What is the difference between an MBA and a PGDM degree?", content: "MBAs are theory-based programs that teach business and finance basics. As universities are attached to a single major university, courses are rigorous and have the same curriculum. The focus is on technical and analytical skills.", content2: "Post Graduate Diploma in Management (PGDM) is a diploma. This application-based training emphasizes real-world management abilities. It is taught in AICTE-accredited colleges with a flexible curriculum that includes case studies, on-site training, and simulations. This course focuses on soft skills, practical knowledge, and employability." },
        { semester: "What are the qualifications needed to apply for an MBA?", content: "To be eligible for an MBA program, you need a bachelor's degree from an accredited institution with a minimum cumulative GPA of 50% (45% for SC/ST/PwD). Each college has its own set of requirements for admission." },
        { semester: "What are the requirements for getting an MBA from IIM?", content: "For the MBA program at IIM, you need a bachelor's degree at least three years old and was awarded after the 10+2 exam. The degree must have been awarded by a recognized board and have an aggregate grade of at least 50% (or 45% for special categories such as SC, ST, and PwD). A valid CAT or GMAT score is also required." },
        { semester: "Is work experience required for an MBA?", content: "MBA applicants do not need work experience, but some work experience is preferable. Previous work experience will provide real-world business experience and help apply theoretical information in class." },
        { semester: "How do I choose the right college to pursue an MBA degree?", content: "Many prestigious universities offer MBA programs with various specializations. To make the right choice, consider taking career guidance for MBA students. It has the potential to provide complete help, authentic academic guidance, and certain admission to prestigious universities." },
    ];

    return (
        <>
            <TopNav />
            <Navbar2/>
            <section className="inner-banner innermba">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 mba_banner_left">
                            <h2 className="course-details__title" style={{color:"#fff"}}>MBA: The Pathway to Executive Excellence</h2>
                            <p className="banner_text_mba">An MBA is not just a degree; it's a transformative journey that can give the skills, knowledge, and confidence to succeed in executive roles. Confused if it's the right path for you? Get the answer you are looking for with our personalized career counselling!
                            </p>
                            <button type="button" className="thm-btn become-teacher__form-btn applybtn" onClick={handleShow}>
                            Talk To Our Consultant
                    </button> 
                        </div>
                        <div className="col-md-4" style={{paddingTop:'15px'}}>
                         <div className="sticky-side-form">
                       
                                <SideForm />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="course-details">
                <div className="container mbacontainer">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="course-details__content">
                                <div className="course-details__top">
                                    <div className="course-details__top-left">
                                        <h2 className="course-details__title">MBA: The Gateway to Global Opportunities</h2>
                                    </div>
                                </div>
                                <div className="tab-content course-details__tab-content ">
                                    <div className="tab-pane show active animated fadeInUp" role="tabpanel" id="overview">
                                        <p className="course-details__tab-text">Dip into the business world with a two-year postgraduate MBA program that will sharpen your intellectual, managerial, and business skills. </p>
                                        <br />
                                        <p className="course-details__tab-text">Getting an MBA is, without a doubt, a life-altering experience. This program helps students develop a wide range of skills, sharpens their analytical thinking, and introduces them to new ideas. Aspiring candidates, however, often have difficulties when making career choices. Here is where career counselling for MBA becomes crucial! The correct guidance can open doors for aspiring MBA students, setting them on the path to a fulfilling career in the ever-changing field of management and business.</p>
                                        <MbaBox/>
                                        <h2 className="become-teacher__subtitle">Eligibility</h2>
                                        <p className="course-details__tab-text">MBA eligibility requires graduation from an accredited university in any discipline with a 50% Score.</p>
                                        <h2 className="become-teacher__subtitle">Entrance Exams For Top B-School Admission</h2>
                                        <p className="course-details__tab-text">Top MBA entrance exams allow aspiring candidates to prove their abilities and enter their dream MBA college.</p>
                                        <h2 className="become-teacher__subtitle">Here are a few of the most popular tests:</h2>
                                        <ul>
                                            <li><strong className="entexam">CAT:</strong>  With this exam, you can enter over a hundred prestigious universities and 20 IIMs. It takes place across the final week of November.</li>
                                            <li><strong className="entexam">XAT</strong>: It connects over 170 educational institutions, including XLRI. It takes place in January. </li>
                                            <li><strong className="entexam">SNAP</strong>: Conducted by Symbiosis for admittance to more than 17 management institutes. It takes place in December.</li>
                                            <li><strong className="entexam">TISS-NET</strong>: This is an admissions test for various Master of Business Administration programs offered by the Tata Institute of Social Science. Typically, it takes place in February.</li>
                                            <li>There are also other exams such as <strong className="entexam">CMAT</strong>, the <strong className="entexam"></strong>IBSAT, the <strong className="entexam">MAT</strong>, the <strong className="entexam">MH-CET</strong> and many more.</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <div className="col-lg-3">
                            <div className="sticky-side-form">
                                <SideForm />
                            </div>
                        </div> */}
                    </div>
                   
                    </div>

                    <HorizontalCta/>
                    <section className="mt-70">
                    <div className="container">
                    <Accordion>
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
                
            </section>
            <Cta2 />
            <Footer2 />
            <PopupForm show={show} handleClose={handleClose} />
        </>
    );
}

export default Page;

{
    /* <ul className="list-unstyled thm-breadcrumb">
                        <li>
                            <a href="#">Home</a>
                        </li>
                        <li className="active">
                            <a href="#">Course Details</a>
                        </li>
                    </ul>
                    <h2 className="inner-banner__title">MBA</h2>
                    <button type="button" className="thm-btn become-teacher__form-btn applybtn" onClick={handleShow}>
                        Talk To Our Expert
                    </button> */
}
