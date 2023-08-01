/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";

import MenuItem from "./MenuItem";
import { categories } from "../utils/Constants";
import { Context } from "../context/ContextApi";

const LeftNav = () => {
  const { selectCategories, setSelectCategories, mobileMenu } =
    useContext(Context);

  const navigate = useNavigate();
  const clickHandler = (name, type) => {
    switch (type) {
      case "category":
        return setSelectCategories(name);
      case "home":
        return setSelectCategories(name);
      case "menu":
        return false;
      default:
        break;
    }
  };
  return (
    <div
      className={`md:block w-[240px] overflow-auto h-full py-4 dark:bg-[#131212] absolute md:relative z-10 translate-x-[-240px] md:translate-x-0 transition-all ${
        mobileMenu ? "translate-x-0" : ""
      }`}
    >
      <div className="flex px-5 flex-col">
        {categories.map((item) => {
          return (
            <>
              <MenuItem
                text={item?.type === "home" ? "Home" : item?.name}
                icon={item?.icon}
                action={() => {
                  clickHandler(item?.name, item?.type);
                  navigate("/");
                }}
                className={`${
                  selectCategories === item?.name ? "bg-white/[0.15]" : ""
                }`}
              />
              {item?.divider && <hr className="my-5 border-white/[0.35]" />}
            </>
          );
        })}
        <hr className="my-5 border-white/[0.35]" />
        <div className="text-white/[0.5] text-[12px]"></div>
      </div>
    </div>
  );
};

export default LeftNav;
