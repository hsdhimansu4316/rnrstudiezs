import React from 'react'
import RegistrationForm from './RegistrationForm'

function Register() {
  return (
    <>
      <section className="countdown-one">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="countdown-one__content">
                <h2 className="countdown-one__title">Book Your Session </h2>{/* /.countdown-one__title */}
                {/* <p className="countdown-one__tag-line">get premium online courses for free!</p> */}
                {/* /.countdown-one__tag-line */}
                <p className="countdown-one__text">Need help deciding on a major or career path? Choose RnR Studiezs for all of your career counseling needs. Make us your choice, then welcome the limitless opportunities that await.</p>{/* /.countdown-one__text */}
                <ul className="countdown-one__list list-unstyled">
                  {/* content loading via js */}
                </ul>{/* /.coundown-one__list */}
              </div>{/* /.countdown-one__content */}
            </div>{/* /.col-lg-6 */}
            <div className="col-lg-6">
              <RegistrationForm/>
            </div>{/* /.col-lg-6 */}
          </div>{/* /.row */}
        </div>{/* /.container */}
      </section>
    </>
  )
}

export default Register
