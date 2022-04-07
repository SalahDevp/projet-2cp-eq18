import React from 'react'
import video3 from "../../assets/cour/Videos projet/3_droite.mp4"

const Courp7 = () => {
  return (
    <div>
          <h1 className='underline decoration-solid text-2xl font-bold'>Procédé de construction : </h1>
       <div className='ml-6 mt-2'>
            <p className='text-xl font-normal'>Pour tracer le symétrique d'une droite <span className='text-ltr-cr'>(AB)</span> par rapport au point <span className='text-ltr-cr'>O</span> :</p>
            <ul className='ml-10 text-xl font-normal list-disc'>
                <li>on trace les symétriques des points <span className='text-ltr-cr'>A</span> et <span className='text-ltr-cr'>B</span> par rapport à <span className='text-ltr-cr'>O</span> et nommant les <span className='text-ltr-cr'>A'</span> et <span className='text-ltr-cr'>B'</span> (s'ils n'apparaissent pas sur la droite, on peut en placer deux comme l'on veut).</li>
                <li>on trace ensuite la droite <span className='text-ltr-cr'>(A'B')</span>. </li>
                <li>on n'oublie pas de coder la figure (nommer les points) et on laisse les traits de construction.</li>
            </ul>
        </div>
        <div className='mt-10 flex justify-center'>
           <video width="500" height="100" controls="controls" autoplay="false"  src={video3} ></video>
      </div>
    </div>
  )
}

export default Courp7