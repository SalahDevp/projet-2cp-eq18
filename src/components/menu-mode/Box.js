import React from "react";

const Box = ({ image, title, handleClick }) => {
  return (
    <div
      className=" h w-44 h-72  rounded-xl cursor-pointer "
      onClick={handleClick}
    >
      <div className="    flex justify-center py-10    bg-box">
        <img className="w-32 h-32" src={image} alt="not found" />
      </div>
      <div className="  relative  bg-title">
        <p className="absolute   top-1/2 left-1/2  -translate-x-1/2 -translate-y-1/2 ">
          {title}
        </p>
      </div>
    </div>
  );
};

export default Box;
