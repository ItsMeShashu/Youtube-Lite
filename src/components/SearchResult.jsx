/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";

import { fetchDataFromApi } from "../utils/Api";
import { Context } from "../context/ContextApi";
import LeftNav from "./LeftNav";
import SearchedVideo from "./SearchedVideo";

const SearchResult = () => {
  const [result, setResult] = useState();
  const { searchQuery } = useParams();
  const { setLoading } = useContext(Context);

  useEffect(() => {
    document.getElementById("root").classList.remove("custom-h");
    fetchResults();
  }, [searchQuery]);

  const fetchResults = () => {
    setLoading(true);
    fetchDataFromApi(`search/?q=${searchQuery}`).then((data) => {
      setResult(data?.contents);
      setLoading(false);
    });
  };
  return (
    <div className="flex flex-row h-[calc(100% - 56px)]">
      <LeftNav />
      <div className="grow w-[calc(100%-240px)] h-full overflow-y-auto dark:bg-[#131212]">
        <div className="grid grid-cols-1 gap-2 p-5">
          {result?.map((item) => {
            if (item?.type !== "video") return false;
            let videos = item?.video;
            return <SearchedVideo key={videos?.videoId} video={videos} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default SearchResult;
