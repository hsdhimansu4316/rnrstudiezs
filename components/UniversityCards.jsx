
"use client";
import React from "react";


const UniversityCard = () => {
  const universities = [
    {
      id: 1,
      imgSrc: "https://nexgenonline.net/_next/image/?url=%2Fassets%2Fimg%2Fcollegeimage%2Fmuj.jpg&w=640&q=7",
      title: "IIT Madras - Indian Institute of Technology [IITM]",
      location: "Chennai, Tamil Nadu | AICTE",
      course: "BE/B.Tech",
      fees: "2.15 Lacs First Year Fees",
      ranking: "Ranked 278 out of 1498 QS",
    },
    {
      id: 2,
      imgSrc: "https://nexgenonline.net/_next/image/?url=%2Fassets%2Fimg%2Fcollegeimage%2Fmuj.jpg&w=640&q=7",
      title: "IIMA - Indian Institute of Management",
      location: "Ahmedabad, Gujarat | UGC",
      course: "MBA/PGDM",
      fees: "25.00 Lacs Total Fees",
      ranking: "Ranked 421 out of 2000 CWUR",
    },
    {
      id: 3,
      imgSrc: "https://nexgenonline.net/_next/image/?url=%2Fassets%2Fimg%2Fcollegeimage%2Fmuj.jpg&w=640&q=7",
      title: "Chandigarh University [CU]",
      location: "Chandigarh, Chandigarh | NCTE, AICTE",
      course: "BE/B.Tech",
      fees: "2.04 Lacs First Year Fees",
      ranking: "Ranked 751 out of 1498 QS",
    },
  ];

  return (
    <div className="university-card-wrapper">
      <h2 className="section-title">Top Universities/Colleges</h2>
      <div className="university-cards">
        {universities.map((uni) => (
          <div className="university-card" key={uni.id}>
            <div className="image-container">
              <img
                src={uni.imgSrc}
                alt={uni.title}
                className="university-image"
                width={400}
                height={250}
              />
              <div className="college-overlay">
                <h3 className="university-title">{uni.title}</h3>
                <p className="location">{uni.location}</p>
              </div>
            </div>
            <div className="card-details">
              <p className="course-name">{uni.course}</p>
              <p className="fees">{uni.fees}</p>
              <hr />
              <ul className="details-list">
                <li>{uni.ranking}</li>
                <li>View All Courses and Fees</li>
                <li>Download Brochure</li>
                <li>Compare</li>
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UniversityCard;
