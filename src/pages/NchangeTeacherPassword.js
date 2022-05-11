import React from 'react'
import retour from "../components/nouveau-protype-component/retour.png"
import img1 from "../components/nouveau-protype-component/changeTpass.png"
import { useNavigate } from "react-router-dom";
import sortir from "../components/nouveau-protype-component/sortir.png"
import ok from "../components/nouveau-protype-component/ok.png"
import i18n from "utils/translation/i18n";
import { useTranslation } from "react-i18next";
import { useState,useEffect } from 'react';

const NchangeTeacherpassword = () => {
  const [fr, setFR] = useState(true);
  
  useEffect(() => {
    if (i18n.language === "ar") {
      setFR(false);
    }
  }, [i18n.language]);
  const { t } = useTranslation();
  const navigate = useNavigate();

  const Routeur = () => {
    navigate('/TeacherPassword');
  };
  const quit = () => {
    window.close();
  };
  return (
    <div className='bg-beige h-screen w-screen flex '>
          <div className='w-1/3 h-screen rounded-r-2xl bg-violet flex justify-center items-center'>
          <img className='absolute top-9 left-10 h-10 w-10 ' src={retour} alt="" onClick={Routeur} />
             <img className='h-2/4 w-3/4' src={img1} alt="" />
          </div>
          <div className='relative bg-beige  w-2/3 h-screen flex justify-center items-center'>
          <div className='left-1/3 absolute h-screen w-1 bg-v-clair z-0'></div>
          <img className='absolute top-9 right-10 h-11 w-11 ' src={sortir} alt="sortir" onClick={quit} />

          <div className=' px-10 py-10  z-10 overflow-hidden bg-white shadow-md	 border-jeune border-2 border-solid w-98 h-97 rounded-3xl'>
         
          <p dir={fr ?"ltr" :"rtl"} for="pwd" className={fr?'-ml-0  text-2xl': '-mr-0  text-2xl'}>{t("CurrentPassword")}</p>
          <input dir={fr?"ltr" :"rtl"} placeholder={t("CurrentPassword")}  className='mt-1 px-4 text-2xl w-full h-12 rounded-xl border-1 border-rouze outline-2' type="text" name="password"id="pwd"/>
         <div className='mt-2'>
            <p dir={fr ?"ltr" :"rtl"} for="pwd" className={fr?'-ml-0  text-2xl': '-mr-0  text-2xl'}>{t("NewPassword")}</p>
            <input dir={fr?"ltr" :"rtl"}  placeholder={t("NewPassword")} className='mt-1 px-4 text-2xl w-full h-12 rounded-xl border-1 border-rouze outline-2' type="text" name="password"id="pwd"/>
          </div>
          <div className='mt-2'>
            <p dir={fr ?"ltr" :"rtl"} for="pwd" className={fr?'-ml-0  text-2xl': '-mr-0  text-2xl'}> {t("Passwordconfirmation")}</p>
            <input dir={fr?"ltr" :"rtl"} placeholder={t("Passwordconfirmation")} className='mt-1 px-4 text-2xl w-full h-12 rounded-xl border-1 border-rouze outline-2' type="text" name="password"id="pwd"/>
           </div>
             <img className={fr?'-mr-7 float-right h-28 w-28':'-ml-7 float-left h-28 w-28'} src={ok} alt="" />
        </div>
          </div>

    </div>
  )
}

export default NchangeTeacherpassword