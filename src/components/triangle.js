import React from 'react'
import cercls from "../components/nouveau-protype-component/cercles.png"
import trngle from "../components/nouveau-protype-component/triangle.png"

const Triangle = () => {
  return (
    <div className='absolute  bottom-6 right-1/3 translate-x-1/2'>
        <img  className='w-96 h-20' src={trngle} alt="" />
    </div>
  )
}

export default Triangle