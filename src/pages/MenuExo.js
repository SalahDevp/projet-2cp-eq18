import React from "react";
import { useNavigate } from "react-router-dom";

const MenuExo = () => {
  const navigate = useNavigate();
  return (
    <div className="w-screen flex justify-around">
      <button onClick={() => navigate("/qcs/1")}>QCS</button>
      <button onClick={() => navigate("/qcm/1")}>QCM</button>
      <button onClick={() => navigate("/image-qcm/1")}>IMAGE QCM</button>
      <button onClick={() => navigate("/paint?exoMode=true&qstNum=2")}>
        grille
      </button>
    </div>
  );
};

export default MenuExo;
