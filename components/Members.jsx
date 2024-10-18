import React from "react";

function Members() {
    const members = [
        {
            name: "Sujit Sahoo",
            title: "Founder",
            tag:"Expert",
            image: "/assets/images/members/asahoo.jpg",
            social: [
                { platform: "twitter", url: "#", icon: "fab fa-twitter" },
                { platform: "facebook", url: "#", icon: "fab fa-facebook-square" },
                { platform: "pinterest", url: "#", icon: "fab fa-linkedin" },
                { platform: "instagram", url: "#", icon: "fab fa-instagram" }
            ]
        },
        {
            name: "Himanshu Sarpatia",
            title: "Co-Founder",
            tag:"Mentor",
            image: "/assets/images/members/himanshu.jpg",
            social: [
                { platform: "twitter", url: "#", icon: "fab fa-twitter" },
                { platform: "facebook", url: "#", icon: "fab fa-facebook-square" },
                { platform: "pinterest", url: "#", icon: "fab fa-linkedin" },
                { platform: "instagram", url: "#", icon: "fab fa-instagram" }
            ]
        },
        {
            name: "Ashok Sahu",
            title: "Academic Head",
            tag:"Advisor",
            image: "/assets/images/members/sujit.jpg",
            social: [
                { platform: "twitter", url: "#", icon: "fab fa-twitter" },
                { platform: "facebook", url: "#", icon: "fab fa-facebook-square" },
                { platform: "pinterest", url: "#", icon: "fab fa-linkedin" },
                { platform: "instagram", url: "#", icon: "fab fa-instagram" }
            ]
        }
    ];

    return (
        <>
            <section className="team-one team-page">
                <div className="block-title">
                    <h2 className="block-title__title">Our Experts</h2>
                    <div className="underline"></div>
                </div>
                <div className="container">
                    <div className="row">
                        {members.map((member, index) => (
                            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12" key={index}>
                                <div
                                    className="team-one__single"
                                    style={{
                                        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                                        borderRadius: "10px",
                                        overflow: "hidden"
                                    }}
                                >
                                    <div className="team-one__image">
                                        <img src={member.image} alt={member.name} />
                                    </div>
                                    <div className="team-one__content">
                                        <h2 className="team-one__name">
                                            <a>{member.name}</a>
                                        </h2>
                                        <p className="team-one__designation">{member.title}</p>
                                        <h4>{member.tag}</h4>
                                    </div>
                                    {/* <div className="team-one__social">
                                        {member.social.map((social, idx) => (
                                            <a key={idx} href={social.url}>
                                                <i className={social.icon} />
                                            </a>
                                        ))}
                                    </div> */}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}

export default Members;
