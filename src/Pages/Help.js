import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { AiOutlineRight } from "react-icons/ai";

import Nav2 from "../Components/Nav2";
import Footer2 from "../Components/Footer2";

const Question = ({ text, onClick, index, currentIndex }) => (
  <div
    className={`p-4 w-full cursor-pointer ${
      index === currentIndex ? "bg-slate-300" : "hover:bg-slate-200"
    } `}
    onClick={onClick}
  >
    <p className="font-mont text-base font-semibold">{text}</p>
  </div>
);

const Answer = ({ question, text }) => (
  <div className="flex flex-col items-start justify-start p-4 gap-8">
    <p className="font-mont md:text-3xl text-xl font-bold">{question}</p>
    <p className="font-mont text-base">{text}</p>
  </div>
);

const Help = () => {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);
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
    <div className="flex flex-col items-center justify-center w-full m-auto">
      <Nav2 />
      <div className="w-[75%] flex flex-row items-center justify-start lg:mt-[100px] mt-12 gap-1">
        <h1
          className="font-mont text-sm text-blue-500 font-semibold cursor-pointer hover:underline"
          onClick={() => navigate("/")}
        >
          ChatCoach
        </h1>
        <AiOutlineRight size={12} />
        <h1 className="font-mont text-sm text-blue-500 font-semibold cursor-pointer hover:underline">
          Help Center
        </h1>
      </div>
      <div className="md:w-[75%] w-full flex flex-row items-start justify-start py-8 px-2 flex-wrap">
        <div className="flex flex-col items-start justify-start lg:w-[20%] w-full">
          <p className="font-mont text-base font-semibold">
            Aritcles in this section
          </p>
          {faqs.map((faq, index) => (
            <Question
              text={faq.question}
              onClick={() => setCurrentIndex(index)}
              index={index}
              currentIndex={currentIndex}
            />
          ))}
        </div>
        <div className="flex flex-col items-start justify-start md:w-[70%] w-full">
          <Answer
            question={faqs[currentIndex].question}
            text={faqs[currentIndex].answer}
          />
        </div>
      </div>
      <div className="w-[75%] flex flex-row items-start justify-start py-8 gap-2">
        <div className="md:w-[20%] w-0 h-full"></div>
        <div className="flex flex-col items-start justify-start gap-2 md:w-[70%] w-full">
          <div className="h-[1px] w-full border-slate-300 border-[1px] mb-8"></div>
          <p className="font-mont text-base font-semibold w-full text-center">
            Was this article helpful?
          </p>
          <div className="flex flex-row items-center justify-center gap-4 w-full">
            <button className="font-mont text-base font-semibold bg-slate-300 text-white py-2 px-4 rounded-md hover:bg-slate-400">
              Yes
            </button>
            <button className="font-mont text-base font-semibold bg-slate-300 text-white py-2 px-4 rounded-md hover:bg-slate-400">
              No
            </button>
          </div>
          <p className="font-mont text-sm font-medium w-full text-center">
            4706 out of 5123 found this helpful
          </p>
          <p className="font-mont text-sm font-medium w-full text-center pt-4">
            Have more questions?{" "}
            <span className="text-blue-500 hover:underline cursor-pointer">
              Submit a request
            </span>
          </p>
          <p className="font-mont text-sm font-medium w-full text-center">
            Contact us via email at{" "}
            <a
              href="mailto:help@chatcoach.io"
              className="text-blue-500 hover:underline cursor-pointer"
            >
              help@chatcoach.io{" "}
            </a>
            for further assistance.
          </p>
          <div className="h-[1px] w-full border-slate-300 border-[1px] mt-8"></div>
        </div>
      </div>
      <div className="w-[75%] flex flex-row items-start justify-start py-8 gap-2">
        <div className="md:w-[20%] w-0 h-full"></div>
        <div className="flex flex-col items-start justify-start gap-2 md:w-[70%] w-full px-4">
          <p className="font-mont text-base font-semibold">
            Recently viewed articles
          </p>
          <div className="flex flex-col items-start justify-start w-full gap-2">
            {faqs.map((faq, index) => (
              <p className="font-mont text-base font-medium text-blue-500">
                {index + 1}. {faq.question}
              </p>
            ))}
          </div>
        </div>
      </div>
      <Footer2 />
    </div>
  );
};

export default Help;
