import React from "react";

/**
 * ProgressCard component to display a card with an icon, title, and text.
 *
 * @component
 * @param {Object} props - The properties of the ProgressCard component.
 * @param {string} props.icon - The source URL of the icon image.
 * @param {string} props.title - The title text for the card.
 * @param {string} props.text - The description text for the card.
 * @returns {JSX.Element} - The rendered ProgressCard component.
 */

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
