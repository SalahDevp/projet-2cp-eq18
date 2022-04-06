import React from 'react'
import img1 from "../../assets/cour/P-axiale/p7.png"
const CourA7 = () => {
  return (
    <div>
          <h1 className='underline decoration-solid text-nav font-black text-3xl'>2. Symétrique d'un segment :</h1>
             
             <div className='ml-6 mt-2'>
                 <p className='  text-xl font-normal' >Le symétrique d’un segment par rapport à une droite (d) est un segment de même longueur.</p>
                 <ul className='ml-10 list-disc  text-xl font-normal'>
                     <li>A’ est le symétrique de A par rapport à (d).</li>
                     <li>B’ est le symétrique de B par rapport à (d). </li>
                     <li>Le segment [A’B’] est le symétrique du segment [AB] par rapport à (d).</li>
                     <li>On a A'B' = AB</li>
                 </ul>
             </div>
             <div className='mt-3 flex justify-center'>
                 <img className='h-64 w-96' src={img1} alt="" />           
             </div>
             <ul className='list-disc ml-10 mt-8 font-normal text-xl '>
                 <li>On dit que la symétrie axiale conserve les longueurs.</li>
               </ul>
    </div>
  )
}

export default CourA7
