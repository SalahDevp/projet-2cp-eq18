import React from 'react'
import finish from "../components/nouveau-protype-component/finish.png"
import cadnaexo from "../components/nouveau-protype-component/cadnaexo.png"
import Etoiles from './etoiles'

const Nivend = ({enable}) => {
  return (
    <div className="flex flex-col">
    <img className="w-24 h-24" src={finish} alt="" />

    <div className=" overflow-hidden relative w-32 h-32 rounded-2xl border-4 border-jeune">
   {/* { (enable===false)?<img className="w-full h-full"  src={cadnaexo} alt="" /> */}
   <img className="w-full h-full"  src={enable===true? "":cadnaexo} alt="" />
       
   
   { (enable===true)? <Etoiles num={3} /> :""}
    </div>
    </div>  )
}

export default Nivend