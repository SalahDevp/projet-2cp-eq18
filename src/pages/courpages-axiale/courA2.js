import React from 'react'

const CourA2 = () => {
  return (
    <div>
          <h1 className='underline decoration-solid text-nav font-black text-3xl'>II. Propriétés de la symétrie axiale :</h1>
        <div className='ml-6 mt-2'>
                    <p className='  text-xl font-normal' >Deux figures symétriques ont la même forme et les mêmes dimensions. Elles ont donc le même périmètre et la même aire <br /> (pour les surfaces).</p>
                    <p className='mt-3 mb-3 text-xl font-normal'>En particulier, dans le cadre d'une symétrie axiale :</p>
                    <ul className='ml-10 list-disc  text-xl font-normal'>
                        <li className=''>Le symétrique d'un segment est un segment de même longueur.</li>
                        <li className=''>Le symétrique d'une demi-droite est une demi-droite.</li>
                        <li className=''> Le symétrique d'une droite est une droite.</li>
                        <li className=''>Le symétrique d'un angle est un angle de même mesure.</li>
                        <li className=''> Le symétrique d'un cercle est un cercle de même rayon.</li>           
                        <li className=''>Les symétriques de trois points alignés sont trois points alignés.</li>
                    </ul>
                </div>

                <div className='mt-16'>
            <p className='underline decoration-solid text-2xl text-red-600 font-semibold'>Remarque : </p>
            <p className='ml-6 text-xl font-normal'>      On dit que la symétrie axiale conserve les longueurs (donc aussi les périmètres), les angles, les aires et l'alignement.</p>
        </div>
    </div>
  )
}

export default CourA2
