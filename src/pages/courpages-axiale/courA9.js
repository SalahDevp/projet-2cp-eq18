import React from 'react'
import img1 from "../../assets/cour/P-axiale/p9.png"

const CourA9 = () => {
  return (
    <div>
        <h1 className='underline decoration-solid text-nav font-black text-3xl'>3. Symétrique d'une droite:</h1>
             
             <div className='ml-6 mt-4'>
                 <p className='  text-xl font-normal' >Le symétrique d’une droite par rapport à une droite  <span className='text-ltr-cr'>(d)</span> est une  <span className='text-ltr-cr'>droite</span>.</p>
                 <ul className='ml-10 mt-3 list-disc  text-xl font-normal'>
                     <li className='mt-1'> <span className='text-ltr-cr'>A’</span> est le symétrique de  <span className='text-ltr-cr'>A</span> par rapport à  <span className='text-ltr-cr'>(d)</span>.</li>
                     <li className='mt-1'>La droite  <span className='text-ltr-cr'>(A’B’)</span> est la droite symétrique de la droite  <span className='text-ltr-cr'>(AB)</span> par rapport à  <span className='text-ltr-cr'>(d)</span>.</li>
                     <li className='mt-1' > <span className='text-ltr-cr'>B’</span> est le symétrique de  <span className='text-ltr-cr'>B</span> par rapport à  <span className='text-ltr-cr'>(d)</span>.</li>
                 </ul>
             </div>
             <div className='mt-10 flex justify-center'>
                 <img className='h-64 w-96' src={img1} alt="" />           
             </div>
    </div>
  )
}

export default CourA9

