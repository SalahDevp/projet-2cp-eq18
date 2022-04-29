import React from 'react'
import NBox from "../components/menu-mode/NBOX"
import img1 from "../components/nouveau-protype-component/cour.png"
import img2 from "../components/nouveau-protype-component/grille.png"
import img3 from "../components/nouveau-protype-component/exo.png"
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import Nav from "../components/Nav"
import sortir from "../components/nouveau-protype-component/sortir.png"

const NMenu = () => {
    const { t } = useTranslation();
    const navigate = useNavigate();

    const handleCour = () => {
        //navigte to password page.
        navigate("/Menu-Cour");
      };
  return (
    <div className='bg-beige relative h-screen w-screen flex overflow-hidden'>
        <img className='absolute top-9 right-10 h-11 w-11 ' src={sortir} alt="sortir" />

        <div className='left-1/4 absolute h-screen w-1.5 bg-bleu z-0'></div>
        <Nav pathAvant="/userMode" />
        <div className='z-10   absolute  top-1/2  left-1/2
        -translate-x-1/2   -translate-y-1/2   
        h-auto w-enorme flex  justify-between '>
             <NBox image={img1} title={t("courses")}  handleClick={handleCour} />
             <div className='mt-36'>
             <NBox image={img2} title={t("grid")}  />
             </div>
             <NBox image={img3} title={t("exercices")}/>
        </div>
    </div>
  )
}

export default NMenu