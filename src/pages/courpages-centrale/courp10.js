import React from 'react'
import img10 from "../../assets/cour/p10-img.png"
const Courp10 = () => {
  return (
    <div>
       <h1 className='mt-2 ml-3 underline decoration-solid text-nav font-extrabold text-2xl'>III. Centre de symétrie :</h1>
        <div className='ml-6 mt-2'>
        <p className='  text-xl font-normal' > <span className='underline decoration-solid text-2xl font-bold'>Définition :</span> On dit qu'une figure admet un centre de symétrie si lorsque l'on effectue un demi-tour autour d'un point, on obtient deux figures superposables ; Ce point est appelé centre de symétrie</p>   
        <div className='flex justify-center h-80 mt-4 '>  <img src={img10} alt="" /></div>
         <ul className='ml-10 list-disc font-normal text-xl '>
         <li>Le point O est appelé centre de symétrie.</li>
     </ul>
        </div>
    </div>
  )
}

export default Courp10
