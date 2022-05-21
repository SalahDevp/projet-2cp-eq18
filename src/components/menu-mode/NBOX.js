import React from "react";
import { useState } from "react";
const Box = ({ image,image2, title, handleClick }) => {
  const [hover,setHover]=useState(false)
  return (
    <div onMouseEnter={()=>{setTimeout(setHover(true),2000)}}
    onMouseLeave={()=>
      {setTimeout(setHover(false),2000)}}  className=" transition duration-1000  hover:duration-500 z-50 bg-whiteL  overflow-hidden border-2 border-jeune
     w-56  hover:scale-110  h-72  rounded-xl cursor-pointer" onClick={handleClick}>
      <p className="  mt-1.5 text-center text-xl  ">
          {title}
        </p>
        <img  className="pt-2 h-64 w-full" src={image2}  alt="not found" />

    </div>
  );
};

export default Box;