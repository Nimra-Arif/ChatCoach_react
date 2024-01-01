import React from "react";

import Subscribe from "../Components/Subscribe";
import waitlistrobot from "../Assets/Waitlist.png";

import Aos from "aos";
import "aos/dist/aos.css";
Aos.init();

const Waitlist = () => {
  return (
    <div className="flex flex-row items-center lg:justify-around justify-center w-full">
      <div
        className="flex flex-row items-center lg:justify-around justify-center flex-wrap z-0 my-20 w-full xl:w-[85vw] xl:max-w-[1320px] bg-[#edf1f6ff]"
        // data-aos="fade-up"
        // data-aos-duration="1000"
        // data-aos-delay="100"
        // data-aos-offset="0"
      >
        <Subscribe />
        <img src={waitlistrobot} alt="AI" className="my-4" />
      </div>
    </div>
  );
};

export default Waitlist;
