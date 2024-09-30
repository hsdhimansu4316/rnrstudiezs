// components/PopupForm.js
"use client";
import React, { useState } from 'react';
import { Modal, Row, Col } from 'react-bootstrap';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Swal from 'sweetalert2';

const PopupForm = ({ show, handleClose }) => {
  const [loading, setLoading] = useState(false);

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      phone: '',
      topic: '',
      city:''
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Required'),
      email: Yup.string().email('Invalid email address').required('Required'),
      phone: Yup.string().required('Required'),
      topic: Yup.string().required('Required')
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
        handleClose();
      } else {
        console.error('Form submission error');
      }
    },
  });

  return (
    <Modal show={show} onHide={handleClose} className="custom-modal">
      <Modal.Header closeButton className="modal-header">
        <Modal.Title>
          <div className="course-details__top-left">
            <h2 className="course-details__title">Talk To Our Expert</h2>
          </div>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="modal-body">
        <form onSubmit={formik.handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              placeholder="Enter your name"
              name="name"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.name}
              className="form-control"
              required
            />
            
            {/* {formik.touched.name && formik.errors.name ? <div>{formik.errors.name}</div> : null} */}
          </div>
          <Row>
            <Col>
              <div className="form-group">
                <input
                  type="email"
                  placeholder="Enter your email"
                  name="email"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                  className="form-control"
                  required
                />
                {/* {formik.touched.email && formik.errors.email ? <div>{formik.errors.email}</div> : null} */}
              </div>
            </Col>
            <Col>
              <div className="form-group">
                <input
                  type="phone"
                  placeholder="Phone"
                  name="phone"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.phone}
                  className="form-control"
                  required
                />
                {/* {formik.touched.phone && formik.errors.phone ? <div>{formik.errors.phone}</div> : null} */}
              </div>
            </Col>
            
          </Row>
          <div className="form-group">
            <input
              type="text"
              placeholder="city"
              name="city"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.city}
              className="form-control"
              required
            />
            
            {/* {formik.touched.name && formik.errors.name ? <div>{formik.errors.name}</div> : null} */}
          </div>
          
          <div className="form-group">
            <select
              name="topic"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.topic}
              className="form-control"
              required
            >
              <option value="">I am a*</option>
              <option value="student">Student</option>
              <option value="parent">Parent</option>
              <option value="other">Other</option>
            </select>
            {/* {formik.touched.topic && formik.errors.topic ? <div>{formik.errors.topic}</div> : null} */}
          </div>
          
          <button type="submit" className="thm-btn become-teacher__form-btn applybtn" disabled={loading}>
            {loading ? 'Submitting...' : 'Submit'}
          </button>
        </form>
      </Modal.Body>
    </Modal>
  );
}

export default PopupForm;
