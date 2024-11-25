"use client";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React, { useState } from "react";
import { FaMapMarkerAlt, FaMoneyBillWave, FaBook, FaBars } from "react-icons/fa";
import MumbaiColleges from "@/components/data/MumbaiColleges";
import BhubaneswarCollege from "@/components/data/BhubaneswarCollege";
import ManipalCollege from "@/components/data/ManipalCollege";
import Coimbatore from "@/components/data/Coimbatore";
import HydrabadCollege from "@/components/data/HydrabadCollege";
import Ahamadabadcollege from "@/components/data/Ahamadabadcollege";
import IndoreColleges from "@/components/data/IndoreColleges";
import KeralaColleges from "@/components/data/KeralaColleges";
import KolkataColleges from "@/components/data/KolkataColleges";
import Locknow from "@/components/data/Locknow";
import PuneColleges from "@/components/data/PuneColleges";
import VelloreColleges from "@/components/data/VelloreCollege";
import BangloreCollege from "@/components/data/BangloreCollege";
import Delhi from "@/components/data/Delhi";
import Derhadun from "@/components/data/Derhadun";
import Goa from "@/components/data/Goa";

function Page() {
    const [selectedCity, setSelectedCity] = useState("MUMBAI");
    const [isSidebarOpen, setIsSidebarOpen] = useState(false); // State to manage sidebar visibility on mobile

    // City-wise universities
    const cityWiseUniversities = {
      MUMBAI: MumbaiColleges,
      BHUBANESWAR: BhubaneswarCollege,
      MANIPAL: ManipalCollege,
      COIMBATORE: Coimbatore,
      HYDERABAD: HydrabadCollege,
      AHMADABAD: Ahamadabadcollege,
      INDORE: IndoreColleges,
      KERALA: KeralaColleges,
      KOLKATA: KolkataColleges,
      LUCKNOW: Locknow,
      PUNE: PuneColleges,
    //   VELLORE: VelloreColleges,
      BANGALORE: BangloreCollege,
      DELHI: Delhi,
      DERHADUN: Derhadun,
      GOA:Goa,
  };
    // Get universities based on the selected city
    const universities = cityWiseUniversities[selectedCity];

    return (
        <>
            <Navbar />
            <section className="college-sec">
                <div className="container-fluid mba-college-sec">
                    <div className="row">
                        {/* Toggle button for Mobile View */}
                       
                        {/* Sidebar */}
                        <div
                            className={`col-md-2 sidebar ${isSidebarOpen ? "open" : ""}`}
                        >
                            <h3 className="pb-3" style={{ color: "#F7931E" }}>Select City</h3>
                            <div className="city-list">
                                {Object.keys(cityWiseUniversities).map((city) => (
                                    <div
                                        key={city}
                                        className={`city-item ${selectedCity === city ? "active" : ""}`}
                                        onClick={() => {
                                            setSelectedCity(city);
                                            setIsSidebarOpen(false); // Close sidebar on city selection in mobile
                                        }}
                                    >
                                        {city}
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* University List */}
                        <div className="col-md-10">
                            <div className="block-title">
                                <h2 className="block-title__title">
                                    Top Universities/Colleges in {selectedCity}
                                </h2>
                                <div className="underline"></div>
                            </div>
                            <div className="mobile-toggle d-md-none">
                            <button
                                className="btn btn-secondary"
                                onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                            >
                                <FaBars /> Select City
                            </button>
                        </div>

                            <div className="row university-grid">
                                {universities.map((uni) => (
                                    <div className="col-md-3 col-sm-4" key={uni.id}>
                                        <div className="university-card">
                                            <div className="image-container">
                                                <img
                                                    src={uni.imgSrc}
                                                    alt={uni.title}
                                                    className="university-image img-fluid"
                                                />
                                            </div>
                                            <div className="card-details">
                                                <h3 className="university-title">{uni.title}</h3>
                                                <ul className="details-list">
                                                    <li className="detail-item">
                                                        <FaMapMarkerAlt /> {/* Icon for Location */}
                                                        <span className="location">{uni.location}</span>
                                                    </li>
                                                    {/* <li className="detail-item">
                                                        <FaBook /> 
                                                        <span className="course-name">{uni.course}</span>
                                                    </li> */}
                                                    {/* <li className="detail-item">
                                                        <FaMoneyBillWave /> 
                                                        <span className="fees">{uni.fees}</span>
                                                    </li> */}
                                                    <li className="detail-item">
                                                        <button className="btn btn-primary">Apply Now</button>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
}

export default Page;
