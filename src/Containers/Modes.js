import React from "react";
import Mode from "../Components/Mode";

const Modes = () => {
  const modeData = [
    { name: "Chat", desc: "Simulate a casual online conversation" },
    {
      name: "Customer Support",
      desc: "Engage in realistic conversations with a simulated client"
    },
    {
      name: "Job Interview",
      desc: "Test your interview abilities with an artificial intelligence agent"
    },
    {
      name: "Negotiations",
      desc: "Enhance your negotiation skills by engaging in lifelike negotiations"
    },
    { name: "Online Dating", desc: "Practice speaking to a match online" },
    { name: "VIP", desc: "Harness your skills in talking to important people" }
  ];
  return (
    <div
      className="flex flex-col items-center justify-center max-w-[1440px] w-full overflow-x-hidden md:py-11 py-0 border-0 m-0 bg-[#edf1f6ff]"
      // data-aos="fade-up"
      // data-aos-offset="100"
      // data-aos-duration="1000"
      // data-aos-delay="50"
    >
      <h1 className="font-mont text-h3 text-center my-6">
        Emulate a Variety of High-Stakes Scenarios
      </h1>
      <h1 className="font-mont text-p text-center lg:text-left px-5 max-w-full mb-6">
        ChatCoach offers a variety of modes to cater to your needs. These
        include:
      </h1>
      <div className="flex flex-row items-center justify-center flex-wrap gap-4">
        {modeData.map((mode) => (
          <Mode name={mode.name} desc={mode.desc} key={mode.name} />
        ))}
      </div>
    </div>
  );
};

export default Modes;
