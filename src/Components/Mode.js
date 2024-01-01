import React from "react";

const Mode = ({ name, desc }) => {
  return (
    <div
      className={`sm:rounded-[20px] rounded-xl shadow-2xl sm:w-[400px] w-[300px] sm:h-[120px] my-4`}
    >
      <div className="flex flex-col items-center justify-center sm:p-2 sm:gap-1 lg:p-4 p-2 gap-2">
        <h1 className="font-mont font-bold sm:text-[32px] text-center sm:leading-[36px] text-xl text-[#2E6FF2] lg:mb-2">
          {name}
        </h1>
        <h1 className="font-mont sm:text-lg font-medium text-center sm:leading-[22px] md:text-[15px] md:px-1 leading-[20px]">
          {desc}
        </h1>
      </div>
    </div>
  );
};

export default Mode;
