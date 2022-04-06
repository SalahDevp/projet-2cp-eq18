import React from 'react'
import img2 from "../../assets/cour/P-axiale/p6.png"
const CourA6 = () => {
  return (
    <div>
        <div className='mt-3'>
                <p className='underline decoration-solid text-2xl text-red-600 font-semibold'>Remarque : </p>
                <p className='ml-6 text-xl font-normal'>Si le point A appartient à la droite (d), alors A et A’ sont confondus.</p>
                <div className='mt-3 flex justify-center'>
                    <img className='w-96 h-64' src={img2} alt="" /> 
                </div>
                 <p className='ml-6 mt-8 text-xl font-normal'>Dans ce cas, A est son propre symétrique par rapport à (d)</p>
                <div className='mt-6'>
                  <p className='underline decoration-solid text-2xl text-red-600 font-semibold'>Remarque : </p>
                  <p className='ml-6 text-xl font-normal'>Ces deux procédés sont très importants : ils sont à la base de tout ce qui va suivre. Si ils ne sont pas acquis, il est nécessaire de les approfondir en faisant plusieurs exercices.</p>
                </div>
        </div>

        
        
    </div>
  )
}

export default CourA6