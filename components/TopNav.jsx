import React from "react";

function TopNav() {
    return (
        <>
            <div className="topbar-one">
                <div className="container">
                    <div className="topbar-one__left">
                        <a href="mailto:rnrstudiezsweb@gmail.com">rnrstudiezsweb@gmail.com</a>
                        <a href="tel:+918455035666">+91 84550 35666</a>
                        <a href="tel:+917847006811">+91 7847006811</a>
                    </div>

                    <div className="header__social">
                        <a href="https://www.linkedin.com/company/rnrstudiezs/" target="blank">
                            <i className="fab fa-linkedin" />
                        </a>

                        <a href="https://x.com/RnRStudiezs" target="blank">
                            <i className="fab fa-twitter" />
                        </a>
                        <a href="https://www.facebook.com/profile.php?id=61560586528016" target="blank">
                            <i className="fab fa-facebook-square" />
                        </a>

                        <a href="https://www.instagram.com/rnrstudiezs/">
                            <i className="fab fa-instagram" target="blank" />
                        </a>
                    </div>
                    {/* /.header__social */}
                </div>
            </div>
            {/* /.topbar-one */}
        </>
    );
}

export default TopNav;
