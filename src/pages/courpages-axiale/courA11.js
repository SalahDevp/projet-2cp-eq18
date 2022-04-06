import React from 'react'

const CourA11 = () => {
  return (
    <div>
       <h1 className='underline decoration-solid text-2xl font-bold'>Procédé de construction : </h1>
       <div className='ml-6 mt-2'>
            <p className='text-xl font-normal'>
            Pour construire le symétrique d’une droite (d1) par rapport à un axe (d), il suffit de construire les symétriques de deux points de la droite (d1)  par rapport à cet axe (d).
            </p>
            <ul className='ml-10 text-xl font-normal list-disc'>
                <li>On choisit deux points quelconques A et B de la droite (d1).</li>
                <li>on trace les symétriques des points A et B par rapport à l’axe (d) et nommant les A1 et B1.</li>
                <li>on trace ensuite la droite (A1B1). </li>
                <li>on n'oublie pas de coder la figure et on laisse les traits de construction.</li>
            </ul>
        </div>
    </div>
  )
}

export default CourA11
