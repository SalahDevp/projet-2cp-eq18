import React from 'react'
import cadnaexo from "../components/nouveau-protype-component/cadnaexo.png"
import Etoiles from './etoiles'
const Niveau = ({enable,num}) => {

  return (

    <div className="z-50 bg-beige relative overflow-hidden  w-32 h-32 rounded-2xl border-4 border-jeune">
   
    <img className="w-full h-full" src={ enable===true? "":cadnaexo} alt="" /> 
    { (enable===true)? <Etoiles num={num} /> :""}
  

    </div>
  )
}

export default Niveau