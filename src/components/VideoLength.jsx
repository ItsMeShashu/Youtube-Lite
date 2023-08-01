/* eslint-disable no-unused-vars */
import React from "react";
import moment from "moment";

const VideoLength = ({ time }) => {
  const videoLength = moment().startOf("day").seconds(time).format("H:mm:ss");
  return (
    <div className="absolute bottom-2 right-2 bg-black/[0.7] font-bold py-1 px-2 text-white text-[12px] rounded-md">
      {videoLength}
    </div>
  );
};

export default VideoLength;
