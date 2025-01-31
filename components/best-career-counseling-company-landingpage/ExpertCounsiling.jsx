"use client";
import React, { useState } from "react";
import "./bestCc.css";
import PopupForm from '../PopupForm';

function ExpertCounselling() {
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
              Get the help you need from academics and professionals in your field with one-on-one
counseling. Whatever works best for you—in-home video counseling or face-to-face
sessions—we&#39;re here to help you find a job that fits your interests, strengths, and values.
              </p>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="col-md-6 text-column">
         
          <h4>Online Counselling</h4>
          <ul>
            <li>Discuss post-MBA job opportunities, the CAT, and other admission
            examinations.</li>
            <li>Find out what it takes to do well on the entrance examinations for the best
            business schools.</li>
            <li>Enjoy flexible scheduling and a safe, convenient home setting.</li>
           
          </ul>
          <h4>Offline Counselling</h4>
          <ul>
            <li>Meet professionals in a relaxed or focused setting.</li>
            <li>Get personal advice for your preparation.</li>
            <li>Customize your B-School admissions and beyond strategy.</li>
           
          </ul>
          <p>Whether you prefer online or in-person sessions, we can help you achieve your goals.
          Schedule counseling today!</p>

       
          <button className="book-slot-btn" onClick={handleShow}>Book your counseling session!</button>
        </div>
      </div>
    </div>
    <PopupForm show={show} handleClose={handleClose} />
    </div>
    </section>
    </>
  );
}

export default ExpertCounselling;
