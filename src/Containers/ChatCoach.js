import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import ReviewSlider from "./ReviewSlider";
AOS.init();

const ChatCoach = () => {
  return (
    <div
      className="flex flex-col items-center justify-center w-full overflow-x-hidden md:py-11 py-0 border-0 m-0 bg-[#edf1f6ff]"
      // data-aos="fade-up"
      // data-aos-offset="100"
      // data-aos-duration="1000"
      // data-aos-delay="50"
    >
      <h1 className="font-mont text-h3 text-center my-6">
        Engage with Our Lifelike AI Agents
      </h1>
      <p className="font-mont text-p text-center lg:text-left px-5 max-w-full mb-6">
        Engage with a Variety of AI Simulated Agents Tailored to Your
        Communication Needs
      </p>

      {/* <div className="md:hidden flex flex-row items-center justify-center">
          <ReviewSlider />
        </div> */}
      <div
        className="w-full my-6 cursor-grab"
        // data-aos="fade-up"
        // data-aos-offset="-150"
        // data-aos-delay="20"
        // data-aos-duration="1000"
        // data-aos-easing="ease-in-out"
        // data-aos-mirror="true"
        // data-aos-once="false"
        // data-aos-anchor-placement="top-center"
      >
        <ReviewSlider />
      </div>
    </div>
  );
};

export default ChatCoach;
