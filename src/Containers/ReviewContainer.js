import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./ReviewContainer.css";

import ReviewCard from "../Components/ReviewCard";
import { useLocation } from "react-router-dom";

const ReviewContainer = () => {
  const location = useLocation();
  const [isAboutPage, setIsAboutPage] = useState(false);
  useEffect(() => {
    // Check the current route path to determine if it's the "about" page
    setIsAboutPage(location.pathname === "/about" ? true : false);
  }, [location.pathname]);
  const data = [
    {
      name: "Renee S.",
      company: "New Orleans, Louisiana",
      text: 'The best preparation for an upcoming job interview!  My AI coach "Sarah" and I had a chat about my upcoming job interview and the questions she asked were amazing preparation for my interview.  Many of the questions were exactly what I was asked at the interview and were related directly to the job for which I was applying.  At my actual interview, I was not nervous and had well planned, well thought out answers thanks to my practice with "Sarah" on ChatCoach.  Excited for my new job!  Thanks, ChatCoach!'
    },
    {
      name: "Michelle W.",
      company: "Overland Park, KS",
      text: "Welcome to a revolutionary transformation in artificial intelligence and virtual companionship with ChatCoach. Say goodbye to concerns over impersonal responses, misinterpretations, or lack of meaningful connections."
    },
    {
      name: "Renee S.",
      company: "New Orleans, Louisiana",
      text: 'The best preparation for an upcoming job interview!  My AI coach "Sarah" and I had a chat about my upcoming job interview and the questions she asked were amazing preparation for my interview.  Many of the questions were exactly what I was asked at the interview and were related directly to the job for which I was applying.  At my actual interview, I was not nervous and had well planned, well thought out answers thanks to my practice with "Sarah" on ChatCoach.  Excited for my new job!  Thanks, ChatCoach!'
    },
    {
      name: "Michelle W.",
      company: "Overland Park, KS",
      text: "Welcome to a revolutionary transformation in artificial intelligence and virtual companionship with ChatCoach. Say goodbye to concerns over impersonal responses, misinterpretations, or lack of meaningful connections."
    },
    {
      name: "Renee S.",
      company: "New Orleans, Louisiana",
      text: 'The best preparation for an upcoming job interview!  My AI coach "Sarah" and I had a chat about my upcoming job interview and the questions she asked were amazing preparation for my interview.  Many of the questions were exactly what I was asked at the interview and were related directly to the job for which I was applying.  At my actual interview, I was not nervous and had well planned, well thought out answers thanks to my practice with "Sarah" on ChatCoach.  Excited for my new job!  Thanks, ChatCoach!'
    },
    {
      name: "Michelle W.",
      company: "Overland Park, KS",
      text: "Welcome to a revolutionary transformation in artificial intelligence and virtual companionship with ChatCoach. Say goodbye to concerns over impersonal responses, misinterpretations, or lack of meaningful connections."
    }
  ];

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    centerPadding: "0",
    centerMode: true,
    cssEase: "ease-in-out",
    responsive: [
      {
        breakpoint: 2560,
        settings: {
          centerMode: true,
          dots: true
        }
      },
      {
        breakpoint: 1850,
        settings: {
          centerMode: true,
          dots: true
        }
      },
      {
        breakpoint: 1400,
        settings: {
          centerMode: true,
          dots: true
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2.5,
          centerMode: true,
          dots: true
        }
      },
      {
        breakpoint: 870,
        settings: {
          slidesToShow: 2,
          centerMode: true,
          dots: true
        }
      },
      {
        breakpoint: 560,
        settings: {
          slidesToShow: 1,
          centerMode: true,
          dots: true
        }
      }
    ]
  };

  return (
    <div
      className={`flex flex-col items-center justify-center py-8 w-screen ${
        isAboutPage ? "bg-[#E3EDFF]" : "bg-[#011526]"
      }`}
    >
      <h1 className={`font-mont text-p py-4 text-deepBlue`}>
        3940+ Happy ChatCoach Users
      </h1>
      <h1
        className={`font-mont text-h3 py-4 lg:w-[90%] lg:max-w-[1320px] w-full px-4 text-center ${
          isAboutPage ? "text-black " : "text-white "
        }`}
      >
        Feedback From Our Community
      </h1>
      <div className="py-8 h-[30%] w-[90%] max-w-[1320px] overflow-hidden">
        <Slider {...settings}>
          {data.map((item, index) => (
            <ReviewCard
              key={index}
              name={item.name}
              company={item.company}
              text={item.text}
            />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default ReviewContainer;
