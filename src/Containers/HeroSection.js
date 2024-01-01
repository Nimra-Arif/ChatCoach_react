import React from "react";
import { BsArrowUpRight } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

import smallLogo from "../Assets/LogoSmall.svg";

import Aos from "aos";
import "aos/dist/aos.css";
import axios from "axios";
Aos.init();

const HeroSection = ({ setNotSub }) => {
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
    <div
      className="flex flex-col items-center justify-center p-4 pt-[150px] md:pt-[265px] lg:pt-44 w-full flex-wrap"
      id="home"
    >
      <div
        className="flex flex-col items-center justify-center"
        data-aos="fade-down"
        data-aos-duration="1000"
        data-aos-delay="200"
        data-aos-offset="0"
      >
        <h1 className="text-xl lg:text-xs font-bold font-mont text-white px-3 py-1 bg-deepBlue rounded-lg">
          SPEAK. SIMULATE. SUCCEED
        </h1>
        <h1 className="text-xl leading-8 text-center font-mont text-neutral-900 my-2">
          Start Your Free Trial and Transform Your Communication Skills with AI!
        </h1>
      </div>
      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="200"
        data-aos-offset="0"
      >
        <div className="flex flex-col items-center justify-center py-8">
          <h1 className="text-h1  text-[#011526] max-w-[1080px] font-mont text-center">
            🚀<span className="text-deepBlue">ChatCoach:</span> AI-Powered{" "}
          </h1>
          {/* <h1 className="lg:text-[82px] text-[36px] lg:leading-[92px] leading-[40px] text-[#011526] lg:font-extrabold font-bold max-w-[1080px] font-mont text-center">
            AI-Powered{" "}
          </h1> */}
          <h1 className="text-h1 text-[#011526] max-w-[1080px] font-mont text-center">
            Conversation Simulation
          </h1>
        </div>
        <div className="flex flex-row items-center justify-center my-20">
          {!localStorage.getItem("token") && (
            <button
              className="flex items-center justify-center gap-3 bg-[#2E6FF2] text-white font-bold font-mont text-xl px-4 py-2 rounded-lg hover:bg-[#2760d0]"
              onClick={() => navigate("/join")}
            >
              Sign Up and Start Trial
            </button>
          )}
          {localStorage.getItem("token") && (
            <button
              className="flex items-center justify-center gap-3 bg-[#2E6FF2] text-white font-bold font-mont text-xl px-4 py-2 rounded-lg hover:bg-[#2760d0]"
              onClick={checkSub}
            >
              <img src={smallLogo} alt="small logo" />
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
    </div>
  );
};

export default HeroSection;
