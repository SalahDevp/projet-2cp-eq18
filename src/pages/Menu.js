import React from 'react'
import Box from "../components/Box"
import img1 from "../utils/grille.png"
import img2 from "../utils/online-course.png"
import img3 from "../utils/online-exercice.png"
const Menu = () => {
  return (
    <div  className=' absolute top-1/2 left-1/2
    -translate-x-1/2 -translate-y-1/2 
     h-96 w-328 flex items-center justify-between '>
       <Box  image={img1} title="GRILLE" />
       <Box  image={img2} title="COURS" />
       <Box  image={img3} title="EXERCICES" />
    </div>
  )
}

export default Menu