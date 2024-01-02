import React from "react";

/**
 * Review Component
 * 
 * Displays a review card with text, age, name, hobby, and avatar.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {string} props.text - The review text.
 * @param {number} props.age - The age of the reviewer.
 * @param {string} props.name - The name of the reviewer.
 * @param {string} props.hobby - The hobby of the reviewer.
 * @param {string} props.avatar - The URL of the reviewer's avatar.
 * @returns {JSX.Element} - The rendered Review component.
 */
const Review = ({ text, age, name, hobby, avatar }) => {
  return (
    <div className="flex flex-row items-center justify-between border-white border-2 bg-[#E1EBFF] md:max-w-[860px] md:h-[450px] h-[400px] w-full rounded-[1.25rem] p-5 md:mx-5 lg:mb-[160px] md:shadow-2xl">
      <div className="flex flex-col items-start justify-between lg:max-w-[70%] w-full h-full">
        <div className="flex flex-col items-start justify-start">
          <p className="font-mont font-medium md:text-[16px] text-sm md:leading-[20px] text-[#023E73]">
            {text}
          </p>
        </div>
        <div className="flex flex-col items-start justify-start">
          <p className="font-mont md:text-md text-sm text-[#023E73] leading-4">
            {age} Years of age
          </p>
          <p className="font-mont md:text-2xl text-lg font-bold text-[#023E73] leading-7">
            {name}
          </p>
          <p className="font-mont md:text-md text-sm text-[#023E73] leading-5">
            {hobby}.
          </p>
        </div>
      </div>
      <div className="lg:flex hidden items-center justify-center min-w-[40%] h-[100%]">
        <img src={avatar} alt="avatar" className="mb-[-140px] z-100 h-[140%]" />
      </div>
    </div>
  );
};

export default Review;
