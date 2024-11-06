"use client"
import React, { useState } from 'react';
import { Accordion } from "react-bootstrap";

// JSON Array with questions and answers
const faqData = [
    {
        question: "What is career counselling?",
        answer: "Professional career counselling is a method that considers a person's interests, skills, and aspirations to help them choose their desired professional path.",
    },
    {
        question: "What makes career guidance important?",
        answer: "Career planning and coaching help you define goals, strategies, and options based on your aptitude, interests, personality, values, and abilities. With a clear strategy and guidance, you can decide the best study options for your career.  ",
    },
    {
        question: "What is MBA career counselling? ",
        answer: "MBA career counselling is a service that advises aspiring MBA students on their chosen career and specialization options and future employment opportunities. ",
    },
    {
        question: "Can MBA career counselling benefit you? ",
        answer: "Yes! Through MBA career counselling, you can get guidance to make the right decision for your academic and professional future. It offers tailored career counselling, application strategies, market research, and help in changing careers..",
    },
    {
        question: "Why Choose RNR Studiezs?",
        answer: " Career and educational preparation requires self-awareness. Knowing your professional interests, values, abilities, personality type, and preferences will help you choose career fields, key areas of study and training programs, and education pathways that match your personality. ",
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