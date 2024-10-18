import React from "react";

const cities = [
    { name: "BANGALORE", image: "/assets/images/cities/Bangalore.jpg" },
    { name: "PUNE", image: "/assets/images/cities/Bangalore.jpg" },
    { name: "HYDERABAD", image: "/assets/images/cities/Bangalore.jpg" },
    { name: "DELHI", image: "/assets/images/cities/Bangalore.jpg" },
    { name: "MUMBAI", image: "/assets/images/cities/Bangalore.jpg" },
    { name: "KOLKATA", image: "/assets/images/cities/Bangalore.jpg" },
    { name: "BHUBANESWAR", image: "/assets/images/cities/Bangalore.jpg" },
    { name: "DERHADUN", image: "/assets/images/cities/Bangalore.jpg" },
    { name: "GURGAON", image: "/assets/images/cities/Bangalore.jpg" },
    { name: "LUCKNOW", image: "/assets/images/cities/Bangalore.jpg" },
    { name: "AHMADABAD", image: "/assets/images/cities/Bangalore.jpg" },
    { name: "KERALA", image: "/assets/images/cities/Bangalore.jpg" },
];

function Cities() {
    return (
        <section className="cities-sec">
        <div className="container ">
            <div className="block-title">
                <h2 className="block-title__title">Popular Cities To Study MBA</h2>
                <div className="underline"></div>
            </div>
            <div className="row g-4">
                {cities.map((city, index) => (
                    <div className="col-md-3 col-sm-6" key={index}>
                        <div className="city-card">
                            <img src={city.image} alt={city.name} />
                            <div className="city-overlay">{city.name}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
        </section>
    );
}

export default Cities;
