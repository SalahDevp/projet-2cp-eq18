import React from 'react'
import img1 from "../../assets/cour/p2-img1.png"


const CourpR = () => {
  return (
    <div className=''>
      <div>
          <h2 className='mt-2 ml-3 underline decoration-solid text-nav font-extrabold text-2xl '>2. Symétrique d'un segment :</h2>
          <div className='ml-6 mt-2'>
              <p className='font-normal text-xl '>Le symétrique d'un segment par rapport à un point est un segment parallèle et de même longueur.  </p>
              <ul className='list-disc ml-10 mt-2 font-normal text-xl '>
                <li>A’ est le symétrique de A par O</li>
                <li>B’ est le symétrique de B par O.</li>
                <li>AB = A’B’</li>
              </ul>
          </div>
          
            <div className='flex justify-center'>
                    <img  className='h-60 w-98'src={img1} alt="" />
            </div>
      </div>
     
    </div>
  )
}

export default CourpR