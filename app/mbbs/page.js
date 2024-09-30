import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import React from 'react'

function page() {
  return (
    <>
    <Navbar/>
       <section className="inner-banner">
        <div className="container">
          <ul className="list-unstyled thm-breadcrumb">
            <li><a href="#">Home</a></li>
            <li className="active"><a href="#">Course Details</a></li>
          </ul>
          <h2 className="inner-banner__title">MBBS</h2>
        </div>
      </section>
      <section className="course-details">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="course-details__content">
                
                <div className="course-details__top">
                  <div className="course-details__top-left">
                    <h2 className="course-details__title">Improve editing skills</h2>
                  </div>
                  <div className="course-details__top-right">
                    <a href="#" className="course-one__category">marketing</a>
                  </div>
                </div>
                <div className="course-one__image">
                  <img src="/assets/images/course-d-1.jpg" alt="" />
                  <i className="far fa-heart" />
                </div>
                <ul className="course-details__tab-navs list-unstyled nav nav-tabs" role="tablist">
                  <li>
                    <a className="active" role="tab" data-toggle="tab" href="#overview">Overview</a>
                  </li>
                </ul>
                <div className="tab-content course-details__tab-content ">
                  <div className="tab-pane show active  animated fadeInUp" role="tabpanel" id="overview">
                    <p className="course-details__tab-text">Aelltes port lacus quis enim var sed efficitur turpis
                      gilla
                      sed sit Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                      Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a type specimen book. It has
                      survived
                      not only five centuries, but also the leap into electronic typesetting, remaining
                      essentially unchanged.</p>
                    <br />
                    <p className="course-details__tab-text">It was popularised in the 1960s with the release of
                      Letraset
                      sheets containing Lorem Ipsum passages, and more recently with desktop publishing
                      software
                      like Aldus PageMaker including versions of lorem ipsum amet finibus eros. Lorem Ipsum is
                      simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                      industry’s standard dummy text ever since the 1500s, when an unknown printer took a
                      galley
                      of type and scrambled it to make a type specimen book. It has survived not only five
                      centuries, but also the leap into electronic typesetting.</p>
                    <br />
                    <ul className="list-unstyled course-details__overview-list">
                      <li>It has survived not only five centuries</li>
                      <li>Lorem Ipsum is simply dummy text of the new design</li>
                      <li>Printng and type setting ipsum</li>
                      <li>Take a look at our round up of the best shows</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="course-details__meta">
                <a href="#" className="course-details__meta-link">
                 <h5>Odisha</h5>
                </a>
                <a href="#" className="course-details__meta-link">
                 <h5>Andhra Pradesh</h5>
                </a>
                <a href="#" className="course-details__meta-link">
                 <h5>Telengana</h5>
                </a>
                <a href="#" className="course-details__meta-link">
                 <h5>West Bengal</h5>
                </a>
                <a href="#" className="course-details__meta-link">
                  <h5>Chhattisgarh</h5>
                </a>
                <a href="#" className="course-details__meta-link">
                <h5>Karnataka</h5>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer/>
    </>
  )
}

export default page
