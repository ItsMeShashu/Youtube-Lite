import React from "react";

const MenuItem = ({ text, icon, action, className }) => {
  return (
    <div
      className={
        "text-white text-sm cursor-pointer h-8 flex items-center px-3 mb-[1px] rounded-lg hover:bg-white/[0.15] " +
        className
      }
      onClick={action}
    >
      <span className="text-[20px] mr-5">{icon}</span>
      <span className="text-[15px] mr-5">{text}</span>
      {/* {text} */}
    </div>
  );
};

export default MenuItem;
