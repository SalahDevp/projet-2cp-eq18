import React from 'react'
import img1 from "../../assets/cour/P-axiale/p10-A.png"
import img2 from "../../assets/cour/P-axiale/p10-B.png"

const CourA10 = () => {
  return (
    <div>
          <h1 className='underline decoration-solid text-2xl font-bold'>Cas de symétrie d’une droite: </h1>
       <div className='ml-6 mt-2'>
            <p className='text-xl font-medium'>1) Dans le cas où la droite (AB) et la droite (d) sont parallèles</p>
            <div className='mt-2 flex justify-center'>
                 <img className='h-48 w-96' src={img1} alt="" />           
             </div>
            <ul className='ml-10 text-xl font-normal list-disc'>
                <li>La droite (AB) et la droite (A’B’) sont aussi parallèles.</li>
            </ul>
        </div>
       <div className='ml-6 mt-2'>
            <p className='text-xl font-medium'>1) Dans le cas où la droite (AB) et la droite (d) sont parallèles</p>
            <div className='mt-2 flex justify-center'>
                 <img className='h-48 w-96' src={img2} alt="" />           
             </div>
            <ul className='ml-10 text-xl font-normal list-disc'>
                <li>La droite (AB) et la droite (A’B’) sont aussi parallèles.</li>
            </ul>
        </div>
    </div>
  )
}

export default CourA10