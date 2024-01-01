import React from "react";

import {
  AiOutlineTwitter,
  AiFillFacebook,
  AiFillInstagram
} from "react-icons/ai";

import logo from "../Assets/logo.svg";
import { Link } from "react-router-dom";

const Footer2 = () => {
  return (
    <div className="flex flex-row items-center justify-between bg-[#011526] w-full">
      <Link to="/">
        <img
          src={logo}
          className="md:max-h-[70px] md:py-4 md:px-28 py-2 px-8 max-h-[30px] invert cursor-pointer"
          alt="logo"
        />
      </Link>
      <div className="flex flex-row items-center justify-center gap-2 md:py-4 md:px-28 py-2 px-8">
        <a href="https://twitter.com/chatcoach_io">
          <AiOutlineTwitter className="text-white text-xl cursor-pointer hover:text-blue-500" />
        </a>
        <a href="https://www.facebook.com/profile.php?id=100094547140977&mibextid=ZbWKwL">
          <AiFillFacebook className="text-white text-xl cursor-pointer hover:text-blue-500" />
        </a>
        <a href="https://instagram.com/chatcoach_io?igshid=NjIwNzIyMDk2Mg==">
          <AiFillInstagram className="text-white text-xl cursor-pointer hover:text-blue-500" />
        </a>
      </div>
    </div>
  );
};

export default Footer2;
