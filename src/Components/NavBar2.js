import React from "react";
import { Link, useNavigate } from "react-router-dom";

import logo from "../Assets/logo.svg";

const NavBar2 = () => {
  const navigate = useNavigate();

  return (
    <>
      <div
        className={`max-w-[1320px] w-[90%] md:h-[69px] h-fit rounded-[20px] bg-primary flex flex-row justify-between items-center py-3 px-5 mx-auto text-white bg-[#011526] top-3 left-0 right-0 z-10 nav-shadow fixed`}
      >
        <div className="flex flex-row items-center justify-end md:w-[55%] w-fit">
          <Link to="/">
            <img
              src={logo}
              className="md:max-h-[50px] max-h-[30px] invert cursor-pointer"
              alt="logo"
            />
          </Link>
        </div>

        {localStorage.getItem("token") && (
          <button
            className="md:flex hidden font-mont font-bold text-xl text-center text-white bg-[#2E6FF2] py-1 px-6 rounded-[20px] hover:bg-[#2760d0]"
            onClick={() => navigate("/chat")}
          >
            Chat
          </button>
        )}
        {!localStorage.getItem("token") && (
          <button
            className="md:flex hidden font-mont font-bold text-xl text-center text-white bg-[#2E6FF2] py-1 px-6 rounded-[20px] hover:bg-[#2760d0]"
            onClick={() => navigate("/join")}
          >
            Try
          </button>
        )}
      </div>
    </>
  );
};

export default NavBar2;
