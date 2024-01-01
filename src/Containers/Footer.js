import React from "react";
import { Link, useNavigate } from "react-router-dom";

import { MdOutlineArrowUpward } from "react-icons/md";

import logo from "../Assets/logo.svg";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center justify-center bg-[#011526] rounded-t-3xl pt-16 pb-4 w-full">
      <Link to="/">
        <img
          src={logo}
          className="md:max-h-[70px] max-h-[30px] invert mb-6 cursor-pointer"
          alt="logo"
        />
      </Link>
      <div className="flex flex-row items-start justify-center lg:gap-48 gap-3 flex-wrap">
        <div className="flex flex-col items-center justify-center gap-3">
          <p className="cursor-pointer font-mont font-bold text-base lg:text-xl text-[#005FAF] mb-2">
            Chat Coach
          </p>
          <p className="cursor-pointer font-mont font-medium text-xs lg:text-base text-white">
            Pricing
          </p>
          <p className="cursor-pointer font-mont font-medium text-xs lg:text-base text-white">
            Social
          </p>
        </div>
        <div className="flex flex-col items-center justify-center gap-3">
          <p className="cursor-pointer font-mont font-bold text-base lg:text-xl text-[#005FAF] mb-2">
            Sections
          </p>
          <p className="cursor-pointer font-mont font-medium text-xs lg:text-base text-white">
            <Link onClick={() => navigate("/")} to="/">
              Home
            </Link>
          </p>
          <p className="cursor-pointer font-mont font-medium text-xs lg:text-base text-white">
            <a onClick={() => navigate("/")} href="/#features">
              Features
            </a>
          </p>
          <p
            className="cursor-pointer font-mont font-medium text-xs lg:text-base text-white"
            onClick={() => navigate("/about")}
          >
            About
          </p>
          {!localStorage.getItem("token") && (
            <p
              className="cursor-pointer font-mont font-medium text-xs lg:text-base text-white"
              onClick={() => navigate("/join")}
            >
              Join
            </p>
          )}
        </div>
        <div className="flex flex-col items-center justify-center gap-3">
          <p className="cursor-pointer font-mont font-bold text-base lg:text-xl text-[#005FAF] mb-2">
            Connect
          </p>
          <a
            className="cursor-pointer font-mont font-medium text-xs lg:text-base text-white"
            href="https://twitter.com/chatcoach_io"
          >
            Twitter
          </a>
          <a
            className="cursor-pointer font-mont font-medium text-xs lg:text-base text-white"
            href="https://www.facebook.com/profile.php?id=100094547140977&mibextid=ZbWKwL"
          >
            Facebook
          </a>
          <a
            className="cursor-pointer font-mont font-medium text-xs lg:text-base text-white"
            href="https://instagram.com/chatcoach_io?igshid=NjIwNzIyMDk2Mg=="
          >
            Instagram
          </a>
        </div>
      </div>
      <div className="flex flex-row items-end justify-end w-[90%] sm:mt-0 mt-4">
        <button
          className="flex flex-row items-center justify-center gap-2 bg-[#011526] rounded-full p-3 "
          onClick={() => window.scrollTo(0, 0)}
        >
          <MdOutlineArrowUpward className="text-white text-4xl leading-[24.38px]" />
        </button>
      </div>
      <div className="flex flex-row items-center justify-center gap-3 mt-12">
        <p className="cursor-pointer font-mont font-medium text-sm text-[#005FAF]">
          © 2023 Chat Coach. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
