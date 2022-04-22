import React from 'react'
//import video1 from "../../assets/cour/Video/5_A.mp4"

const CourA5 = () => {
  return (
    <div>
      <h1 className='underline decoration-solid text-2xl font-bold'>Procédé de construction : </h1>
       <div className='ml-6 mt-2'>
            <p className='text-xl font-normal'>2) <span className='text-ltr-cr'>Deuxième méthode</span> : avec un compas seul</p>
            <ul className='ml-10 text-xl font-normal list-disc'>
                <li>On prend deux points distincts <span className='text-ltr-cr'>I</span> et <span className='text-ltr-cr'>J</span> de la droite <span className='text-ltr-cr'>(d)</span>.</li>
                <li>Avec le compas on trace le cercle de centre <span className='text-ltr-cr'>I</span> passant par <span className='text-ltr-cr'>A</span> puis le cercle de centre <span className='text-ltr-cr'>J</span> passant par <span className='text-ltr-cr'>A</span>.</li>
                <li>Ces deux cercles se coupent en <span className='text-ltr-cr'>A</span> et aussi en un autre point <span className='text-ltr-cr'>A1</span> symétrique du point <span className='text-ltr-cr'>A</span> par rapport à la droite <span className='text-ltr-cr'>(d)</span>.</li>
            </ul>
        </div>
          {/* <div className=' mt-10 flex justify-center'>
              <video width="400" height="300" controls autoPlay src={video1}></video>
          </div> */}
    </div>
  )
}

export default CourA5


