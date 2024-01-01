import React, { useState } from "react";
import { IoSendSharp } from "react-icons/io5";
import Picker from "emoji-picker-react";
import { BsFillEmojiSmileFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { setMsg } from "../Store/msgSlice/msg";

const MsgShortCut = ({ msg, setInputValue, className }) => {
  return (
    <div className="w-fit h-fit p-2 bg-[#A60A53] rounded-xl cursor-pointer flex flex-row flex-nowrap">
      <p
        className={`w-fit whitespace-nowrap text-white font-mont text-sm hover:bg-[#a60a53db] cursor-pointer ${className}`}
        onClick={(event, msg) => {
          setInputValue(event.target.innerHTML);
        }}
      >
        {msg}
      </p>
    </div>
  );
};

const Chatbar = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.msg.isLoading);
  const [inputValue, setInputValue] = useState("");
  const [showPicker, setShowPicker] = useState(false);

  const onEmojiClick = (event, emojiObject) => {
    setInputValue((prevInput) => prevInput + emojiObject.emoji);
    setShowPicker(false);
  };
  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !isLoading) {
      e.preventDefault();
      if (inputValue.trim() !== "") {
        dispatch(setMsg(inputValue));
      }
      setInputValue("");
    }
  };
  return (
    <>
      {showPicker && (
        <Picker
          pickerStyle={{ width: "100%", height: "100%" }}
          className="fixed bottom-0"
          onEmojiClick={onEmojiClick}
          title=""
          showPreview={false}
          showSkinTones={false}
          color="#2189FF"
        />
      )}
      <div className="flex flex-col items-center justify-center bg-[#011526] w-full rounded-xl md:p-4 p-3 gap-2">
        <div className="flex flex-row items-center justify-start w-full h-full overflow-x-auto no-scrollbar gap-2">
          <MsgShortCut
            msg="Hi, What do you want to know?"
            setInputValue={setInputValue}
          />
          <MsgShortCut msg="Life changes" setInputValue={setInputValue} />
          <MsgShortCut msg="Movie" setInputValue={setInputValue} />
          <MsgShortCut msg="Live Events" setInputValue={setInputValue} />
          <MsgShortCut msg="Love to Dance" setInputValue={setInputValue} />
        </div>

        <div className="flex flex-row items-center justify-between w-full h-full gap-2">
          <div className="flex flex-row items-center justify-center w-full h-[40px]">
            <input
              className="w-full rounded-l-xl bg-[#E1EBFF] font-mont text-sm p-2 h-full focus:outline-0"
              placeholder="Start Typing"
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={handleKeyPress}
              autoComplete="off"
            />
            <button
              className="w-fit rounded-r-xl bg-[#E1EBFF] p-3  text-[#415668] h-full"
              onClick={() => setShowPicker(!showPicker)}
            >
              <BsFillEmojiSmileFill />
            </button>
          </div>

          <button
            className="rounded-xl bg-[#2E6FF2] p-3 hover:bg-[#1560f6] text-[#415668] h-[40px] w-[40px]"
            onClick={() => {
              if (inputValue.trim() !== "") {
                dispatch(setMsg(inputValue));
              }
              setInputValue("");
            }}
            disabled={isLoading}
          >
            <IoSendSharp className="text-sm text-white" />
          </button>
        </div>
      </div>
    </>
  );
};

export default Chatbar;
