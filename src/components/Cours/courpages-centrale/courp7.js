import React from "react";
import video3 from "assets/cour/Video/3_droite.mp4";
import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react";
import i18n from "utils/translation/i18n";
const Courp7 = () => {
  //
  const { i18n } = useTranslation();
  const [fr, setFR] = useState(true);

  useEffect(() => {
    if (i18n.language === "ar") {
      setFR(false);
    }
  }, [i18n.language]);
//
  return (
    <div>
      {fr?<h1 className="underline decoration-solid text-2xl font-bold">
        Procédé de construction :{" "}
      </h1>:<h1 dir="rtl" className="underline decoration-solid text-2xl font-bold">
      طريقة الانشاء :
        </h1> }
      <div className={fr? "ml-6 mt-2": "mr-6 mt-2" }>
       {fr ? <p className="text-xl font-normal">
          Pour tracer le symétrique d'une droite{" "}
          <span className="text-ltr-cr">(AB)</span> par rapport au point{" "}
          <span className="text-ltr-cr">O</span> :
        </p> : <p dir="rtl" className="text-xl font-normal">
        لانشاء نظير المستقيم  <span className="text-ltr-cr">(AB)</span> بالنسبة الى النقطة<span className="text-ltr-cr"> O </span>  :
        </p> }
        {fr?<ul className="ml-10 text-xl font-normal list-disc">
          <li>
            on trace les symétriques des points{" "}
            <span className="text-ltr-cr">A</span> et{" "}
            <span className="text-ltr-cr">B</span> par rapport à{" "}
            <span className="text-ltr-cr">O</span> et nommant les{" "}
            <span className="text-ltr-cr">A'</span> et{" "}
            <span className="text-ltr-cr">B'</span> (s'ils n'apparaissent pas
            sur la droite, on peut en placer deux comme l'on veut).
          </li>
          <li>
            on trace ensuite la droite{" "}
            <span className="text-ltr-cr">(A'B')</span>.{" "}
          </li>
          <li>
            on n'oublie pas de coder la figure (nommer les points) et on laisse
            les traits de construction.
          </li>
        </ul> :  
          <ul dir="rtl" className="ml-10 text-xl font-normal list-disc">
          <li>
          نرسم نظائر النقط <span className="text-ltr-cr">A</span> و <span className="text-ltr-cr">B</span> بالنسبة الى النقطة <span className="text-ltr-cr">O</span> ونسميهم <span className="text-ltr-cr">'A</span> و <span className="text-ltr-cr">'B</span> (  اذا لم تظهر النقاط على المستقيم بامكاننا تعيينهم) .
          </li>
          <li>
          نرسم بعدها المستقيم <span className="text-ltr-cr">('A'B)</span>.
          </li>
          <li>
          لا ننسى تسمية النقاط و ترك خطوط الانشاء.
          </li>
        </ul> }
      </div>
      <div className="mt-10 flex justify-center">
        <video
          width="500"
          height="100"
          controls="controls"
          autoplay="false"
          src={video3}
        ></video>
      </div>
    </div>
  );
};

export default Courp7;
