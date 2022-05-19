import React from 'react'
import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react";
import i18n from "utils/translation/i18n";
import Video3 from "assets/cour/Video/3A.mp4";

const CourA11 = () => {
  const { i18n } = useTranslation();
  const [fr, setFR] = useState(true);

  useEffect(() => {
    if (i18n.language === "ar") {
      setFR(false);
    }
  }, [i18n.language]);
  return (
    <div>
       {fr?<h1 className='underline decoration-solid text-2xl font-bold'>Procédé de construction : </h1>
         : <h1 dir="rtl" className='underline decoration-solid text-2xl font-bold'> طريقة الانشاء :</h1>}
       {fr?<div className='ml-6 mt-2'>
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
        : 
        <div dir="rtl" className='mr-6 mt-2'>
        <p className='text-xl font-normal'>
        لانشاء  نظير مستقيم <span className='text-ltr-cr'>(d1)</span> بالنسبة الى المستقيم <span className='text-ltr-cr'>(d) </span>، يكفي تحديد نظائر   <span className='text-ltr-cr'> نقطتان من المستقيم (d1) </span> بالنسبة الى محور التناظر<span className='text-ltr-cr'> (d) </span> .</p>
        <ul  className='mr-10 text-xl font-normal list-disc'>
            <li>   نختار نقطتان عشوائيتان<span className='text-ltr-cr'> A </span> و<span className='text-ltr-cr'> B </span> من المستقيم <span className='text-ltr-cr'>(d1)</span> .</li>
            <li> نعين نظائر النقط <span className='text-ltr-cr'> A </span> و <span className='text-ltr-cr'> B </span> بالنسبة الى محور التناظر<span className='text-ltr-cr'> (d) </span> ونسميهم<span className='text-ltr-cr'> A1 </span> و<span className='text-ltr-cr'> B1 </span> .</li>
            <li> نرسم بعدها المستقيم<span className='text-ltr-cr'>(A1 B1)</span> .</li>
            <li> لا ننسى تسمية الاشكال والنقاط وترك خطوط الانشاء .</li>
        </ul>
        </div>      
          }
            <div className=' mt-24 flex justify-center'>
              <video width="500" height="400" controls autoPlay src={Video3}></video>
          </div> 
    </div>
  )
}

export default CourA11
