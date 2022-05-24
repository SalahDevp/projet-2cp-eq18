import React from "react";
import { useNavigate } from "react-router-dom";
import Nav from "components/Nav";
import start from "../components/nouveau-protype-component/start.png"
import finish from "../components/nouveau-protype-component/finish.png"
import cadnaexo from "../components/nouveau-protype-component/cadnaexo.png"


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
               <div className="absolute top-20 right-80 ">
                 <p className="text-3xl">score :</p>
                 <img src="" alt="" />
               </div>
              <div className="absolute   top-1/2  left-1/2
        -translate-x-1/2   -translate-y-1/2    flex flex-row justify-between w-3/4 h-auto ">
                  <div className="mt-20 flex flex-col">
                    <img className="w-24 h-24" src={start} alt="" />
                  <div className="overflow-hidden  w-32 h-32 rounded-2xl border-4 border-jeune">
                  <img className="w-full h-full" src={cadnaexo} alt="" />

                  </div>
                  </div>
                  <div className="mt-56 overflow-hidden w-32 h-32 rounded-2xl border-4 border-jeune">
                  <img className="w-full h-full" src={cadnaexo} alt="" />

                  </div>
                  <div className="overflow-hidden w-32 h-32 rounded-2xl border-4 border-jeune">
                  <img className="w-full h-full" src={cadnaexo} alt="" />

                  </div>
                  <div className="overflow-hidden w-32 h-32 rounded-2xl border-4 border-jeune">
                  <img className="w-full h-full" src={cadnaexo} alt="" />

                  </div>
                  <div className="overflow-hidden w-32 h-32 rounded-2xl border-4 border-jeune">
                  <img className="w-full h-full" src={cadnaexo} alt="" />

                  </div>

                  <div className="flex flex-col">
                  <img className="w-24 h-24" src={finish} alt="" />

                  <div className=" overflow-hidden w-32 h-32 rounded-2xl border-4 border-jeune">
                  <img className="w-full h-full"  src={cadnaexo} alt="" />
                  </div>
                  </div>
               </div>
    </div>
  );
};

export default MenuExo;
