import React from 'react'

function TopNav() {
  return (
    <>
      <div className="topbar-one">
        <div className="container">
          <div className="topbar-one__left">
            <a href="#">rnrstudiezsweb@gmail.com</a>
            <a href="#">+91 84550 35666</a>
          </div>
          
          <div className="header__social">
                <a href="#"><i className="fab fa-twitter" /></a>
                <a href="https://www.facebook.com/profile.php?id=61560586528016" target='blank'><i className="fab fa-facebook-square" /></a>
                
                <a href="https://www.instagram.com/rnr_studiezs"><i className="fab fa-instagram" target='blank' /></a>
              </div>{/* /.header__social */}
        </div>
      </div>{/* /.topbar-one */}
    </>
  )
}

export default TopNav
