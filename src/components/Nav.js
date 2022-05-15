import React from "react";
import img1 from "../components/nouveau-protype-component/retour.png";
import img2 from "../components/nouveau-protype-component/home.png";
import img3 from "../components/nouveau-protype-component/param.png";
import img4 from "../components/nouveau-protype-component/aide.png";
import { useNavigate } from "react-router-dom";

const Nav = ({ pathAvant }) => {
  const navigate = useNavigate();

  const Routeur = () => {
    navigate(`${pathAvant}`);
  };

  return (
    <div className="bg-violet relative rounded-r-2xl h-screen w-20 flex flex-col items-center      ">
      <div className="mt-8  ">
        <img
          className="w-11 h-11 cursor-pointer "
          onClick={Routeur}
          src={img1}
          alt=""
        />
        <img
          className="mt-10 w-12 h-12  cursor-pointer"
          src={img2}
          alt=""
          onClick={() => navigate("/userMode")}
        />
        <img
          className="mt-12 w-14 h-14 cursor-pointer"
          src={img3}
          alt=""
          onClick={() => navigate("/parametre")}
        />
      </div>

      <img
        className="w-12 h-12 absolute bottom-16  cursor-pointer"
        src={img4}
        alt=""
      />
    </div>
  );
};

export default Nav;
