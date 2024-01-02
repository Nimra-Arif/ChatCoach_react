import React, { useState } from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

/**
 * QandA component to display a question and answer with an expandable section.
 *
 * @component
 * @param {Object} props - The properties of the QandA component.
 * @param {string} props.question - The question text to be displayed.
 * @param {string} props.answer - The answer text to be displayed.
 * @returns {JSX.Element} - The rendered QandA component.
 */

const QandA = ({ question, answer }) => {
  const [open, setOpen] = useState(false);

  const onClickHandler = () => {
    setOpen(!open);
  };

  return (
    <div className="lg:w-[640px] w-full m-4">
      <div
        className={`flex flex-col items-center justify-between shadow-2xl p-6 rounded-2xl ${
          open ? "bg-gray-200" : ""
        }`}
      >
        <div className="flex flex-row items-start justify-between w-full">
          <p className="font-mont text-[17px] leading-[24px] font-medium">
            {question}
          </p>
          <p
            className="font-mont text-[20px] leading-[24.38px] cursor-pointer"
            onClick={onClickHandler}
          >
            <p
              className={`transition-transform text-deepBlue duration-300 transform border-2 border-deepBlue rounded-full ${
                open ? "rotate-180" : "rotate-0"
              }`}
            >
              {open ? <AiOutlineMinus /> : <AiOutlinePlus />}
            </p>
          </p>
        </div>
        <div
          className={`overflow-hidden transition-all duration-500  ${
            open ? "smd:h-[72px] sm:h-[76px] h-[134px]" : "h-0"
          }`}
        >
          <p className="font-mont text-[16px] leading-[20px] italic mt-4">
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
};

export default QandA;
