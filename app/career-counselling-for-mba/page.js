"use client";
import React, { useState } from "react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Accordion from "react-bootstrap/Accordion";
import "bootstrap/dist/css/bootstrap.min.css";
import SideForm from "@/components/SideForm";
import Cta2 from "@/components/Cta2";
import PopupForm from "@/components/PopupForm";
import TopNav from "@/components/TopNav";
import HorizontalCta from "@/components/HorizontalCta";
import MbaBox from "@/components/MbaBox";
import Metadata from "../Metadata";

function Page() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const syllabusData = [
        { semester: "Why Should You Get An MBA?", content: "Earning an MBA degree can open up ways to better career opportunities, more resources, and lasting connections." },
        { semester: "Do you need work experience for an MBA?", content: "Prior work experience is not required for an MBA program, but it is highly recommended. With relevant work experience, you can put what you've learned in the classroom into practice and get valuable insight into the corporate world." },
        { semester: "Who is eligible to appear for MBA counselling?", content: "Candidates who meet the MBA admission exam cutoff can attend the counseling sessions."
 },
       
    ];

    return (
        <>
        <Metadata
         title="Expert Career Guidance for MBA Students | Free Counseling Online"
        description="Unlock your potential with tailored career guidance for MBA students. Get free online counseling from expert career counselors to enhance your career path today!"
        />
            <TopNav />
            <Navbar />
            <section className="inner-banner innermba">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 mba_banner_left">
                            <h2 className="course-details__title" style={{color:"#fff"}}>Expert MBA Career Guidance</h2>
                            <p className="banner_text_mba">Every candidate's profile and preferences are different, and we know what to do to help you find the best business school.

                            </p>
                            <button type="button" className="thm-btn become-teacher__form-btn applybtn" onClick={handleShow}>
                            Book Your Consultation

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
                                        <h2 className="course-details__title">Career Counselling For MBA - Connect Yourself To The Business World
                                        </h2>
                                    </div>
                                </div>
                                <div className="tab-content course-details__tab-content ">
                                    <div className="tab-pane show active animated fadeInUp" role="tabpanel" id="overview">
                                        {/* <p className="course-details__tab-text">Dip into the business world with a two-year postgraduate MBA program that will sharpen your intellectual, managerial, and business skills. </p> */}
                                        <br />
                                        <p className="course-details__tab-text">An MBA degree is the most popular choice for students worldwide and is a stepping stone to success. Many ambitious professionals apply for this degree every year. 
From learning how to set objectives and allocating resources to leading teams, an MBA prepares you with the fundamental management, leadership, and soft skills to manage the different aspects of an organization. Lead the organization confidently in marketing, finance, HR, or accounting. Take our free career counselling for MBA to learn what this degree can offer you!
</p>
                                        <MbaBox/>
                                        <h2 className="become-teacher__subtitle">Eligibility</h2>
                                        <ul>
                                            <li>A minimum of 50% marks in graduation in any field such as BBA/BSC/BA/B TECH.</li>
                                            <li>Must have passed class 12th or senior secondary examination with English as a compulsory subject with minimum 50% marks.
                                            </li>
                                            <li>Must have good interpersonal skills.</li>
                                            <li>Mathematics or business studies are subjects for some institutes.
                                            </li>
                                        </ul>
                                        <p className="course-details__tab-text"></p>
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
            <Footer />
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
