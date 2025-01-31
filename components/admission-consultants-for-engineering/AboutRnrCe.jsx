import React from "react";
import "./bestCc.css";

function AboutRnrCe() {
    return (
        <section className="paddingbottom paddingTop secondary-sec ">
            <div className="container">
                <div className="block-title">
                    <h2 className="block-title__title">About RNR Studiezs!</h2>
                    <div className="underline"></div>
                </div>
                <p className="text-center">Get ready for your engineering journey with us! We thrive as a career consulting service
because of our increasing number of satisfied clients. Over the years, our dedication and
expertise have helped countless people achieve their dreams of entering top engineering
schools.</p>
                <div className="row">
                    {/* Box 1 */}
                    <div className="col-md-4 mb-4">
                        <div className="box shadow  text-center h-100 d-flex flex-column justify-content-center">
                            <h2 className="display-4">50+</h2>
                            <p className="number-para">Career Guide &amp; Mentors</p>
                        </div>
                    </div>

                    {/* Box 2 */}
                    <div className="col-md-4 mb-4">
                        <div className="box shadow  text-center h-100 d-flex flex-column justify-content-center">
                            <h2 className="display-4">10,000+</h2>
                            <p className="number-para"> Strategy Sessions Conducted</p>
                        </div>
                    </div>

                    {/* Box 3 */}
                    <div className="col-md-4 mb-4">
                        <div className="box shadow text-center h-100 d-flex flex-column justify-content-center">
                            <h2 className="display-4">5,000+</h2>
                            <p className="number-para">Success Stories</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutRnrCe;
