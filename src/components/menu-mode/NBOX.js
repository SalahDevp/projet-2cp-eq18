import React from "react";
import { useState } from "react";
const Box = ({ image,image2, title, handleClick }) => {
  const [hover,setHover]=useState(false)
  return (
    <div onMouseEnter={()=>{setTimeout(setHover(true),2000)}}
    onMouseLeave={()=>
      {setTimeout(setHover(false),2000)}}  className=" transition duration-700  hover:duration-1000 z-50 bg-whiteL  overflow-hidden border-2 border-jeune
     w-52  hover:scale-125  h-64  rounded-xl cursor-pointer" onClick={handleClick}>
      <p className="  mt-1.5 text-center text-xl  ">
          {title}
        </p>
       { hover? <img id='addwait' className="pt-2 hidden h-56 w-full" src={image2}  alt="not found" />
       : <img  className="pt-2 h-56 w-full" src={image}  alt="not found" />}

    </div>
  );
};

export default Box;