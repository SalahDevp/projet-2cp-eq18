import React from "react";
import { useNavigate } from "react-router-dom";
import img1 from "components/nouveau-protype-component/1.png";
import img2 from "components/nouveau-protype-component/2.png";
import sortir from "components/nouveau-protype-component/sortir.png";
import Nav from "components/Nav";

const MenuCour = () => {
  const navigate = useNavigate();
  const handleCentralMode = () => {
    navigate("/cour-centrale");
  };
  const handleAxialeMode = () => {
    navigate("/cour-axiale");
  };
  return (
    <div className="bg-beige relative h-screen w-screen">
      <div className="left-1/3 absolute h-screen w-1.5 bg-bleu z-0"></div>
      <img
        className="absolute top-9 right-10 h-11 w-11 "
        src={sortir}
        alt="sortir"
      />

      <Nav pathAvant="/NMenu" />

      <div
        className=" absolute  top-96 left-1/2 -translate-x-1/2 -translate-y-1/2  
         h-98 w-99 flex items-start   justify-between "
      >
        <div
          className="px-4 pt-1 pb-16 z-50 bg-whiteL  overflow-hidden border-2 border-jeune w-56 h-80  rounded-xl cursor-pointer"
          onClick={handleCentralMode}
        >
          <p className=" text-xl text-center  ">
            Symétrie <br />
            centrale
          </p>
          <img className="pt-4  h-full w-full  " src={img1} alt="not found" />
        </div>

        <div
          className=" mt-28 px-6 pt-1 pb-20 z-50 bg-whiteL  overflow-hidden border-2 border-jeune w-56 h-80  rounded-xl cursor-pointer"
          onClick={handleAxialeMode}
        >
          <p className=" text-xl text-center">
            Symétrie
            <br /> axiale
          </p>
          <img className="pt-8   h-full w-full  " src={img2} alt="not found" />
        </div>
      </div>
    </div>
  );
};

export default MenuCour;
