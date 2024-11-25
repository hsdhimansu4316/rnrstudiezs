"use client";
import React from "react";

// Example JSON array to hold brand images and alt texts
const brandImages = [
  { id: 1, src: "/assets/images/logo/prtnr1.png", alt: "Brand 1" },
  { id: 2, src: "/assets/images/logo/niem.png", alt: "Brand 2" },
  { id: 3, src: "/assets/images/logo/rnrceleb.png", alt: "Brand 3" },
];

const LogoRow = () => {
  return (
    <section className="brand-partnership-section logo-row-wrapper">
      <div className="block-title" style={{ zIndex: "999", textAlign: "center" }}>
        <h2 className="block-title__title">Our Partners</h2>
        <div className="underline choose-underline"></div>
      </div>
      <div className="overlay"></div>
      <div className="container">
        <div className="row justify-content-center align-items-center">
          {brandImages.map((brand) => (
            <div className="col-md-4 text-center" key={brand.id}>
              <img
                src={brand.src}
                alt={brand.alt}
                className="brand-image img-fluid"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LogoRow;





// "use client";
// import React from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";


// const brandImages = [
//   { id: 1, src: "/assets/images/logo/prtnr1.png", alt: "Brand 1" },
//   { id: 2, src: "/assets/images/logo/niem.png", alt: "Brand 2" },
//   { id: 3, src: "/assets/images/logo/rnrceleb.png", alt: "Brand 3" },
// ];

// const LogoSlider = () => {
//   const settings = {
//     dots: false,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 3, 
//     slidesToScroll: 1, 
//     autoplay: false,
//     autoplaySpeed: 3000, 
//     arrows: false, 
//     centerMode: true, 
//     centerPadding: "0", 
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 4, 
//         },
//       },
//       {
//         breakpoint: 768,
//         settings: {
//           slidesToShow: 3, 
//         },
//       },
//       {
//         breakpoint: 480,
//         settings: {
//           slidesToShow: 2, 
//           centerMode: true, 
//         },
//       },
//     ],
//   };

//   return (
//     <section className="brand-partnership-section logo-slider-wrapper">
//       <div className="block-title" style={{ zIndex: "999" }}>
//         <h2 className="block-title__title">Our Partners</h2>
//         <div className="underline choose-underline"></div>
//       </div>
//       <div className="overlay"></div>
//       <Slider {...settings}>
//         {brandImages.map((brand) => (
//           <div className="container" key={brand.id}>
//             <div className="slide container">
//               <img src={brand.src} alt={brand.alt} className="brand-image" />
//             </div>
//           </div>
//         ))}
//       </Slider>
//     </section>
//   );
// };

// export default LogoSlider;
