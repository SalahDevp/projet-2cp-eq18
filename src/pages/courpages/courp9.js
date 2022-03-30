import React from 'react'
import video4 from "../../assets/cour/Videos projet/4_cercle.mp4"

const Courp9 = () => {
  return (
    <div>
            <h1 className='underline decoration-solid text-2xl font-bold'>Procédé de construction : </h1>
       <div className='ml-6 mt-2'>
            <p className='text-xl font-normal'>Pour tracer le symétrique d'un cercle de centre A par rapport au point O :</p>
            <ul className='ml-10 text-xl font-normal list-disc'>
                <li>on trace le symétrique du point A par rapport à O.</li>
                <li>on trace le nouveau cercle de centre A’ un rayons égale AB=A’B’.  </li>
                <li>on n'oublie pas de coder la figure (nommer les points) et on laisse les traits de construction.</li>
            </ul>
        </div>
        <div className='mt-10 flex justify-center'>
           <video width="500" height="100" controls="controls" autoplay="false"  src={video4} ></video>
      </div>
    </div>
  )
}

export default Courp9