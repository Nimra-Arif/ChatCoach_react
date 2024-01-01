/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import {
  setSetting,
  setTab,
  setBotId,
  setAnalyticsMob
} from "../Store/chatNavSlice/chat";
import {
  getConversations,
  deleteConversations,
  setDelete,
  setMsgTo,
  setOverallEmotion,
  setSystemEmotion,
  setUserEmotion,
  resetEmotions
} from "../Store/msgSlice/msg";
import { setName, setPronouns, setDOB } from "../Store/profileSlice/profile";
import { setEmail } from "../Store/accountSlice/account";

import ChatBot from "../Containers/ChatBot";
import ChatNav from "../Components/ChatNav";
import ChatRight from "../Components/ChatRight";
import ChatBox from "../Components/ChatBox";
import Chatbar from "../Components/Chatbar";
import ChatNavMob from "../Components/ChatNavMob";
import ChatSettings from "../Containers/ChatSettings";
import BotSelector from "../Components/BotSelector";

import { RiSettings5Fill } from "react-icons/ri";
import { RxCross1 } from "react-icons/rx";

import Ethan from "../Assets/Ethan.png";
import logo from "../Assets/logo.svg";
import { setUnSub } from "../Store/proSLice/pro";
import { IoDiamond } from "react-icons/io5";

