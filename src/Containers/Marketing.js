import React from "react";
import ProgressCard from "../Components/ProgressCard";
import P1 from "../Assets/p1.png";
import P2 from "../Assets/p2.png";
import agents from "../Assets/agents.svg";
import Frame from "../Assets/Frame.png";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();
const Marketing = () => {
  const cardData = [
    {
      icon: P1,
      title: "AI-Driven Conversations",
      subtitle: "Experience Realistic Interactions",
      text: "Elevate your communication skills through realistic and intelligent interactions guided by artificial intelligence."
    },
    {
      icon: P2,
      title: "Personalized Training",
      subtitle: "Tailored Guidance for Maximum Growth",
      text: "Receive tailored coaching and practice sessions to refine your communication abilities and boost your confidence."
    },
    {
      icon: agents,
      title: "Multiple Agents",
      subtitle: "Multiple Agents",
      text: "Access a variety of virtual conversational partners, each with unique personas and expertise, for versatile practice and learning."
    },
    {
      icon: agents,
      title: "Emotion Simulation",
      subtitle: "Multiple Agents",
      text: "Gain insight into emotional dynamics by engaging in simulated conversations that mimic real-life scenarios, enhancing your emotional intelligence."
    }
  ];
  return (
    <div className="flex flex-row items-start justify-center pt-[60px] pb-[30px] w-[85%] max-w-[1320px] lg:flex-nowrap flex-wrap z-0">
      <div
        className="flex flex-col items-start justify-center p-4 lg:w-[70%]"
        data-aos="fade-left"
        data-aos-duration="1000"
        data-aos-delay="100"
        data-aos-offset="0"
      >
        <div className="flex flex-col justify-start items-between max-w-full">
          <h1 className="font-mont font-semibold lg:text-[52px] lg:leading-[56px] text-[28px] leading-[34px] mb-2">
            Master Conversations Before the Real Deal
          </h1>
          <h1 className="font-mont lg:text-[20px] lg:leading-[26px] text-[17px] leading-[24px]">
            ChatCoach is your AI-powered practice partner, helping you refine
            your conversational skills in a risk-free environment. With lifelike
            simulations covering job interviews, sales pitches, and more, you
            can build confidence and expertise before facing the real deal.
          </h1>
          <h1 className="font-mont lg:text-[20px] lg:leading-[26px] text-[17px] leading-[24px]">
            Elevate your communication game with ChatCoach and watch your
            success soar.
          </h1>
        </div>
        <div className="flex flex-row items-start justify-between lg:mt-10 mt-5 sm:flex-nowrap flex-wrap lg:max-w-[650px] lg:gap-24 sm:gap-10 gap-0">
          <ProgressCard
            title={cardData[0].title}
            subtitle={cardData[0].subtitle}
            text={cardData[0].text}
            icon={cardData[0].icon}
          />
          <div className="lg:mt-20 mt-7">
            <ProgressCard
              title={cardData[1].title}
              subtitle={cardData[1].subtitle}
              text={cardData[1].text}
              icon={cardData[1].icon}
            />
          </div>
        </div>
        <div className="flex flex-row items-center justify-start sm:mx-16 mx-0 py-[50px] sm:max-w-[340px] sm:w-full w-auto mt-[-40px] sm:flex-nowrap flex-wrap sm:gap-10 gap-0">
          <ProgressCard
            title={cardData[2].title}
            subtitle={cardData[2].subtitle}
            text={cardData[2].text}
            icon={cardData[2].icon}
          />
          <div className="lg:mt-20 mt-7">
            <ProgressCard
              title={cardData[3].title}
              subtitle={cardData[3].subtitle}
              text={cardData[3].text}
              icon={cardData[3].icon}
            />
          </div>
        </div>
      </div>
      <div
        className="flex items-center justify-center lg:max-w-[684px] lg:max-h-[554px] max-w-[300px]"
        data-aos="fade-right"
        data-aos-duration="1000"
        data-aos-delay="100"
        data-aos-offset="0"
      >
        <img src={Frame} alt="frame" />
      </div>
    </div>
  );
};
export default Marketing;
