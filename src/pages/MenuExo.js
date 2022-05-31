import React from "react";
import { useNavigate } from "react-router-dom";
import Nav from "components/Nav";
import Nivend from "components/Nivend";
import Niveau from "components/Niveau";
import Sortir from "components/sortir";
import Cercles from "components/cercles";
import trngle from "../components/nouveau-protype-component/triangle.png";
import start from "../components/nouveau-protype-component/start.png";
import { useExoScore } from "AppContext";

const MenuExo = () => {
  const { exoScore } = useExoScore();
  return (
    // <div className="w-screen flex justify-around">
    //   <button onClick={() => navigate("/qcs/1")}>QCS</button>
    //   <button onClick={() => navigate("/qcm/1")}>QCM</button>
    //   <button onClick={() => navigate("/image-qcm/1")}>IMAGE QCM</button>
    //   <button onClick={() => navigate("/paint?exoMode=true&qstNum=2")}>
    //     grille
    //   </button>
    // </div>
    <div className="h-screen w-screen flex">
      <Nav pathAvant="/NMenu" />
      <div className="relative h-full w-full flex-grow bg-beige">
        <div className="left-1/3  absolute h-screen w-1.5 bg-bleu -z-0"></div>
        <Sortir />
        {/* triangle */}
        <div className="absolute  top-6 left-1/3 -translate-x-1/2">
          <img className="w-96 h-tr" src={trngle} alt="" />
        </div>
        {/* cercles */}
        <Cercles Menuexo={true} />
        {/* Nav */}

        {/* les niveau */}
        <div
          className="absolute   top-1/2  left-1/2 w-9/10
                     -translate-x-1/2 -translate-y-1/2 flex flex-row justify-between h-auto "
        >
          <div className="">
            <div className="overflow-hidden flex flex-col">
              <img className="w-24 h-24" src={start} alt="" />
              <Niveau levelNum={1} num={exoScore[0]} enable />
            </div>
          </div>

          <div className="mt-48">
            <Niveau levelNum={2} enable={exoScore[0] >= 2} num={exoScore[1]} />
          </div>

          <div className="mt-24">
            <Niveau levelNum={3} enable={exoScore[1] >= 2} num={exoScore[2]} />
          </div>

          <div className="mt-48">
            <Niveau levelNum={4} enable={exoScore[2] >= 2} num={exoScore[3]} />
          </div>

          <div className="mt-24">
            <Niveau levelNum={5} enable={exoScore[3] >= 2} num={exoScore[4]} />
          </div>

          <div className="-mt-20">
            <Nivend enable={false} num={0} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuExo;
