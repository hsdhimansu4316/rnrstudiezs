"use client"; // This is required for client-side components in Next.js

import { useState, useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import "bootstrap/dist/css/bootstrap.min.css"; // Bootstrap for alerts

function Popupbox() {
    const [showPopup, setShowPopup] = useState(false); // Control popup visibility
    const [loading, setLoading] = useState(false); // Loading state for form submission
    const [successMessage, setSuccessMessage] = useState(""); // State for success alert

    // Form validation schema using Yup
    const validationSchema = Yup.object({
        name: Yup.string().required("Name is required"),
        email: Yup.string().email("Invalid email format").required("Email is required"),
        phone: Yup.string()
            .matches(/^[0-9]{10}$/, "Phone number must be 10 digits")
            .required("Phone number is required"),
    });

    // Formik setup
    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            phone: "",
        },
        validationSchema,
        onSubmit: async (values, { resetForm }) => {
            setLoading(true);
            try {
                const response = await fetch("/api/contact", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(values),
                });

                if (response.ok) {
                    // Form submission success
                    setSuccessMessage("Form submitted successfully!");
                    resetForm();

                    // Close the popup after form submission
                    setTimeout(() => {
                        setShowPopup(false); // Close popup
                    }, 1000); // Optional: 1 second delay before closing
                } else {
                    throw new Error("Form submission failed");
                }
            } catch (error) {
                setSuccessMessage("Something went wrong. Please try again.");
            } finally {
                setLoading(false);
                setTimeout(() => setSuccessMessage(""), 5000); // Hide success message after 5 seconds
            }
        },
    });

    // Show popup after 3 seconds and repeat every 10 minutes
    useEffect(() => {
        const timeoutId = setTimeout(() => setShowPopup(true), 3000);
        // const intervalId = setInterval(() => setShowPopup(true), 600000);

        return () => {
            clearTimeout(timeoutId);
            // clearInterval(intervalId);
        };
    }, []);

    // Function to close the popup
    const closePopup = () => setShowPopup(false);

    if (!showPopup) return null; // Don't render if popup is hidden

    return (
        <>
            <div className="popupOverlay">
                <div className="popupContent">
                    <span className="closeBtn" onClick={closePopup}>&times;</span>
                    <div className="popupLeft">
                        <img
                            src="/assets/images/img/popupimg.png"
                            alt="Sign-up Visual"
                            className="popupImg"
                        />
                    </div>
                    <div className="popupRight">
                        <h2 className="pb-5 text-center">ENQUIRY NOW</h2>
                        
                        {/* Show Bootstrap Success Alert */}
                        {successMessage && (
                            <div className="alert alert-success d-flex align-items-center" role="alert">
                                <i className="bi bi-check-circle-fill"></i>
                                <div className="ms-2">{successMessage}</div>
                            </div>
                        )}

                        {/* Form using Formik */}
                        <form onSubmit={formik.handleSubmit}>
                            <div className="mb-3">
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Name"
                                    className="form-control"
                                    value={formik.values.name}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    required
                                />
                                {formik.touched.name && formik.errors.name ? (
                                    <div className="text-danger">{formik.errors.name}</div>
                                ) : null}
                            </div>

                            <div className="mb-3">
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Email"
                                    className="form-control"
                                    value={formik.values.email}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    required
                                />
                                {formik.touched.email && formik.errors.email ? (
                                    <div className="text-danger">{formik.errors.email}</div>
                                ) : null}
                            </div>

                            <div className="mb-3">
                                <input
                                    type="text"
                                    name="phone"
                                    placeholder="Phone"
                                    className="form-control"
                                    value={formik.values.phone}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    required
                                />
                                {formik.touched.phone && formik.errors.phone ? (
                                    <div className="text-danger">{formik.errors.phone}</div>
                                ) : null}
                            </div>

                            <button type="submit" className="btn btn-primary" disabled={loading}>
                                {loading ? "Submitting..." : "Submit"}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Popupbox;
