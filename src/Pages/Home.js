/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "../Components/NavBar";
import HeroSection from "../Containers/HeroSection";
import Features from "../Containers/Features";
import Marketing from "../Containers/Marketing";
import ChatCoach from "../Containers/ChatCoach";
import FadedBack from "../Components/FadedBack";
import FAQ from "../Containers/FAQ";
import Waitlist from "../Containers/Waitlist";
import Footer from "../Containers/Footer";
import ReviewContainer from "../Containers/ReviewContainer";
import Aos from "aos";
import "aos/dist/aos.css";
import Features1 from "../Containers/Features1";
import { useDispatch } from "react-redux";
import { toggleAbout } from "../Store/aboutSlice/about";
import { viewContent } from "../Data/ticktokapis";
import VideoHome from "../Containers/VideoHome";
import video from "../Assets/video_web.mp4";
import video_phone from "../Assets/video_phone.mp4";
import axios from "axios";
import Modes from "../Containers/Modes";
Aos.init();

const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(toggleAbout(false));
    viewContent();
    window.scrollTo(0, 0);
  }, [dispatch]);

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

  useEffect(() => {
    if (localStorage.getItem("token")) {
      getUserInformation(localStorage.getItem("token")).then((res) => {
        if (res.subscription && res.userhassub !== 0) {
          const dateExpiry = new Date(res.subscription.expiry_date);
          if (Date.now() < dateExpiry) {
            localStorage.setItem("subscribed", true);
            localStorage.setItem("plan", res.subscription.plan_id);
            return;
          } else {
            localStorage.removeItem("plan");
            localStorage.removeItem("subscribed");
            navigate("/subscription");
          }
        } else {
          localStorage.removeItem("plan");
          localStorage.removeItem("subscribed");
          navigate("/subscription");
        }
      });
    } else {
      return;
    }
  }, []);

  const [notSub, setNotSub] = useState(false);

  return (
    <>
      {notSub && (
        <div className="absolute top-1/3 lg:left-[30%] md:left-[20%] left-[10%] z-50 flex flex-col items-center justify-center lg:w-[40%] md:w-[60%] w-[80%] gap-4 bg-white px-2 py-6 rounded-xl">
          <p className="font-mont text-xl font-bold">Subscription Required</p>
          <p className="font-mont text-base text-center">
            Please Purchase a Subscription to Use ChatCoach
          </p>
          <button
            className="font-mont text-white text-base font-semibold bg-[#2E6FF2] px-4 py-2 rounded-xl"
            onClick={() => {
              navigate("/subscription");
            }}
          >
            Buy Now
          </button>
          <p
            className="font-mont text-base cursor-pointer underline underline-offset-2 hover:text-[#2E6FF2]"
            onClick={() => {
              setNotSub(false);
            }}
          >
            Acknowledge
          </p>
        </div>
      )}
      <div
        className={`${
          notSub ? "blur-2xl h-screen overflow-hidden" : ""
        } transition-all duration-300 ease-in-out`}
      >
        <div className="flex bg-transparent items-center px-[20px] z-100">
          <NavBar setNotSub={setNotSub} />
        </div>
        <div class="container-scroll " id="container-scroll">
          <div class="section-snap md:h-screen relative">
            <HeroSection setNotSub={setNotSub} />
            <FadedBack />
          </div>
          <div className="w-full hidden md:flex items-center justify-center">
            <VideoHome video={video} />
          </div>
          <div className="w-full md:hidden flex items-center justify-center">
            <VideoHome video={video_phone} />
          </div>
          <div class="section-snap w-full flex items-center justify-center mb-16 md:mb-24">
            <Features setNotSub={setNotSub} />
          </div>
          <div class="section-snap w-full flex items-center justify-center mb-0 md:mb-24 lg:mb-0 ">
            <Features1 setNotSub={setNotSub} />
          </div>
          <div style={{ scrollSnapAlign: "start" }}>
            <div
              className="py-8 w-full flex flex-col items-center justify-center bg-[#edf1f6ff] next xl:mt-[100px] mt-0"
              id="features"
            >
              <Marketing />
              <Modes />
            </div>
            <ChatCoach />
            <FAQ />
            <ReviewContainer />
            <Waitlist />
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
};
export default Home;
