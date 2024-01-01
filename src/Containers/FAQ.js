import React from "react";
import { BsFillChatRightTextFill } from "react-icons/bs";

import left from "../Assets/Vector 3.png";
import right from "../Assets/Vector 2.png";
import QandA from "../Components/QandA";

import Aos from "aos";
import "aos/dist/aos.css";
Aos.init();

const FAQ = () => {
  const faqs = [
    {
      question: "Is Chat Coach a real person? ",
      answer:
        "ChatCoach is an AI-driven virtual mentor, simulating real conversations to provide personalized guidance. While not a human, it offers empathetic support and valuable insights for communication improvement."
    },
    {
      question: "Can you explain the functioning of ChatCoach?",
      answer:
        "Certainly! ChatCoach utilizes AI technology to create realistic conversation simulations, providing personalized guidance and recommendations to help you improve your communication skills."
    },
    {
      question: "Does ChatCoach ensure the privacy of my conversations?",
      answer:
        "Yes, ChatCoach maintains strict confidentiality, ensuring that your conversations are kept private and secure, respecting your privacy at all times."
    },
    {
      question: "Can I trust that my data is secure with ChatCoach?",
      answer:
        "Yes, we prioritize the utmost security and privacy of your data. ChatCoach employs robust measures to ensure the confidentiality and protection of your personal information throughout your user experience."
    }
  ];

  return (
    <div
      className="flex flex-col items-center justify-center  py-11 w-full border-0 m-0 bg-[#edf1f6ff]"
      // data-aos="zoom-in"
      // data-aos-offset="0"
      // data-aos-duration="1000"
      // data-aos-delay="50"
    >
      <div className="flex flex-row items-center justify-center">
        <div className="md:flex hidden item-center justify-center -mr-10">
          <img src={left} alt="arrow" />
        </div>
        <div className="flex flex-col items-center justify-center max-w-[900px] ">
          <h1 className="font-mont font-bold lg:text-[64px] text-5xl text-center lg:leading-[72px]">
            YOU HAVE QUESTIONS.{" "}
          </h1>
          <div className="flex flex-row items-center justify-center flex-wrap">
            <h1 className="font-mont font-bold lg:text-[64px] text-5xl lg:leading-[72px] mr-5">
              WE HAVE
            </h1>
            <BsFillChatRightTextFill
              className="md:hidden block mt-4"
              size={30}
            />
            <BsFillChatRightTextFill
              className="md:block hidden mt-4"
              size={54}
            />
            <h1 className="font-mont font-bold lg:text-[64px] text-5xl lg:leading-[72px] ml-5">
              ANSWERS.
            </h1>
          </div>
          <h1 className="font-mont lg:text-[18px] lg:leading-[24px] text-base text-center max-w-[900px] m-6">
            Discover Answers to Your Common Queries Below!
          </h1>
        </div>
        <div className="md:flex hidden item-center justify-center mt-16 ml-2">
          <img src={right} alt="arrow" />
        </div>
      </div>
      <div className="flex flex-row items-start justify-center flex-wrap xl:w-[85w] xl:max-w-[1866px]">
        {faqs.map((faq, index) => (
          <QandA key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </div>
  );
};

export default FAQ;
