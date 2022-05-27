import React from "react";
import { useNavigate } from "react-router-dom";
import Nav from "components/Nav";
import Nivstart from "components/Nivstart";
import Nivend from "components/Nivend";
import Niveau from "components/Niveau";
import Sortir from "components/sortir";
import Cercles from "components/cercles";
import trngle from "../components/nouveau-protype-component/triangle.png"

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
                  <div className="left-1/5  absolute h-screen w-1.5 bg-bleu -z-0"></div>
                    <Sortir />
                    {/* rectangle */}
                    <div className='absolute  top-6 left-1/5 -translate-x-1/2'>
                        <img  className='w-96 h-tr' src={trngle} alt="" />
                   </div>
                   {/* cercles */}
                   <Cercles Menuexo={true} />
                   {/* Nav */}
              <Nav pathAvant="/NMenu" />
             
             {/* les niveau */}
              <div className="absolute   top-1/2  left-1/2
                     -translate-x-1/2   -translate-y-1/4   flex flex-row justify-between w-3/4 h-auto ">
               <div className="">
               <Nivstart num={0} />
               </div>
                <div className="mt-48">
                <Niveau enable={true} num={0}/>
                </div>
                <div className="mt-24">
                <Niveau enable={true} num={0} />
                </div>
                <div className="mt-48">
                <Niveau enable={false} num={0} />
                </div>
                <div className="mt-24">
                <Niveau enable={true} num={0} />
                </div>


                 <div className="-mt-20"> 
                 <Nivend enable={true} num={0} />

                 </div>
                 
               </div>
    </div>
  );
};

export default MenuExo;
