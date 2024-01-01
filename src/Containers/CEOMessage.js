import React from "react";
import ceo from "../Assets/bot.png";
import xicon from "../Assets/twitter-x.svg";
import instaicon from "../Assets/instagram.svg";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const CEOMessage = () => {
  return (
    <div className="flex flex-row items-center justify-between flex-nowrap w-fit py-[70px] px-[5%] lg:px-0 lg:w-[90%] lg:max-w-[1320px] lg:gap-6 my-4 z-0">
      <div
        className="flex flex-col lg:items-start lg:justify-start w-fit justify-center lg:w-[50%] lg:m-3 m-5"
        data-aos="fade-up"
        data-aos-offset="0"
        data-aos-duration="1000"
        data-aos-delay="50"
      >
        <p className="font-mont font-bold lg:text-[54px] lg:leading-[60px] text-[28px] leading-[34px] text-center lg:text-left mb-3">
          WHO WE ARE
        </p>
        <p className="font-mont lg:text-base lg:leading-[26px] text-[16px] leading-[24px] text-center lg:text-left max-w-[670px]">
          Our journey started with a simple, yet profound vision - to harness
          the power of artificial intelligence and transform the way we
          communicate. Your journey towards more effective communication starts
          here, and we're honored to be a part of it.
        </p>
      </div>
      <div className="lg:flex hidden flex-col items-start justify-start w-[48%] flex-wrap">
        <div className="flex flex-col items-center justify-center ">
          <div className="relative rounded-full border-[#A60A53] border-4 bg-white lg:h-[250px] lg:w-[250px] h-[200px] w-[200px] ml-10 lg:ml-24 z-0 overflow-hidden ">
            <img
              className="h-full object-cover absolute bottom-0 transform mt-[-50px] border-radius-[50%]"
              src={ceo}
              alt="Circular User"
            />
          </div>
        </div>
        <div
          className="flex flex-row items-end justify-between bg-white w-full rounded-[20px] shadow-xl pt-[20%] lg:-mt-[125px] 
        -mt-[100px]"
        >
          <div className="flex flex-col items-start justify-center p-4">
            <p className="font-mont text-2xl font-bold">Ahmad Riaz</p>
            <p className="font-mont text-sm font-medium text-[#A60A53]">
              CEO & Founder
            </p>
          </div>
          <div className="flex flex-row items-center justify-center p-4 gap-2 pb-8">
            <img src={xicon} alt="x logo" className="cursor-pointer" />
            <img src={instaicon} alt="insta logo" className="cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CEOMessage;
