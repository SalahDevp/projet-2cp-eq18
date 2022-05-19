import React from "react";
import img1 from "assets/cour/P-axiale/p7.png";

import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react";
import i18n from "utils/translation/i18n";

const CourA7 = () => {
  const { i18n } = useTranslation();
  const [fr, setFR] = useState(true);

  useEffect(() => {
    if (i18n.language === "ar") {
      setFR(false);
    }
  }, [i18n.language]);
  return (
    <>
      {fr?<h1 className="underline decoration-solid text-nav font-black text-3xl">
        2. Symétrique d'un segment :
      </h1>:
      <h1 dir="rtl"className="underline decoration-solid text-nav font-black text-3xl">
 2) نظير قطعة مستقيمة :
    </h1> }

     {fr? <div className="ml-6 mt-2">
        <p className="  text-xl font-normal">
          Le symétrique d’un segment par rapport à une droite{" "}
          <span className="text-ltr-cr">(d)</span> est{" "}
          <span className="text-ltr-cr">un segment de même longueur</span>.
        </p>
        <ul className="ml-10 list-disc  text-xl font-normal">
          <li>
            <span className="text-ltr-cr">A’</span> est le symétrique de{" "}
            <span className="text-ltr-cr">A</span> par rapport à{" "}
            <span className="text-ltr-cr">(d)</span>.
          </li>
          <li>
            <span className="text-ltr-cr">B’</span> est le symétrique de{" "}
            <span className="text-ltr-cr">B</span> par rapport à{" "}
            <span className="text-ltr-cr"> (d)</span>.{" "}
          </li>
          <li>
            Le segment <span className="text-ltr-cr">[A’B’] </span>est le
            symétrique du segment <span className="text-ltr-cr">[AB]</span> par
            rapport à <span className="text-ltr-cr"> (d)</span>.
          </li>
          <li>
            On a <span className="text-ltr-cr">A'B' = AB</span>
          </li>
        </ul>
      </div> :
       <div dir="rtl" className="mr-6 mt-2">
       <p className="  text-xl font-normal">
       نظير قطعة مستقيمة بالنسبة الى المستقيم <span className="text-ltr-cr">(d)</span> هي <span className="text-ltr-cr">قطعة مستقيمة لها نفس الطول</span>.
       </p>
       <ul className="mr-10 list-disc  text-xl font-normal">
         <li>
         النقطة <span className="text-ltr-cr">'A </span>هي نظيرة النقطة  <span className="text-ltr-cr">A</span> بالنسبة الى المستقيم <span className="text-ltr-cr">(d)</span>.

         </li>
         <li>
         النقطة <span className="text-ltr-cr">'B</span> هي نظيرة النقطة <span className="text-ltr-cr">B</span>  بالنسبة الى المستقيم <span className="text-ltr-cr">(d)</span>.

         </li>
         <li>
         القطعة المستقيمة <span className="text-ltr-cr">['A'B]</span>هي نظير القطعة المستقيمة <span className="text-ltr-cr">[AB]</span> بالنسبة الى المستقيم <span className="text-ltr-cr">(d)</span>.

         </li>
         <li>
        <span className="text-ltr-cr">A'B' = AB </span> .

         </li>
       </ul>
     </div>}
      <div className="mt-3 flex justify-center">
        <img className="h-64 w-96" src={img1} alt="" />
      </div>
     
     {fr? <ul className="list-disc ml-10 mt-8 font-normal text-xl ">
        <li>
          On dit que la symétrie axiale{" "}
          <span className="text-ltr-cr">conserve les longueurs</span>.
        </li>
      </ul> : 
     
     <ul dir="rtl" className="list-disc mr-10 mt-8 font-normal text-xl ">
        <li>
        نقول ان التناظر المحوري  <span className="text-ltr-cr">يحفظ المسافات</span> .
        </li>
      </ul> }
    </>
  );
};

export default CourA7;
