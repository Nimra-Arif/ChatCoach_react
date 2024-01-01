import React from "react";

import stars from "../Assets/Review.svg";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";

const ReviewCard = ({ name, company, text }) => {
  const location = useLocation();
  const [isAboutPage, setIsAboutPage] = useState(false);
  useEffect(() => {
    // Check the current route path to determine if it's the "about" page
    setIsAboutPage(location.pathname === "/about" ? true : false);
  }, [location.pathname]);

  return (
    <div className="flex flex-col items-start justify-center h-full md:w-[30%] md:min-w-[350px] w-full py-4 gap-4 cursor-grab">
      <img src={stars} alt="stars" />
      <p
        className={`font-mont text-base font-medium ${
          isAboutPage ? "text-black " : "text-white "
        }`}
      >
        "{text}"
      </p>
      <p className="font-mont text-base text-gray-400">
        <span
          className={`font-bold text-black ${
            isAboutPage ? "text-black " : "text-white "
          }`}
        >
          {name}
        </span>{" "}
        {company}
      </p>
    </div>
  );
};

export default ReviewCard;
