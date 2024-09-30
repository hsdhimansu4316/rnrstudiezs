"use client"
import React, { useState } from "react";
import PopupForm from "./PopupForm";

function StickyButton() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
    <>
      <div className="floating-container">
      
        <div className="widbtn">
        
        <button className="floatbtn floating-image" onClick={handleShow}><i class="animation"></i>Talk to our Expert!<i class="animation"></i>
    </button></div>
    <PopupForm show={show} handleClose={handleClose} />
    </div>
    </>
  )
}

export default StickyButton
