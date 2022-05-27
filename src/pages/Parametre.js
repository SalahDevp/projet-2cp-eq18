import React from "react";
import { useNavigate } from "react-router-dom";
//images
import retour from "components/nouveau-protype-component/retour.png";
import img1 from "components/nouveau-protype-component/paramatre.png";
import SettingsBox from "components/parametre/SettingsBox";
import Sortir from "components/sortir";

const Paramatre = () => {
  const navigate = useNavigate();

  const Routeur = () => {
    navigate(-1);
  };
  const quit = () => {
    window.close();
  };
  return (
    <div className="bg-beige h-screen w-screen flex ">
      <div className="w-1/3 h-screen rounded-r-2xl bg-violet flex justify-center items-center">
        <img
          className="cursor-pointer absolute top-9 left-10 h-10 w-10 "
          src={retour}
          alt=""
          onClick={Routeur}
        />
        <img className="h-2/4 w-3/4" src={img1} alt="" />
      </div>
      <div className="relative bg-beige  w-2/3 h-screen flex  items-center">
        <div className="left-1/3 absolute h-screen w-1 bg-v-clair z-0"></div>
        <Sortir />
        <SettingsBox />
      </div>
    </div>
  );
};

export default Paramatre;
