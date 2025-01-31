"use client";
import React, { useState } from "react";
import "./bestCc.css";
import PopupForm from '../PopupForm';

function ExpertCounsellingCe() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
    <section className="paddingTop paddingbottom">
    <div className="expert-counselling-container">
        <div className="container">
      <div className="row">
        {/* Left Column */}
        <div className="col-md-6 image-column">
          <div className="image-wrapper">
            <img
              src="https://www.hitbullseye.com/video-counselling/images/video-counselling.png"
              alt="Counselling"
              className="background-image"
            />
            <div className="floating-box">
              <h4>One to One</h4>
              <h2>Expert Counselling</h2>
              <p>
              Consult with experts one-on-one to get the support you need. Whether in-home video
counselling or in-person sessions, we&#39;re here to help you find a career path that aligns
with your beliefs, interests, and abilities.
              </p>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="col-md-6 text-column">
         
          <h4>Online Counselling</h4>
          <ul>
            <li>Get flexible scheduling and a safe, convenient home set-up.</li>
            <li>Learn what it takes to clear the top engineering college admission exams.</li>
            <li>Discuss post-engineering job opportunities.</li>
           
          </ul>
          <h4>Offline Counselling</h4>
          <ul>
            <li>Meet with experts in a relaxed and professional environment.</li>
            <li>Get one-on-one guidance as you get ready.</li>
            <li>Develop a personalised plan for getting into college and beyond.</li>
           
          </ul>
          <p>Our services are flexible enough to accommodate your needs, whether you&#39;d prefer to
          meet with us in person or online. Contact a counsellor now!</p>

       
          <button className="book-slot-btn" onClick={handleShow}>Book Your Session!</button>
        </div>
      </div>
    </div>
    <PopupForm show={show} handleClose={handleClose} />
    </div>
    </section>
    </>
  );
}

export default ExpertCounsellingCe;
