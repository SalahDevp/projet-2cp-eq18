import React from 'react'

const CourA2 = () => {
  return (
    <div> 
          <h1 className='underline decoration-solid text-nav font-black text-3xl'>II. Propriétés de la symétrie axiale :</h1>
        <div className='ml-6 mt-2'>
                    <p className='  text-xl font-normal' >Deux figures symétriques ont la même <span className="text-ltr-cr">forme</span> et les mêmes <span className="text-ltr-cr">dimensions</span>. Elles ont donc <span className="text-ltr-cr">le même périmètre</span> et <span className="text-ltr-cr">la même aire</span> <br /> (pour les surfaces).</p>
                    <p className='mt-3 mb-3 text-xl font-normal'>En particulier, dans le cadre d'une symétrie axiale :</p>
                    <ul className='ml-10 list-disc  text-xl font-normal'>
                        <li className=''>Le symétrique d'un segment est <span className='text-ltr-cr'>un segment de même longueur</span> .</li>
                        <li className=''>Le symétrique d'une demi-droite est <span className='text-ltr-cr'>une demi-droite</span> .</li>
                        <li className=''> Le symétrique d'une droite est <span className='text-ltr-cr'>une droite</span> .</li>
                        <li className=''>Le symétrique d'un angle est <span className='text-ltr-cr'>un angle de même mesure</span> .</li>
                        <li className=''> Le symétrique d'un cercle est <span className='text-ltr-cr'>un cercle de même rayon</span> .</li>           
                        <li className=''>Les symétriques de trois points alignés sont <span className='text-ltr-cr'>trois points alignés</span> .</li>
                    </ul>
                </div>

                <div className='mt-16'>
            <p className='underline decoration-solid text-2xl text-red-600 font-semibold'>Remarque : </p>
            <p className='ml-6 text-xl font-normal'> On dit que la symétrie axiale <span className='text-ltr-cr'>conserve les longueurs (donc aussi les périmètres)</span> , <span className='text-ltr-cr'>les angles</span> , <span className='text-ltr-cr'> les aires </span> et <span className='text-ltr-cr'> l'alignement</span> .</p>
        </div> 
    </div>
  )
}

export default CourA2
