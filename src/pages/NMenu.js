import React from "react";
import NBox from "../components/menu-mode/NBOX";
import img1 from "../components/nouveau-protype-component/cour.png";
import img2 from "../components/nouveau-protype-component/grille.png";
import img3 from "../components/nouveau-protype-component/exo.png";
import imgH1 from "../components/nouveau-protype-component/courhover.png";
import imgH2 from "../components/nouveau-protype-component/grillehover.png";
import imgH3 from "../components/nouveau-protype-component/exohover.png";
import { useTranslation } from "react-i18next";
import { useNavigate, useState } from "react-router-dom";
import Nav from "../components/Nav";
import Sortir from "components/sortir";
const NMenu = () => {
  // const [hovercour, setHovercour] = useState(false);
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleCour = () => {
    //navigte to password page.
    navigate("/Menu-Cour");
  };
  return (
    <div className="bg-beige relative h-screen w-screen flex overflow-hidden">
      <Sortir />

      <div className="left-1/4 absolute h-screen w-1.5 bg-bleu z-0"></div>
      <Nav pathAvant="/userMode" />
      <div
        className="z-10   absolute  top-1/2  left-1/2
        -translate-x-1/2   -translate-y-1/2   
        h-auto w-enorme flex justify-between transition  "
      >
        <NBox
          image={img1}
          image2={imgH1}
          title={t("courses")}
          handleClick={handleCour}
        />
        <div className="mt-36 ">
          <NBox image={img2} image2={imgH2} title={t("grid")} />
        </div>
        <div className="">
          <NBox
            image={img3}
            image2={imgH3}
            title={t("exercices")}
            handleClick={() => navigate("/menu-exo")}
          />
        </div>
      </div>
    </div>
  );
};

export default NMenu;
