import React from "react";

const Box = ({ image, title, handleClick }) => {
  return (
    <div className=" z-50 bg-whiteL  overflow-hidden border-2 border-jeune
     w-52 hover:w-60 hover:h-72  h-64  rounded-xl cursor-pointer" onClick={handleClick}>
      <p className="  top-2 text-center  ">
          {title}
        </p>
        <img className=" h-full w-full  " src={image} alt="not found" />
      
      
    </div>
  );
};

export default Box;