import React from "react";
import { useNavigate } from "react-router-dom";

import { BsArrowUpRight } from "react-icons/bs";
import HeroSlider from "../Components/HeroSlider";

import Aos from "aos";
import "aos/dist/aos.css";
Aos.init();

const Hero = () => {
  const navigate = useNavigate();

  return (
    <div
      className="flex sm:flex-row flex-col items-start justify-between w-full sm:px-20 px-4 pt-[150px] sm:h-fit h-fit min-h-[60vh]"
      id="home"
    >
      <div className="flex flex-col items-center justify-between sm:w-[45%] sm:gap-20 gap-20 w-full h-full max-h-[500px]">
        <div
          className="flex flex-col items-center justify-center gap-0 h-fit"
          data-aos="fade-down"
          data-aos-duration="1000"
          data-aos-delay="500"
          data-aos-offset="0"
        >
          <h1 className="sm:text-[42px] text-[28px] sm:leading-[48px] leading-[34px] text-[#011526] sm:font-extrabold font-bold max-w-[1080px] font-mont text-center">
            ChatCoach: AI-Powered{" "}
          </h1>
          <h1 className="sm:text-[42px] text-[28px] sm:leading-[48px] leading-[34px] text-[#011526] sm:font-extrabold font-bold max-w-[1080px] font-mont text-center">
            Conversation Simulation
          </h1>
        </div>
        <div
          className="flex flex-col items-center justify-center rounded-3xl  h-full"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="500"
          data-aos-offset="0"
        >
          <div className="flex flex-col items-center justify-center rounded-3xl bg-[#CFDAEF] px-10 py-4 gap-6">
            <div className="flex flex-col items-center justify-center">
              <h2 className="sm:text-xl text-sm font-bold font-mont text-white p-1 leading-3.5 bg-[#023E73] rounded">
                SPEAK, CONNECT, SUCCEED
              </h2>
              <h3 className="sm:text-xl text-sm leading-8 text-center font-mont text-[#011526] my-2">
                Hone your game without the shame.
              </h3>
            </div>
            <div className="flex flex-row items-center justify-center">
              {!localStorage.getItem("token") && (
                <button
                  className="bg-[#2E6FF2] text-white font-bold font-mont text-xl px-4 py-2 rounded-lg hover:bg-[#2760d0]"
                  onClick={() => navigate("/join")}
                >
                  Sign Up and Start Trial
                </button>
              )}
              {localStorage.getItem("token") && (
                <button
                  className="bg-[#2E6FF2] text-white font-bold font-mont text-xl px-4 py-2 rounded-lg hover:bg-[#2760d0]"
                  onClick={() => navigate("/chat")}
                >
                  Chat Coach
                </button>
              )}
              <div
                className="text-3xl flex items-center justify-center border-2 rounded-lg mx-4 p-1 border-black  hover:border-white hover:text-white hover:bg-black cursor-pointer"
                onClick={() => {
                  if (localStorage.getItem("token")) {
                    navigate("/chat");
                  } else {
                    navigate("/join");
                  }
                }}
              >
                <BsArrowUpRight size={32} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="sm:flex hidden flex-col items-start justify-center w-[45%] h-fit max-h-[500px]"
        data-aos="fade-left"
        data-aos-duration="1000"
        data-aos-delay="500"
        data-aos-offset="0"
      >
        <HeroSlider />
      </div>
    </div>
  );
};

export default Hero;
