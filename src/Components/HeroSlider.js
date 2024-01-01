import React from "react";

import ss from "../Assets/a.png";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Slide = ({ img }) => (
  <div className="flex flex-col items-center justify-center cursor-grab">
    <img src={img} alt="hero" className="object-contain w-[35vw]" />
  </div>
);

const HeroSlider = () => {
  const images = [ss, ss];

  const settings = {
    autoplay: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    centerMode: true,
    centerPadding: "0",
    cssEase: "ease-in-out"
  };
  return (
    <div className="w-full">
      <Slider {...settings}>
        {images.map((image, index) => (
          <Slide key={index} img={image} />
        ))}
      </Slider>
    </div>
  );
};

export default HeroSlider;
