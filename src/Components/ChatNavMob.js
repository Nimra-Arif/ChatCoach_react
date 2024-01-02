import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setTab, toggle, setAnalyticsMob } from "../Store/chatNavSlice/chat";
import { RxCross1 } from "react-icons/rx";

/**
 * ChatNavMob Component - A mobile navigation component for chat tabs and log out.
 * @returns {JSX.Element} JSX element representing the ChatNavMob component.
 */
const ChatNavMob = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <>
      <div className="flex flex-row items-end justify-end w-full">
        <RxCross1 size={24} onClick={() => dispatch(toggle(false))} />
      </div>
      <h2
        className="p-2"
        onClick={() => {
          dispatch(setTab("Emotions"));
          dispatch(setAnalyticsMob(true));
          dispatch(toggle(false));
        }}
      >
        Emotions
      </h2>
      <h2
        className="p-2"
        onClick={() => {
          dispatch(setTab("Engagement"));
          dispatch(setAnalyticsMob(true));
          dispatch(toggle(false));
        }}
      >
        Engagement
      </h2>
      <h2
        className="p-2"
        onClick={() => {
          dispatch(setTab("Accuracy"));
          dispatch(setAnalyticsMob(true));
          dispatch(toggle(false));
        }}
      >
        Accuracy
      </h2>
      <h2
        className="p-2"
        onClick={() => {
          dispatch(setTab("Flow"));
          dispatch(setAnalyticsMob(true));
          toggle(false);
        }}
      >
        Coaching
      </h2>
      <h2
        className="p-2"
        onClick={() => {
          localStorage.removeItem("bot_id");
          localStorage.removeItem("token");
          localStorage.removeItem("DOB");
          localStorage.removeItem("pronouns");
          localStorage.removeItem("name");
          localStorage.removeItem("email");
          navigate("/join");
        }}
      >
        Log Out
      </h2>
    </>
  );
};

export default ChatNavMob;
