import React from 'react'
import retour from "../components/nouveau-protype-component/retour.png"
import img1 from "../components/nouveau-protype-component/changeTpass.png"
import { useNavigate } from "react-router-dom";
import sortir from "../components/nouveau-protype-component/sortir.png"

const NchangeTeacherpassword = () => {
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
             <img className='h-2/4 w-full' src={img1} alt="" />
          </div>
          <div className='relative bg-beige  w-2/3 h-screen flex justify-center items-center'>
          <div className='left-1/3 absolute h-screen w-1 bg-v-clair z-0'></div>
          <img className='absolute top-9 right-10 h-11 w-11 ' src={sortir} alt="sortir" onClick={quit} />

          <div className='px-14 py-14  z-10 bg-white shadow-md	 border-jeune border-2 border-solid w-98 h-96 rounded-3xl'>
        </div>
          </div>

    </div>
  )
}

export default NchangeTeacherpassword