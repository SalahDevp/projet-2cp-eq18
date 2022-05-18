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
 import I1 from "../../assets/Grille/iconsovert/I1.png"
 import I2 from "../../assets/Grille/iconsovert/I2.png"
 import I3 from "../../assets/Grille/iconsovert/I3.png"
 import P1 from "../../assets/Grille/iconsovert/hexagone.png"
 import P2 from "../../assets/Grille/iconsovert/pentagone.png"
 import P3 from "../../assets/Grille/iconsovert/Rectangle.png"
 import P4 from "../../assets/Grille/iconsovert/Rhombus.png"
import P5 from "../../assets/Grille/iconsovert/triangle.png"
import SC from "../../assets/Grille/iconsovert/SC.png"
import SA from "../../assets/Grille/iconsovert/SA.png"
import dossier from "../../../src/components/nouveau-protype-component/dossier-ouvert .png"
import sauvgarde from "../../../src/components/nouveau-protype-component/sauvgarde.png"
 import NAV from '../Nav'
import { useState } from 'react'

const Grillecomponent = () => {
  const [icons,setIcons] = useState(true);
  const [icons5,setIcons5] = useState(false);
  const [icons1,setIcons1] = useState(false);
  const [icons2,setIcons2] = useState(false);
  const [icons3,setIcons3] = useState(false);
  const [icons4,setIcons4] = useState(false);


    return (
    <div className='relative overflow-hidden bg-white h-screen w-screen'>
           <div className='absolute left-0'>
           <NAV  pathAvant="/" image1={dossier} image2={sauvgarde}/>
           </div>
          
            <div className='py-3 border-2  border-violet border-r-0 absolute rounded-l-2xl right-0 h-screen w-20 bg-marron
            flex flex-col items-center justify-between'>

                <img className='mt-1 h-14 w-14' src={sortir} alt=""  />
                <img className=' h-14 w-14' src={first} alt="" />
                <img className=' h-14 w-14' src={second} alt="" />
                     <div dir="rtl" className='flex flex-row justify-between '>
                           <img className='  h-16 w-14' src={third} alt=""  onClick={()=>{if(icons1){setIcons1(false) }else{setIcons1(true);setIcons2(false);setIcons3(false);setIcons4(false);setIcons5(false)}}}/>
                           {icons1 && <div  className='p-1 px-1 w-32 rounded-xl justify-between  flex items-center flex-row bg-marron
                             mt-1 mr-20 absolute   '>
                                      <img className=' h-12 w-12' src={I1} alt="" />
                                    <img className=' h-12 w-12' src={I2} alt="" />  
                              </div> } 
                    </div> 
                    
                    <div dir="rtl" className='flex flex-row justify-between '>
                     <img className='h-16 w-14' src={fourth} alt="" onClick={()=>{if(icons2){setIcons2(false) }else{setIcons2(true);setIcons1(false);setIcons3(false);setIcons4(false);setIcons5(false)}}}/>
                     {(icons2) &&   <div  className='p-1 px-1 w-56 rounded-xl justify-between  flex items-center flex-row bg-marron
                             mt-1 mr-20 absolute   '>
                                    <img className=' h-12 w-12' src={I2} alt="" />  
                                    <img className=' h-12 w-12' src={second} alt="" />  
                                    <img className=' h-12 w-12' src={I1} alt="" />
                                    <img className=' h-12 w-12' src={I3} alt="" />  

                              </div>  }
                    </div> 
                   
                    <div dir="rtl" className='flex flex-row justify-between '>
                    <img className=' h-16 w-14' src={fifth} alt="" onClick={()=>{if(icons3){setIcons3(false) }else{setIcons3(true);setIcons1(false);setIcons2(false);setIcons4(false);setIcons5(false)}}}/>
                    {icons3 && <div  className='p-1 px-1 w-80 rounded-xl justify-between  flex items-center flex-row bg-marron
                                mt-1 mr-20 absolute   ' >
                                    <img className=' h-14 w-12' src={P1} alt="" />
                                        <img className=' h-12 w-14' src={P2} alt="" />
                                        <img className=' h-10 w-16' src={P3} alt="" />
                                        <img className=' h-12 w-12' src={P4} alt="" />
                                        <img className=' h-11 w-11' src={P5} alt="" />
                              </div>  }
                    </div> 


                    <div dir="rtl" className='flex flex-row justify-between '>
                    <img className=' h-16 w-14' src={sixth} alt="" onClick={()=>{if(icons4){setIcons4(false) }else{setIcons4(true);setIcons1(false);setIcons2(false);setIcons3(false);setIcons5(false)}}} />
                    {icons4 &&  <div  className='p-0.5 px-1 w-48 h-28 border-2 border-violet rounded-xl flex flex-row justify-between  items-center  bg-marron
                             mt-1 mr-20 absolute   '>
                               <div className='flex flex-col h-24 justify-between'>
                               <div className='bg-red-500 rounded-full h-10 w-10'></div>
                                <div className='bg-red-500 rounded-full h-10 w-10'></div>
                               </div>
                           
                               <div className='flex flex-col h-24 justify-between'>
                               <div className='bg-red-500 rounded-full h-10 w-10'></div>
                                <div className='bg-red-500 rounded-full h-10 w-10'></div>
                               </div>

                               <div className='flex flex-col h-24 justify-between'>
                               <div className='bg-red-500 rounded-full h-10 w-10'></div>
                                <div className='bg-red-500 rounded-full h-10 w-10'></div>
                               </div>

                              </div>  }
                    </div> 

                    <div dir="rtl" className='flex flex-row justify-between '>
                    <img className=' h-14 w-14' src={seventh} alt="" />      
                    </div> 
                    
                    <div dir="rtl" className='flex flex-row justify-between '>
                           <img className='  h-16 w-14' src={eighth} alt=""  onClick={()=>{if(icons5){setIcons5(false) }else{setIcons5(true);setIcons1(false);setIcons2(false);setIcons3(false);setIcons4(false)}}}/>
                           {icons5 && <div  className='p-1 px-1 w-32 rounded-xl justify-between  flex items-center flex-row bg-marron
                             mt-1 mr-20 absolute   '>
                                      <img className=' h-12 w-12' src={SC} alt="" />
                                     <img className=' h-12 w-12' src={SA} alt="" />  
                              </div> } 
                    </div> 
                    
            </div>
                       
    </div>
  )
}

export default Grillecomponent