import React, { useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getEmotionalDistribution, getFlow } from "../Store/msgSlice/msg";
import { setBotLineData, setUserLineData } from "../Store/chartSlice/chart";
import { freeVersion } from "../Data/ticktokapis";

const Message = ({ msg1, msg2, mode }) => {
  if (Array.isArray(msg1)) {
    return (
      <>
        <div
          className={`flex-col items-end justify-end w-[100%] h-fit ${
            msg2 === "" ? "hidden" : "flex"
          } `}
        >
          <p className="font-mont w-fit p-2 text-white bg-[#023E73] rounded-l-xl rounded-br-xl max-w-[80%]">
            {msg2}
          </p>
        </div>
        {msg1.map(
          (msg, index) =>
            msg !== "" && (
              <div
                className="flex flex-col items-start justify-start w-[100%] h-fit"
                key={index}
              >
                <p className="font-mont p-2 bg-white rounded-r-xl rounded-bl-xl max-w-[80%]">
                  {msg}
                </p>
              </div>
            )
        )}
        {mode && (
          <div
            className={`flex-col items-center justify-start w-[100%] h-fit ${
              mode === "" ? "hidden" : "flex"
            }`}
          >
            <p className="font-mont p-2 bg-[#808080aa] text-white rounded-md text-xs max-w-[80%]">
              {mode}
            </p>
          </div>
        )}
      </>
    );
  } else {
    return (
      <>
        <div
          className={`flex-col items-end justify-end w-[100%] h-fit ${
            msg2 === "" ? "hidden" : "flex"
          } `}
        >
          <p className="font-mont w-fit p-2 text-white bg-[#023E73] rounded-l-xl rounded-br-xl max-w-[80%]">
            {msg2}
          </p>
        </div>
        <div className="flex flex-col items-start justify-start w-[100%] h-fit ">
          <p className="font-mont p-2 bg-white rounded-r-xl rounded-bl-xl max-w-[80%]">
            {msg1}
          </p>
        </div>
        {mode && (
          <div
            className={`flex-col items-center justify-start w-[100%] h-fit ${
              mode === "" ? "hidden" : "flex"
            }`}
          >
            <p className="font-mont p-2 bg-[#A60A53] text-white rounded-xl text-sm max-w-[80%]">
              {mode}
            </p>
          </div>
        )}
      </>
    );
  }
};

const ChatBox = () => {
  const messages = useSelector((state) => state.msg.messages);
  const tab = useSelector((state) => state.chat.value);
  const mode = useSelector((state) => state.msg.mode);
  const chatBoxRef = useRef(null);
  const dispatch = useDispatch();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const modes = [
    "Chat",
    "Job interviews",
    "Sales",
    "Online Dating",
    "VIPs",
    "Negotiations",
    "Customer Support"
  ];

  let currentMode = useRef("Chat");

  let prevCount = useRef(0);
  let avgCount = useRef(0);
  let flowCount = useRef(0);

  useEffect(() => {
    currentMode.current = modes[+mode];
  }, [mode, modes]);

  useEffect(() => {
    if (localStorage.getItem("subscribed")) {
      return;
    } else {
      freeVersion(localStorage.getItem("email"));
    }
  }, []);

  useEffect(() => {
    const userResult = [];
    const botResult = [];

    for (let i = 0; i < 4; i++) {
      let sum = 0;
      let count = 0;

      for (let j = i; j < messages.length; j += 4) {
        sum += messages[j].from.length;
        count++;
      }

      userResult.push(sum / count);

      for (let j = i; j < messages.length; j += 4) {
        if (Array.isArray(messages[j].to)) {
          sum += messages[j].to.reduce((a, b) => a + b.length, 0);
          count++;
        } else {
          sum += messages[j].to.length;
          count++;
        }
      }
      botResult.push(sum / count);
    }
    dispatch(setBotLineData(botResult));
    dispatch(setUserLineData(userResult));
  }, [dispatch, messages]);

  useEffect(() => {
    if (tab === "Emotions") {
      dispatch(getEmotionalDistribution());
    }
  }, [dispatch, tab]);

  useEffect(() => {
    if (tab === "Flow" || tab === "Accuracy") {
      dispatch(getFlow());
    }
  }, [dispatch, tab]);

  useEffect(() => {
    if (chatBoxRef.current) {
      chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight;
    }
    if (messages.length % 3 === 0 && messages.length !== prevCount.current) {
      dispatch(getEmotionalDistribution());
      prevCount.current = messages.length;
    }
    if (messages.length % 3 === 1 && messages.length !== flowCount.current) {
      dispatch(getFlow());
      flowCount.current = messages.length;
    }
    if (messages.length % 4 === 0 && messages.length !== avgCount.current) {
      const userResult = [];
      const botResult = [];

      for (let i = 0; i < 4; i++) {
        let sum = 0;
        let count = 0;

        for (let j = i; j < messages.length; j += 4) {
          sum += messages[j].from.length;
          count++;
        }

        userResult.push(sum / count);

        for (let j = i; j < messages.length; j += 4) {
          if (Array.isArray(messages[j].to)) {
            sum += messages[j].to.reduce((a, b) => a + b.length, 0);
            count++;
          } else {
            sum += messages[j].to.length;
            count++;
          }
        }
        botResult.push(sum / count);
      }
      dispatch(setBotLineData(botResult));
      dispatch(setUserLineData(userResult));
      avgCount.current = messages.length;
    }
  }, [dispatch, messages]);

  return (
    <>
      <div
        ref={chatBoxRef}
        className="flex flex-col items-start justify-start h-full w-full gap-2 my-2 overflow-y-scroll no-scrollbar"
      >
        {messages.map((msg, index) => (
          <Message key={index} msg1={msg.to} msg2={msg.from} mode={msg.mode} />
        ))}
      </div>
    </>
  );
};

export default ChatBox;
