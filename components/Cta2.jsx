import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import RegistrationForm from "./RegistrationForm";
import SideForm from "./SideForm";

function Cta2() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-7">
                    <div className="course-details__top-left">
                        <h2 className="course-details__title faqhead">GET CAREER ADVICE FROM EXPERTS</h2>
                    </div>
                    {/* <h1 className="display-4">Please Feel Free to Contact Us</h1> */}

                    <p className="text-muted">Choosing a profession is a huge step, and we know how scary and doubtful it can be. Your career and your life will be forever changed by the choices you make today. Here’s where we can help! Our consultants can help you make better decisions about your professional future.</p>
                    <p className="text-muted">Need help deciding if an MBA is the right path for you? Our team of professional counselors is here to listen and offer career guidance for MBA students.</p>
                    {/* <div className="d-flex align-items-center">
                        <div className="btn btn-primary btn-lg rounded-circle d-flex align-items-center justify-content-center" style={{ width: '50px', height: '50px' }}>
                            <i className="fa fa-phone" aria-hidden="true"></i>
                        </div>
                        <div className="ml-3">
                            <p className="h5 m-0">Call to ask any question</p>
                            <p className="h4 text-primary m-0">+91-9108510058</p>
                        </div>
                    </div> */}
                </div>
                <div className="col-md-5 ">
                    {/* <RegistrationForm/> */}
                    <SideForm />
                </div>
            </div>
        </div>
    );
}

export default Cta2;
