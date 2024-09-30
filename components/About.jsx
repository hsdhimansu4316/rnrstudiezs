import Link from 'next/link'
import React from 'react'

function About() {
  return (
    <>
      <section className="about-two">
        <div className="container">
          <div className="row">
            <div className="col-xl-6">
              <div className="about-two__content">
                <div className="block-title text-left">
                  <h2 className="block-title__title">Explore, Plan, Succeed 
Career Counseling You Can Trust

                    </h2>{/* /.block-title__title */}
                </div>{/* /.block-title */}
                <p className="about-two__text">At RnRStudiezs , we believe in empowering you to navigate your career path. We have top-notch qualified counselors, reliable career assessments, and in-depth career counseling sessions to help you choose the right path in your professional life.</p>{/* /.about-two__text */}
                <div className="about-two__single-wrap">
                  <div className="about-two__single">
                    <div className="about-two__single-icon">
                      <i className="kipso-icon-professor" />{/* /.kipso-icon-professor */}
                    </div>{/* /.about-two__single-icon */}
                    <div className="about-two__single-content">
                      <p className="about-two__single-text">Personalised Psychometric Assessment</p>{/* /.about-two__single-text */}
                    </div>{/* /.about-two__single-content */}
                  </div>{/* /.about-two__single */}
                  <div className="about-two__single">
                    <div className="about-two__single-icon">
                      <i className="kipso-icon-knowledge" />{/* /.kipso-icon-professor */}
                    </div>{/* /.about-two__single-icon */}
                    <div className="about-two__single-content">
                      <p className="about-two__single-text">Pick The Right College
                        </p>{/* /.about-two__single-text */}
                    </div>{/* /.about-two__single-content */}
                  </div>{/* /.about-two__single */}
                </div>{/* /.about-two__single-wrap */}
                <Link href="/about-us" className="thm-btn">Learn More</Link>{/* /.thm-btn */}
              </div>{/* /.about-two__content */}
            </div>{/* /.col-lg-6 */}
            <div className="col-xl-6 d-flex justify-content-xl-end justify-content-sm-center">
              <div className="about-two__image">
                <span className="about-two__image-dots" />{/* /.about-two__image-dots */}
                <img src="assets/images/about.jpg" alt="" />
               
              </div>{/* /.about-two__image */}
            </div>{/* /.col-lg-6 */}
          </div>{/* /.row */}
        </div>{/* /.container */}
      </section>
    </>
  )
}

export default About
