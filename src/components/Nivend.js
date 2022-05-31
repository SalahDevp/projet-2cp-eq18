import React, { useEffect, useState } from "react";
import finish from "../components/nouveau-protype-component/finish.png";
import cadnaexo from "../components/nouveau-protype-component/cadnaexo.png";
import { useUserMode } from "AppContext";
import { useNavigate } from "react-router-dom";
import level6 from "assets/exercices/levels/level6.png";

const Nivend = ({ enable }) => {
  const { teacherMode } = useUserMode();
  const navigate = useNavigate();
  const [exoNum, setExoNum] = useState(0);
  const activated = (enable || teacherMode) && exoNum > 0;

  const handleClick = () => {
    if (!activated) return;
    navigate(`/paint?exoMode=true&qstNum=1&cstmExo=true&maxQst=${exoNum}`);
  };

  useEffect(() => {
    //get custom exo number
    (async () => {
      const num = await window.electronAPI.getCustomPaintExoNum();
      setExoNum(num);
    })();
  });
  return (
    <div className="flex flex-col">
      <img className="w-24 h-24" src={finish} alt="" />

      <div
        onClick={handleClick}
        className={`z-50 bg-beige relative flex items-center justify-center overflow-hidden w-36 h-36 rounded-2xl border-4 border-jeune ${
          activated && "cursor-pointer"
        }`}
      >
        {/* { (enable===false)?<img className="w-full h-full"  src={cadnaexo} alt="" /> */}
        <img className="w-full" src={activated ? level6 : cadnaexo} alt="" />
      </div>
    </div>
  );
};

export default Nivend;
