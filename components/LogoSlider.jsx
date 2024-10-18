"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Example JSON array to hold brand images and alt texts
const brandImages = [
  { id: 1, src: "/assets/images/logo/prtnr1.png", alt: "Brand 1" },
  { id: 2, src: "/assets/images/logo/niem.png", alt: "Brand 2" },
  { id: 3, src: "/assets/images/logo/prtnr1.png", alt: "Brand 3" },
  { id: 4, src: "/assets/images/logo/prtnr1.png", alt: "Brand 4" },
  { id: 5, src: "/assets/images/logo/prtnr1.png", alt: "Brand 5" },
  { id: 6, src: "/assets/images/logo/prtnr1.png", alt: "Brand 6" },
  { id: 7, src: "/assets/images/logo/prtnr1.png", alt: "Brand 7" },
  { id: 8, src: "/assets/images/logo/prtnr1.png", alt: "Brand 8" },
];

const LogoSlider = () => {
  const settings = {
    dots: false, // No dots below the slider
    infinite: true,
    speed: 500,
    slidesToShow: 6, // Show 6 images at a time
    slidesToScroll: 1, // Scroll one at a time
    autoplay: false,
    autoplaySpeed: 3000, // Adjust the speed of sliding
    arrows: false, // No arrows
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4, // Show 4 images on tablet-sized devices
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3, // Show 3 images on mobile-sized devices
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2, // Show 2 images on very small devices
        },
      },
    ],
  };

  return (
    <section className="brand-partnership-section logo-slider-wrapper">
    <div className="block-title" style={{zIndex:'999'}}>
            <h2 className="block-title__title">Our Partners</h2>
            <div className="underline choose-underline"></div>
          </div>
    <div className="overlay"></div>
    <Slider {...settings}>
      {brandImages.map((brand) => (
        <div className="slide" key={brand.id}>
          <img src={brand.src} alt={brand.alt} className="brand-image" />
        </div>
      ))}
    </Slider>
  </section>
  
  );
};

export default LogoSlider;