const Chat = () => {
  const botData = [
    {
      text: "Charismatic, ambitious, and innovative. Ethan is an entrepreneurial spirit who is passionate about helping individuals excel in their communication skills. With his diverse background and experiences as an entrepreneur, he provides practical insights and guidance to users striving for success in the business world.",
      age: 26,
      name: "Ethan Williams",
      msg: "Hi there! My name is Ethan Williams, it's nice to meet you. I'm here to talk about anything related to business, entrepreneurship, or personal development. How can I assist you today?",
      data: "You are 26 years old. Your hobbies are playing basketball and reading business books. You are an entrepreneurial spirit. With your diverse background and experiences as an entrepreneur",
      hobby: "Playing basketball and reading business books.",
      id: "1"
    },
    {
      text: "Energetic, creative, and empathetic. Emily has a passion for helping others improve their communication skills. As a high school girl, she brings a youthful perspective to the conversations, making learning engaging and relatable for students.",
      age: 21,
      name: "Emily Johnson",
      msg: "Hey, I'm Emily Johnson! I'm passionate about communication and love helping others improve their skills. Whether it's discussing the power of words or expressing emotions through poetry and music, I'm here to guide and inspire you. How can I assist you today?",
      data: "You are 21 years old. Your hobbies are playing the guitar and writing poetry. You are energetic, creative, and empathetic. As a high school girl, you bring a youthful perspective to the conversations, making learning engaging and relatable for students",
      hobby: "Playing the guitar and writing poetry.",
      id: "2"
    },
    {
      text: "Wise, compassionate, and resilient. Olivia, a widow, has a wealth of life experiences and a deep understanding of effective communication. As a geologist, she possesses analytical skills and attention to detail, helping users develop clear and concise communication in professional settings.",
      age: 35,
      name: "Olivia Anderson",
      msg: "Hello, I'm Olivia Anderson! As a geologist, I've learned the importance of clear and concise communication in professional settings. Additionally, my love for hiking and photography has honed my attention to detail. Let's work together to enhance your communication skills. How can I assist you today",
      data: "You are 35 years old. Your hobbies are hiking and photography. You are wise, compassionate, and resilient. As a geologist, you possess analytical skills and attention to detail, helping users develop clear and concise communication in professional settings",
      hobby: "Hiking and Photography.",
      id: "3"
    },
    {
      text: "Strong, diligent, and resourceful. Sarah is a seasoned construction worker who understands the importance of effective communication in the workplace. With her extensive knowledge of the construction industry, she provides valuable insights and guidance on professional communication within that specific context. Sarahs practical approach and problem-solving skills make her an invaluable resource for users seeking to enhance their communication skills in construction-related fields.",
      age: 40,
      name: "Sarah Rodriguez",
      msg: "Greetings! I'm Sarah Rodriguez, a seasoned construction worker. Effective communication is vital in the construction industry, and I'm here to share insights and guidance with you. Whether it's DIY projects or discussing construction-related communication challenges, I'm here to help. How can I assist you today?",
      data: "You are 40 years old. Your hobbies are DIY home improvement projects and gardening. You are strong, diligent, and resourceful. As a seasoned construction worker, you understand the importance of effective communication in the workplace. With your extensive knowledge of the construction industry, you provide valuable insights and guidance on professional communication within that specific context",
      hobby: "DIY home improvement projects and gardening.",
      id: "4"
    }
  ];

  const [logout, setLogout] = useState(false);
  const [changeAgent, setChangeAgent] = useState(false);
  const [cancelSub, setCancelSub] = useState(false);

  const navigate = useNavigate();

  const tokenTest = async (token) => {
    try {
      const res = await axios.get("https://admin.chatcoach.io/api/test", {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      return res.data.data.status;
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/join");
    } else {
      tokenTest(token).then((res) => {
        if (res !== "202") {
          navigate("/join");
        }
      });
    }
  });

  useEffect(() => {
    if (localStorage.getItem("token")) {
      dispatch(setEmail(localStorage.getItem("email")));
      dispatch(setDOB(localStorage.getItem("DOB")));
      dispatch(setPronouns(localStorage.getItem("pronouns")));
      dispatch(setName(localStorage.getItem("name")));
      dispatch(setBotId(localStorage.getItem("bot_id")));
      dispatch(setMsgTo(botData[+localStorage.getItem("bot_id") - 1].msg));
      localStorage.setItem("paid", false);
      getConversations(dispatch, bot_id);
    } else navigate("/join");
  });

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

  const cancelSubscription = async (token) => {
    const userRes = await axios({
      method: "get",
      url: "https://admin.chatcoach.io/api/subscriptionend",
      headers: {
        Authorization: `Bearer ${token}`
      }
    });

    const { data } = userRes;

    return data;
  };

  const tab = useSelector((state) => state.chat.value);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      getUserInformation(localStorage.getItem("token")).then((res) => {
        console.log(res);
        if (res.subscription && res.userhassub !== 0) {
          const dateExpiry = new Date(res.subscription.expiry_date);
          if (Date.now() < dateExpiry) {
            localStorage.setItem("subscribed", true);
            localStorage.setItem("plan", res.subscription.plan_id);
          }
        } else {
          localStorage.removeItem("plan");
          localStorage.removeItem("subscribed");
          navigate("/subscription");
        }
      });
    }
  }, []);

  const toggleValue = useSelector((state) => state.chat.toggle);
  const settingsOpen = useSelector((state) => state.chat.setting);
  const bot_id = useSelector((state) => state.chat.bot_id);
  const pro = useSelector((state) => state.pro.pro);
  const deleteModal = useSelector((state) => state.msg.delete);
  const loading = useSelector((state) => state.chat.loading);
  const bot = useSelector((state) => state.chat.bot);
  const BotId = useSelector((state) => state.chat.bot_id);
  const analyticsMob = useSelector((state) => state.chat.analyticsMob);
  const unSub = useSelector((state) => state.pro.unSub);

  const dispatch = useDispatch();
  const chatInfo = {
    text: "Charismatic, ambitious, and innovative. Ethan is an entrepreneurial spirit who is passionate about helping individuals excel in their communication skills. With his diverse background and experiences as an entrepreneur, he provides practical insights and guidance to users striving for success in the business world.",
    age: 26,
    name: "Ethan Williams",
    hobby: "Playing basketball and reading business books.",
    avatar: Ethan
  };
  useEffect(() => {
    if (localStorage.getItem("token")) {
      getConversations(dispatch, bot_id);
    }
  }, [bot_id, dispatch]);

  return (
    <>
      {cancelSub && (
        <div
          className={`absolute z-50 sm:left-[40%] left-[13%] top-1/3 bg-[#CFDAEF] shadow-xl rounded-xl flex flex-col items-center justify-between h-[150px] p-4`}
        >
          <p className="text-base font-mont">
            Are you sure you want to cancel your subscription?
          </p>
          <div className="flex flex-row items-center justify-between w-[75%] gap-2">
            <button
              className="bg-green-500 text-base font-mont text-white font-medium px-4 py-2 rounded-xl"
              onClick={() => {
                setCancelSub(false);
                navigate("/subscription");
                localStorage.removeItem("plan");
                localStorage.removeItem("subscribed");
                cancelSubscription(localStorage.getItem("token"));
              }}
            >
              Yes
            </button>
            <button
              className="bg-red-500 text-base font-mont text-white font-medium px-4 py-2 rounded-xl"
              onClick={() => setCancelSub(false)}
            >
              No
            </button>
          </div>
        </div>
      )}
      {logout && (
        <div
          className={`absolute z-50 sm:left-[40%] left-[13%] top-1/3 bg-[#CFDAEF] shadow-xl rounded-xl flex flex-col items-center justify-between h-[150px] p-4`}
        >
          <p className="text-base font-mont">
            Are you sure you want to Log out?
          </p>
          <div className="flex flex-row items-center justify-between w-[75%] gap-2">
            <button
              className="bg-green-500 text-base font-mont text-white font-medium px-4 py-2 rounded-xl"
              onClick={() => {
                localStorage.removeItem("bot_id");
                localStorage.removeItem("token");
                localStorage.removeItem("DOB");
                localStorage.removeItem("pronouns");
                localStorage.removeItem("name");
                localStorage.removeItem("email");
                localStorage.removeItem("id");
                localStorage.removeItem("paid");
                localStorage.removeItem("subscribed");
                localStorage.removeItem("plan");
                navigate("/join");
              }}
            >
              Yes
            </button>
            <button
              className="bg-red-500 text-base font-mont text-white font-medium px-4 py-2 rounded-xl"
              onClick={() => setLogout(false)}
            >
              No
            </button>
          </div>
        </div>
      )}
      {deleteModal && (
        <div
          className={`absolute z-50 sm:left-[40%] left-[10%] sm:w-fit w-[80%] top-1/3 bg-[#CFDAEF] shadow-xl rounded-xl flex flex-col items-center justify-between h-[150px] p-4`}
        >
          <p className="text-base font-mont">
            Are you sure you want to Delete Conversation?
          </p>
          <div className="flex flex-row items-center justify-between w-[75%] gap-2">
            <button
              className="bg-green-500 text-base font-mont text-white font-medium px-4 py-2 rounded-xl"
              onClick={() => {
                deleteConversations(dispatch, bot_id);
                dispatch(setDelete(false));
              }}
            >
              Yes
            </button>
            <button
              className="bg-red-500 text-base font-mont text-white font-medium px-4 py-2 rounded-xl"
              onClick={() => dispatch(setDelete(false))}
            >
              No
            </button>
          </div>
        </div>
      )}
      {(((tab === "Engagement" || tab === "Accuracy" || tab === "Flow") &&
        (localStorage.getItem("plan") === "1" ||
          localStorage.getItem("plan") === "3")) ||
        unSub) && (
        <div className="absolute top-1/3 lg:left-[30%] md:left-[20%] left-[10%] z-50 flex flex-col items-center justify-center lg:w-[40%] md:w-[60%] w-[80%] gap-4 bg-white px-2 py-6 rounded-xl">
          <p className="font-mont text-xl font-bold">Premium Feature</p>
          <p className="font-mont text-base text-center">
            Upgrade your plan to unlock all features
          </p>
          <button
            className="font-mont text-white text-base font-semibold bg-[#2E6FF2] px-4 py-2 rounded-xl"
            onClick={() => {
              navigate("/subscription");
            }}
          >
            Upgrade to Premium
          </button>
          <p
            className="font-mont text-base cursor-pointer underline underline-offset-2 hover:text-[#2E6FF2]"
            onClick={() => {
              dispatch(setTab("Emotions"));
              dispatch(setUnSub(false));
            }}
          >
            Continue with current plan.
          </p>
        </div>
      )}
      {changeAgent && (
        <div className="absolute top-[10%] lg:left-[30%] md:left-[20%] left-[10%] z-50 flex flex-col items-center justify-center lg:w-[40%] md:w-[60%] w-[80%] gap-4 bg-[#CFDAEF] px-2 py-4 rounded-xl max-h-[80%]">
          <div className="flex flex-row w-full items-center justify-end">
            <button
              className="p-3 rounded-full"
              onClick={() => {
                setChangeAgent(false);
              }}
            >
              <RxCross1 className="text-black text-4xl" />
            </button>
          </div>
          <div className="flex flex-col items-center justify-center w-full">
            <BotSelector changeAgent={changeAgent} />
          </div>
          {!loading && (
            <div className="flex flex-row items-center justify-center w-full gap-2 py-4">
              <button
                className="font-mont text-white bg-[#A60A53] px-4 py-2 rounded-3xl disabled:bg-slate-600 flex items-center justify-center"
                onClick={() => {
                  if (
                    (bot.id === "3" || bot.id === "4") &&
                    !(
                      localStorage.getItem("plan") === "2" ||
                      localStorage.getItem("plan") === "4"
                    )
                  ) {
                    dispatch(setUnSub(true));
                    setChangeAgent(false);
                    return;
                  } else {
                    localStorage.setItem("bot_id", bot.id ? bot.id : "1");
                    dispatch(setBotId(bot.id ? bot.id : "1"));
                    dispatch(
                      setMsgTo(
                        bot.id ? botData[+bot.id - 1].msg : botData[0].msg
                      )
                    );
                    dispatch(
                      setOverallEmotion({
                        anger: 1,
                        fear: 1,
                        happiness: 1,
                        sadness: 1
                      })
                    );
                    dispatch(
                      setUserEmotion({
                        anger: 1,
                        fear: 1,
                        happiness: 1,
                        sadness: 1
                      })
                    );
                    dispatch(
                      setSystemEmotion({
                        anger: 1,
                        fear: 1,
                        happiness: 1,
                        sadness: 1
                      })
                    );
                    dispatch(resetEmotions());
                  }
                }}
                disabled={BotId === (bot.id ? bot.id : "1")}
              >
                {(bot.id === "3" || bot.id === "4") && (
                  <IoDiamond className="text-[#FFD700] mr-2" size={20} />
                )}
                Select Agent
              </button>

              {BotId === (bot.id ? bot.id : "1") && (
                <button
                  className="font-mont text-white bg-[#A60A53] px-4 py-2 rounded-3xl disabled:bg-slate-600"
                  onClick={() => {
                    dispatch(setDelete(true));
                    setChangeAgent(false);
                  }}
                >
                  Delete Conversations
                </button>
              )}
            </div>
          )}
        </div>
      )}
      <div
        className={`flex flex-row items-start justify-center w-full mx-auto h-screen bg-[#E1EBFF] p-2 lg:p-5 gap-2 z-20 overflow-y-clip transition-all duration-300 ease-in-out ${
          unSub ||
          cancelSub ||
          logout ||
          changeAgent ||
          pro ||
          deleteModal ||
          ((tab === "Engagement" || tab === "Accuracy" || tab === "Flow") &&
            (localStorage.getItem("plan") === "1" ||
              localStorage.getItem("plan") === "3"))
            ? "blur-2xl"
            : "blur-0"
        }`}
      >
        <div className="lg:flex hidden flex-col items-end justify-between w-[25%] max-w-[320px] h-[96%] m-5">
          <div className="mx-auto">
            <img
              src={logo}
              className="max-h-[60px] cursor-pointer"
              onClick={() => navigate("/")}
              alt="logo"
            />
          </div>
          <ChatBot
            avatar={chatInfo.avatar}
            text={chatInfo.text}
            age={chatInfo.age}
            hobby={chatInfo.hobby}
            name={chatInfo.name}
            setChangeAgent={setChangeAgent}
          />
        </div>
        <div
          className={`lg:hidden fixed top-0 left-0 z-10 flex flex-col items-center justify-start h-full mx-2 m-5 gap-3 transition-all duration-300 overflow-hidden text-black font-medium font-mont text-lg ${
            toggleValue ? "w-[95%]" : "w-0"
          }`}
        >
          <ChatNavMob />
        </div>
        <div
          className={`flex flex-col items-start justify-center xl:max-w-[50%] max-w-[900px] w-full md:h-[96%] h-[96dvh] md:m-5 ${
            analyticsMob || toggleValue ? "lg:blur-0 blur-xl" : ""
          }`}
        >
          <ChatNav />
          <ChatBox />
          <Chatbar />
        </div>
        <div className="lg:flex hidden flex-col items-center justify-start w-[20%] max-w-[500px] h-[96%] mx-2 m-5 gap-2">
          <div className="flex flex-row w-full items-end justify-end">
            <button className="h-[50px] w-[50px] flex flex-col items-center justify-center bg-[#011526] rounded-full">
              <RiSettings5Fill
                className="text-white"
                size={36}
                onClick={() => dispatch(setSetting(!settingsOpen))}
              />
            </button>
          </div>
          <div className="bg-[#CFDAEF] flex flex-col items-center justify-start p-4 h-full w-full max-h-full overflow-y-auto rounded-xl gap-2">
            {tab === "Emotions" && (
              <p className="text-white font-extrabold font-mont text-xl px-9 py-2 rounded-xl w-full text-center">
                EMOTIONS
              </p>
            )}
            {tab === "Engagement" && localStorage.getItem("subscribed") && (
              <p className="text-white font-extrabold font-mont text-xl px-9 py-2 rounded-xl w-full text-center">
                ENGAGEMENT
              </p>
            )}
            {tab === "Accuracy" && localStorage.getItem("subscribed") && (
              <p className="text-white font-extrabold font-mont text-xl px-9 py-2 rounded-xl w-full text-center">
                ACCURACY
              </p>
            )}
            {tab === "Flow" && localStorage.getItem("subscribed") && (
              <p className="text-white font-extrabold font-mont text-xl px-9 py-2 rounded-xl w-full text-center">
                COACHING
              </p>
            )}
            <ChatRight />
          </div>
        </div>
        <div
          className={`lg:hidden fixed top-0 right-0 z-10 flex flex-col items-center justify-start h-full pb-3 mx-2 m-5 gap-2 transition-all duration-300 overflow-hidden ${
            analyticsMob ? "w-[95%]" : "w-0"
          }`}
        >
          <div className="flex flex-row w-full items-end justify-start">
            <button
              className="p-1 bg-[#011526] rounded-full"
              onClick={() => dispatch(setAnalyticsMob(false))}
            >
              <RxCross1 className="text-white text-4xl" />
            </button>
          </div>
          <div className="bg-[#CFDAEF] flex flex-col items-center justify-start p-4 h-fit max-h-[90%] rounded-xl gap-2">
            {tab === "Emotions" && (
              <p className="text-white font-extrabold font-mont text-xl px-9 py-2 rounded-xl w-full text-center">
                EMOTIONS
              </p>
            )}
            {tab === "Engagement" && localStorage.getItem("subscribed") && (
              <p className="text-white font-extrabold font-mont text-xl px-9 py-2 rounded-xl w-full text-center">
                ENGAGEMENT
              </p>
            )}
            {tab === "Accuracy" && localStorage.getItem("subscribed") && (
              <p className="text-white font-extrabold font-mont text-xl px-9 py-2 rounded-xl w-full text-center">
                ACCURACY
              </p>
            )}
            {tab === "Flow" && localStorage.getItem("subscribed") && (
              <p className="text-white font-extrabold font-mont text-xl px-9 py-2 rounded-xl w-full text-center">
                COACHING
              </p>
            )}
            <ChatRight />
          </div>
        </div>
      </div>
      <ChatSettings setLogout={setLogout} setCancelSub={setCancelSub} />
    </>
  );
};

export default Chat;
