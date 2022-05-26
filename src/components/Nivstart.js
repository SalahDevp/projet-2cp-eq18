import React from 'react'
import start from "../components/nouveau-protype-component/start.png"
import Etoiles from './etoiles'
const Nivstart = () => {
  return (
    <div className="overflow-hidden flex flex-col">
           <img className="w-24 h-24" src={start} alt="" />
        <div className="relative overflow-hidden  w-32 h-32 rounded-2xl border-4 border-jeune">
         <Etoiles num={3} />
        </div>
  </div>
  )
}

export default Nivstart