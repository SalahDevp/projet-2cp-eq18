import React from "react";
import video4 from "assets/cour/Video/4_cercle.mp4";

import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react";
import i18n from "utils/translation/i18n";
const Courp9 = () => {
  
  const { i18n } = useTranslation();
  const [fr, setFR] = useState(true);

  useEffect(() => {
    if (i18n.language === "ar") {
      setFR(false);
    }
  }, [i18n.language]);
  return (
    <div>
     {fr ? <h1 className="underline decoration-solid text-2xl font-bold">
        Procédé de construction :{" "}
      </h1> : 
     <h1 dir="rtl" className="underline decoration-solid text-2xl font-bold">
       طريقه الانشاء : </h1> }
      <div className={fr ? "ml-6 mt-2" : "mr-6 mt-2"  }>
       {fr? <p className="text-xl font-normal">
          Pour tracer le symétrique d'un cercle de centre{" "}
          <span className="text-ltr-cr">A</span> par rapport au point{" "}
          <span className="text-ltr-cr">O</span> :
        </p> :
        <p dir="rtl" className="text-xl font-normal">
             لانشاء نظير دائرة ذات مركز   <span className="text-ltr-cr"> A </span> بالنسبة الى   <span className="text-ltr-cr"> O </span> :
      </p>
         }
        {fr ?<ul className="ml-10 text-xl font-normal list-disc">
          <li>
            on trace le symétrique du point{" "}
            <span className="text-ltr-cr">A</span> par rapport à{" "}
            <span className="text-ltr-cr">O</span>.
          </li>
          <li>
            on trace le nouveau cercle de centre{" "}
            <span className="text-ltr-cr">A'</span> avec un rayons{" "}
            <span className="text-ltr-cr">AB=A’B’</span>.{" "}
          </li>
          <li>
            on n'oublie pas de coder la figure (nommer les points) et on laisse
            les traits de construction.
          </li>
        </ul> :
        <ul dir="rtl" className="mr-10 text-xl font-normal list-disc">
       <li> نعين نظير النقطة   <span className="text-ltr-cr">A</span> بالنسبة الى النقطة   <span className="text-ltr-cr">O</span></li>
       <li>نرسم  الدائرة  الجديدة ذات المركز <span className="text-ltr-cr">'A</span> ونصف القطر   <span className="text-ltr-cr">'AB =A'B</span></li>
       <li>لا ننسى تسمية النقاط و ترك خطوط الانشاء</li>
      </ul> 
        }
      </div>
      <div className="mt-32 flex justify-center">
        <video
          width="550"
          height="300"
          controls="controls"
          autoplay="true"
          src={video4}
        ></video>
      </div>
    </div>
  );
};

export default Courp9;
