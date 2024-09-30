"use client"
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const ContactSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    
});

const ContactPage = () => {
    const handleSubmit = async (values, { setSubmitting, resetForm }) => {
        const response = await fetch("/api/contact", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(values),
        });

        if (response.ok) {
            alert("Message sent successfully");
            resetForm();
        } else {
            alert("Failed to send message");
        }
        setSubmitting(false);
    };

    return (
        <>
            <Navbar />
            <section className="gre_inner-banner  new_inner">
                <div className="container forpadding">
                    <ul className="list-unstyled thm-breadcrumb">
                        <li>
                            <a href="#">Home</a>
                        </li>
                        <li className="active">
                            <a href="#">CONTACT</a>
                        </li>
                    </ul>
                      {/* <p className="contactbredcum">Confused about your career choices?  Let us help you find your best-fit career! 
                      </p>
                      <p className="contactbredcum">RnRStudiezs is here to provide the best career guidance and counselling for students, focusing on helping them achieve successful and fulfilling careers.
                      </p> */}
                    
                </div>
            </section>

            <section className="contact-one">
                <div className="container">
                    <h2 className="contact-one__title text-center">
                        Get in touch <br />
                        with us
                    </h2>

                    <Formik
                        initialValues={{ name: "", email: "", phone:"", message: "" }}
                        validationSchema={ContactSchema}
                        onSubmit={handleSubmit}
                    >
                        {({ isSubmitting }) => (
                            <Form className="contact-one__form">
                                <div className="row low-gutters">
                                    <div className="col-lg-12">
                                        <Field type="text" name="name" placeholder="Your Name" required />
                                        {/* <ErrorMessage name="name" component="div" className="error" /> */}
                                    </div>

                                    <div className="col-lg-6">
                                        <Field type="text" name="email" placeholder="Email Address"  required/>
                                        {/* <ErrorMessage name="email" component="div" className="error" /> */}
                                    </div>
                                    <div className="col-lg-6">
                                        <Field type="phone" name="phone" placeholder="Phone" required />
                                        {/* <ErrorMessage name="phone" component="div" className="error" /> */}
                                    </div>

                                    <div className="col-lg-12">
                                        <Field as="textarea" name="message" placeholder="Write Message" />
                                        {/* <ErrorMessage name="message" component="div" className="error" /> */}
                                        <div className="text-center">
                                            <button type="submit" className="contact-one__btn thm-btn" disabled={isSubmitting}>
                                                Submit 
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </Form>
                        )}
                    </Formik>

                    <div className="result text-center" />
                </div>
            </section>
            <Footer />
        </>
    );
};

export default ContactPage;






{/* <section className="contact-info-one">
<div className="container">
    <div className="row">
        <div className="col-lg-4">
            <div className="contact-info-one__single wow fadeInDown" data-wow-duration="1500ms">
                <div className="contact-info-one__icon">
                    <i className="kipso-icon-manager" />
                </div>

                <h2 className="contact-info-one__title">About Us </h2>

                <p className="contact-info-one__text">
                    Lorem ipsum is simply free text <br /> available in the market to use <br />
                    deliver satisfaction.
                </p>
            </div>
        </div>

        <div className="col-lg-4">
            <div className="contact-info-one__single wow fadeInUp" data-wow-duration="1500ms">
                <div className="contact-info-one__icon">
                    <i className="kipso-icon-placeholder" />
                </div>

                <h2 className="contact-info-one__title">Our Address</h2>

                <p className="contact-info-one__text">
                    855 Road Broklyn Street, <br />
                    600 New York, United States of <br /> America
                </p>
            </div>
        </div>

        <div className="col-lg-4">
            <div className="contact-info-one__single wow fadeInDown" data-wow-duration="1500ms">
                <div className="contact-info-one__icon">
                    <i className="kipso-icon-contact" />
                </div>

                <h2 className="contact-info-one__title">Contact Info</h2>

                <p className="contact-info-one__text">
                    needhelp@kipso.com <br />
                    444 888 0000 <br /> &nbsp;{" "}
                </p>
            </div>
        </div>
    </div>
</div>
</section> */}