import React from 'react'
import video1 from "../../assets/cour/Videos projet/1_A.mp4"

const CourA5 = () => {
  return (
    <div>
      <h1 className='underline decoration-solid text-2xl font-bold'>Procédé de construction : </h1>
       <div className='ml-6 mt-2'>
            <p className='text-xl font-normal'>Deuxième méthode : avec un compas seul</p>
            <ul className='ml-10 text-xl font-normal list-disc'>
                <li>On prend deux points distincts I et J de la droite (d).</li>
                <li>Avec le compas on trace le cercle de centre I passant par A puis le cercle de centre J passant par A.</li>
                <li>Ces deux cercles se coupent en A et aussi en un autre point A1 symétrique du point A par rapport à la droite (d).</li>
            </ul>
        </div>
        <div className='mt-10 flex justify-center'>
        <video width="500" height="100" controls="controls" autoplay="true"  src={video1} ></video>
      </div>
    </div>
  )
}

export default CourA5


