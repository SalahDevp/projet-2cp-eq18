import React from 'react'
import img8 from "../../assets/cour/p8-img.png"
const courp8 = () => {
  return (
    <div>
                <div>
            <h2 className='mt-2 ml-3 underline decoration-solid text-nav font-extrabold text-2xl'>4. Symétrique d'un cercle :</h2>
          <div className='ml-6 mt-2'>
                    <p className='font-normal text-xl '>Le symétrique d'un cercle par rapport à un point est un cercle de même rayon.</p>
                    <ul className='list-disc ml-10 mt-2 font-normal text-xl'>
                        <li>le centre A’ est le symétrique du centre A par O.</li>
                        <li>es rayons des deux cercles sont égales AB = A’B’ .</li>
                        
                    </ul>
            </div>
            <div className='mt-14 flex justify-center  '>
            <img  className='h-64 w-99 'src={img8} alt="" />
            </div>
      </div>
      

    </div>
  )
}

export default courp8