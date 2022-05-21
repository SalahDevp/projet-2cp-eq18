import React from 'react'
import cercls from "../components/nouveau-protype-component/cercles.png"

const Cercles = ({MenuPr,Mcour}) => {
  return (
   
    <>
    <img className={MenuPr?'w-96 h-cermenu  absolute  bottom-6 right-1/4 translate-x-1/2'
    :Mcour?'absolute w-96 h-cermenu  bottom-5 right-80 translate-x-1/2':'absolute w-96 h-cermode  bottom-6 right-1/3 translate-x-1/2'} src={cercls} alt="" /></>

  )
}

export default Cercles