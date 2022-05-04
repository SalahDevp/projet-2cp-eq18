import React from 'react'

const CourA13 = () => {
  return (
    <div>
        <h1 className='underline decoration-solid text-2xl font-bold'>Procédé de construction : </h1>
       <div className='ml-6 mt-2'>
            <p className='text-xl font-normal'>
            Pour tracer le symétrique d'un cercle de centre <span className='text-ltr-cr'>O</span> par rapport à la droite <span className='text-ltr-cr'>(d)</span> :
            </p>
              <ul className='ml-10 text-xl font-normal list-disc'>
                <li>on trace le symétrique du point <span className='text-ltr-cr'>O</span> par rapport à la droite <span className='text-ltr-cr'>(d)</span>.</li>
                <li>on trace le nouveau cercle <span className='text-ltr-cr'>C1</span> de centre <span className='text-ltr-cr'>O1</span> avec un rayon de même longueur que le rayon du cercle <span className='text-ltr-cr'>C</span>. </li>
                <li>on n'oublie pas de coder la figure (nommer les points) et on laisse les traits de construction.</li>
              </ul>
        </div>
    </div>
  )
}

export default CourA13
