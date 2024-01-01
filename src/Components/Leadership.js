import React, { useEffect } from "react";

import leader from "../Assets/leader.svg";

const Leadership = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex lg:flex-row flex-col items-center justify-between p-[5%] w-full bg-[#E3EDFF]">
      <div className="flex flex-col items-start justify-start gap-4 md:w-[50%] w-[90%]">
        <p className="font-mont font-bold lg:text-5xl text-3xl">
          Leadership You Can Trust
        </p>
        <p className="font-mont font-medium lg:text-[18px] text-lg">
          We partner with visionaries like you to assist your business’
          technological transformation on a massive scale — with logic,
          innovation, and emotion — beyond traditional problem-solving
          techniques and old-fashioned promises.
        </p>
        <p className="font-mont font-semibold lg:text-xl text-lg lg:py-5 py-2">
          <span className="font-bold lg:text-2xl text-lg">Ahmad Riaz</span> –
          CEO & Founder ChatCoach
        </p>
        <a
          href="mailto:help@chatcoach.io"
          className="text-blue-500 hover:underline cursor-pointer"
        >
          <button className="font-mont font-semibold lg:text-xl text-lg px-4 py-2 bg-[#2E6FF2] rounded-xl text-white">
            + Get Expert Advice
          </button>
        </a>
      </div>
      <img src={leader} alt="leader" />
    </div>
  );
};

export default Leadership;
