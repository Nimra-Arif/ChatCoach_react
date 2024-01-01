import React from "react";

import { useSelector, useDispatch } from "react-redux";

import {
  resetBot,
  setBotSelector,
  setMyProfile,
  setSetting
} from "../Store/chatNavSlice/chat";
import { setAccount, setCurrentSettings } from "../Store/accountSlice/account";
import { setCurrentSettings as setProfSetting } from "../Store/profileSlice/profile";
import { setModeOpen } from "../Store/msgSlice/msg";

import Sarah from "../Assets/Sarah.png";
import Emily from "../Assets/Emily.png";
import Ethan from "../Assets/Ethan.png";
import Olivia from "../Assets/Olivia.png";

const ChatBot = ({ setChangeAgent }) => {
  let bot_id = useSelector((state) => state.chat.bot_id);
  const resetBotValue = useSelector((state) => state.chat.resetBot);
  const dispatch = useDispatch();

  const botData = [
    {
      text: "Charismatic, ambitious, and innovative. Ethan is an entrepreneurial spirit who is passionate about helping individuals excel in their communication skills. With his diverse background and experiences as an entrepreneur, he provides practical insights and guidance to users striving for success in the business world.",
      age: 26,
      name: "Ethan Williams",
      hobby: "Playing basketball and reading business books.",
      avatar: Ethan,
      id: "1"
    },
    {
      text: "Energetic, creative, and empathetic. Emily has a passion for helping others improve their communication skills. As a high school girl, she brings a youthful perspective to the conversations, making learning engaging and relatable for students.",
      age: 21,
      name: "Emily Johnson",
      hobby: "Playing the guitar and writing poetry.",
      avatar: Emily,
      id: "2"
    },
    {
      text: "Wise, compassionate, and resilient. Olivia, a widow, has a wealth of life experiences and a deep understanding of effective communication. As a geologist, she possesses analytical skills and attention to detail, helping users develop clear and concise communication in professional settings.",
      age: 35,
      name: "Olivia Anderson",
      hobby: "Hiking and Photography.",
      avatar: Olivia,
      id: "3"
    },
    {
      text: "Strong, diligent, and resourceful. Sarah is a seasoned construction worker who understands the importance of effective communication in the workplace. With her extensive knowledge of the construction industry, she provides valuable insights and guidance on professional communication within that specific context. Sarahs practical approach and problem-solving skills make her an invaluable resource for users seeking to enhance their communication skills in construction-related fields.",
      age: 40,
      name: "Sarah Rodriguez",
      hobby: "DIY home improvement projects and gardening.",
      avatar: Sarah,
      id: "4"
    }
  ];

  return (
    <div className="h-[80%] flex flex-col items-center justify-center w-full">
      <div className="flex flex-col items-center justify-end h-full gap-2">
        <img
          src={botData[+bot_id - 1]?.avatar}
          alt="avatar"
          className="h-[50%] max-h-[450px] mx-auto"
        />
        <div className="flex flex-row items-center justify-between w-full h-fit gap-2">
          <p className="bg-[#A60A53] text-white font-semibold font-mont text-xl px-5 py-1 rounded-xl">
            {botData[+bot_id - 1]?.name}
          </p>
          <p className="bg-[#011526] text-white font-semibold font-mont text-xl px-5 py-1 rounded-xl">
            {botData[+bot_id - 1]?.age}{" "}
            <span className="font-normal">Years</span>
          </p>
        </div>
        <p className="bg-[#011526] text-white font-mont w-full text-base text-center px-4 py-1 rounded-xl">
          {botData[+bot_id - 1]?.hobby}
        </p>
        <p className="bg-[#011526] text-white font-mont text-sm text-center px-4 py-1 rounded-xl">
          {botData[+bot_id - 1]?.text}
        </p>
        <button
          className="bg-[#A60A53] text-white font-semibold font-mont text-lg px-5 py-1 rounded-3xl"
          onClick={() => {
            setChangeAgent(true);
            dispatch(resetBot(!resetBotValue));
            dispatch(setSetting(false));
            dispatch(setBotSelector(false));
            dispatch(setMyProfile(false));
            dispatch(setAccount(false));
            dispatch(setModeOpen(false));
            dispatch(setCurrentSettings(""));
            dispatch(setProfSetting(""));
          }}
        >
          Change Agent
        </button>
      </div>
    </div>
  );
};

export default ChatBot;
