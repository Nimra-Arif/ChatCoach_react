import React from "react";
import { useNavigate } from "react-router-dom";
import { BsArrowUpRight } from "react-icons/bs";
import Graph from "../Assets/Graph.png";
import Aos from "aos";
import "aos/dist/aos.css";
import { AnimationOnScroll } from "react-animation-on-scroll";
import axios from "axios";
Aos.init();
const Features1 = ({ setNotSub }) => {
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
      className="flex lg:flex-row flex-col items-center lg:justify-between justify-center xl:px-0 px-[8%] w-full xl:w-[85vw] xl:max-w-[1320px] h-full md:h-[40vh]"
      initiallyVisible={false}
      animateIn="animate__bounceInRight"
    >
      <div
        className={`flex lg:flex-row flex-col items-center lg:justify-between justify-center xl:px-0 px-[8%] w-full h-full md:h-[40vh] `}
      >
        <div className="hidden sm:flex flex-col items-start justify-start lg:w-[40%] w-full gap-4 mb-5 md:mb-10">
          <div className="flex flex-col items-start justify-start w-[100%] lg:m-0 ml-10">
            <div className="flex items-start justify-center">
              <img src={Graph} alt="back" className="w-full" />
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start justify-start lg:w-[50%] w-full gap-2">
          <h1
            className={`font-mont text-base text-white font-bold px-4 py-1 rounded-full bg-[#2E6FF2]`}
          >
            ChatCoach
          </h1>
          <h1 className="font-mont md:text-5xl text-3xl font-extrabold">
            Adjust Your Approach Instantly with Emotional Analytics
          </h1>
          <h1 className="font-mont text-[17px] pt-8">
            In the dynamic world of communication, understanding the emotions of
            those you interact with is paramount. Our platform, powered by
            cutting-edge AI technology, including AI chatbots and conversational
            agents, empowers you to do just that.
          </h1>
          <h1 className="font-mont text-[17px] py-1">
            With real-time emotional analytics and advanced AI natural language
            processing (NLP) tools, you gain a unique advantage in
            conversations.
          </h1>
          <h1 className="font-mont text-[17px] pb-8">
            You can instantly adapt your approach based on the emotional cues of
            your conversation partner, ensuring every interaction is tailored
            and impactful.
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
      </div>
    </AnimationOnScroll>
  );
};

export default Features1;
