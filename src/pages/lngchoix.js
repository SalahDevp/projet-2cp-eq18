import React from 'react'
import { useNavigate } from "react-router-dom";
import { useLanguage } from "AppContext";
import { useTranslation } from "react-i18next";
import Triangle from 'components/triangle';
import Rectangle from 'components/rectabgle';
import Sortir from 'components/sortir';
import Logo from 'components/logo';
import Ligne from 'components/ligne';
const Lngchoix = () => {
  const navigate = useNavigate();
  const { setLanguage } = useLanguage();
  const { i18n } = useTranslation();
  //func that changes the lng
  const changeLanguage = (languageCode) => {
    i18n.changeLanguage(languageCode);
    setLanguage(languageCode);
    //store the language choice
    window.electronAPI.storeSet("language", "fr");
    //navigate to user mode page
    navigate("/userMode");
  };
  return (
    <div className='bg-beige h-screen w-screen flex '>
            <div className='w-1/3 h-screen rounded-r-2xl bg-violet flex justify-center items-center'>
               <Logo />
            </div>
            <div className='relative bg-beige  w-2/3 h-screen flex justify-center items-center'>
              <Ligne />
              <Rectangle />
              <Triangle />
               <Sortir />
                   <div className='px-14 py-14  z-10 bg-white shadow-md	 border-jeune border-2 border-solid w-98 h-96 rounded-3xl'>
                     <div className='flex text-4xl justify-between'>
                         <span>langue</span>
                         <span>اللغة</span>
                     </div>
                     <div   className='cursor-pointer flex justify-center items-center shadow-md  border-rouze border-2 border-solid rounded-3xl  w-full h-20 mt-9' 
                     onClick={() => changeLanguage("fr")}>
                         <p className=' text-3xl font-semibold'>Français</p>
                     </div>
                     <div  className=' cursor-pointer flex justify-center items-center shadow-lg border-rouze  border-2 border-solid rounded-3xl w-full h-20 mt-4'
                     onClick={() => changeLanguage("ar")}>
                         <p className='text-4xl font-medium'>العربية</p>
                     </div>
                   </div>
            </div>
    </div>  
  )
}

export default Lngchoix