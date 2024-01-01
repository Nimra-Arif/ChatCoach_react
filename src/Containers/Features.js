import React from "react";
import { useNavigate } from "react-router-dom";

import { BsArrowUpRight } from "react-icons/bs";

import back from "../Assets/ScreenBack.png";
import star from "../Assets/Star.png";

import Aos from "aos";
import "aos/dist/aos.css";
import { AnimationOnScroll } from "react-animation-on-scroll";
import axios from "axios";
Aos.init();

const Features = ({ setNotSub }) => {
  const navigate = useNavigate();

  const getUserInformation = async (token) => {
    const userRes = await axios({
      method: "get",
      url: "https://admin.chatcoach.io/api/userinformation",
      headers: {
        Authorization: `Bearer ${token}`
      }
    });

    const { data } = userRes;
    return data;
  };

  const checkSub = async () => {
    if (localStorage.getItem("token")) {
      getUserInformation(localStorage.getItem("token")).then((res) => {
        console.log(res);
        if (res.subscription && res.userhassub !== 0) {
          const dateExpiry = new Date(res.subscription.expiry_date);
          if (Date.now() < dateExpiry) {
            localStorage.setItem("subscribed", true);
            localStorage.setItem("plan", res.subscription.plan_id);
            navigate("/chat");
          }
        } else {
          localStorage.removeItem("plan");
          localStorage.removeItem("subscribed");
          setNotSub(true);
        }
      });
    } else {
      navigate("/login");
    }
  };
  return (
    <AnimationOnScroll
      className="flex lg:flex-row flex-col items-center lg:justify-between justify-center xl:px-0 px-[8%] w-full xl:w-[85vw] xl:max-w-[1320px] h-fit sm:h-screen md:my-0 my-4"
      initiallyVisible={false}
      animateIn="animate__bounceInLeft"
    >
      <div
        className={`flex lg:flex-row flex-col items-center lg:justify-between justify-center xl:px-0 px-[8%] w-full h-fit sm:h-screen `}
      >
        <div className="flex flex-col items-start justify-start lg:w-[40%] w-full gap-2">
          <h1
            className={`font-mont text-base text-white font-bold px-4 py-1 rounded-full bg-[#2E6FF2]`}
          >
            ChatCoach
          </h1>
          <h1 className="font-mont md:text-5xl text-3xl font-extrabold">
            Master the Art of Conversation with AI as Your Guide
          </h1>
          <h1 className="font-mont text-[17px] pt-4">
            Do you ever need help in conversations or need more confidence to
            communicate effectively with your boss, colleagues, or customers?
          </h1>
          <h1 className="font-mont text-[17px] py-1">
            It's frustrating when your words don't reflect the true professional
            that you are.
          </h1>
          <h1 className="font-mont text-[17px] py-1">
            That's where "ChatCoach" comes in.
          </h1>
          <h1 className="font-mont text-[17px] pb-4">
            With our AI-powered conversation partner, you can master the art of
            conversation and boost your confidence.
          </h1>
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
                onClick={checkSub}
              >
                Chat Coach
              </button>
            )}
            <div
              className="text-3xl flex items-center justify-center border-2 rounded-lg mx-4 p-1 border-black  hover:border-white hover:text-white hover:bg-black cursor-pointer"
              onClick={() => {
                if (localStorage.getItem("token")) {
                  checkSub();
                } else {
                  navigate("/join");
                }
              }}
            >
              <BsArrowUpRight size={32} />
            </div>
          </div>
        </div>
        <div className=" hidden sm:flex flex-col lg:items-center items-start justify-center lg:w-[55%] w-full lg:h-full h-fit">
          <div className="flex flex-col items-start justify-start w-[70%] lg:m-0 ml-10">
            <img src={star} alt="star" className="relative top-11 right-9" />
            <div className="flex items-start justify-center rounded-[28px] border-4 border-[#2E6FF2]">
              <img
                src={back}
                alt="back"
                className="border-4 border-black rounded-3xl w-full"
              />
            </div>
          </div>
          <div className="flex flex-col items-end justify-start w-[70%] -mt-[30%] lg:ml-[30%] ml-[25%]">
            <div className="flex items-start justify-center rounded-[28px] border-4 border-[#2E6FF2] z-[5]">
              <img
                src={back}
                alt="back"
                className="border-4 border-black rounded-3xl w-full"
              />
            </div>
            <img
              src={star}
              alt="star"
              className="relative -top-11 left-9 z-0"
            />
          </div>
        </div>
      </div>
    </AnimationOnScroll>
  );
};

export default Features;
