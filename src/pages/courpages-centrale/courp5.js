import React from 'react'
import video2 from "../../assets/cour/Videos projet/2_segment.mp4"

const Courp5 = () => {
  return (
    <div>
           <h1 className='underline decoration-solid text-2xl font-bold'>Procédé de construction : </h1>
       <div className='ml-6 mt-2'>
            <p className='text-xl font-normal'>Pour tracer le symétrique d'un segment <span className="text-ltr-cr">[AB]</span> par rapport au point <span className="text-ltr-cr">O</span> :</p>
            <ul className='ml-10 text-xl font-normal list-disc'>
                <li>on trace les symétriques des points <span className="text-ltr-cr">A</span> et <span className="text-ltr-cr">B</span> par rapport à <span className="text-ltr-cr">O</span> et nommant les <span className="text-ltr-cr">A'</span> et <span className="text-ltr-cr">B'</span> .</li>
                <li>on trace ensuite le segment <span className="text-ltr-cr">[A'B']</span> .   </li>
                <li>on n'oublie pas de coder la figure et on laisse les traits de construction.</li>
            </ul>
        </div>
        <div className='mt-10 flex justify-center'>
           <video width="500" height="100" controls="controls" autoplay="true"  src={video2} ></video>
      </div>
    </div>
  )
}

export default Courp5