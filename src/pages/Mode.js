import React from 'react'
import Box from "../components/Box"
import imgT from "../utils/teacher.png"
import imgE from "../utils/Etudiant.png"
const Mode = () => {
  return (
    <div className=' absolute top-1/2 left-1/2
     -translate-x-1/2 -translate-y-1/2 
      h-96 w-128 flex items-center justify-between '>
      <Box image={imgT} title="PROFESSEUR" />
      <Box  image={imgE} title="ÉLEVE" />
     
    </div>
  )
}

export default Mode