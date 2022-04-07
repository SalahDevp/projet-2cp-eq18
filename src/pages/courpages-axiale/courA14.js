import React from 'react'
import img1 from "../../assets/cour/P-axiale/p14.png"

const CourA14 = () => {
  return (
    <div>
          <h1 className='underline decoration-solid text-nav font-black text-3xl'>5. Symétrique d'un angle:</h1>
             
             <div className='ml-6 mt-4'>
                 <p className='  text-xl font-normal' >
                 Le symétrique d’un angle par rapport à une droite <span className='text-ltr-cr'>(d)</span> est <span className='text-ltr-cr'> un angle de même mesure</span>.
                 </p>
                 <ul className='ml-10 mt-2 list-disc  text-xl font-normal'>
                   <li>L’angle <span className='text-ltr-cr'>BÂC</span> et l’angle <span className='text-ltr-cr'>B’Â’C’</span> ont la même mesure.</li>
                 </ul>
             </div>
             <div className='mt-3 flex justify-center'>
                 <img className='h-72 w-96' src={img1} alt="" />           
             </div>
             <ul className='list-disc ml-10 mt-8 font-normal text-xl '>
               <li>On dit que la symétrie axiale <span className='text-ltr-cr'>conserve les angles</span>.</li>
             </ul>
    </div>
  )
}

export default CourA14
