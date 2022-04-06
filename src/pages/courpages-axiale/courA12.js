import React from 'react'
import img1 from "../../assets/cour/P-axiale/p12.png"

const CourA12 = () => {
  return (
    <div>
       <h1 className='underline decoration-solid text-nav font-black text-3xl'>4. Symétrique d'un cercle:</h1>
             
             <div className='ml-6 mt-4'>
                 <p className='  text-xl font-normal' >          Le symétrique d’un cercle par rapport à une droite (d) est un cercle de même rayon et dont le centre est le symétrique du centre du premier cercle.</p>
                 <ul className='ml-10 mt-3 list-disc  text-xl font-normal'>
                    <li>A’ est le symétrique de A par rapport à (d).</li>
                    <li>C’ est le symétrique du cercle C par rapport à (d).</li>
                 </ul>
             </div>
             <div className='mt-10 flex justify-center'>
                 <img className='h-64 w-328' src={img1} alt="" />           
             </div>
    </div>
  )
}

export default CourA12
