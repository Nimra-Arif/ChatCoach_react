import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import ReactPlayer from "react-player";
import { toggleAbout } from "../Store/aboutSlice/about";
import about1 from "../Assets/about1.svg";
import video from "../Assets/ChatCoach.mp4";
import star from "../Assets/Star.png";
// import CEOMessage from "../Containers/CEOMessage";
import ReviewContainer from "../Containers/ReviewContainer";
import Values from "../Components/Values";
import NavBar from "../Components/NavBar";
import Footer from "../Containers/Footer";
import Subscribe from "../Containers/Subscribe";
const About = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    window.scroll(0, 0);
    const hasReloaded = localStorage.getItem("hasReloaded");
    if (hasReloaded !== "true") {
      localStorage.setItem("hasReloaded", "true");
      window.location.reload();
    } else {
      dispatch(toggleAbout(true));
    }
  }, [dispatch]);

  return (
    <div className="flex flex-col items-center justify-center w-full h-full m-auto">
      <div className="flex bg-transparent items-center py-[10px] px-[20px] z-100">
        <NavBar />
      </div>
      <div className="flex flex-col items-center justify-start w-full pt-[100px]">
        <div className="flex flex-col items-center justify-center w-full">
          <h1 className="font-mont font-bold text-4xl">About Us</h1>
          <img
            src={about1}
            alt="about1"
            className="absolute w-full object-none -z-10 2xl:mt-[2.5%] xl:mt-[3%] lg:mt-[3.5%] md:mt-[4%] sm:mt-[4.5%] mt-[10%]"
          />
        </div>
        <p className="font-mont text-base text-center mt-10 lg:w-[45%] w-[80%]">
          Why leave your important conversations to chance? ChatCoach.io us
          rooted to effective communication is repeated, realistic practice.
        </p>
        <div className="relative w-[70%] border-4 border-[#2E6FF2] rounded-3xl flex flex-col items-center justify-center my-10 h-fit">
          <img
            src={star}
            alt="star"
            className="absolute lg:-top-[8%] lg:-left-[4%] md:-top-[12%] md:-left-[6%] sm:-top-[16%] sm:-left-[8%] -top-[28%] -left-[15%]"
          />
          <ReactPlayer
            url={video}
            width="100%"
            height="100%"
            style={{
              borderWidth: "4px",
              borderColor: "#000",
              borderRadius: "20px",
              overflow: "hidden"
            }}
            controls={true}
          />
          <img
            src={star}
            alt="star"
            className="absolute lg:-bottom-[8%] lg:-right-[4%] md:-bottom-[12%] md:-right-[6%] sm:-bottom-[16%] sm:-right-[8%] -bottom-[28%] -right-[15%]"
          />
        </div>
        <Values />
        {/* <CEOMessage /> */}
        {/* <div className="my-4"> */}
        <ReviewContainer />
        {/* </div> */}
        <Subscribe />
      </div>
      <Footer />
    </div>
  );
};

export default About;
