import React, { useState } from "react";
import { FaHashtag } from "react-icons/fa";

/**
 * TermsHeading Component
 *
 * Displays a heading with an optional link for quick navigation.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {string} props.heading - The main heading text.
 * @param {string} props.text - The optional additional text.
 * @returns {JSX.Element} - The rendered TermsHeading component.
 */

const TermsHeading = ({ heading, text }) => {
  const [showLink, setShowLink] = useState(false);


  /**
   * Handles the mouse enter event to show the navigation link.
   */
  
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
    >
      <div
        className={`flex-row items-start justify-start w-full ${
          !heading ? "hidden" : "flex"
        }`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {showLink && (
          <a
            href={`#${heading}`}
            className={`lg:block absolute hidden top-0 -left-7`}
          >
            <FaHashtag className="font-mont font-bold text-3xl w-full text-left mt-1 opacity-40" />
          </a>
        )}
        <h1
          className="font-mont font-bold text-3xl w-full text-left"
          // give style max width full
          style={{ maxWidth: "100%" }}
        >
          {heading}
        </h1>
      </div>
      <h1
        className={`font-mont font-normal text-base w-full text-left ${
          text ? "block" : "hidden"
        }`}
        style={{ maxWidth: "100%" }}
      >
        {text}
      </h1>
    </div>
  );
};

export default TermsHeading;
