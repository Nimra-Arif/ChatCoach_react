import React from "react";
import { useDispatch } from "react-redux";
import { setTab, setSetting, toggle } from "../Store/chatNavSlice/chat";
import { useSelector } from "react-redux";

import Accuracy from "../Assets/Accuracy.png";
import Emotions from "../Assets/Emotions.png";
import Engagement from "../Assets/Engagement.png";
import Flow from "../Assets/Flow.png";
import logo from "../Assets/logo.svg";

import { SlMenu } from "react-icons/sl";
import { RiSettings5Fill } from "react-icons/ri";

/**
 * ChatNav Component - A navigation component displaying tabs and settings for the chat interface.
 * @returns {JSX.Element} JSX element representing the ChatNav component.
 */
const ChatNav = () => {
  const tab = useSelector((state) => state.chat.value);
  const settingsOpen = useSelector((state) => state.chat.setting);
  const dispatch = useDispatch();
  return (
    <div
      className={`w-full md:h-[60px] h-fit rounded-[20px] flex flex-row justify-center items-center py-3 px-5 mx-auto text-white bg-[#011526] top-3 left-0 right-0 z-100`}
    >
      <div className="lg:flex hidden flex-row items-center justify-around md:gap-8 gap-3 Menu-Container">
        <div
          className={`font-mont md:text-lg text-xs flex flex-row md:gap-2 gap-1 items-center justify-center cursor-pointer transition-colors duration-300`}
          onClick={() => dispatch(setTab("Emotions"))}
        >
          <img src={Emotions} className="w-[18px]" alt="Emotions" />
          <h2
            className={`${
              tab === "Emotions"
                ? "text-white"
                : tab === "Engagement" || tab === "Accuracy" || tab === "Flow"
                ? "text-[#F5F5F55e]"
                : "text-white"
            }`}
          >
            Emotions
          </h2>
        </div>
        <div
          className="font-mont md:text-lg text-xs flex flex-row md:gap-2 gap-1 items-center justify-center cursor-pointer transition-colors duration-300 "
          onClick={() => dispatch(setTab("Engagement"))}
        >
          <img src={Engagement} className="w-[18px]" alt="Engagement" />
          <h2
            className={`${
              tab === "Engagement"
                ? "text-white"
                : tab === "Emotions" || tab === "Accuracy" || tab === "Flow"
                ? "text-[#F5F5F55e]"
                : "text-white"
            }`}
          >
            Engagement
          </h2>
        </div>
        <div
          className="font-mont md:text-lg text-xs flex flex-row md:gap-2 gap-1 items-center justify-center cursor-pointer transition-colors duration-300  "
          onClick={() => dispatch(setTab("Accuracy"))}
        >
          <img src={Accuracy} className="w-[18px]" alt="Accuracy" />
          <h2
            className={`${
              tab === "Accuracy"
                ? "text-white"
                : tab === "Emotions" || tab === "Engagement" || tab === "Flow"
                ? "text-[#F5F5F55e]"
                : "text-white"
            }`}
          >
            Accuracy
          </h2>
        </div>
        <div
          className="font-mont md:text-lg text-xs flex flex-row md:gap-2 gap-1 items-center justify-center cursor-pointer transition-colors duration-300  "
          onClick={() => dispatch(setTab("Flow"))}
        >
          <img src={Flow} className="w-[18px]" alt="Flow" />
          <h2
            className={`${
              tab === "Flow"
                ? "text-white"
                : tab === "Emotions" ||
                  tab === "Accuracy" ||
                  tab === "Engagement"
                ? "text-[#F5F5F55e]"
                : "text-white"
            }`}
          >
            Coaching
          </h2>
        </div>
      </div>
      <div className="lg:hidden flex flex-row items-center justify-between gap-3 w-full">
        <SlMenu
          className="text-2xl cursor-pointer"
          onClick={() => dispatch(toggle(true))}
        />
        <a
          href="/"
          className="flex flex-row items-center justify-center h-full w-full"
        >
          <img src={logo} className="w-[25%] max-w-[150px] invert" alt="logo" />
        </a>

        <RiSettings5Fill
          className="text-2xl cursor-pointer"
          onClick={() => dispatch(setSetting(!settingsOpen))}
        />
      </div>
    </div>
  );
};

export default ChatNav;
