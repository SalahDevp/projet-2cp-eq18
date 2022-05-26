import React from "react";
import { useNavigate } from "react-router-dom";
import Nav from "components/Nav";
import finish from "../components/nouveau-protype-component/finish.png"
import cadnaexo from "../components/nouveau-protype-component/cadnaexo.png"
import Nivstart from "components/Nivstart";
import Nivend from "components/Nivend";
import Niveau from "components/Niveau";
import { useState,useEffect } from 'react';
import Score from "components/Score";

const MenuExo = () => {
  const navigate = useNavigate();
  return (
    // <div className="w-screen flex justify-around">
    //   <button onClick={() => navigate("/qcs/1")}>QCS</button>
    //   <button onClick={() => navigate("/qcm/1")}>QCM</button>
    //   <button onClick={() => navigate("/image-qcm/1")}>IMAGE QCM</button>
    //   <button onClick={() => navigate("/paint?exoMode=true&qstNum=2")}>
    //     grille
    //   </button>
    // </div>
    <div className="relative h-screen w-screen bg-beige">
              <Nav pathAvant="/NMenu" />
              <Score />
              <div className="absolute   top-1/2  left-1/2
        -translate-x-1/2   -translate-y-1/4   flex flex-row justify-between w-3/4 h-auto ">
               <div className="">
               <Nivstart />
               </div>
                <div className="mt-48">
                <Niveau enable={true} />
                </div>
                <div className="mt-24">
                <Niveau enable={false} />
                </div>
                <div className="mt-48">
                <Niveau enable={false} />
                </div>
                <div className="mt-24">
                <Niveau enable={true} />
                </div>


                 <div className="-mt-20"> 
                 <Nivend enable={false} />

                 </div>
                 
               </div>
    </div>
  );
};

export default MenuExo;
