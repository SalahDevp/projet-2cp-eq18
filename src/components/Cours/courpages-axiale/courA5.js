import React from 'react'
import Video1 from "assets/cour/Video/2A.mp4";
import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react";
import i18n from "utils/translation/i18n";
const CourA5 = () => {
  const { i18n } = useTranslation();
  const [fr, setFR] = useState(true);

  useEffect(() => {
    if (i18n.language === "ar") {
      setFR(false);
    }
  }, [i18n.language]);
  return (
    <div>
      {fr? <h1 className='underline decoration-solid text-2xl font-bold'>Procédé de construction : </h1>
       : <h1 dir="rtl" className='underline decoration-solid text-2xl font-bold'>         طريقة الانشاء :
       </h1>
       }
      {fr?  <div className='ml-6 mt-2'>
            <p className='text-xl font-normal'>2) <span className='text-ltr-cr'>Deuxième méthode</span> : avec un compas seul</p>
            <ul className='ml-10 text-xl font-normal list-disc'>
                <li>On prend deux points distincts <span className='text-ltr-cr'>I</span> et <span className='text-ltr-cr'>J</span> de la droite <span className='text-ltr-cr'>(d)</span>.</li>
                <li>Avec le compas on trace le cercle de centre <span className='text-ltr-cr'>I</span> passant par <span className='text-ltr-cr'>A</span> puis le cercle de centre <span className='text-ltr-cr'>J</span> passant par <span className='text-ltr-cr'>A</span>.</li>
                <li>Ces deux cercles se coupent en <span className='text-ltr-cr'>A</span> et aussi en un autre point <span className='text-ltr-cr'>A1</span> symétrique du point <span className='text-ltr-cr'>A</span> par rapport à la droite <span className='text-ltr-cr'>(d)</span>.</li>
            </ul>
        </div>
        : 
        <div dir="rtl" className='mr-6 mt-2'>
        <p  className='text-xl font-normal'> 2)  الطريقة الثانية:  باستخدام المدور فقط    .
        </p>
        <ul className='ml-10 text-xl font-normal list-disc'>
         <li>ناخذ نقطتان  I و J من المستقيم (d) .</li>
         <li>باستخدام المدور نرسم الدائرة ذات المركز I المارة بالنقطة A و نرسم الدائرة ذات المركز J المارة بالنقطة A .</li>
       <li>هذان  الدائرتان يتقاطعان في النقطة A و في النقطه A1 نظير النقطة بالنسبة الى المستقيم (d) .</li>
        </ul>
       </div> }
          <div className=' mt-24 flex justify-center'>
              <video width="500" height="400" controls autoPlay src={Video1}></video>
          </div> 
    </div>
  )
}

export default CourA5


