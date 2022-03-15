import React from 'react'
import img1 from "assets/Nav/parametres.png"
import img2 from "assets/Nav/sortir.png"
//
import img3 from "assets/Nav/aide.png"
import img4 from "assets/Nav/home.png"
import img5 from "assets/Nav/retour.png"
const Nav = () => {
  return (
    <div className='bg-nav h-14  flex items-center justify-between '>
            
                <div className=' flex ml-8  '>
                <img className='w-8 h-8 cursor-pointer '  src={img5} alt=''/>
                <img className='w-8 h-8 ml-4 cursor-pointer'  src={img4} alt=''/>
                 <img className='w-8 h-8 ml-4 cursor-pointer'  src={img3} alt=''/>
                     
                     
                </div>
 
                <div className=' flex mr-8  '>
                <img className='w-10 h-10 mr-4 cursor-pointer' src={img1} alt=''/>
                <img className='w-10 h-10  cursor-pointer' src={img2} alt=''/>
                </div>

            
      
    </div>
  )
}

export default Nav