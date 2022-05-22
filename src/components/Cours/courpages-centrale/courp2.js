import React from "react";
import img2 from "assets/cour/p1-img2.png";
import { useTranslation } from "react-i18next";

import { useState, useEffect } from "react";
import i18n from "utils/translation/i18n";

const Courp2 = () => {
  //trans
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
        II. Propriétés de la symétrie centrale :
      </h1>:<h1 dir="rtl" className="underline decoration-solid text-nav font-black text-3xl">
      II . خصائص التناظر المركزي :</h1>}
      {fr?<h2 className="mt-2 ml-3 underline decoration-solid text-nav font-extrabold text-2xl">
        1. Symétrique d'un point :
      </h2>:<h2 dir="rtl" className="mr-2 ml-3 underline decoration-solid text-nav font-extrabold text-2xl">
      1. نظير نقطة 
      </h2>}
      
      {fr?<div className="ml-6 mt-2">
        <p className=" text-xl font-normal">
          Le symétrique d'un point<span className="text-ltr-cr"> M </span>par
          rapport à un point <span className="text-ltr-cr"> O </span>est le
          point <span className="text-ltr-cr"> M’ </span> vérifiant les
          propriétés suivantes :
        </p>
        <ul className="ml-10 text-xl font-normal list-disc">
          <li>
            <span className="text-ltr-cr">O </span>,
            <span className="text-ltr-cr"> M </span>et
            <span className="text-ltr-cr"> M' </span> sont alignés .
          </li>
          <li>
            <span className="text-ltr-cr">O </span>est le milieu du segment{" "}
            <span className="text-ltr-cr"> [MM'] </span>et on a
            <span className="text-ltr-cr"> OM = OM’ </span> .
          </li>
        </ul>
      </div> :
            <div dir="rtl" className="mr-6 mt-2">
            <p  className=" text-xl font-normal">
            نظير النقطة<span className="text-ltr-cr"> M </span>بالنسبة الى النقطة <span className="text-ltr-cr"> O </span>
            هي النقطة<span className="text-ltr-cr"> 'M </span>  التي تحقق الخصائص التالية:
            </p>
            <ul className="ml-10 text-xl font-normal list-disc">
              <li>
                <span className="text-ltr-cr">O </span>,
                <span className="text-ltr-cr"> M </span>و
                <span className="text-ltr-cr"> M' </span> في استقامة واحدة.
              </li>
              <li>
                <span className="text-ltr-cr">O </span> هي مركز القطعة المستقيمة {" "}
                <span className="text-ltr-cr">  [M M'] </span>و لدينا
                <span className="text-ltr-cr"> OM = O'M </span> .
              </li>
            </ul>
          </div> }
      <div className="mt-3 flex justify-center">
        <img src={img2} alt="" />
      </div>
    </div>
  );
};

export default Courp2;
