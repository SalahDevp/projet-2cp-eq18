import React from 'react'
import Video2 from "assets/cour/Video/2A.mp4";

import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react";
import i18n from "utils/translation/i18n";

const CourA8 = () => {
  const { i18n } = useTranslation();
  const [fr, setFR] = useState(true);

  useEffect(() => {
    if (i18n.language === "ar") {
      setFR(false);
    }
  }, [i18n.language]);
  return (
    <>
        {fr?  <h1 className='underline decoration-solid text-2xl font-bold'>Procédé de construction : </h1>
           : <h1 dir="rtl" className='underline decoration-solid text-2xl font-bold'>        طريقة الانشاء :
           </h1> }

     {fr? <div className='ml-6 mt-2'>
            <p className='text-xl font-normal'>Pour tracer le symétrique d'un segment <span className='text-ltr-cr'>[AB]</span> par rapport à la droite <span className='text-ltr-cr'>(d)</span> :</p>
            <ul className='ml-10 text-xl font-normal list-disc'>
                <li>on trace les symétriques des points <span className='text-ltr-cr'>A</span> et <span className='text-ltr-cr'>B</span> par rapport à la droite <span className='text-ltr-cr'>(d)</span> et nommant les <span className='text-ltr-cr'>A1</span> et <span className='text-ltr-cr'>B1</span>.</li>
                <li>on trace ensuite le segment <span className='text-ltr-cr'>[A1B1] </span>. </li>
                <li>on n'oublie pas de coder la figure et on laisse les traits de construction.</li>
            </ul>
        </div> :  
       <div dir="rtl" className='mr-6 mt-2'>
       <p className='text-xl font-normal'>  لانشاء نظير القطعة المستقيمة [AB]  بالنسبة الى المستقيم (d) .</p>
       <ul className='mr-10 text-xl font-normal list-disc'>
         <li> نعيم نظائر النقط A  و B بالنسبة الى المستقيم (d) و نسميهم 'A و 'B.</li>
         <li> نرسم القطعة المستقيمة ['A'B].</li>
         <li> لا ننسى تسمية النقاط والاشكال وترك خطوط الانشاء .</li>
       </ul>
   </div> }
   <div className=' mt-24 flex justify-center'>
              <video width="500" height="400" controls autoPlay src={Video2}></video>
          </div> 
    </>
  )
}

export default CourA8
