import TopNav from '@/components/TopNav'
import React from 'react'
import Navbar from "@/components/Navbar";
import Footer from '@/components/Footer';


function page() {
  return (
    <>
    <TopNav/>
    <Navbar />
     <div className="container thankyou">
        <div className="row justify-content-center">
          <div className="col-md-6 text-center">
            <i className="fas fa-check-circle text-success" style={{fontSize: '48px'}} />
            <h2 className="mt-3">Thank You!</h2>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-8 text-center">
            <p className="lead">Your submission has been received successfully. We will get back to you soon.</p>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  )
}

export default page
