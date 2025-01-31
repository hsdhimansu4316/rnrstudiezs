import React from 'react'
import SideForm from '../SideForm'

function CustomizedStatergies() {
  return (
    <>
    <section className="paddingTop  paddingbottom secondary-sec">

        <div className="expert-counselling-container">
        <div className="container">
      <div className="row">
        {/* Left Column */}
       
       

        {/* Right Column */}
        <div className="col-md-6 ">
         <SideForm/>
        </div>

        <div className="col-md-6 image-column">
          <div className="image-wrapper last-img">
            <img
              src="https://www.hitbullseye.com/video-counselling/images/mba-big-image.png"
              alt="Counselling"
              className="background-image"
            />
         
          </div>
        </div>

       
      </div>
    </div>
    </div>
    </section>
    </>
    
  )
}

export default CustomizedStatergies
