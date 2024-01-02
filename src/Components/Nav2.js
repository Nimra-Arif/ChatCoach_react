import React from "react";

import logo from "../Assets/logo.svg";
import { Link } from "react-router-dom";

/**
 * Nav2 component to display a navigation bar with a logo.
 *
 * @component
 * @returns {JSX.Element} - The rendered Nav2 component.
 */
const Nav2 = () => {
  return (
    <div className="flex flex-col items-start justify-center bg-[#011526] w-full">
      <Link to="/">
        <img
          src={logo}
          className="md:max-h-[70px] md:py-4 md:px-28 py-2 px-8 max-h-[30px] invert cursor-pointer"
          alt="logo"
        />
      </Link>
    </div>
  );
};

export default Nav2;
