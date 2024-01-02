import React from "react";

/**
 * Subscribe Component
 *
 * Displays a subscription form with a prompt, description, email input, and subscribe button.
 *
 * @component
 * @returns {JSX.Element} - The rendered Subscribe component.
 */

const Subscribe = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-[#011526] p-8 rounded-[20px] lg:w-[900px] w-full m-3">
      <p className="font-mont font-semibold lg:text-[52px] lg:leading-[56px] text-2xl text-center text-white mb-2">
        Join the waitlist
      </p>
      <p className="font-mont lg:text-base text-center text-xs leading-5 text-white mb-12">
        Join our waitlist and embark on a transformative communication journey.
      </p>
      <div className="flex flex-row items-center lg:justify-between justify-center flex-wrap gap-5">
        <input
          className=" lg:w-[530px] w-full rounded-2xl bg-white text-gray-400 font-mont text-base p-3 pb-4"
          placeholder="Enter your e-mail."
          type="email"
        />
        <button className=" lg:w-[198px] px-8 rounded-2xl bg-[#A60A53] font-semibold text-white text-base p-3 pb-4 hover:bg-[#2E6FF2]">
            Subscribe
        </button>
      </div>
    </div>
  );
};

export default Subscribe;
