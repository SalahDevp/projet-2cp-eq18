import React from 'react'
import img1 from "../../assets/cour/p1-img1.png"
const Courp1 = () => {
  return (
    <div>
        <div>
                <h1 className='underline decoration-solid text-nav font-black text-3xl'>I. Figures symétriques par rapport à un point :</h1>
             
                <div className='ml-6 mt-2'>
                    <p className='  text-xl font-normal' > <span className='underline decoration-solid text-2xl font-bold'>Définition :</span>  Deux figures sont dites symétriques par rapport à un point lorsqu'elles sont superposables<br/>  par un demi-tour autour de ce point</p>
                    <ul className='ml-10 list-disc  text-xl font-normal'>
                        <li className=''> On dit que les deux figures sont symétriques par rapport au point O.</li>
                        <li className=''>Le point <span className='text-ltr-cr'> A’</span> est le symétrique du point <span className='text-ltr-cr'>A</span>  par rapport au point <span className='text-ltr-cr'>O</span> . Inversement, le <br /> point <span className='text-ltr-cr'>A</span> est le symétrique du point <span className='text-ltr-cr'> A’</span>  par rapport au point <span className='text-ltr-cr'>O</span>, et on a <span  className='text-ltr-cr'>OA’=OA. </span>  </li>
                    </ul>
                </div>
                <div className='mt-3 flex justify-center'>
                    <img className='h-60 w-80' src={img1} alt="" />           
                </div>

                  <div className='ml-6'>
                        <p className='underline decoration-solid text-2xl font-bold'>Vocabulaire : </p>
                        <ul className="ml-10 list-disc text-xl font-normal">
                            <li>La symétrie par rapport à un point est aussi appelée <span className='text-ltr-cr'>symétrie centrale.</span> </li>
                            <li>Le point <span className='text-ltr-cr'>O</span>  est appelé <span className='text-ltr-cr'>le centre de symétrie.</span></li>
                        </ul>
                  </div>
       </div>
      
    </div>
  )
}

export default Courp1