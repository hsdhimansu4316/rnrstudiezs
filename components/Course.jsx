"use client";
import React from 'react';
import Link from 'next/link';

// JSON array of courses
const courses = [
  {
    id: 1,
    category: "MBA",
    title: "An MBA is the most sought-after advanced degree in business. It is perfect for those who want to gain business skills.",
    image: "/assets/images/img/mba.png",

    link: "/career-counselling-for-mba",
    color: "color-1"
  },
  {
    id: 2,
    category: "MBBS",
    title: "MBBS is the most popular career choice among aspiring medical students. It can lead to incredible chances and a solid medical career.",
    image: "/assets/images/img/mbbs.png",
    link: "#",
    color: "color-2"
  },
  {
    id: 3,
    category: "BTech",
    title: "An MBA is the most sought-after advanced degree in business. It is perfect for those who want to gain business skills.",
    image: "/assets/images/img/btech.png",
    link: "#",
    color: "color-1"
  }
];

const Courses = () => {
  return (
    <>
      <section className="course-one__top-title home-one">
        <div className="container">
          <div className="block-title mb-0">
            <h2 className="block-title__title">
              Explore our <br /> popular courses
            </h2>
          </div>
        </div>
        <div className="course-one__top-title__curve" />
      </section>

      <section className="course-one course-one__teacher-details home-one">
        <div className="container">
          <div className="row">
            {courses.map((course) => (
              <div key={course.id} className="col-lg-4 col-md-6">
                <div className={`course-one__single ${course.color}`}>
                  <div className="course-one__image">
                    <img src={course.image} alt={course.title} className="img-fluid" />
                  </div>
                  <div className="course-one__content">
                    <Link href={course.link} className="course-one__category">
                      {course.category}
                    </Link>
                    <h2 className="course-one__title">{course.title}</h2>
                    <Link href={course.link} className="course-one__link">
                      See Preview
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Courses;
