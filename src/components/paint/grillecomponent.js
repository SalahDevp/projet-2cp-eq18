import React from 'react'
import sortir from "../../assets/Grille/sortir.png"
import first from "../../assets/Grille/1.png"
 import second from "../../assets/Grille/2.png"
 import third from "../../assets/Grille/3.png"
 import fourth from "../../assets/Grille/4.png"
 import fifth from "../../assets/Grille/5.png"
 import sixth from "../../assets/Grille/6.png"
 import seventh from "../../assets/Grille/7.png"
 import eighth from "../../assets/Grille/8.png"
 import NAV from '../Nav'

const grillecomponent = () => {
  return (
    <div className='relative bg-white h-screen w-screen'>
           <div className='absolute left-0'>
           <NAV  path="/"/>
           </div>
          
            <div className='pt-6 border-2  border-violet absolute rounded-l-2xl right-0 h-screen w-20 bg-marron
            flex flex-col items-center'>
                <img className='h-14 w-14' src={sortir} alt=""  />
                <img className='mt-4 h-14 w-14' src={first} alt="" />
                <img className='mt-3 h-14 w-14' src={second} alt="" />
                    <div className=''>
                   <img className=' mt-3 h-16 w-14' src={third} alt="" />
                        
                   </div> 
                <img className='mt-3 h-16 w-14' src={fourth} alt="" />
                <img className='mt-3 h-16 w-14' src={fifth} alt="" />
                <img className='mt-3 h-16 w-14' src={sixth} alt="" />
                <img className='mt-3 h-14 w-14' src={seventh} alt="" />
                 
                <img className='mt-3 h-16 w-14' src={eighth} alt="" />
                <div style={ { marginTop:"20px" } } className='p-1 px-1 w-32 rounded-xl justify-between  flex items-center flex-row bg-marron right-24 absolute'>
                        <img className=' h-12 w-12' src={first} alt="" />
                        <img className=' h-12 w-12' src={second} alt="" />
                </div>  
            </div>
                       
    </div>
  )
}

export default grillecomponent