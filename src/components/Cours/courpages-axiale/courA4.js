import React from "react";
import Video1 from "assets/cour/Video/1A.mp4";
import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react";
import i18n from "utils/translation/i18n";

const CourA4 = () => {
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
      </h1> : 
       <h1 dir="rtl" className="underline decoration-solid text-2xl font-bold">
         طريقة الانشاء :
     </h1>} 
      {fr ?<div className="ml-6 mt-2">
        <p className="text-xl font-normal">
          1) <span className="text-ltr-cr">Première méthode </span>: avec une
          équerre et un compas
        </p>
        <ul className="ml-10 text-xl font-normal list-disc">
          <li>
            Avec l’équerre, on trace{" "}
            <span className="text-ltr-cr">la perpendiculaire </span> à la droite{" "}
            <span className="text-ltr-cr">(d)</span> passant par{" "}
            <span className="text-ltr-cr">A</span> .
          </li>
          <li>Puis on prolonge le trait.</li>
          <li>
            Avec le compas on reporte la distance entre le point{" "}
            <span className="text-ltr-cr">A</span> et la droite{" "}
            <span className="text-ltr-cr">(d)</span> de l’autre côté de la
            droite.
          </li>
          <li>
            On obtient ainsi le symétrique{" "}
            <span className="text-ltr-cr">A1</span> du point{" "}
            <span className="text-ltr-cr">A</span> par rapport à la droite{" "}
            <span className="text-ltr-cr">(d)</span>.
          </li>
        </ul>
      </div> : 
      <div dir="rtl" className="mr-6 mt-2">
      <p className="text-xl font-normal">
      1)   <span className="text-ltr-cr">الطريقةالاولى</span> باستخدام الكوس والمدور  :
      </p>
      <ul  className="mr-10 text-xl font-normal list-disc">
        <li>
        باستخدام الكوس ، نرسم <span className="text-ltr-cr">المستقيم العمودي</span> على الخط <span className="text-ltr-cr"> (d) </span> الذي يمر عبر <span className="text-ltr-cr">A</span>.
        </li>
        <li>ثم نمدد الخط.</li>
        <li>
        مع وجود المدور في تقرير المسافة بين النقطة <span className="text-ltr-cr">A</span> والخط <span className="text-ltr-cr"> (d) </span> على الجانب الآخر من المستقيم.
        </li>
        <li>
        وبالتالي نحصل على النقطة <span className="text-ltr-cr">'A</span> نظيرة النقطة <span className="text-ltr-cr">A</span> بالنسبة إلى مستقيم<span className="text-ltr-cr"> (d) </span>.
        </li>
      </ul>
    </div>}

      <div className="  mt-20 flex justify-center">
        <video
          src={Video1}
          width="500"
          height="400"
          controls="controls"
          autoPlay="true"
        ></video>
      </div>
    </div>
  );
};

export default CourA4;
