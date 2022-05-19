import React from "react";
import img1 from "assets/cour/P-axiale/p9.png";

import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react";
import i18n from "utils/translation/i18n";

const CourA9 = () => {

const { i18n } = useTranslation();
const [fr, setFR] = useState(true);

useEffect(() => {
  if (i18n.language === "ar") {
    setFR(false);
  }
}, [i18n.language]);
  return (
    <div>
     {fr? <h1 className="underline decoration-solid text-nav font-black text-3xl">
        3. Symétrique d'une droite:
      </h1> :<h1 dir="rtl" className="underline decoration-solid text-nav font-black text-3xl">3)  نظير مستقيم :</h1> 
      }

      {fr?<div className="ml-6 mt-4">
        <p className="  text-xl font-normal">
          Le symétrique d’une droite par rapport à une droite{" "}
          <span className="text-ltr-cr">(d)</span> est une{" "}
          <span className="text-ltr-cr">droite</span>.
        </p>
        <ul className="ml-10 mt-3 list-disc  text-xl font-normal">
          <li className="mt-1">
            {" "}
            <span className="text-ltr-cr">A’</span> est le symétrique de{" "}
            <span className="text-ltr-cr">A</span> par rapport à{" "}
            <span className="text-ltr-cr">(d)</span>.
          </li>
          <li className="mt-1">
            La droite <span className="text-ltr-cr">(A’B’)</span> est la droite
            symétrique de la droite <span className="text-ltr-cr">(AB)</span>{" "}
            par rapport à <span className="text-ltr-cr">(d)</span>.
          </li>
          <li className="mt-1">
            {" "}
            <span className="text-ltr-cr">B’</span> est le symétrique de{" "}
            <span className="text-ltr-cr">B</span> par rapport à{" "}
            <span className="text-ltr-cr">(d)</span>.
          </li>
        </ul>
      </div> :  
      <div dir="rtl"  className="mr-6 mt-4">
      <p className="text-xl font-normal">
      نظير  مستقيم بالنسبة الى مستقيم <span className="text-ltr-cr" >(d)</span> هو <span className="text-ltr-cr" >مستقيم</span> .
      </p>
      <ul className="mr-10 mt-3 list-disc  text-xl font-normal">
        <li className="mt-1">
        النقطة <span className="text-ltr-cr" > 'A </span> هي نظير النقطة <span className="text-ltr-cr" >A </span> بالنسبة الى المستقيم <span className="text-ltr-cr">(d)</span>.
        </li>
        <li className="mt-1">
        النقطة <span  className="text-ltr-cr"> 'B </span>هي نظير النقطة <span  className="text-ltr-cr">B</span> بالنسبة الى المستقيم <span  className="text-ltr-cr">(d)</span>.
        </li>
        <li className="mt-1">
        المستقيم <span  className="text-ltr-cr">('A'B)</span> هو نظير المستقيم<span  className="text-ltr-cr"> (AB)</span> بالنسبة الى المستقيم <span  className="text-ltr-cr">(d)</span>.
        </li>
      </ul>
    </div>
      }
      <div className="mt-10 flex justify-center">
        <img className="h-64 w-96" src={img1} alt="" />
      </div>
    </div>
  );
};

export default CourA9;
