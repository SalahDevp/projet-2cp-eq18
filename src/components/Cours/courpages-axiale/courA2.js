import React from 'react'
import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react";
import i18n from "utils/translation/i18n";
const CourA2 = () => {
  const { i18n } = useTranslation();
  const [fr, setFR] = useState(true);

  useEffect(() => {
    if (i18n.language === "ar") {
      setFR(false);
    }
  }, [i18n.language]);
  return (
    <div> 
         {fr? <h1 className='underline decoration-solid text-nav font-black text-3xl'>II. Propriétés de la symétrie axiale :</h1>
         : <h1 dir="rtl" className='underline decoration-solid text-nav font-black text-3xl'>II. خصائص التناظر المحوري :</h1>
         }
        {fr? <div className='ml-6 mt-2'>
                    <p className='  text-xl font-normal' >Deux figures symétriques ont la même <span className="text-ltr-cr">forme</span> et les mêmes <span className="text-ltr-cr">dimensions</span>. Elles ont donc <span className="text-ltr-cr">le même périmètre</span> et <span className="text-ltr-cr">la même aire</span> <br /> (pour les surfaces).</p>
                    <p className='mt-3 mb-3 text-xl font-normal'>En particulier, dans le cadre d'une symétrie axiale :</p>
                    <ul className='ml-10 list-disc  text-xl font-normal'>
                        <li className=''>Le symétrique d'un segment est <span className='text-ltr-cr'>un segment de même longueur</span> .</li>
                        <li className=''>Le symétrique d'une demi-droite est <span className='text-ltr-cr'>une demi-droite</span> .</li>
                        <li className=''> Le symétrique d'une droite est <span className='text-ltr-cr'>une droite</span> .</li>
                        <li className=''>Le symétrique d'un angle est <span className='text-ltr-cr'>un angle de même mesure</span> .</li>
                        <li className=''> Le symétrique d'un cercle est <span className='text-ltr-cr'>un cercle de même rayon</span> .</li>           
                        <li className=''>Les symétriques de trois points alignés sont <span className='text-ltr-cr'>trois points alignés</span> .</li>
                    </ul>
                </div>
                : 
                <div dir="rtl" className='mr-6 mt-6'>
                <p className='  text-xl font-normal' >شكلان متناظران لهما نفس الشكل ونفس الأبعاد. لذلك فإن لهم نفس المحيط ونفس المساحة (للأسطح).</p>
                <p className='mt-3 mb-3 text-xl font-normal'>على وجه الخصوص ، في سياق التناظر المحوري:</p>
                <ul className='ml-10 list-disc  text-xl font-normal'>
                    <li className=''>نظير قطعة مستقيمة هي قطعة مستقيمة من نفس الطول.</li>
                    <li className=''>نظير نصف مستقيم هو نصف مستقيم</li>
                    <li className=''> نظير مستقيم هو مستقيم.</li>
                    <li className=''>نظير زاوية هي زاوية من نفس القياس.</li>
                    <li className=''>نظير دائرة هي دائرة لها نفس القطر.</li>           
                    <li className=''>نظير ثلاث نقاط في استقامة واحدة هي ثلاث نقاط في استقامة واحدة.</li>
                </ul>
            </div>
                }

                {fr?<div className='mt-20'>
            <p className='underline decoration-solid text-2xl text-red-600 font-semibold'>Remarque : </p>
            <p className='ml-6 text-xl font-normal'> On dit que la symétrie axiale <span className='text-ltr-cr'>conserve les longueurs (donc aussi les périmètres)</span> , <span className='text-ltr-cr'>les angles</span> , <span className='text-ltr-cr'> les aires </span> et <span className='text-ltr-cr'> l'alignement</span> .</p>
        </div> :<div dir="rtl" className='mt-20'>
            <p className='underline decoration-solid text-2xl text-red-600 font-semibold'>ملاحظة : </p>
            <p className='mr-6 text-xl font-normal'>نقول ان التناظر المحوري يحفظ المسافات (إذا المحيط), الزوايا, المساحات والمحاذاة والاستقامة .</p>
        </div> }
    </div>
  )
}

export default CourA2
