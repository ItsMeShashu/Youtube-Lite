/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-unused-vars */
import React from "react";
import { abbreviateNumber } from "js-abbreviation-number";
import { Link } from "react-router-dom";
import { BsFillCheckCircleFill } from "react-icons/bs";
import VideoLength from "./VideoLength";

const SearchedVideo = ({ video }) => {
  return (
    <Link to={`/video/${video?.videoId}`}>
      <div className="flex flex-col md:flex-row mb-8 md:mb-3 lg:hover:bg-white/[0.1] rounded-xl md:p-4">
        <div className="relative flex shrink-0 h-48 md:h-32 lg:h-40 xl:h-48 w-full md:w-48 lg:w-64 xl:w-[350px] rounded-xl bg-slate-800 overflow-hidden">
          <img
            src={video?.thumbnails?.[0]?.url}
            className="h-full w-full object-cover"
          />
          {video.lengthSeconds && <VideoLength time={video?.lengthSeconds} />}
        </div>
        <div className="flex flex-col ml-4 md:ml-6 mt-4 md:mt-0 overflow-hidden">
          <span className="text-lg md:text-[22px] font-semibold line-clamp-2 text-white">
            {video?.title}
          </span>
          <div className="flex mt-2 text-[13px] font-semibold text-white/[0.7] truncate overflow-hidden">
            <span>{`${abbreviateNumber(video?.stats?.views, 2)} views`}</span>
            <span className="flex text-[25px] leading-none font-bold text-white/[0.7] relative top-[-10px] mx-1">
              .
            </span>
            <span className="truncate">{video?.publishedTimeText}</span>
          </div>
          <div className="hidden md:flex items-center">
            <div className="flex items-start mr-3">
              <div className="flex h-7 w-7 mt-2 rounded-full overflow-hidden">
                <img
                  src={video?.author?.avatar[0]?.url}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>

            <div className="flex flex-col">
              <span className="text-sm font-semibold mt-2 text-white/[0.7] flex items-center">
                {video?.author?.title}
                {video?.author?.badges[0]?.type === "VERIFIED_CHANNEL" && (
                  <BsFillCheckCircleFill className="text-white/[0.5] text-[13px] ml-1" />
                )}
              </span>
            </div>
          </div>
          <span className="empty:hidden text-[12px] md:text-[14px] line-clamp-1 md:line-clamp-2 text-white/[0.7] md:pr-24 md:my-4">
            {video?.descriptionSnippet}
          </span>
        </div>
      </div>
    </Link>
  );
};

export default SearchedVideo;
