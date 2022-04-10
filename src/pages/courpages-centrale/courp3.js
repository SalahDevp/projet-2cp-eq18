import React from 'react'
import video1 from "../../assets/cour/Video/1_point.mp4"
const Courp3 = () => {
  return (
    <div>
        <h1 className='underline decoration-solid text-2xl font-bold'>Procédé de construction : </h1>
       <div className='ml-6 mt-2'>
            <p className='text-xl font-normal'>Pour tracer le symétrique du point <span className="text-ltr-cr">M</span> par rapport au point <span className="text-ltr-cr">O</span> :</p>
            <ul className='ml-10 text-xl font-normal list-disc'>
                <li>on commence par tracer la demi-droite <span className="text-ltr-cr">[MO)</span> .</li>
                <li>on reporte ensuite la longueur <span className="text-ltr-cr">MO</span> avec le compas et on place ainsi le point <span className="text-ltr-cr">M'</span> sur la demi-droite. </li>
                <li>on n'oublie pas de coder la figure (nommer les points) et on laisse les traits de construction.</li>
            </ul>
        </div>
        <div className='mt-4 flex justify-center'>
           <video width="430" height="90" controls="controls" autoplay="true"  src={video1} ></video>
      </div>
        <div className='mt-6'>
            <p className='underline decoration-solid text-2xl text-red-600 font-semibold'>Remarque : </p>
            <p className='ml-6 text-xl font-normal'>Ce procédé est très important : il est à la base de tout ce qui va suivre. Si il n'est pas acquis, il est nécessaire de l'approfondir en faisant plusieurs exercices.</p>
        </div>
    </div>
  )
}

export default Courp3


    