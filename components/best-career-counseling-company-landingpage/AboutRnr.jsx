import React from "react";
import "./bestCc.css";

function AboutRnr() {
    return (
        <section className="paddingbottom paddingTop secondary-sec ">
            <div className="container">
                <div className="block-title">
                    <h2 className="block-title__title">About RNR Studiezs!</h2>
                    <div className="underline"></div>
                </div>
                <p className="text-center">Count on us for all your MBA preparation needs! We are going strong as a career counseling firm thanks to our growing numbers of happy clients. Our years of experience and commitment have assisted countless people in achieving their goals of attending elite B Schools.</p>
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

export default AboutRnr;
