import React from "react";
import img1 from "assets/Nav/parametres.png";
import img2 from "assets/Nav/sortir.png";
import img3 from "assets/Nav/aide.png";
import img4 from "assets/Nav/home.png";
import img5 from "assets/Nav/retour.png";
import { useNavigate } from "react-router-dom";

const Nav = ({ title, pathAvant, display, aff }) => {
  const navigate = useNavigate();

  const Routeur = () => {
    navigate(`${pathAvant}`);
  };
  const sortir = () => {
    window.close();
  };

  return (
    <div className="bg-nav h-16 relative  flex items-center justify-between ">
      <div style={{ display }} className=" flex ml-8   ">
        <img
          className="w-8 h-8 cursor-pointer "
          onClick={Routeur}
          src={img5}
          alt=""
        />
        <img
          style={{ display: { aff }.aff === true ? "none" : "flex" }}
          className="w-8 h-8 ml-6 cursor-pointer"
          src={img4}
          alt=""
        />
        <img
          style={{ display: { aff }.aff === true ? "none" : "flex" }}
          className="w-8 h-8 ml-6 cursor-pointer"
          src={img3}
          alt=""
        />
      </div>
      <p className="absolute  top-1/2 left-1/2  -translate-x-1/2 -translate-y-1/2 text-4xl font-bold">
        {title}
      </p>
      <div style={{ display }} className=" flex mr-8  ">
        <img
          style={{ display: { aff }.aff === true ? "none" : "flex" }}
          className="w-10 h-10 mr-8 cursor-pointer"
          src={img1}
          alt=""
        />
        <img
          className="w-10 h-10  cursor-pointer"
          onClick={sortir}
          src={img2}
          alt=""
        />
      </div>
    </div>
  );
};

export default Nav;
