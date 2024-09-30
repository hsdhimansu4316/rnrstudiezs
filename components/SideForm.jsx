"use client";
import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import Swal from "sweetalert2";

function SideForm() {
  const [loading, setLoading] = useState(false);

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      phone: '',
      city:''
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Required'),
      email: Yup.string().email('Invalid email address').required('Required'),
      phone: Yup.string().required('Required')
    }),
    onSubmit: async (values, { resetForm }) => {
      setLoading(true);
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      setLoading(false);
      if (response.ok) {
        window.location.href = "/thank-you";
        // Swal.fire({
        //   icon: 'success',
        //   title: 'Success',
        //   text: 'Form submitted successfully!',
         
        // });
        resetForm();
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Form submission failed!',
        });
      }
    },
  });

  return (
    <div className="become-teacher__form">
      <div className="become-teacher__form-top">
        <h2 className="become-teacher__form-title mbaformtitle">Book Your Session</h2>
      </div>
      <form onSubmit={formik.handleSubmit} className="become-teacher__form-content contactmba mbainput contact-form-validated">
        <input
          type="text"
          placeholder="Your Name"
          name="name"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.name}
          className="form-control"
          required
        />
        {/* {formik.touched.name && formik.errors.name ? <div>{formik.errors.name}</div> : null} */}

        <input
          type="text"
          placeholder="Email Address"
          name="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
          className="form-control"
          required
        />
        {/* {formik.touched.email && formik.errors.email ? <div>{formik.errors.email}</div> : null} */}

        <input
          type="text"
          placeholder="Phone Number"
          name="phone"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.phone}
          className="form-control"
          required
        />
         <input
          type="text"
          placeholder="City"
          name="city"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.city}
          className="form-control"
          required
        />
        {/* {formik.touched.phone && formik.errors.phone ? <div>{formik.errors.phone}</div> : null} */}

        <button type="submit" className="thm-btn become-teacher__form-btn applybtn" disabled={loading}>
          {loading ? 'Submitting...' : 'Submit Now'}
        </button>
      </form>
      <div className="result text-center" />
    </div>
  );
}

export default SideForm;
