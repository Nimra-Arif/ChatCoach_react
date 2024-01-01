import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { RxCross1, RxArrowTopRight } from "react-icons/rx";
import { AiOutlineRight } from "react-icons/ai";
import { BiLeftArrowAlt } from "react-icons/bi";
import { MdWorkspacePremium } from "react-icons/md";

import axios from "axios";

import {
  setSetting,
  setBotSelector,
  setMyProfile,
  setBotId,
  setBot
} from "../Store/chatNavSlice/chat";
import {
  setCurrentSettings as setProfSetting,
  setName,
  setDOB,
  setPronouns
} from "../Store/profileSlice/profile";
import {
  setMsgTo,
  setOverallEmotion,
  setSystemEmotion,
  setUserEmotion,
  setMode,
  setDelete,
  saveMessage,
  resetEmotions,
  setModeOpen as setSelectMode
} from "../Store/msgSlice/msg";
import { setAccount, setCurrentSettings } from "../Store/accountSlice/account";
import BotSelector from "../Components/BotSelector";
import ProfileSettings from "./ProfileSettings";
import AccountSettings from "./AccountSettlings";
import { setEmail } from "../Store/accountSlice/account";
import { FaCrown } from "react-icons/fa";
import { IoDiamond } from "react-icons/io5";
import { setUnSub } from "../Store/proSLice/pro";

import "./ChatSettings.css";

