import React from "react";

import chatcoach from "../Assets/chatcoach-back12.png";

const FadedBack = () => {
  return (
    <div className="hidden md:flex felx-col items-center justify-center w-full">
      <img
        src={chatcoach}
        className="w-full bg-gradient-to-b from-transparent"
        alt="graph"
      />
    </div>
  );
};

export default FadedBack;
