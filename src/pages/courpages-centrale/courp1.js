import React from 'react'
import img1 from "../../assets/cour/p1-img1.png"
import { useTranslation } from "react-i18next";
import { useState,useEffect } from 'react';
import i18n from 'utils/translation/i18n';
const Courp1 = () => {

//trans
const { i18n } = useTranslation();
 const  [fr,setFR]=useState(true)

 useEffect(() => {
  if(i18n.language==="ar"){
    setFR(false)
      }
},[i18n.language]);
  
  
  return (
    <div>
        <div>
              { fr? <h1 className='underline decoration-solid text-nav font-black text-3xl'>I. Figures symétriques par rapport à un point :</h1>
                  : <h1 dir="rtl" className='underline decoration-solid text-nav font-black text-3xl' >الأشكال المتناظرة بالنسبة إلى نقطة :</h1>}
                {fr?<div className='ml-6 mt-2'>
                    <p className=' text-xl font-normal' > <span className='underline decoration-solid text-2xl font-bold'>Définition :</span>  Deux figures sont dites symétriques par rapport à un point lorsqu'elles sont superposables<br/>  par un demi-tour autour de ce point</p>
                    <ul className='ml-10 list-disc  text-xl font-normal'>
                        <li className=''> On dit que les deux figures sont symétriques par rapport au point <span className='text-ltr-cr'>O</span>.</li>
                        <li className=''>Le point <span className='text-ltr-cr'> A’</span> est le symétrique du point <span className='text-ltr-cr'>A</span>  par rapport au point <span className='text-ltr-cr'>O</span> . Inversement, le <br /> point <span className='text-ltr-cr'>A</span> est le symétrique du point <span className='text-ltr-cr'> A’</span>  par rapport au point <span className='text-ltr-cr'>O</span>, et on a <span  className='text-ltr-cr'>OA’=OA. </span>  </li>
                    </ul>
                </div>
               
               :<div className='mr-6 mt-2' dir="rtl">
                <p className=' text-xl font-normal' > <span className='underline decoration-solid text-2xl font-bold'>تعريف :</span> نقول أن شكلين متناظرين بالنسبة الى نقطة إذا أدرنا أي منهما بنصف دورة وجدناه  منطبقا على الآخر .</p>
                <ul className='mr-10 list-disc  text-xl font-normal'>
                    <li className=''>نقول أن الشكلين متناظرين بالنسبة للنقطة <span className='text-ltr-cr'>O</span>.</li>
                    <li className=''>النقطة <span className='text-ltr-cr'>’A </span>نظيرة النقطة <span className='text-ltr-cr'>A</span> بالنسبة للنقطة <span className='text-ltr-cr'>O</span> .من جهة أخرى، النقطة <span className='text-ltr-cr'>A</span> نظيرة النقطة <span className='text-ltr-cr'>’A</span> بالنسبة  <br/>للنقطة <span className='text-ltr-cr'>O</span>، و لدينا <span className='text-ltr-cr'>OA’=OA </span>.       </li>
                </ul>
            </div>
                }
                <div className='mt-3 flex justify-center'>
                    <img className='h-60 w-80' src={img1} alt="" />           
                </div>

                  {fr?<div className='ml-6'>
                        <p className='underline decoration-solid text-2xl font-bold'>Vocabulaire : </p>
                        <ul className="ml-10 list-disc text-xl font-normal">
                            <li>La symétrie par rapport à un point est aussi appelée <span className='text-ltr-cr'>symétrie centrale.</span> </li>
                            <li>Le point <span className='text-ltr-cr'>O</span>  est appelé <span className='text-ltr-cr'>le centre de symétrie.</span></li>
                        </ul>
                  </div>
                  :
                  <div className='mr-6' dir="rtl">
                  <p className='underline decoration-solid text-2xl font-bold'>تسميات : </p>
                  <ul className="mr-10 list-disc text-xl font-normal">
                      <li>  يسمى التناظر بالنسبة إلى نقطة<span className='text-ltr-cr'> التناظر المركزي.</span> </li>
                      <li>  تسمى النقطة <span className='text-ltr-cr'>O</span>   <span className='text-ltr-cr'>مركز التناظر.</span></li>
                  </ul>
            </div>}

       </div>
    </div>
  )
}

export default Courp1