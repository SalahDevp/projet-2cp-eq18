import React from 'react'
import cadnaexo from "../components/nouveau-protype-component/cadnaexo.png"
import Etoiles from './etoiles'
const Niveau = ({enable}) => {

  return (

    <div className="relative overflow-hidden  w-32 h-32 rounded-2xl border-4 border-jeune">
   
    <img className="w-full h-full" src={ enable===true? "":cadnaexo} alt="" /> 
    { (enable===true)? <Etoiles num={3} /> :""}
  

    </div>
  )
}

export default Niveau