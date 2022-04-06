import React from 'react'
import img1 from "../../assets/cour/P-axiale/p3.png"

const CourA3 = () => {
  return (
    <div>
          <h2 className='mt-2 ml-3 underline decoration-solid text-nav font-extrabold text-3xl '>1. Symétrique d'un point :</h2>
          <div className='ml-6 mt-4'>
              <p className='font-normal text-xl '>Deux points A et B sont symétriques par rapport à une droite (d) s’ils se superposent par pliage le long de cette droite. </p>  
          </div>
          
            <div className='mt-20 flex justify-center'>
              <img  className='h-60 w-98'src={img1} alt="" />
            </div>

               <ul className='list-disc ml-10 mt-14 font-normal text-xl '>
                 <li>On dit que le point B est le symétrique du point A par rapport à une droite (d) si la droite (d) est la médiatrice du segment [AB].</li>
               </ul>
    </div>
  )
}

export default CourA3