import React from "react";
import img1 from "assets/cour/P-axiale/p1.png";

import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react";
import i18n from "utils/translation/i18n";

const CourA1 = () => {
const { i18n } = useTranslation();
  const [fr, setFR] = useState(true);

  useEffect(() => {
    if (i18n.language === "ar") {
      setFR(false);
    }
  }, [i18n.language]);
  return (
    <div>
     {fr?<h1 className="underline decoration-solid text-nav font-black text-3xl">
        I. Figures symétriques par rapport à une droite :
      </h1> : <h1 dir="rtl" className="underline decoration-solid text-nav font-black text-3xl">
      I. اشكال متناظرة بالنسبة إلى مستقيم
      </h1> }
      <div className={fr?"ml-6 mt-2": "mr-6 mt-2" }>
       {fr? <p className="  text-xl font-normal">
          {" "}
          <span className="underline decoration-solid text-2xl font-bold">
            Définition :
          </span>{" "}
          Deux figures sont dites symétriques par rapport à une
          droite <span className="text-ltr-cr">(d)</span> si elles se
          superposent par pliage le long de la droite{" "}
          <span className="text-ltr-cr">(d)</span> .
        </p> :
          <p dir="rtl" className="  text-xl font-normal">
         <span className="underline decoration-solid text-2xl font-bold" > تعريف : </span> 
        نقول عن شكلان أنهما متناظران بالنسبة إلى مستقيم  <span className="text-ltr-cr">(d)</span> إذا تطابقا عند استخدام الطي حول المستقيم  <span className="text-ltr-cr">(d)</span>
         </p>}
        {fr?<ul className="ml-10 list-disc  text-xl font-normal">
          <li className="">
            Les deux figures sont{" "}
            <span className="text-ltr-cr">symétriques</span> par rapport a la
            droite <span className="text-ltr-cr">(d)</span> .
          </li>
          <li className="">
            Les figures se superposent par pliage le long de la droite{" "}
            <span className="text-ltr-cr">(d)</span> .
          </li>
        </ul >:
        <ul dir="rtl"  className="mr-10 list-disc  text-xl font-normal">
          <li>الشكلان  <span className="text-ltr-cr"> متناظران </span>بالنسبة إلى المستقيم<span className="text-ltr-cr"> (d) </span>.</li>
          <li>الشكلان متطابقان عند الطي حول المستقيم<span className="text-ltr-cr"> (d) </span>.</li>
          </ul>}

      </div>
      <div className="mt-6 flex justify-center">
        <img className="h-60 w-80" src={img1} alt="" />
      </div>

      <div className={fr?"ml-6 mt-4" : "mr-6 mt-4"}>
        {fr?<p className="underline decoration-solid text-2xl font-bold">
          Vocabulaire :{" "}
        </p> : <p dir="rtl" className="underline decoration-solid text-2xl font-bold">
        مفاهيم : {" "}
        </p>}
        {fr?<ul className="ml-10 list-disc text-xl font-normal">
          <li>
            La symétrie par rapport à une droite est appelée{" "}
            <span className="text-ltr-cr">
              symétrie orthogonale par rapport à cette droite
            </span>{" "}
            ou <span className="text-ltr-cr">symétrie axiale</span>.
          </li>
          <li>
            La droite <span className="text-ltr-cr">(d)</span> est appelée{" "}
            <span className="text-ltr-cr">axe de la symétrie</span> .
          </li>
        </ul> :
        <ul dir="rtl" className="mr-10 list-disc text-xl font-normal">
        <li>
        نقول عن التناظر بالنسبة إلى مستقيم   <span className="text-ltr-cr"> التناظر المتعامد بالنسبة إلى ذلك المستقيم </span> أو <span className="text-ltr-cr"> التناظر المحوري </span> 
        .</li>
        <li>
        المستقيم<span className="text-ltr-cr"> (d) </span> هو محور التناظر
        .</li>
      </ul>  }
      </div>
    </div>
  );
};

export default CourA1;
