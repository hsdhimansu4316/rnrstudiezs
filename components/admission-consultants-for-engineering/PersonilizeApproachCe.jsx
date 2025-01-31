"use client";
import React, { useState } from "react";
import PopupForm from "../PopupForm";

function PersonilizeApproachCe() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <section className=" paddingTop">
        <div className="container">
         <div className="block-title">
                <h2 className="block-title__title">Personalised Counseling Options On</h2>
                <div className="underline"></div>
            </div>
      <div className="row">
        {/* Box 1 */}
        <div className="col-md-4 mb-4">
          <div className="box  personalize-box" style={{ backgroundImage: 'url(/assets/images/img/001.jpg)' }}>
            <div className="overlay">
              <h2 className="heading">Top-rated engineering entrance tests</h2>
              {/* <p className="text">This is the paragraph that will appear on hover.</p> */}
              <button className="book-slot-btn text" onClick={handleShow}>
                                    Book Slot
                                </button>
            </div>
          </div>
        </div>

        {/* Box 2 */}
        <div className="col-md-4 mb-4">
          <div className="box personalize-box" style={{ backgroundImage: 'url(/assets/images/img/002.jpg)' }}>
            <div className="overlay">
              <h2 className="heading">Post-engineering employment opportunities</h2>
              {/* <p className="text">This is the paragraph that will appear on hover.</p> */}
              <button className="book-slot-btn text" onClick={handleShow}>
                                    Book Slot
                                </button>
            </div>
          </div>
        </div>

        {/* Box 3 */}
        <div className="col-md-4 mb-4">
          <div className="box  personalize-box" style={{ backgroundImage: 'url(/assets/images/img/003.jpg)' }}>
            <div className="overlay">
              <h2 className="heading">Success Strategies for JEE and Other Admission Tests</h2>
              {/* <p className="text">This is the paragraph that will appear on hover.</p> */}
              <button className="book-slot-btn text" onClick={handleShow}>
                                    Book Slot
                                </button>
            </div>
          </div>
        </div>
      </div>
      </div>
      <PopupForm show={show} handleClose={handleClose} />

    </section>
  );
}

export default PersonilizeApproachCe;