const ChatSettings = ({ setLogout, setCancelSub }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const email = useSelector((state) => state.account.email);
  const name = useSelector((state) => state.profile.name);
  const DOB = useSelector((state) => state.profile.DOB);
  const pronouns = useSelector((state) => state.profile.pronouns);
  const settingsOpen = useSelector((state) => state.chat.setting);
  const botSelector = useSelector((state) => state.chat.botSelector);
  const bot = useSelector((state) => state.chat.bot);
  const myProfile = useSelector((state) => state.chat.myProfile);
  const account = useSelector((state) => state.account.account);
  const loading = useSelector((state) => state.chat.loading);
  const BotId = useSelector((state) => state.chat.bot_id);
  const mode = useSelector((state) => state.msg.mode);
  const selectMode = useSelector((state) => state.msg.modeOpen);
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [DOBError, setDOBError] = useState("");
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [pronounsError, setPronounsError] = useState("");
  const [passwordSuccess, setPasswordSuccess] = useState("");
  const [nameSuccess, setNameSuccess] = useState("");
  const [emailSuccess, setEmailSuccess] = useState("");
  const [pronounsSuccess, setPronounsSuccess] = useState("");
  const [DOBSuccess, setDOBSuccess] = useState("");

  const accCurrentSettings = useSelector(
    (state) => state.account.currentSettings
  );
  const profCurrentSettings = useSelector(
    (state) => state.profile.currentSettings
  );

  const botData = [
    {
      text: "Charismatic, ambitious, and innovative. Ethan is an entrepreneurial spirit who is passionate about helping individuals excel in their communication skills. With his diverse background and experiences as an entrepreneur, he provides practical insights and guidance to users striving for success in the business world.",
      age: 30,
      name: "Ethan Williams",
      msg: "Hi there! My name is Ethan Williams, it's nice to meet you. I'm here to talk about anything related to business, entrepreneurship, or personal development. How can I assist you today?",
      data: "You are 30 years old. Your hobbies are playing basketball and reading business books. You are an entrepreneurial spirit. With your diverse background and experiences as an entrepreneur",
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

  useEffect(() => {
    dispatch(setSetting(false));
    dispatch(setBotSelector(false));
    dispatch(setMyProfile(false));
    dispatch(setAccount(false));
    dispatch(setSelectMode(false));
    dispatch(setCurrentSettings(""));
    dispatch(setProfSetting(""));
    setOldPassword("");
    setNewPassword("");
    setPasswordError("");
    setDOBError("");
    setNameError("");
    setEmailError("");
    setPronounsError("");
    setPasswordSuccess("");
    setNameSuccess("");
    setEmailSuccess("");
    setPronounsSuccess("");
    setDOBSuccess("");
    dispatch(setName(localStorage.getItem("name")));
    dispatch(setEmail(localStorage.getItem("email")));
    dispatch(setPronouns(localStorage.getItem("pronouns")));
    dispatch(setDOB(localStorage.getItem("DOB")));
  }, [dispatch]);

  const handleEmailChange = async () => {
    if (email.match(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/) === null) {
      setEmailError("Invalid email address.");
      return;
    }
    const res = await axios.post(
      "https://admin.chatcoach.io/api/changeemail",
      {
        email: email
      },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`
        }
      }
    );

    if (res.data.data.status === "202") {
      localStorage.setItem("email", email);
      setEmailSuccess(res.data.data.logs);
      setEmailError("");
    } else {
      setEmailError(res.data.data.logs);
      setEmailSuccess("");
    }
  };

  const handlePasswordChange = async () => {
    if (
      newPassword.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\da-zA-Z])/) ===
      null
    ) {
      setPasswordError(
        "Password must contain at least 1 lowercase, 1 uppercase, 1 numeric, and 1 special character."
      );
      return;
    } else {
      const res = await axios.post(
        "https://admin.chatcoach.io/api/changepassword",
        {
          oldpassword: oldPassword,
          password: newPassword
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`
          }
        }
      );
      if (res.data.data.status === "202") {
        setPasswordSuccess(res.data.data.logs);
        setPasswordError("");
      } else {
        setPasswordError(res.data.data.logs);
        setPasswordSuccess("");
      }
      setOldPassword("");
      setNewPassword("");
    }
  };

  const handleNameChange = async () => {
    const res = await axios.post(
      "https://admin.chatcoach.io/api/changename",
      {
        name: name
      },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`
        }
      }
    );

    if (res.data.data.status === "202") {
      localStorage.setItem("name", name);
      setNameSuccess(res.data.data.logs);
      setNameError("");
    } else {
      setNameError(res.data.data.logs);
      setNameSuccess("");
    }
  };

  const handleDOBChange = async () => {
    if (
      DOB.split("-")[0].replace(/^0+/, "").length > 4 ||
      DOB.split("-")[0].replace(/^0+/, "").length < 4
    ) {
      setDOBError("Incorrce Year");
    } else {
      const res = await axios.post(
        "https://admin.chatcoach.io/api/changedob",
        {
          dob: DOB
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`
          }
        }
      );

      if (res.data.data.status === "202") {
        localStorage.setItem("DOB", DOB);
        setDOBSuccess(res.data.data.logs);
        setDOBError("");
      } else {
        setDOBError(res.data.data.logs);
        setDOBSuccess("");
      }
    }
  };

  const handlepronounsChange = async () => {
    const res = await axios.post(
      "https://admin.chatcoach.io/api/changepronouns",
      {
        pronouns: pronouns
      },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`
        }
      }
    );

    if (res.data.data.status === "202") {
      localStorage.setItem("pronouns", pronouns);
      setPronounsSuccess(res.data.data.logs);
      setPasswordError("");
    } else {
      setPronounsError(res.data.data.logs);
      setPasswordSuccess("");
    }
  };

  const modes = [
    "Chat",
    "Job interviews",
    "Sales",
    "Online Dating",
    "VIPs",
    "Negotiations",
    "Customer Support"
  ];

  return (
    <>
      <div
        className={`fixed top-0 right-0 z-10 flex flex-col items-start justify-start bg-[#011530] overflow-auto no-scrollbar pb-8 transition-all duration-300 h-full ${
          settingsOpen ? "lg:w-[30%] w-full" : "w-0"
        }`}
      >
        <div className="flex flex-row w-full items-end justify-end">
          <button
            className="p-3 rounded-full"
            onClick={() => dispatch(setSetting(!settingsOpen))}
          >
            <RxCross1 className="text-white text-4xl" />
          </button>
        </div>
        <p className="font-mont text-white text-3xl text-center font-bold w-full">
          SETTINGS
        </p>
        <div className="flex flex-col items-center justify-start p-5 gap-5 w-full">
          <p className="font-mont text-white text-xl font-semibold w-full">
            General
          </p>
          <div
            className="flex flex-row justify-between items-center w-full cursor-pointer"
            onClick={() => dispatch(setMyProfile(!myProfile))}
          >
            <p className="text-white font-mont text-base hover:underline underline-offset-4">
              My Profile
            </p>
            <AiOutlineRight className="text-white text-base" />
          </div>
          <div
            className="flex flex-row justify-between items-center w-full cursor-pointer"
            onClick={() => {
              dispatch(setBotSelector(!botSelector));
              dispatch(setBot(botData[0]));
            }}
          >
            <p className="text-white font-mont text-base hover:underline underline-offset-4">
              ChatCoach Profile
            </p>
            <AiOutlineRight className="text-white text-base" />
          </div>
          <div
            className="flex flex-row justify-between items-center w-full cursor-pointer"
            onClick={() => dispatch(setAccount(!account))}
          >
            <p className="text-white font-mont text-base hover:underline underline-offset-4">
              Account Settings
            </p>
            <AiOutlineRight className="text-white text-base" />
          </div>
          <div
            className="flex flex-row justify-between items-center w-full cursor-pointer"
            onClick={() => dispatch(setSelectMode(!selectMode))}
          >
            <p className="text-white font-mont text-base hover:underline underline-offset-4">
              Select Mode
            </p>
            <AiOutlineRight className="text-white text-base" />
          </div>
        </div>
        <div className="flex flex-col items-center justify-start p-5 gap-5 w-full">
          <p className="font-mont text-white text-xl font-semibold w-full">
            More About ChatCoach
          </p>
          <div
            className="flex flex-row justify-between items-center w-full cursor-pointer"
            onClick={() => window.open("/helpcenter", "_blank")}
          >
            <p className="text-white font-mont text-base hover:underline underline-offset-4">
              Help Center
            </p>
            <RxArrowTopRight className="text-white text-base" />
          </div>
          <div
            className="flex flex-row justify-between items-center w-full cursor-pointer"
            onClick={() => window.open("/terms", "_blank")}
          >
            <p className="text-white font-mont text-base hover:underline underline-offset-4">
              Terms of Service
            </p>
            <RxArrowTopRight className="text-white text-base" />
          </div>
          <div
            className="flex flex-row justify-between items-center w-full cursor-pointer"
            onClick={() => window.open("/privacypolicy", "_blank")}
          >
            <p className="text-white font-mont text-base hover:underline underline-offset-4">
              Privacy Policy
            </p>
            <RxArrowTopRight className="text-white text-base" />
          </div>
          <div className="flex flex-row justify-between items-center w-full cursor-pointer">
            <p className="text-white font-mont text-base hover:underline underline-offset-4">
              Credits
            </p>
            <RxArrowTopRight className="text-white text-base" />
          </div>
        </div>
        {(localStorage.getItem("plan") === "2" ||
          localStorage.getItem("plan") === "4") && (
          <div className="relative flex flex-col items-start justify-center bg-white bg-opacity-20 backdrop-blur-xl w-[95%] h-[100px] sm:h-[120px] rounded-3xl shadow-2xl mx-auto my-6 p-4">
            <div className="flex flex-row items-center justify-center gap-4">
              <FaCrown className="text-[#FFD700]" size={42} />
              <p className="font-mont text-white text-base sm:text-xl font-semibold">
                You are a Premium Member of ChatCoach
              </p>
            </div>
            {/* button cancel subscription */}
            <div className="flex flex-row items-center justify-center gap-4 w-full">
              <button
                className="font-mont text-white bg-[#A60A53] px-4 py-2 rounded-3xl"
                onClick={() => {
                  dispatch(setSetting(!settingsOpen));
                  setCancelSub(true);
                }}
              >
                Cancel Subscription
              </button>
            </div>
          </div>
        )}
        {(localStorage.getItem("plan") === "1" ||
          localStorage.getItem("plan") === "3") && (
          <div className="flex flex-col items-center justify-between bg-white bg-opacity-20 backdrop-blur-xl w-[95%] h-[75px] sm:h-[120px] rounded-3xl shadow-2xl mx-auto my-6 p-4">
            <div className="flex flex-row items-center justify-center gap-4">
              <MdWorkspacePremium className="text-white" size={42} />
              <p className="font-mont text-white text-base sm:text-xl font-semibold">
                You are Subscribed to the basic plan of Catcoach.
              </p>
            </div>
            <div className="flex flex-row items-center justify-center gap-4 w-full">
              <button
                className="font-mont text-white bg-[#A60A53] px-4 py-2 rounded-3xl"
                onClick={() => {
                  dispatch(setSetting(!settingsOpen));
                  setCancelSub(true);
                }}
              >
                Cancel Subscription
              </button>
              <button
                className="font-mont text-white bg-[#A60A53] px-4 py-2 rounded-3xl"
                onClick={() => {
                  navigate("/subscription");
                }}
              >
                Upgrade to Premium
              </button>
            </div>
          </div>
        )}
        <div className="flex flex-row items-center justify-center w-full">
          <button
            className="font-mont text-white bg-[#A60A53] px-4 py-2 rounded-3xl"
            onClick={() => {
              setLogout(true);
              dispatch(setSetting(false));
            }}
          >
            Log Out
          </button>
        </div>
      </div>
      <div
        className={`fixed top-0 right-0 z-10 flex flex-col items-start justify-start bg-[#011530] overflow-hidden transition-all duration-300 h-full gap-2 ${
          botSelector ? "lg:w-[30%] w-full" : "w-0"
        }`}
      >
        <div className="flex flex-row w-full items-center justify-between">
          <button
            className="p-3 rounded-full"
            onClick={() => dispatch(setBotSelector(!botSelector))}
          >
            <BiLeftArrowAlt className="text-white text-4xl" />
          </button>
          <button
            className="p-3 rounded-full"
            onClick={() => {
              dispatch(setSetting(!settingsOpen));
              dispatch(setBotSelector(!botSelector));
            }}
          >
            <RxCross1 className="text-white text-4xl" />
          </button>
        </div>
        <p className="font-mont text-white text-3xl text-center font-bold w-full">
          SETTINGS
        </p>
        <p className="font-mont text-white text-xl text-center w-full">
          ChatCoach Profile
        </p>
        <div className="flex flex-col items-center justify-center w-full">
          <BotSelector />
        </div>
        {!loading && (
          <div className="flex flex-row items-center justify-center w-full gap-2">
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
                  dispatch(setSetting(!settingsOpen));
                  dispatch(setBotSelector(!botSelector));
                } else {
                  localStorage.setItem("bot_id", bot.id ? bot.id : "1");
                  dispatch(setBotId(bot.id ? bot.id : "1"));
                  dispatch(
                    setMsgTo(bot.id ? botData[+bot.id - 1].msg : botData[0].msg)
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
                  dispatch(setSetting(!settingsOpen));
                  dispatch(setBotSelector(!botSelector));
                }}
              >
                Delete Conversations
              </button>
            )}
          </div>
        )}
      </div>
      <div
        className={`fixed top-0 right-0 z-10 flex flex-col items-start justify-start bg-[#011530] overflow-hidden transition-all duration-300 h-full gap-2 ${
          selectMode ? "lg:w-[30%] w-full" : "w-0"
        }`}
      >
        <div className="flex flex-row w-full items-center justify-between">
          <button
            className="p-3 rounded-full"
            onClick={() => {
              dispatch(setSelectMode(!selectMode));
            }}
          >
            <BiLeftArrowAlt className="text-white text-4xl" />
          </button>
          <button
            className="p-3 rounded-full"
            onClick={() => {
              dispatch(setSetting(!settingsOpen));
              dispatch(setSelectMode(!selectMode));
            }}
          >
            <RxCross1 className="text-white text-4xl" />
          </button>
        </div>
        <p className="font-mont text-white text-3xl text-center font-bold w-full">
          SETTINGS
        </p>
        <p className="font-mont text-white text-xl text-center w-full">
          Change Mode
        </p>
        <p className="font-mont text-white text-xl text-center w-full">
          <span className="font-bold">Current Mode: </span>
          {modes[+mode]}
        </p>
        <div
          className={`flex flex-col items-center justify-center md: w-full h-[60%] gap-5 `}
        >
          <div className="flex flex-row items-center justify-center flex-wrap gap-3 px-10">
            {modes.map((currentMode, index) => (
              <>
                <p
                  key={index}
                  className={`font-mont text-base px-4 py-2 rounded-3xl text-white border-2 cursor-pointer flex items-center justify-center ${
                    mode === index.toString()
                      ? "bg-[#ffffff85]"
                      : "hover:bg-[#ffffff28] bg-transparent"
                  } `}
                  onClick={() => {
                    if (index >= 3) {
                      if (
                        localStorage.getItem("plan") === "2" ||
                        localStorage.getItem("plan") === "4"
                      ) {
                        dispatch(setMode(index.toString()));
                        saveMessage(`Current Mode: ${modes[+index]}`, "2");
                      } else {
                        dispatch(setUnSub(true));
                        dispatch(setSetting(!settingsOpen));
                        dispatch(setSelectMode(!selectMode));
                      }
                    } else {
                      dispatch(setMode(index.toString()));
                      saveMessage(`Current Mode: ${modes[+index]}`, "2");
                    }
                  }}
                >
                  {index >= 3 && (
                    <IoDiamond className="text-[#FFD700] mr-2" size={20} />
                  )}
                  {currentMode}
                </p>
              </>
            ))}
          </div>
        </div>
      </div>
      <div
        className={`fixed top-0 right-0 z-10 flex flex-col items-start justify-start bg-[#011530] overflow-hidden transition-all duration-300 h-full gap-2 ${
          myProfile ? "lg:w-[30%] w-full" : "w-0"
        }`}
      >
        <div className="flex flex-row w-full items-center justify-between">
          <button
            className="p-3 rounded-full"
            onClick={() => dispatch(setMyProfile(!myProfile))}
          >
            <BiLeftArrowAlt className="text-white text-4xl" />
          </button>
          <button
            className="p-3 rounded-full"
            onClick={() => {
              dispatch(setSetting(!settingsOpen));
              dispatch(setMyProfile(!myProfile));
            }}
          >
            <RxCross1 className="text-white text-4xl" />
          </button>
        </div>
        <p className="font-mont text-white text-3xl text-center font-bold w-full">
          SETTINGS
        </p>
        <p className="font-mont text-white text-xl text-center w-full">
          My Profile
        </p>
        <ProfileSettings />
      </div>
      <div
        className={`fixed top-0 right-0 z-10 flex flex-col items-start justify-start bg-[#011530] overflow-hidden transition-all duration-300 h-full gap-2 ${
          account ? "lg:w-[30%] w-full" : "w-0"
        }`}
      >
        <div className="flex flex-row w-full items-center justify-between">
          <button
            className="p-3 rounded-full"
            onClick={() => dispatch(setAccount(!account))}
          >
            <BiLeftArrowAlt className="text-white text-4xl" />
          </button>
          <button
            className="p-3 rounded-full"
            onClick={() => {
              dispatch(setSetting(!settingsOpen));
              dispatch(setAccount(!account));
            }}
          >
            <RxCross1 className="text-white text-4xl" />
          </button>
        </div>
        <p className="font-mont text-white text-3xl text-center font-bold w-full">
          SETTINGS
        </p>
        <p className="font-mont text-white text-xl text-center w-full">
          Account Settings
        </p>
        <AccountSettings />
      </div>
      <div
        className={`fixed top-0 right-0 z-10 flex flex-col items-start justify-start bg-[#011530] overflow-hidden transition-all duration-300 h-full gap-2 ${
          accCurrentSettings === "email" ? "lg:w-[30%] w-full" : "w-0"
        }`}
      >
        <div className="flex flex-row w-full items-center justify-between">
          <button
            className="p-3 rounded-full"
            onClick={() => {
              dispatch(setCurrentSettings(""));
              setEmailError("");
              setEmailSuccess("");
              dispatch(setEmail(localStorage.getItem("email")));
            }}
          >
            <BiLeftArrowAlt className="text-white text-4xl" />
          </button>
          <button
            className="p-3 rounded-full"
            onClick={() => {
              dispatch(setSetting(!settingsOpen));
              dispatch(setAccount(!account));
              dispatch(setCurrentSettings(""));
              setEmailError("");
              setEmailSuccess("");
              dispatch(setEmail(localStorage.getItem("email")));
            }}
          >
            <RxCross1 className="text-white text-4xl" />
          </button>
        </div>
        <p className="font-mont text-white text-3xl text-center font-bold w-full">
          SETTINGS
        </p>
        <p className="font-mont text-white text-xl text-center w-full">
          Change Email
        </p>
        <div
          className={` flex-col items-center justify-center md: w-full h-[60%] gap-5 ${
            accCurrentSettings === "email" ? "flex" : "hidden"
          }`}
        >
          <input
            className="font-mont text-xl px-4 py-2 text-semibold border-b-2 text-center w-[300px] bg-transparent text-white focus:outline-0"
            value={email}
            onChange={(e) => dispatch(setEmail(e.target.value))}
          />
          {emailError !== "" && (
            <p className={`font-mont text-sm text-red-700 `}>{emailError}</p>
          )}
          {emailSuccess !== "" && (
            <p className={`font-mont text-sm text-green-700 `}>
              {emailSuccess}
            </p>
          )}
          <button
            className="font-mont text-white bg-[#A60A53] px-4 py-2 rounded-3xl disabled:bg-slate-600"
            onClick={() => handleEmailChange()}
            disabled={email === "" || email === localStorage.getItem("email")}
          >
            Save
          </button>
        </div>
      </div>
      <div
        className={`fixed top-0 right-0 z-10 flex flex-col items-start justify-start bg-[#011530] overflow-hidden transition-all duration-300 h-full gap-2 ${
          accCurrentSettings === "password" ? "lg:w-[30%] w-full" : "w-0"
        }`}
      >
        <div className="flex flex-row w-full items-center justify-between">
          <button
            className="p-3 rounded-full"
            onClick={() => {
              dispatch(setCurrentSettings(""));
              setPasswordError("");
              setPasswordSuccess("");
              setOldPassword("");
              setNewPassword("");
            }}
          >
            <BiLeftArrowAlt className="text-white text-4xl" />
          </button>
          <button
            className="p-3 rounded-full"
            onClick={() => {
              dispatch(setSetting(!settingsOpen));
              dispatch(setAccount(!account));
              dispatch(setCurrentSettings(""));
              setPasswordError("");
              setPasswordSuccess("");
              setOldPassword("");
              setNewPassword("");
            }}
          >
            <RxCross1 className="text-white text-4xl" />
          </button>
        </div>
        <p className="font-mont text-white text-3xl text-center font-bold w-full">
          SETTINGS
        </p>
        <p className="font-mont text-white text-xl text-center w-full">
          Change Password
        </p>
        <div
          className={` flex-col items-center justify-center md: w-full h-[60%] gap-5 ${
            accCurrentSettings === "password" ? "flex" : "hidden"
          }`}
        >
          <input
            className="font-mont text-xl px-4 py-2 text-semibold border-b-2 text-center w-[300px] bg-transparent text-white focus:outline-0"
            type="password"
            value={oldPassword}
            placeholder="Old Password"
            onChange={(e) => setOldPassword(e.target.value)}
          />
          <input
            className="font-mont text-xl px-4 py-2 text-semibold border-b-2 text-center w-[300px] bg-transparent text-white focus:outline-0"
            type="password"
            value={newPassword}
            placeholder="New Password"
            onChange={(e) => setNewPassword(e.target.value)}
          />
          {passwordError !== "" && (
            <p className={`font-mont text-sm text-red-700 w-full text-center`}>
              {passwordError}
            </p>
          )}
          {passwordSuccess !== "" && (
            <p
              className={`font-mont text-sm text-green-700 w-full text-center`}
            >
              {passwordSuccess}
            </p>
          )}
          <button
            className="font-mont text-white bg-[#A60A53] px-4 py-2 rounded-3xl disabled:bg-slate-600"
            onClick={() => handlePasswordChange()}
            disabled={oldPassword === "" || newPassword === ""}
          >
            Save
          </button>
        </div>
      </div>
      <div
        className={`fixed top-0 right-0 z-10 flex flex-col items-start justify-start bg-[#011530] overflow-hidden transition-all duration-300 h-full gap-2 ${
          profCurrentSettings === "dob" ? "lg:w-[30%] w-full" : "w-0"
        }`}
      >
        <div className="flex flex-row w-full items-center justify-between">
          <button
            className="p-3 rounded-full"
            onClick={() => {
              dispatch(setProfSetting(""));
              setDOBError("");
              setDOBSuccess("");
              dispatch(setDOB(localStorage.getItem("DOB")));
            }}
          >
            <BiLeftArrowAlt className="text-white text-4xl" />
          </button>
          <button
            className="p-3 rounded-full"
            onClick={() => {
              dispatch(setSetting(!settingsOpen));
              dispatch(setMyProfile(!myProfile));
              dispatch(setProfSetting(""));
              setDOBError("");
              setDOBSuccess("");
              dispatch(setDOB(localStorage.getItem("DOB")));
            }}
          >
            <RxCross1 className="text-white text-4xl" />
          </button>
        </div>
        <p className="font-mont text-white text-3xl text-center font-bold w-full">
          SETTINGS
        </p>
        <p className="font-mont text-white text-xl text-center w-full">
          Change Date of Birth
        </p>
        <div
          className={` flex-col items-center justify-center md: w-full h-[60%] gap-5 ${
            profCurrentSettings === "dob" ? "flex" : "hidden"
          }`}
        >
          <input
            className="font-mont text-2xl px-4 py-2 text-semibold border-b-2 text-center w-[300px] bg-transparent text-white focus:outline-0 calendar"
            type="date"
            value={DOB}
            min="1970-01-01"
            max={new Date().toISOString().split("T")[0]}
            pattern="^\d{4}$"
            onChange={(e) => {
              dispatch(setDOB(e.target.value));
            }}
            style={{ WebkitAppearance: "none", color: "white" }}
          />

          {DOBError !== "" && (
            <p className={`font-mont text-sm text-red-700 `}>{DOBError}</p>
          )}
          {DOBSuccess !== "" && (
            <p className={`font-mont text-sm text-green-700 `}>{DOBSuccess}</p>
          )}
          <button
            className="font-mont text-white bg-[#A60A53] px-4 py-2 rounded-3xl disabled:bg-slate-600"
            onClick={() => handleDOBChange()}
            disabled={DOB === "" || DOB === localStorage.getItem("DOB")}
          >
            Save
          </button>
        </div>
      </div>
      <div
        className={`fixed top-0 right-0 z-10 flex flex-col items-start justify-start bg-[#011530] overflow-hidden transition-all duration-300 h-full gap-2 ${
          profCurrentSettings === "name" ? "lg:w-[30%] w-full" : "w-0"
        }`}
      >
        <div className="flex flex-row w-full items-center justify-between">
          <button
            className="p-3 rounded-full"
            onClick={() => {
              dispatch(setProfSetting(""));
              setNameError("");
              setNameSuccess("");
              dispatch(setName(localStorage.getItem("name")));
            }}
          >
            <BiLeftArrowAlt className="text-white text-4xl" />
          </button>
          <button
            className="p-3 rounded-full"
            onClick={() => {
              dispatch(setSetting(!settingsOpen));
              dispatch(setMyProfile(!myProfile));
              dispatch(setProfSetting(""));
              setNameError("");
              setNameSuccess("");
              dispatch(setName(localStorage.getItem("name")));
            }}
          >
            <RxCross1 className="text-white text-4xl" />
          </button>
        </div>
        <p className="font-mont text-white text-3xl text-center font-bold w-full">
          SETTINGS
        </p>
        <p className="font-mont text-white text-xl text-center w-full">
          Change Name
        </p>
        <div
          className={` flex-col items-center justify-center md: w-full h-[60%] gap-5 ${
            profCurrentSettings === "name" ? "flex" : "hidden"
          }`}
        >
          <input
            className="font-mont text-2xl px-4 py-2 text-semibold border-b-2 text-center w-[300px] bg-transparent text-white focus:outline-0"
            value={name}
            onChange={(e) => dispatch(setName(e.target.value))}
          />
          {nameError !== "" && (
            <p className={`font-mont text-sm text-red-700 `}>{nameError}</p>
          )}
          {nameSuccess !== "" && (
            <p className={`font-mont text-sm text-green-700 `}>{nameSuccess}</p>
          )}
          <button
            className="font-mont text-white bg-[#A60A53] px-4 py-2 rounded-3xl disabled:bg-slate-600"
            onClick={() => handleNameChange()}
            disabled={name === "" || name === localStorage.getItem("name")}
          >
            Save
          </button>
        </div>
      </div>
      <div
        className={`fixed top-0 right-0 z-10 flex flex-col items-start justify-start bg-[#011530] overflow-hidden transition-all duration-300 h-full gap-2 ${
          profCurrentSettings === "pronouns" ? "lg:w-[30%] w-full" : "w-0"
        }`}
      >
        <div className="flex flex-row w-full items-center justify-between">
          <button
            className="p-3 rounded-full"
            onClick={() => {
              dispatch(setProfSetting(""));
              setPronounsError("");
              setPronounsSuccess("");
              dispatch(setPronouns(localStorage.getItem("pronouns")));
            }}
          >
            <BiLeftArrowAlt className="text-white text-4xl" />
          </button>
          <button
            className="p-3 rounded-full"
            onClick={() => {
              dispatch(setSetting(!settingsOpen));
              dispatch(setMyProfile(!myProfile));
              dispatch(setProfSetting(""));
              setPronounsError("");
              setPronounsSuccess("");
              dispatch(setPronouns(localStorage.getItem("pronouns")));
            }}
          >
            <RxCross1 className="text-white text-4xl" />
          </button>
        </div>
        <p className="font-mont text-white text-3xl text-center font-bold w-full">
          SETTINGS
        </p>
        <p className="font-mont text-white text-xl text-center w-full">
          Change Pronouns
        </p>
        <div
          className={` flex-col items-center justify-center md: w-full h-[60%] gap-5 ${
            profCurrentSettings === "pronouns" ? "flex" : "hidden"
          }`}
        >
          <div className="flex flex-row items-center justify-center gap-3">
            <p
              className={`font-mont text-base text-white px-4 py-2 rounded-3xl  border-2 cursor-pointer ${
                pronouns === "he/him"
                  ? "bg-[#ffffff85]"
                  : "hover:bg-[#ffffff28]"
              }`}
              onClick={() => dispatch(setPronouns("he/him"))}
            >
              he/him
            </p>
            <p
              className={`font-mont text-base text-white px-4 py-2 rounded-3xl  border-2 cursor-pointer ${
                pronouns === "they/them"
                  ? "bg-[#ffffff85]"
                  : "hover:bg-[#ffffff28]"
              }`}
              onClick={() => dispatch(setPronouns("they/them"))}
            >
              they/them
            </p>
            <p
              className={`font-mont text-base text-white px-4 py-2 rounded-3xl  border-2 cursor-pointer ${
                pronouns === "she/her"
                  ? "bg-[#ffffff85]"
                  : "hover:bg-[#ffffff28]"
              }`}
              onClick={() => dispatch(setPronouns("she/her"))}
            >
              she/her
            </p>
          </div>
          {pronounsError !== "" && (
            <p className={`font-mont text-sm text-red-700 `}>{pronounsError}</p>
          )}
          {pronounsSuccess !== "" && (
            <p className={`font-mont text-sm text-green-700 `}>
              {pronounsSuccess}
            </p>
          )}
          <button
            className="font-mont text-white bg-[#A60A53] px-4 py-2 rounded-3xl disabled:bg-slate-600"
            onClick={() => handlepronounsChange()}
            disabled={
              pronouns === "" || pronouns === localStorage.getItem("pronouns")
            }
          >
            Save
          </button>
        </div>
      </div>
    </>
  );
};

export default ChatSettings;
