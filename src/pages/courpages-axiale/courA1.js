import React from 'react'
import img1 from "../../assets/cour/P-axiale/p1.png"
const CourA1 = () => {
  return (
    <div>
        <h1 className='underline decoration-solid text-nav font-black text-3xl'>I. Figures symétriques par rapport à une droite :</h1>
        <div className='ml-6 mt-2'>
                    <p className='  text-xl font-normal' > <span className='underline decoration-solid text-2xl font-bold'>Définition :</span> Définition : Deux figures sont dites symétriques par rapport à une droite <span className='text-ltr-cr'>(d)</span> si elles se superposent par pliage le long de la droite <span className='text-ltr-cr'>(d)</span> .</p>
                    <ul className='ml-10 list-disc  text-xl font-normal'>
                        <li className=''>Les deux figures sont <span className="text-ltr-cr">symétriques</span> par rapport a la droite <span className='text-ltr-cr'>(d)</span> .</li>
                        <li className=''>Les figures se superposent par pliage le long de la droite  <span className='text-ltr-cr'>(d)</span> .</li>
                    </ul>
                </div>
                <div className='mt-6 flex justify-center'>
                    <img className='h-60 w-80' src={img1} alt="" />           
                </div>

                <div className='ml-6 mt-4'>
                        <p className='underline decoration-solid text-2xl font-bold'>Vocabulaire : </p>
                        <ul className="ml-10 list-disc text-xl font-normal">
                            <li>La symétrie par rapport à une droite est appelée <span className='text-ltr-cr'>symétrie orthogonale par rapport à cette droite</span> ou <span className='text-ltr-cr'>symétrie axiale</span>.</li>
                            <li>La droite <span className='text-ltr-cr'>(d)</span> est appelée <span className='text-ltr-cr'>axe de la symétrie</span> .</li>
                        </ul>
                  </div>
    </div>
  )
}

export default CourA1

