import React, { useState } from "react";
import { FaHashtag } from "react-icons/fa";

const TermsSubheading = ({ heading, text1, text2, text3, text4 }) => {
  const [showLink, setShowLink] = useState(false);

  const handleMouseEnter = () => {
    setShowLink(true);
  };

  const handleMouseLeave = () => {
    setShowLink(false);
  };

  return (
    <div
      className="flex flex-col items-start justify-start w-full gap-3 relative"
      id={heading}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className={` flex-row items-start justify-start w-full ${
          !heading ? "hidden" : "flex"
        }`}
      >
        {showLink && (
          <a
            href={`#${heading}`}
            className={`lg:block absolute hidden top-0 -left-5`}
          >
            <FaHashtag className="font-mont font-bold text-xl w-full text-left mt-1 opacity-40" />
          </a>
        )}
        <h1
          className="font-mont font-bold text-xl w-full text-left"
          style={{ maxWidth: "100%" }}
        >
          {heading}
        </h1>
      </div>
      <h1
        className={`font-mont font-normal text-base w-full text-left ${
          text1 ? "block" : "hidden"
        }`}
        style={{ maxWidth: "100%" }}
      >
        {text1}
      </h1>
      <h1
        className={`font-mont font-normal text-base w-full text-left ${
          text2 ? "block" : "hidden"
        }`}
        style={{ maxWidth: "100%" }}
      >
        {text2}
      </h1>
      <h1
        className={`font-mont font-normal text-base w-full text-left ${
          text3 ? "block" : "hidden"
        }`}
        style={{ maxWidth: "100%" }}
      >
        {text3}
      </h1>
      <h1
        className={`font-mont font-normal text-base w-full text-left ${
          text4 ? "block" : "hidden"
        }`}
        style={{ maxWidth: "100%" }}
      >
        {text4}
      </h1>
    </div>
  );
};

export default TermsSubheading;
