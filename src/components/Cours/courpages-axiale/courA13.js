import React from 'react'
import Video1 from "assets/cour/Video/5A.mp4";

import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react";
import i18n from "utils/translation/i18n";

const CourA13 = () => {
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
            : 
            <h1 dir="rtl" className='underline decoration-solid text-2xl font-bold'>
                مراحل الانشاء :
            </h1>
            }
     {fr? <div className='ml-6 mt-2'>
            <p className='text-xl font-normal'>
            Pour tracer le symétrique d'un cercle de centre <span className='text-ltr-cr'>O</span> par rapport à la droite <span className='text-ltr-cr'>(d)</span> :
            </p>
              <ul className='ml-10 text-xl font-normal list-disc'>
                <li>on trace le symétrique du point <span className='text-ltr-cr'>O</span> par rapport à la droite <span className='text-ltr-cr'>(d)</span>.</li>
                <li>on trace le nouveau cercle <span className='text-ltr-cr'>C1</span> de centre <span className='text-ltr-cr'>O1</span> avec un rayon de même longueur que le rayon du cercle <span className='text-ltr-cr'>C</span>. </li>
                <li>on n'oublie pas de coder la figure (nommer les points) et on laisse les traits de construction.</li>
              </ul>
        </div>
        :
        <div dir="rtl" className='mr-6 mt-2'>
        <p className='text-xl font-normal'>
        لانشاء نظير دائرة ذات مركز <span className='text-ltr-cr'>O</span> بالنسبة الى المستقيم <span className='text-ltr-cr'>(d)</span> .
        </p>
          <ul  className='mr-10 text-xl font-normal list-disc'>
                 <li>نعين نظير النقطة  <span className='text-ltr-cr'>O</span>   بالنسبة الى المستقيم  <span className='text-ltr-cr'>(d)</span> .</li>
                 <li>نرسم الدائرة الجديدة  <span className='text-ltr-cr'>C1</span> ذات المركز <span className='text-ltr-cr'>O1 </span> و نفس نصف القطر .</li>
                 <li>لا ننسى  تسمية النقاط والاشكال وترك خطوط الانشاء .</li>
          </ul>
    </div>
    }
       <div className=' mt-16 flex justify-center'>
              <video width="500" height="400" controls autoPlay src={Video1}></video>
          </div> 
    </div>
  )
}

export default CourA13
