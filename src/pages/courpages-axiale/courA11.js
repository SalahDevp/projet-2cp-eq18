import React from 'react'

const CourA11 = () => {
  return (
    <div>
       <h1 className='underline decoration-solid text-2xl font-bold'>Procédé de construction : </h1>
       <div className='ml-6 mt-2'>
            <p className='text-xl font-normal'>
            Pour construire le symétrique d’une droite <span className='text-ltr-cr'>(d1)</span> par rapport à un axe <span className='text-ltr-cr'>(d)</span>, il suffit de construire les symétriques <br />de <span className='text-ltr-cr'> deux points de la droite (d1)</span>  par rapport à cet axe <span className='text-ltr-cr'>(d)</span>.
            </p>
            <ul className='ml-10 text-xl font-normal list-disc'>
                <li>On choisit deux points quelconques <span className='text-ltr-cr'>A</span> et <span className='text-ltr-cr'>B</span> de la droite <span className='text-ltr-cr'>(d1)</span>.</li>
                <li>on trace les symétriques des points <span className='text-ltr-cr'>A</span> et <span className='text-ltr-cr'>B</span> par rapport à l’axe <span className='text-ltr-cr'>(d)</span> et nommant les <span className='text-ltr-cr'>A1</span> et <span className='text-ltr-cr'>B1</span>.</li>
                <li>on trace ensuite la droite <span className='text-ltr-cr'>(A1B1)</span>. </li>
                <li>on n'oublie pas de coder la figure et on laisse les traits de construction.</li>
            </ul>
        </div>
    </div>
  )
}

export default CourA11
