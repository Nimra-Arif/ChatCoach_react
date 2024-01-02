import React from "react";

import ss from "../Assets/a.png";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

/**
 * Individual slide component for the HeroSlider.
 *
 * @component
 * @param {Object} props - The properties of the Slide component.
 * @param {string} props.img - The source URL of the image for the slide.
 * @returns {JSX.Element} - The rendered Slide component.
 */
const Slide = ({ img }) => (
  <div className="flex flex-col items-center justify-center cursor-grab">
    <img src={img} alt="hero" className="object-contain w-[35vw]" />
  </div>
);

/**
 * HeroSlider component to create a responsive image slider.
 *
 * @component
 * @returns {JSX.Element} - The rendered HeroSlider component.
 */
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
