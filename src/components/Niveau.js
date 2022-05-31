import React from "react";
import { useNavigate } from "react-router-dom";
import cadnaexo from "../components/nouveau-protype-component/cadnaexo.png";
import Etoiles from "./etoiles";
import * as levels from "utils/exercices/levels";
import * as levelsImg from "assets/exercices/levels";
import { useUserMode } from "AppContext";

const Niveau = ({ enable, num, levelNum }) => {
  const { teacherMode } = useUserMode();
  const levelArr = levels["level" + levelNum];
  const navigate = useNavigate();
  const activated = enable || teacherMode;

  const handleClick = () => {
    console.log(levelArr);
    if (!activated) return;
    navigate(
      `${levelArr[0]}?&qstNum=${1}&maxQst=${
        levelArr.length
      }&level=${levelNum}&corrAns=0`
    );
  };
  return (
    <div
      onClick={handleClick}
      className={`z-50 bg-beige relative overflow-hidden  w-36 rounded-2xl border-4 border-jeune ${
        activated && "cursor-pointer"
      }`}
    >
      <div className="w-full flex items-center justify-center h-36">
        <img
          className={`w-full ${!activated ? "h-full" : ""}`}
          src={activated ? levelsImg["level" + levelNum] : cadnaexo}
          alt=""
        />
      </div>
      {enable === true && !teacherMode ? <Etoiles num={num} /> : ""}
    </div>
  );
};

export default Niveau;
