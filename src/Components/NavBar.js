import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

import "./NavBar.css";
import { SlMenu } from "react-icons/sl";
import { RxCross1 } from "react-icons/rx";

import logo from "../Assets/logo.svg";
import smallLogo from "../Assets/LogoSmall.svg";

const NavBar = ({ setNotSub }) => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const navigate = useNavigate();

  const getUserInformation = async (token) => {
    const userRes = await axios({
      method: "get",
      url: "https://admin.chatcoach.io/api/userinformation",
      headers: {
        Authorization: `Bearer ${token}`
      }
    });

    const { data } = userRes;
    return data;
  };

  const checkSub = async () => {
    if (localStorage.getItem("token")) {
      getUserInformation(localStorage.getItem("token")).then((res) => {
        console.log(res);
        if (res.subscription && res.userhassub !== 0) {
          const dateExpiry = new Date(res.subscription.expiry_date);
          if (Date.now() < dateExpiry) {
            localStorage.setItem("subscribed", true);
            localStorage.setItem("plan", res.subscription.plan_id);
            navigate("/chat");
          }
        } else {
          localStorage.removeItem("plan");
          localStorage.removeItem("subscribed");
          setNotSub(true);
        }
      });
    } else {
      navigate("/login");
    }
  };

  function toggle() {
    setIsNavOpen(!isNavOpen);
  }

  return (
    <>
      <div
        className={`max-w-[1320px] w-[90%] md:h-[69px] h-fit rounded-2xl bg-primary flex flex-row justify-between items-center py-3 px-5 mx-auto text-[#344451] bg-white top-3 left-0 right-0 z-10 nav-shadow fixed`}
      >
        <Link to="/">
          <img
            src={logo}
            className="md:max-h-[50px] max-h-[30px] cursor-pointer"
            onClick={() => window.scrollTo(0, 0)}
            alt="logo"
          />
        </Link>
        <div className="md:flex flex-row items-center justify-center gap-[60px] hidden">
          <div className="font-mont text-base font-semibold flex flex-row  gap-2 items-center justify-center cursor-pointer transition-colors duration-300">
            <h2 className="hover:text-deepBlue">
              <a
                href="/#home"
                onClick={() => navigate("/")}
                to="/"
                className="menu-option"
              >
                Home
              </a>
            </h2>
          </div>
          <div className="font-mont text-base font-semibold flex flex-row  gap-2 items-center justify-center cursor-pointer transition-colors duration-300">
            <h2 className="hover:text-deepBlue">
              <a
                href="/#features"
                className="menu-option"
                onClick={() => navigate("/#features")}
              >
                Features
              </a>
            </h2>
          </div>
          <div className="font-mont text-base font-semibold flex flex-row  gap-2 items-center justify-center cursor-pointer transition-colors duration-300">
            <h2
              className="hover:text-deepBlue"
              onClick={() => navigate("/about")}
            >
              About
            </h2>
          </div>
          <div className="font-mont text-base font-semibold flex flex-row  gap-2 items-center justify-center cursor-pointer transition-colors duration-300">
            <h2
              className="hover:text-deepBlue"
              onClick={() => navigate("/subscription")}
            >
              Pricing
            </h2>
          </div>
        </div>

        {localStorage.getItem("token") && (
          <button
            className="md:flex items-center justify-center hidden font-mont font-bold text-lg text-center text-white bg-[#2E6FF2] py-2 px-6 rounded-xl gap-3 hover:bg-[#2760d0]"
            onClick={checkSub}
          >
            <img src={smallLogo} alt="small logo" />
            Chat Coach
          </button>
        )}
        {!localStorage.getItem("token") && (
          <button
            className="md:flex items-center justify-center hidden font-mont font-bold text-lg text-center text-white bg-[#2E6FF2] py-2 px-6 rounded-xl gap-3 hover:bg-[#2760d0]"
            onClick={() => navigate("/join")}
          >
            <img src={smallLogo} alt="small logo" />
            Sign Up and Start Trial
          </button>
        )}
        <div className="md:hidden flex flex-row items-center justify-center gap-[60px] Menu-Container ">
          <div className="font-mont text-xl flex flex-row  gap-2.5 items-center justify-center cursor-pointer transition-colors duration-300 ">
            <h2 className="hover:text-white">
              <SlMenu
                className="text-2xl"
                onClick={toggle}
                style={{ cursor: "pointer" }}
              />
            </h2>
          </div>
        </div>
      </div>

      <div
        className={`flex flex-col items-start justify-start bg-[#011526] h-[100%] fixed text-white left-0 top-0 z-10 transition-all duration-300 overflow-hidden ${
          isNavOpen ? "w-[80%]" : "w-0"
        }`}
      >
        <div className="flex flex-col items-start justify-center gap-10 mt-20 ml-10 w-[80%]">
          <div className="flex flex-row items-center justify-between w-full">
            <Link
              to="/"
              className="w-full flex flex-row items-center justify-start"
            >
              <img
                src={logo}
                className="md:max-h-[50px] max-h-[30px] invert cursor-pointer"
                onClick={() => {
                  window.scrollTo(0, 0);
                  setIsNavOpen(false);
                }}
                alt="logo"
              />
            </Link>
            <button
              className="font-mont text-xl text-white cursor-pointer"
              onClick={toggle}
            >
              <RxCross1 />
            </button>
          </div>
          <div className="flex flex-col items-start justify-center gap-10">
            <div className="font-mont text-xl flex flex-row  gap-2.5 items-center justify-center cursor-pointer transition-colors duration-300 ">
              <h2 className="hover:text-white">
                <Link
                  onClick={() => {
                    navigate("/");
                    window.scrollTo(0, 0);
                    setIsNavOpen(false);
                  }}
                  to="/"
                >
                  Home
                </Link>
              </h2>
            </div>
            <div className="font-mont text-xl flex flex-row  gap-2.5 items-center justify-center cursor-pointer transition-colors duration-300">
              <a href="/#features">
                <h2
                  className="hover:text-white"
                  onClick={() => {
                    navigate("/#features");
                    setIsNavOpen(false);
                  }}
                >
                  Features
                </h2>
              </a>
            </div>
            <div className="font-mont text-xl flex flex-row  gap-2.5 items-center justify-center cursor-pointer transition-colors duration-300 ">
              <h2
                className="hover:text-white"
                onClick={() => navigate("/about")}
              >
                About
              </h2>
            </div>
            <div className="font-mont text-xl flex flex-row  gap-2.5 items-center justify-center cursor-pointer transition-colors duration-300 ">
              <h2
                className="hover:text-white"
                onClick={() => navigate("/subscription")}
              >
                Prices
              </h2>
            </div>
          </div>
          <div className="flex flex-row items-center justify-center gap-[60px] Menu-Container ">
            {!localStorage.getItem("token") && (
              <button
                className="flex items-center justify-center gap-3 font-mont font-bold text-xl text-center text-white bg-[#2E6FF2] pt-1 pb-2 px-4 rounded-full"
                onClick={() => navigate("/join")}
              >
                <img src={smallLogo} alt="small logo" />
                Sign Up and Start Trial
              </button>
            )}
            {localStorage.getItem("token") && (
              <button
                className="flex items-center justify-center gap-3 font-mont font-bold text-xl text-center text-white bg-[#2E6FF2] py-2 px-4 rounded-lg"
                onClick={checkSub}
              >
                <img src={smallLogo} alt="small logo" />
                Chat Coach
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
