/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom"; //to fetch video-id from url
import ReactPlayer from "react-player/youtube";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { AiOutlineLike } from "react-icons/ai";
import { abbreviateNumber } from "js-abbreviation-number";

import { fetchDataFromApi } from "../utils/Api";
import { Context } from "../context/ContextApi";
import SuggestionVideos from "./SuggestionVideos";
const VideoDetails = () => {
  const [video, setVideo] = useState();
  const [relatedVideos, setRelatedVideos] = useState();
  const { id } = useParams();
  const { setLoading } = useContext(Context);

  useEffect(() => {
    document.getElementById("root").classList.add("custom-h");
    fetchVideoDetails();
    fetchRelatedVideos();
  }, [id]);

  const fetchVideoDetails = () => {
    setLoading(true);
    fetchDataFromApi(`video/details/?id=${id}`).then((data) => {
      console.log(data);
      setVideo(data);
      setLoading(false);
    });
  };

  const fetchRelatedVideos = () => {
    setLoading(true);
    fetchDataFromApi(`video/related-contents/?id=${id}`).then((data) => {
      console.log(data);
      setRelatedVideos(data);
      setLoading(false);
    });
  };
  return (
    <div className="flex justify-center flex-row h-[calc(100% - 56px)] dark:bg-[#131212] ">
      <div className="w-full max-w-[1280px] flex flex-col lg:flex-row">
        <div className="flex flex-col lg:w-[calc(100%-350px)] xl:w-[calc(100%-400px)] px-4 pb-3 lg:pb-2 overflow-auto">
          <div className="h-[350px] md:h-[400px] lg:h-[400px] xl:h-[550px] ml-[-16px] lg:ml-0 mr-[-16px] lg:mr-0">
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${id}`}
              controls
              width="100%"
              height="100%"
              style={{ backgroundColor: "#000000" }}
              playing={true}
            />
          </div>
          <div className="text-white font-bold text-[17px] md:text-xl mt-4 line-clamp-2">
            {video?.title}
          </div>

          <div className="flex justify-between flex-col md:flex-row mt-5">
            <div className="flex">
              <div className="flex items-start">
                <div className="flex h-11 w-11 rounded-full overflow-hidden">
                  <img
                    src={video?.author?.avatar[0]?.url}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>

              <div className="flex flex-col ml-3">
                <div className="text-white text-[18px] font-semibold flex items-center">
                  {video?.author?.title}
                  {video?.author?.badges[0]?.type === "VERIFIED_CHANNEL" && (
                    <BsFillCheckCircleFill className="text-white/[0.5] text-[14px] ml-1" />
                  )}
                </div>
                <div className="text-white/[0.7] text-[15.5px] font-semibold">
                  {video?.author?.stats?.subscribersText}
                </div>
              </div>
            </div>

            <div className="flex text-white mt-5 md:mt-0">
              <div className="flex items-center justify-center h-11 px-6 cursor-pointer rounded-3xl bg-white/[0.15]">
                <AiOutlineLike className="text-[20px] text-white mr-2" />
                <span className="font-semibold">{`${abbreviateNumber(
                  video?.stats?.likes,
                  2
                )} Likes`}</span>
              </div>

              <div className="flex items-center justify-center h-11 px-6 cursor-pointer rounded-3xl bg-white/[0.15] ml-4">
                <AiOutlineLike className="text-[20px] text-white mr-2" />
                <span className="font-semibold">{`${abbreviateNumber(
                  video?.stats?.views,
                  2
                )} Views`}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col py-6 px-4 overflow-y-auto lg:w-[350px] xl:w-[400px]">
          {relatedVideos?.contents?.map((item, indx) => {
            if (item?.type !== "video") return false;
            return <SuggestionVideos key={indx} video={item?.video} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default VideoDetails;
