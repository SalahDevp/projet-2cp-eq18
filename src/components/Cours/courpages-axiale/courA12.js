import React from "react";
import img1 from "assets/cour/P-axiale/p12.png";
import img2 from "assets/cour/P-axiale/p12ar.png";

import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react";
import i18n from "utils/translation/i18n";

const CourA12 = () => {
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
        4. Symétrique d'un cercle:
      </h1>:
      <h1 dir="rtl" className="underline decoration-solid text-nav font-black text-3xl">
                4. نظير دائرة :
    </h1>
      }

      {fr? <div className="ml-6 mt-4">
        <p className="  text-xl font-normal">
          Le symétrique d’un cercle par rapport à une droite{" "}
          <span className="text-ltr-cr">(d)</span> est{" "}
          <span className="text-ltr-cr">un cercle de même rayon </span> et dont
          le centre est <span className="text-ltr-cr">le symétrique</span> du
          centre du premier cercle.
        </p>
        <ul className="ml-10 mt-3 list-disc  text-xl font-normal">
          <li>
            <span className="text-ltr-cr">A’</span> est le symétrique de{" "}
            <span className="text-ltr-cr">A</span> par rapport à{" "}
            <span className="text-ltr-cr">(d)</span>.
          </li>
          <li>
            <span className="text-ltr-cr">C’</span> est le symétrique du cercle{" "}
            <span className="text-ltr-cr">C</span> par rapport à{" "}
            <span className="text-ltr-cr">(d)</span>.
          </li>
        </ul>
      </div>
        : 
        <div dir="rtl" className="mr-6 mt-4">
        <p className="  text-xl font-normal">
        نظير دائرة بالنسبة الى المستقيم <span className="text-ltr-cr">(d)</span> هي   <span className="text-ltr-cr"> دائرة لها نفس  القطر</span> ومركزها هو <span className="text-ltr-cr">نظير</span> مركز الدائرة الاولى.
        </p>
        <ul className="mr-10 mt-3 list-disc  text-xl font-normal">
          <li>
          النقطة  <span className="text-ltr-cr">'A  </span>هي نظير النقطة  <span className="text-ltr-cr">A</span> بالنسبة الى المستقيم <span className="text-ltr-cr">(d)</span> .
          </li>
          <li>
          الدائرة <span className="text-ltr-cr">'C</span> هي  نظير الدائرة <span  className="text-ltr-cr">C</span> بالنسبة الى المستقيم <span className="text-ltr-cr">(d)</span> .
          </li>
        </ul>
      </div>}
      <div className="mt-10 flex justify-center">
        <img className="h-64 w-328" src={fr?img1:img2} alt="" />
      </div>
    </div>
  );
};

export default CourA12;
