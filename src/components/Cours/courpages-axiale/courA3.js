import React from "react";
import img1 from "assets/cour/P-axiale/p3.png";

import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react";
import i18n from "utils/translation/i18n";

const CourA3 = () => {

const { i18n } = useTranslation();
const [fr, setFR] = useState(true);

useEffect(() => {
  if (i18n.language === "ar") {
    setFR(false);
  }
}, [i18n.language]);
  return (
    <div>
      {fr?<h2 className="mt-2 ml-3 underline decoration-solid text-nav font-extrabold text-3xl ">
        1. Symétrique d'un point :
      </h2> :
      <h2 dir="rtl" className="mt-2 mr-3 underline decoration-solid text-nav font-extrabold text-3xl ">
       1.  نظير نقطة :</h2> }
      {fr?<div className="ml-6 mt-4">
        <p className="font-normal text-xl ">
          Deux points <span className="text-ltr-cr">A</span> et{" "}
          <span className="text-ltr-cr">B</span> sont symétriques par rapport à
          une droite <span className="text-ltr-cr">(d)</span> s’ils{" "}
          <span className="text-ltr-cr">se superposent</span> par pliage le long
          de cette droite.{" "}
        </p>
      </div> :
      <div dir="rtl" className="ml-6 mt-4">
      <p className="font-normal text-xl ">
      النقطتان <span className="text-ltr-cr">A </span>و <span className="text-ltr-cr">B</span> متناظرتان بالنسبة للخط المستقيم <span className="text-ltr-cr">(d) </span>إذا <span className="text-ltr-cr">تطابقا</span> عند الطي حول المستقيم <span className="text-ltr-cr">(d)</span>.
      </p>
    </div> }

      <div className="mt-20 flex justify-center">
        <img className="h-60 w-98" src={img1} alt="" />
      </div>

      {fr?<ul className="list-disc ml-10 mt-14 font-normal text-xl ">
        <li>
          On dit que le point <span className="text-ltr-cr">B</span> est le
          symétrique du point <span className="text-ltr-cr">A</span> par rapport
          à une droite <span className="text-ltr-cr">(d)</span> si la droite{" "}
          <span className="text-ltr-cr">(d)</span> est{" "}
          <span className="text-ltr-cr">la médiatrice</span> du segment{" "}
          <span className="text-ltr-cr">[AB]</span>.
        </li>
      </ul> : 
      <ul dir="rtl" className="list-disc mr-10 mt-14 font-normal text-xl ">
        <li>
        نقول أن النقطة <span className="text-ltr-cr">B</span> هي نظيرة النقطة <span className="text-ltr-cr">A</span> بالنسبة إلى المستقيم <span className="text-ltr-cr">(d)</span> إذا كان المستقيم <span className="text-ltr-cr">(d)</span> هو <span className="text-ltr-cr">المنصف العمودي</span> لقطعة المستقيمة <span className="text-ltr-cr">[AB]</span>.
        </li>
      </ul> 
      }
    </div>
  );
};

export default CourA3;
