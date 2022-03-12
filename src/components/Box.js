import React from 'react'
import imgT from "../utils/teacher.png"
//import img-E from "../utils/Etudiant.png"
const Box = () => {
  return (
    <div className=' h w-40 h-72  rounded-xl   '>
          <div className=' rounded-t-xl w-full   flex justify-center py-10    bg-orange-700'>
              <img className='w-32 h-32' src={imgT} alt="teacher" />
          </div>
          <div className="rounded-b-xl w-full relative  bg-red-600">
              <p className='absolute   top-1/2 left-1/2  -translate-x-1/2 -translate-y-1/2 '>PROFESSEUR</p>
          </div >
     
    </div>
  )
}

export default Box