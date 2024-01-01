import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Sarah from "../Assets/Sarah.png";
import Emily from "../Assets/Emily.png";
import Ethan from "../Assets/Ethan.png";
import Olivia from "../Assets/Olivia.png";

import "./BotSelector.css";

import { setBot, setLoading } from "../Store/chatNavSlice/chat";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";

const Bot = ({ bot, changeAgent }) => (
  <div className="flex flex-col items-center justify-center w-full gap-2">
    <img
      src={bot.avatar}
      alt="avatar"
      className={`cursor-grab ${
        changeAgent ? "h-[40vh] max-h-[400px]" : "max-h-[250px]"
      }`}
    />
    <div className="flex flex-col items-start justify-center gap-2 w-[65%]  cursor-grab">
      <div className="flex flex-row items-center justify-between w-full gap-2">
        <p className="bg-[#A60A53] text-white font-semibold font-mont text-lg px-5 py-1 rounded-xl">
          {bot.name}
        </p>
        <p className="bg-[#023E73] text-white font-semibold font-mont text-lg px-5 py-1 rounded-xl">
          {bot.age} <span className="font-normal">Years</span>
        </p>
      </div>
      <p className="bg-[#023E73] text-white font-mont w-full text-lg text-center px-4 py-1 rounded-xl">
        {bot.hobby}
      </p>
      <p
        className={`bg-[#023E73] text-white font-mont w-full text-lg text-center px-4 py-1 rounded-xl ${
          changeAgent ? "cush:block hidden" : "cush1:block hidden"
        } `}
      >
        {bot.text}
      </p>
    </div>
  </div>
);

function SampleNextArrow(props) {
  const { className, onClick, changeAgent } = props;
  return (
    <>
      {changeAgent && (
        <>
          <div
            className={className}
            style={{ display: "none", right: 30 }}
            onClick={onClick}
          ></div>
          <SlArrowRight
            className={`${className} text-black text-2xl cursor-pointer mr-[10%] z-20 `}
            style={{ color: "black" }}
            onClick={onClick}
          />
        </>
      )}
      {!changeAgent && (
        <div
          className={className}
          style={{ display: "block", right: 40 }}
          onClick={onClick}
        ></div>
      )}
    </>
  );
}

function SamplePrevArrow(props) {
  const { className, onClick, changeAgent } = props;
  return (
    <>
      {changeAgent && (
        <>
          <div
            className={`${className} flex flex-col items-center justify-center`}
            style={{
              display: "none",
              cursor: "pointer",
              left: 30,
              zIndex: 50
            }}
            onClick={onClick}
          ></div>
          <SlArrowLeft
            className={`${className} text-black text-2xl cursor-pointer ml-[10%] z-20`}
            style={{ color: "black" }}
            onClick={onClick}
          />
        </>
      )}
      {!changeAgent && (
        <div
          className={`${className} flex flex-col items-center justify-center`}
          style={{
            display: "block",
            cursor: "pointer",
            left: 30,
            zIndex: 50,
            fontSize: 30
          }}
          onClick={onClick}
        ></div>
      )}
    </>
  );
}

const BotSelector = ({ changeAgent }) => {
  const botSelector = useSelector((state) => state.chat.botSelector);
  const loading = useSelector((state) => state.chat.loading);
  const resetBotValue = useSelector((state) => state.chat.resetBot);

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

  const dispatch = useDispatch();
  useEffect(() => {
    if (botSelector) {
      dispatch(setLoading(botSelector));
      setTimeout(() => dispatch(setLoading(!botSelector)), 1000);
    }
  }, [botSelector, dispatch]);

  useEffect(() => {
    dispatch(setBot(botData[0]));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, resetBotValue]);

  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    centerMode: true,
    centerPadding: "0",
    cssEase: "ease-in-out",
    afterChange: (current) => {
      dispatch(setBot(botData[current]));
    },
    nextArrow: <SampleNextArrow changeAgent={changeAgent} />,
    prevArrow: <SamplePrevArrow changeAgent={changeAgent} />
  };

  return (
    <>
      {loading && (
        <div className="flex flex-col items-center justify-center w-full h-[400px]">
          <div className="w-20 h-20 border-4 border-gray-300 rounded-full animate-spin" />
          <p className="text-white font-mont text-base font-bold mt-4">
            Loading...
          </p>
        </div>
      )}
      {!loading && (
        <div className={`w-full ${changeAgent ? "mt-0" : "mt-[10%]"}`}>
          <Slider {...settings}>
            {botData.map((bot, index) => (
              <Bot key={index} bot={bot} changeAgent={changeAgent} />
            ))}
          </Slider>
        </div>
      )}
    </>
  );
};

export default BotSelector;
