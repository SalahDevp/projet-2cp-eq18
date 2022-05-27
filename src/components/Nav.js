import React from "react";
import img1 from "../components/nouveau-protype-component/retour.png";
import img2 from "../components/nouveau-protype-component/home.png";
import img3 from "../components/nouveau-protype-component/param.png";
import img4 from "../components/nouveau-protype-component/aide.png";
import { useNavigate } from "react-router-dom";

const Nav = ({
  pathAvant,
  image1,
  image2,
  image3,
  saveDrawing,
  getDrawing,
  createExo,
}) => {
  const navigate = useNavigate();

  const Routeur = () => {
    navigate(pathAvant);
  };

  return (
    <div className="bg-violet relative rounded-r-2xl h-screen w-20 flex flex-col items-center      ">
      <div className="mt-8 h-auto flex flex-col justify-between items-center">
        {pathAvant && (
          <img
            className="w-11 h-11 cursor-pointer mb-10"
            onClick={Routeur}
            src={img1}
            alt=""
          />
        )}
        <img
          className="w-12 h-12  cursor-pointer"
          src={img2}
          alt=""
          onClick={() => navigate("/NMenu")}
        />
        <img
          className="mt-12 w-14 h-14 cursor-pointer"
          src={img3}
          alt=""
          onClick={() => navigate("/parametre")}
        />
        {image1 && (
          <img
            className="mt-12 w-14 h-14 cursor-pointer"
            src={image1}
            alt=""
            onClick={getDrawing}
          />
        )}
        {image2 && (
          <img
            className="mt-12 w-12 h-12 cursor-pointer"
            src={image2}
            alt=""
            onClick={saveDrawing}
          />
        )}
        {image3 && (
          <img
            className="mt-12 w-12 h-12 cursor-pointer"
            src={image3}
            alt=""
            onClick={createExo}
          />
        )}
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
