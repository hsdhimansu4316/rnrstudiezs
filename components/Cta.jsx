import React from 'react'

function Cta() {
  return (
    <>
        <section className="video-two">
        <div className="container">
          <img src="assets/images/scratch-1-1.png" className="video-two__scratch" alt="" />
          <div className="row">
            <div className="col-lg-7">
              <div className="video-two__content">
                <h2 className="video-two__title">Discover Your Best-Fit Career With Our Career Guidance Tools And Expert Career Counsellors
                <br />
                  your knowledge base</h2>{/* /.video-two__title */}
                <a href="/contact-us" className="thm-btn">Learn More</a>{/* /.thm-btn */}
              </div>{/* /.video-two__content */}
            </div>{/* /.col-lg-7 */}
            <div className="col-lg-5 d-flex justify-content-lg-end justify-content-sm-start">
             
            </div>{/* /.col-lg-5 d-flex justify-content-end */}
          </div>{/* /.row */}
        </div>{/* /.container */}
      </section>
    </>
  )
}

export default Cta
