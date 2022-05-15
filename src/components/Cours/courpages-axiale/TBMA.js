import React from 'react'
import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react";
import i18n from "utils/translation/i18n";

const TBMA = () => {
  const { i18n } = useTranslation();
  const [fr, setFR] = useState(true);

  useEffect(() => {
    if (i18n.language === "ar") {
      setFR(false);
    }
  }, [i18n.language]);
  return (
    <div>
       {fr? <div className='ml-6'>
        <h1 className='text-nav text-center text-4xl font-bold'>Symétrie axiale</h1>
        <h2 className='mt-7 text-nav  text-3xl font-bold' >TABLE DE MATIÈRE</h2>
        <p  className='mt-3 text-2xl font-semibold' >I . Figures symétriques par rapport à une droite  ......................................... 1</p>
        <p className='text-xl  mt-3 font-semibold'>II . Propriétés de la symétrie axiale   .................................................... 2</p>
        <p className='text-xl mt-4  font-medium'>1) Symétrique d'un point </p>
        <p className='text-xl ml-8 mt-0.5  font-medium'>............................................................................................... 3</p>
        <p className='text-xl  mt-1 font-medium'>2) Symétrie d’un segment</p>    
        <p className='text-xl ml-8 mt-0.5  font-medium'>............................................................................................... 7</p>                                                                                     
        <p className='text-xl  mt-1 font-medium'>3) Symétrie d’une droite     </p>       
        <p className='text-xl ml-8 mt-0.5  font-medium'>    ................................................................................................9</p>                                                                                    
        <p className='text-xl  mt-1 font-medium'>4) Symétrie d’un cercle   </p>         
        <p className='text-xl ml-8 mt-0.5  font-medium'>   ...............................................................................................12</p>                                                                                      
        <p className='text-xl  mt-1 font-medium'>5) Symétrie d’un angle   </p>         
        <p className='text-xl ml-8 mt-0.5  font-medium'> ...............................................................................................14</p>                                                                                
        <p className='text-xl  mt-1 font-medium'>6) Symétrie de points alignés </p>  
        <p className='text-xl ml-8 mt-0.5  font-medium'>...............................................................................................15</p>
        </div>: 
        <div dir='rtl' className='mr-6'>
         <h1 className='text-nav text-center text-4xl font-bold'></h1>
        <h2 className='mt-7 text-nav  text-3xl font-bold' > الفهرس : </h2>
        <p  className='mt-3 text-2xl font-semibold' ></p>
        <p className='text-xl  mt-3 font-semibold'></p>
        <p className='text-xl mt-4  font-medium'></p>
        <p className='text-xl mr-8 mt-0.5  font-medium'></p>
        <p className='text-xl  mt-1 font-medium'></p>    
        <p className='text-xl mr-8 mt-0.5  font-medium'></p>                                                                                     
        <p className='text-xl  mt-1 font-medium'>     </p>       
        <p className='text-xl mr-8 mt-0.5  font-medium'>   </p>                                                                                    
        <p className='text-xl  mt-1 font-medium'>  </p>         
        <p className='text-xl mr-8 mt-0.5  font-medium'>   </p>                                                                                      
        <p className='text-xl  mt-1 font-medium'>  </p>         
        <p className='text-xl mr-8 mt-0.5  font-medium'> </p>             
        <p className='text-xl mr-8 mt-0.5  font-medium'></p>
        </div>
        }
    </div>
  )
}

export default TBMA
                                                                             
