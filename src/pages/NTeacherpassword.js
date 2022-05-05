import React from 'react'
import retour from "../components/nouveau-protype-component/retour.png"
import img1 from "../components/nouveau-protype-component/Tpass.png"
import { useNavigate } from "react-router-dom";
import sortir from "../components/nouveau-protype-component/sortir.png"
import cadna from "../components/nouveau-protype-component/cadna.png"

const NTeacherpassword = () => {
    const navigate = useNavigate();

      const Routeur = () => {
        navigate('/userMode');
      };
      const quit = () => {
        window.close();
      };
  return (
    <div className='bg-beige h-screen w-screen flex '>
          <div className='w-1/3 h-screen rounded-r-2xl bg-violet flex justify-center items-center'>
          <img className='absolute top-9 left-10 h-10 w-10 ' src={retour} alt="" onClick={Routeur} />
             <img className='h-2/4 w-4/5' src={img1} alt="" />
          </div>
          <div className='relative bg-beige  w-2/3 h-screen flex justify-center items-center'>
          <div className='left-1/3 absolute h-screen w-1 bg-v-clair z-0'></div>
          <img className='absolute top-9 right-10 h-11 w-11 ' src={sortir} alt="sortir" onClick={quit} />

          <div className='pb-14 pt-20 px-14  z-10 bg-white shadow-md overflow-hidden	 border-jeune border-2 border-solid w-98 h-96 rounded-3xl'>
          <label for="pwd" className='-ml-4  text-4xl '>Mot de passe</label>
          <input  
          className='mt-5 px-5 w-full h-16 text-2xl rounded-xl border-1 border-rouze outline-2' 
          placeholder="Mot de passe" type="password" name="password"id="pwd"/>
          
          <p className='cursor-pointer  float-right mt-3 text-xl text-green' onClick={()=>navigate("/NchangeTeacherPassword")}>changer le mot de passe</p>
          <div className=' flex justify-end items-end w-full h-24   '>
            <img className='h-16 w-20 mr-3' src={cadna} alt="" />
            <button className='w-28 h-14 rounded-xl border-px   border-green text-xl'>confirmer</button>
          </div>
         </div>

          </div>

    </div>
  )
}

export default NTeacherpassword