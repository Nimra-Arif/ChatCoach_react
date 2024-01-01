import React, { useState } from "react";

import whatWeOffer from "../Assets/WhatWeOffer.svg";
import ourJourney from "../Assets/OurJourney.svg";
import ourValues from "../Assets/OurValues.svg";

const Values = () => {
  const [value, setValue] = useState(1);

  return (
    <div className="flex items-center justify-center w-full bg-[#E3EDFF]">
      <div className="flex xl:flex-row flex-col xl:items-start items-center justify-between p-[5%] lg:px-0 lg:w-[90%] lg:max-w-[1320px] lg:py-[5%] lg:h-[1450px] xl:h-[850px] sm:h-[1250px] h-full  w-full">
        <div className="flex flex-col items-start justify-start xl:w-[50%] xl:max-w-[42vw] w-full p-3 gap-3">
          <p className="font-mont text-[#2E6FF2] font-semibold text-base uppercase">
            Strive, Build, Launch & Take Control
          </p>
          <p
            className="font-mont font-bold text-4xl"
            style={{ maxWidth: "100%" }}
          >
            Connecting Vision to Reality: Empowering Conversations with
            Technology and Expertise
          </p>
          <p
            className="font-mont font-medium text-base"
            style={{ maxWidth: "100%" }}
          >
            With a unique blend of cutting-edge technology and expert guidance,
            we facilitate dialogues that breathe life into your business
            aspirations.
          </p>
          <p
            className="font-mont font-medium text-base"
            style={{ maxWidth: "100%" }}
          >
            Our secret weapon?
          </p>
          <p
            className="font-mont font-medium text-base"
            style={{ maxWidth: "100%" }}
          >
            AI Avatars - designed to play various roles, boosting your
            confidence and helping you excel in conversations, be it with your
            boss, employees, customers, or anyone else.
          </p>
          <p
            className="font-mont font-medium text-base"
            style={{ maxWidth: "100%" }}
          >
            Together, we turn ideas into actionable plans, transforming
            conversations into catalysts for achievement.
          </p>
          <div className="flex flex-row items-start justify-center gap-4 py-2">
            <p
              className={`border-[#2E6FF2] border-2 font-mont font-bold lg:text-xl text-xs vs:px-3 vs:py-2 cursor-pointer rounded-lg px-4 py-2 box-content ${
                value === 1 ? "text-white bg-[#2E6FF2]" : " text-[#2E6FF2]"
              }`}
              onClick={() => setValue(1)}
            >
              WHAT WE OFFER
            </p>
            <p
              className={`border-[#2E6FF2] border-2 font-mont font-bold lg:text-xl text-xs cursor-pointer rounded-lg px-4 py-2 box-content ${
                value === 2 ? "text-white bg-[#2E6FF2]" : " text-[#2E6FF2]"
              }`}
              onClick={() => setValue(2)}
            >
              OUR JOURNEY
            </p>
            <p
              className={`border-[#2E6FF2] border-2 font-mont font-bold lg:text-xl text-xs cursor-pointer rounded-lg px-4 py-2 box-content ${
                value === 3 ? "text-white bg-[#2E6FF2]" : " text-[#2E6FF2]"
              }`}
              onClick={() => setValue(3)}
            >
              OUR VALUES
            </p>
          </div>
          {value === 1 && (
            <>
              <p
                className="font-mont font-medium text-base"
                style={{ maxWidth: "100%" }}
              >
                ChatCoach offers AI-powered conversation simulations to boost
                your communication skills.
              </p>
              <p
                className="font-mont font-medium text-base"
                style={{ maxWidth: "100%" }}
              >
                Whether you're enhancing your sales team's interactions,
                improving customer support, or refining personal conversation
                skills, our platform delivers realistic scenarios for risk-free
                practice.
              </p>
            </>
          )}
          {value === 2 && (
            <>
              <p
                className="font-mont font-medium text-base"
                style={{ maxWidth: "100%" }}
              >
                ChatCoach began with a vision to transform conversation
                learning. Founded by a passionate team, we've collaborated with
                AI experts to push simulation technology boundaries.
              </p>
              <p
                className="font-mont font-medium text-base"
                style={{ maxWidth: "100%" }}
              >
                We continuously adapt and innovate to provide cutting-edge
                communication training.
              </p>
            </>
          )}
          {value === 3 && (
            <>
              <p
                className="font-mont font-medium text-base"
                style={{ maxWidth: "100%" }}
              >
                Integrity, innovation, and inclusivity are the heart of
                ChatCoach. We provide a trustworthy and ethical platform, driven
                by a commitment to staying at the forefront of AI.
              </p>
              <p
                className="font-mont font-medium text-base"
                style={{ maxWidth: "100%" }}
              >
                We continuously adapt and innovate to provide cutting-edge
                communication training.
              </p>
            </>
          )}
        </div>
        <div className="flex flex-col sm:items-start items-center justify-center h-full xl:w-[50%] pt-5 w-full gap-5">
          <div
            className={`transition-all duration-300 bg-white flex flex-col items-end justify-start py-10 px-20 rounded-2xl shadow-xl   m-0 w-full ${
              value === 1 ? "sm:w-[55%] sm:ml-[45%]" : "sm:w-[35%] sm:ml-[65%]"
            }`}
          >
            <p
              className={`font-mont transition-all duration-300 font-bold text-center w-full text-base ${
                value === 1 ? "sm:text-2xl" : "sm:text-base"
              }`}
            >
              What We Offer
            </p>
            <img src={whatWeOffer} alt="whatWeOffer" className="w-full" />
          </div>
          <div
            className={`transition-all duration-300 bg-white flex flex-col items-center justify-start py-10 px-20 rounded-2xl shadow-xl sm:-mt-[20%] m-0 w-full ${
              value === 2 ? "sm:w-[55%]" : "sm:w-[35%]"
            }`}
          >
            <p
              className={`font-mont transition-all duration-300 font-bold text-center text-base w-full ${
                value === 2 ? "sm:text-2xl" : "sm:text-base"
              }`}
            >
              Our Journey
            </p>
            <img src={ourJourney} alt="ourJourney" className="w-full" />
          </div>
          <div
            className={`transition-all duration-300 bg-white flex flex-col items-center justify-start py-10 px-[88px] rounded-2xl shadow-xl m-0 w-full ${
              value === 3 ? "sm:w-[55%] sm:ml-[35%]" : "sm:w-[35%] sm:ml-[55%]"
            }`}
          >
            <p
              className={`font-mont transition-all duration-300 font-bold text-center text-base w-full ${
                value === 3 ? "sm:text-2xl" : "sm:text-base"
              }`}
            >
              Our Values
            </p>
            <img src={ourValues} alt="ourValues" className="w-full" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Values;
