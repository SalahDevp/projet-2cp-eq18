import React from "react";
import video2 from "assets/cour/Video/2_segment.mp4";

import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react";
import i18n from "utils/translation/i18n";
const Courp5 = () => {

const { i18n } = useTranslation();
const [fr, setFR] = useState(true);

useEffect(() => {
  if (i18n.language === "ar") {
    setFR(false);
  }
}, [i18n.language]);
  return (
    <div>
     {fr? <h1 className="underline decoration-solid text-2xl font-bold">
        Procédé de construction :{" "}
      </h1>
      :
      <h1 dir="rtl" className="underline decoration-solid text-2xl font-bold">
      طريقة الانشاء {" "}
    </h1>}
     {fr?  <div className="ml-6 mt-2">
        <p className="text-xl font-normal">
          Pour tracer le symétrique d'un segment{" "}
          <span className="text-ltr-cr">[AB]</span> par rapport au point{" "}
          <span className="text-ltr-cr">O</span> :
        </p>
        <ul className="ml-10 text-xl font-normal list-disc">
          <li>
            on trace les symétriques des points{" "}
            <span className="text-ltr-cr">A</span> et{" "}
            <span className="text-ltr-cr">B</span> par rapport à{" "}
            <span className="text-ltr-cr">O</span> et nommant les{" "}
            <span className="text-ltr-cr">A'</span> et{" "}
            <span className="text-ltr-cr">B'</span> .
          </li>
          <li>
            on trace ensuite le segment{" "}
            <span className="text-ltr-cr">[A'B']</span> .{" "}
          </li>
          <li>
            on n'oublie pas de coder la figure et on laisse les traits de
            construction.
          </li>
        </ul>
      </div>:
      <div dir="rtl" className="mr-6 mt-2">
      <p className="text-xl font-normal">
      لانشاء نظير القطعة المستقيمة <span className="text-ltr-cr">[AB]</span>بالنسبة الى النقطة <span className="text-ltr-cr">O</span> :
      </p>
      <ul className="ml-10 text-xl font-normal list-disc">
        <li>
        نحدد نظائر النقط  <span className="text-ltr-cr">A</span> و  <span className="text-ltr-cr">B</span> بالنسبة الى النقطة <span className="text-ltr-cr">O</span>  و نسميها  <span className="text-ltr-cr">'A</span> و  <span className="text-ltr-cr">'B</span>.
        </li>
        <li>
        نرسم القطعة المستقيمة  <span className="text-ltr-cr">[A'B']</span>.</li>
        <li>
        لا ننسى ترك خطوط الانشاء.
        </li>
      </ul>
    </div>}
      <div className="mt-44 flex justify-center">
        <video
          width="500"
          height="200"
          controls="controls"
          autoplay="true"
          src={video2}
        ></video>
      </div>
    </div>
  );
};

export default Courp5;
