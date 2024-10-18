"use client"
import React, { useState } from 'react';
import { Accordion } from "react-bootstrap";

// JSON Array with questions and answers
const faqData = [
    {
        question: "What is a RNR Studiezs?",
        answer: "A Posturator is a Patented, portable seat cushion with adjustable internal components engineered to correct and maintain the user’s perfect posture.",
    },
    {
        question: " What RNR providing?",
        answer: "Many of our users have great posture, either from proper seating habits or never having developed bad seating habits. The Best reason for using the Posturator is that it maintains perfect posture by form &amp; function even when sitting for long periods of time. Simply adjust it to your preferences and stay healthy. ",
    },
    {
        question: "How does the RNR work? ",
        answer: "The Posturator has several versatile components that can be adjusted to guide the user’s spine toward a corrective trajectory by simply leaning on it or reclining. The user’s body weight is cradled with comfort as the spinal structure is guided by the adjustable ‘spine profile’. The user can select to use it either for correcting hunchback (Kyphotic) posture, OR to maintain their perfect posture with simple and easy adjustments and modes of use. (See the Safety &amp; Instructions Guide). ",
    },
    {
        question: "Does the RNR is good for MBA ? ",
        answer: "There are several well known spinal deformities according to the medical industry. The most common ones are kyphosis (Hunchback), Scoliosis (Lateral, side to side curvature of the spine) and slipped disk (Herniated vertebra). The Posturator offers correction for the Hunchback condition as well as slipped disk. It’s important to know that when making vertically it’s essential to keep the integrity of the corrective trajectory. This is why the Posturator not only corrects hunchback condition but also prevents interruption (Caused by a slipped disc) by compensating for slipped disc with Spine Nodules’, to prevent the slipped disc from interrupting the corrective trajectory of the spinal structure. Without the compensation provided by the ‘spine nodules’ it’s virtually unlikely to correct the spinal trajectory to the portion of the spine that is above the slipped disc.  ",
    },
    {
        question: "How RNR giving facilitiea ",
        answer: " The Posturator is engineered for portability and weighs approximately 2kg (USA 4 pounds). ",
    },
   
 
];

const Faq = () => {
    // State to track the number of visible FAQs and the toggle state
    const [visibleFaqs, setVisibleFaqs] = useState(10);
    const [isExpanded, setIsExpanded] = useState(false); // Track if it's expanded or collapsed

    // Function to toggle between showing more or less FAQs
    const toggleFaqs = () => {
        if (isExpanded) {
            // If currently expanded, show only 10 items
            setVisibleFaqs(10);
        } else {
            // If not expanded, show all items
            setVisibleFaqs(faqData.length);
        }
        setIsExpanded(!isExpanded); // Toggle the state
    };

    return (
        <section className="faq-sec" >
        <div className="container">
          <div className="block-title">
            <h2 className="block-title__title">FAQs</h2>
            <div className="underline"></div>
          </div>
          
          <div className="row">
            {/* Left Column for Accordion */}
           
      
            {/* Right Column for Image */}
            <div className="col-md-5 d-flex justify-content-center align-items-center">
              <img
                src="/assets/images/img/faq.png" // Replace with your image URL
                alt="FAQ Image"
                className="img-fluid"
              />
            </div>
            <div className="col-md-7">
              <Accordion>
                {faqData.slice(0, visibleFaqs).map((item, index) => (
                  <Accordion.Item eventKey={index.toString()} key={index}>
                    <Accordion.Header>
                      <p className="faq-head m-0">{item.question}</p>
                    </Accordion.Header>
                    <Accordion.Body>
                      <div dangerouslySetInnerHTML={{ __html: item.answer }} />
                    </Accordion.Body>
                  </Accordion.Item>
                ))}
              </Accordion>
            </div>
          </div>
      
          {/* Toggle button between "View More" and "View Less" */}
          {/* <div className="text-center mt-4">
            <button className="btn-primary view-btn" onClick={toggleFaqs}>
              {isExpanded ? 'View Less' : 'View More'}
            </button>
          </div> */}
        </div>
      </section>
      
    );
};

export default Faq;