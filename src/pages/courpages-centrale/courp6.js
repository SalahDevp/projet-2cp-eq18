import React from 'react'
import img2 from "../../assets/cour/p2-img2.png"
const Courp6 = () => {
  return (
    <div>
         <div>
            <h2 className='mt-2 ml-3 underline decoration-solid text-nav font-extrabold text-2xl'>3. Symétrique d'une droite :</h2>
          <div className='ml-6 mt-2'>
                    <p className='font-normal text-xl '>Le symétrique d'une droite par rapport à un point est une droite parallèle.</p>
                    <ul className='list-disc ml-10 mt-2 font-normal text-xl'>
                        <li> A’ est le symétrique de A par O.</li>
                        <li>B’ est le symétrique de B par O.</li>
                        <li>Le symétrique de la droite (AB) est la droite (A’B’).</li>
                    </ul>
            </div>
            <div className='mt-14 flex justify-center  '>
            <img  className='h-72 w-100 'src={img2} alt="" />
            </div>
      </div>
    </div>
  )
}

export default Courp6