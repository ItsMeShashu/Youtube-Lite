/* eslint-disable no-unused-vars */
import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
// import styles from "../index.css";
import ytLogo from "../Assets/images/yt-logo.png";
import ytLogoMobile from "../Assets/images/yt-logo-mobile.png";

import { SlMenu } from "react-icons/sl";
import { IoIosSearch } from "react-icons/io";
import { RiVideoAddLine } from "react-icons/ri";
import { FiBell, fiBell } from "react-icons/fi";
import { CgClose } from "react-icons/cg";
import Loader from "../shared/Loader";
import { Context } from "../context/ContextApi";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const { loading, mobileMenu, setMobileMenu } = useContext(Context);

  const navigate = useNavigate();

  const searchHandler = (event) => {
    if (
      event?.key === "Enter" ||
      (event === "searchBtn" && searchQuery?.length > 0)
    ) {
      navigate(`/searchResult/${searchQuery}`);
    }
  };

  const mobileMenuToggler = () => {
    setMobileMenu(!mobileMenu);
  };

  const { pathName } = useLocation();
  const pageName = pathName?.split("/")?.filter(Boolean)?.[0];
  return (
    <div className="sticky top-0 z-10  flex flex-row items-center justify-between h-14 px-4 md:px-6 py-4 bg-white dark:bg-[#131212]">
      {loading && <Loader />}
      <div className="flex h-5 items-center">
        {pageName !== "video" && (
          <div
            className="flex md:hidden md:mr-6 cursor-pointer items-center justify-center h-10 w-10 rounded-full hover:bg-[#6e6e6e]/[0.6]"
            onClick={mobileMenuToggler}
          >
            {mobileMenu ? (
              <CgClose className="text-white text-xl" />
            ) : (
              <SlMenu className="text-white text-xl" />
            )}
          </div>
        )}
        <Link to="/" className="flex h-5 items-center ">
          <img
            className="h-full hidden dark:md:block"
            src={ytLogo}
            alt="Youtube"
          />
          <img className="h-full md:hidden" src={ytLogoMobile} alt="Youtube" />
        </Link>
      </div>
      <div className="group flex items-center">
        <div className="flex h-8 md:h-10 md:ml-10 md:pl-5 border border-[#515050] rounded-l-3xl group-focus-within:border-blue-500 md:group-focus-within:ml-5 md:group-focus-within:pl-0 ">
          <div className="w-10 items-center justify-center hidden group-focus-within:md:flex ">
            <IoIosSearch className="text-white text-xl" />
          </div>
          <input
            type="text"
            className="bg-transparent outline-none text-white pr-5 pl-5 md:pl-0 w-44 md:group-focus-within:pl-0 md:w-64 lg:w-[500px]"
            onChange={(e) => setSearchQuery(e.target.value)}
            value={searchQuery}
            onKeyUp={searchHandler}
            placeholder="Search"
          />
        </div>

        <button className="w-[60px] md:[70px]  h-8 md:h-10 flex items-center justify-center border border-l-0 border-[#515151] rounded-r-3xl bg-white/[0.1]">
          <IoIosSearch className="text-white text-2xl" />
        </button>
      </div>
      <div className="flex items-center">
        <div className="hidden md:flex">
          <div className="flex items-center justify-center h-10 w-10 rounded-full hover:bg-[#6e6e6e]/[0.6]">
            <RiVideoAddLine className="text-white text-xl cursor-pointer" />
          </div>
          <div className="flex items-center justify-center ml-2 h-10 w-10 rounded-full hover:bg-[#6e6e6e]/[0.6]">
            <FiBell className="text-white text-xl cursor-pointer" />
          </div>
        </div>
        <div className="flex h-8 w-8 overflow-hidden rounded-full md:ml-4 cursor-pointer">
          <img
            src="https://xsgames.co/randomusers/assets/avatars/male/40.jpg"
            alt="Profile"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
