import React from "react";
import { useNavigate } from "react-router-dom";

import { BsArrowUpRight } from "react-icons/bs";

import ss from "../Assets/a.png";

import Aos from "aos";
import "aos/dist/aos.css";
Aos.init();

const Slider = ({ btnColor, bgColor }) => {
  const navigate = useNavigate();

  return (
    <div
      className={`md:hidden flex flex-col items-center justify-between gap-4 p-[10%] w-full ${bgColor}`}
    >
      <div className="flex flex-col items-start justify-start w-full gap-2">
        <p
          className={`ont-mont text-base text-white font-bold px-4 py-1 rounded-full ${btnColor}`}
          data-aos="fade-up"
          data-aos-duration="200"
          data-aos-easing="ease-in-sine"
          data-aos-delay="0"
          data-aos-offset="0"
        >
          ChatCoach
        </p>
        <p
          className="font-mont text-5xl font-extrabold"
          data-aos="fade-up"
          data-aos-duration="400"
          data-aos-easing="ease-in-sine"
          data-aos-delay="0"
          data-aos-offset="0"
        >
          One AI tool, all the best models.
        </p>
        <p
          className="font-mont text-sm py-4"
          data-aos="fade-up"
          data-aos-duration="600"
          data-aos-easing="ease-in-sine"
          data-aos-delay="0"
          data-aos-offset="0"
        >
          Jasper is more than just a language model. Jasper’s AI Engine starts
          by pulling from a cross-section of the best models out there -
          including OpenAI's GPT-4, Anthropic and Google's models - then infuses
          those outputs with recent search data, your brand voice, and
          optimization tools like SEO and grammar. Because we have
          interoperability across models, we’re more reliable when things get
          choppy elsewhere. Smart!
        </p>
        <div
          className="flex flex-row items-center justify-center"
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-easing="ease-in-sine"
          data-aos-delay="0"
          data-aos-offset="0"
        >
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
      <img
        src={ss}
        alt=""
        className="w-[80vw] object-contain rounded-3xl border-white border-2 shadow-2xl"
      />
    </div>
  );
};

export default Slider;
