import React from "react";

import top from "../Assets/top.png";
import bottom from "../Assets/bottom.png";
import Waitlist from "../Assets/Waitlist.png";

const Subscribe = () => {
  return (
    <div className="relative w-[90%] max-w-[1320px] rounded-2xl bg-[#2E6FF2] sm:h-[20vh] md:h-[20vh] lg:h-[40vh] h-[20vh] my-20">
      <img
        src={top}
        alt="top"
        className="absolute top-0 left-0 w-[10vw] min-w-[70px] object-contain"
      />
      <img
        src={bottom}
        alt="bottom"
        className="absolute bottom-0 right-0 w-[10vw] min-w-[70px] object-contain"
      />
      <div className="absolute sm:top-1/4 top-8 left-[8%] flex flex-col sm:items-start items-center justify-center lg:w-[60%] w-[80%] lg:gap-3 gap-1">
        <p className="font-mont font-semibold lg:text-[52px] lg:leading-[56px] text-2xl text-center text-white">
          Join the waitlist
        </p>
        <p className="font-mont lg:text-base text-center text-xs leading-5 text-white">
          Join our waitlist and embark on a transformative communication
          journey.
        </p>
        <div className="flex flex-row items-center justify-start flex-nowrap gap-5 w-full">
          <input
            className="w-[75%] rounded-lg bg-white text-gray-400 font-mont sm:text-base text-xs sm:p-3 p-1 px-2 focus:outline-0"
            placeholder="Enter your e-mail."
            type="email"
          />
          <button className="sm:px-8 rounded-lg bg-[#A60A53] whitespace-nowrap font-semibold text-white sm:text-base text-xs sm:p-3 p-1 px-2 ">
            + Subscribe
          </button>
        </div>
      </div>
      <div className="lg:block absolute hidden right-20 -bottom-16">
        <img src={Waitlist} alt="AI" className="h-[40vh] object-contain" />
      </div>
    </div>
  );
};

export default Subscribe;
