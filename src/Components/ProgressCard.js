import React from "react";

const ProgressCard = ({ icon, title, text }) => {
  return (
    <div
      className={`rounded-[20px] shadow-2xl sm:min-w-[340px] h-full w-full `}
    >
      <div className="flex flex-col items-center justify-center sm:p-2 sm:gap-1 lg:p-4 p-2 gap-2">
        <img src={icon} alt="icon" className="sm:w-12 w-6  mb-0" />
        <h1 className="font-mont font-bold sm:text-[32px] text-center sm:leading-[36px] text-xl text-[#2E6FF2] lg:mb-2">
          {title}
        </h1>
        <p className="font-mont sm:text-lg font-medium text-center sm:leading-[22px] md:text-[15px] md:px-1 leading-[20px]">
          {text}
        </p>
      </div>
    </div>
  );
};

export default ProgressCard;
