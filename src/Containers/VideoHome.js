import React from "react";
import ReactPlayer from "react-player";

const VideoHome = ({ video }) => {
  return (
    <div className="w-[70%] border-4 border-[#2E6FF2] rounded-3xl flex flex-col items-center justify-center my-10 h-fit">
      <ReactPlayer
        url={video}
        width="100%"
        height="100%"
        style={{
          borderWidth: "4px",
          borderColor: "#000",
          borderRadius: "20px",
          overflow: "hidden"
        }}
        controls={true}
      />
    </div>
  );
};

export default VideoHome;
