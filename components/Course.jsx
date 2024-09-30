"use client"
import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Link from 'next/link';

function Courses() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <>
      <section className="course-one__top-title home-one">
        <div className="container">
          <div className="block-title mb-0">
            <h2 className="block-title__title">Explore our <br /> popular courses</h2>
          </div>
        </div>
        <div className="course-one__top-title__curve" />
      </section>

      <section className="course-one course-one__teacher-details home-one">
        <div className="container">
          <Slider {...settings} className="course-one__carousel">
            <div className="item">
              <div className="course-one__single color-1">
                <div className="course-one__image">
                  <img src="assets/images/course1.jpg" alt="" />
                  <i className="far fa-heart" />
                </div>
                <div className="course-one__content">
                  <Link href="/mba" className="course-one__category">MBA</Link>
                  <h2 className="course-one__title">An MBA is the most sought-after advanced degree in business. It is perfect for those who want to gain business skills.</h2>
                  <div className="course-one__meta">
                    <a ><i className="far fa-clock" /> 10 Hours</a>
                    <a ><i className="far fa-folder-open" /> 6 Lectures</a>
                    <a href=""></a>
                  </div>
                  <Link href="/mba" className="course-one__link">See Preview</Link>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="course-one__single color-2">
                <div className="course-one__image">
                  <img src="assets/images/course2.jpg" alt="" />
                  <i className="far fa-heart" />
                </div>
                <div className="course-one__content">
                  <a href="#" className="course-one__category">Mbbs</a>
                  <h2 className="course-one__title">MBBS is the most popular career choice among aspiring medical students. It can lead to incredible chances and a solid medical career.</h2>
                  <div className="course-one__meta">
                    <a ><i className="far fa-clock" /> 10 Hours</a>
                    <a ><i className="far fa-folder-open" /> 6 Lectures</a>
                    <a ></a>
                  </div>
                  <a  className="course-one__link">See Preview</a>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </section>
    </>
  )
}

export default Courses;
