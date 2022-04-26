import React from 'react'
import img2 from "../../assets/cour/p1-img2.png"

const Courp2 = () => {
  return (
    <div>

        <h1 className='underline decoration-solid text-nav font-black text-3xl'>II. Propriétés de la symétrie centrale :</h1>
        <h2 className='mt-2 ml-3 underline decoration-solid text-nav font-extrabold text-2xl'>1. Symétrique d'un point :</h2>
        <div className='ml-6 mt-2'>
            <p className=' text-xl font-normal'>Le symétrique d'un point<span className='text-ltr-cr'> M </span>par rapport à un point <span className='text-ltr-cr'> O </span>est le point  <span className='text-ltr-cr'> M’ </span> vérifiant les propriétés suivantes :</p>
            <ul className='ml-10 text-xl font-normal list-disc'>
                <li><span className="text-ltr-cr">O </span>,<span className="text-ltr-cr"> M </span>et<span className="text-ltr-cr"> M' </span> sont alignés .</li>
                <li><span className="text-ltr-cr">O </span>est le milieu du segment <span className="text-ltr-cr"> [MM'] </span>et on a<span className="text-ltr-cr"> OM = OM’ </span> .</li>
            </ul>
         </div>
         <div className='mt-3 flex justify-center'>
         <img src={img2} alt="" /> 
         </div>
      
    </div>
  )
}

export default Courp2