import React from "react";

const Etoile = ({ img1, img2, img3 }) => {
  return (
    <div className="bg-vert w-full flex flex-row">
      <img className="h-10 w-1/3" src={img1} alt="" />
      <img className="h-10 w-1/3" src={img2} alt="" />
      <img className="h-10 w-1/3" src={img3} alt="" />
    </div>
  );
};

export default Etoile;
