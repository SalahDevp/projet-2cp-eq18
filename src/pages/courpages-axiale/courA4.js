import React from 'react'
import video1 from "../../assets/cour/Videos projet/1_A.mp4"
const CourA4 = () => {
  return (
    <div>
           <h1 className='underline decoration-solid text-2xl font-bold'>Procédé de construction : </h1>
       <div className='ml-6 mt-2'>
            <p className='text-xl font-normal'>1) <span className="text-ltr-cr">Première méthode </span>: avec une équerre et un compas</p>
            <ul className='ml-10 text-xl font-normal list-disc'>
                <li>Avec l’équerre, on trace <span className="text-ltr-cr">la perpendiculaire </span> à la droite <span className="text-ltr-cr">(d)</span> passant par <span className="text-ltr-cr">A</span> .</li>
                <li>Puis on prolonge le trait.</li>
                <li>Avec le compas on reporte la distance entre le point <span className="text-ltr-cr">A</span> et la droite <span className="text-ltr-cr">(d)</span> de l’autre côté de la droite.</li>
                <li>On obtient ainsi le symétrique <span className="text-ltr-cr">A1</span> du point <span className="text-ltr-cr">A</span> par rapport à la droite <span className="text-ltr-cr">(d)</span>.</li>
            </ul>
        </div>
        <div className='mt-10 flex justify-center'>
           <video width="600" height="300" controls="controls" autoplay="true"  src={video1} ></video>
      </div>
    </div>
  )
}

export default CourA4

