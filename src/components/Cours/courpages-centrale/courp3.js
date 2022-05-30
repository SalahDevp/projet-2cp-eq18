import React from "react";
import video1 from "assets/cour/Video/1_point.mp4";
import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react";
import i18n from "utils/translation/i18n";

const Courp3 = () => {
  const { i18n } = useTranslation();
  const [fr, setFR] = useState(true);

  useEffect(() => {
    if (i18n.language === "ar") {
      setFR(false);
    }
  }, [i18n.language]);
  return (
    <div>
      {fr?<h1 className="underline decoration-solid text-2xl font-bold">
        Procédé de construction :{" "}
      </h1>:<h1 dir="rtl" className="underline decoration-solid text-2xl font-bold">
      طريقه الانشاء {" "}
      </h1>}
      {fr?<div className="ml-6 mt-2">
        <p className="text-xl font-normal">
          Pour tracer le symétrique du point{" "}
          <span className="text-ltr-cr">M</span> par rapport au point{" "}
          <span className="text-ltr-cr">O</span> :
        </p>
        <ul className="ml-10 text-xl font-normal list-disc">
          <li>
            on commence par tracer la demi-droite{" "}
            <span className="text-ltr-cr">[MO)</span> .
          </li>
          <li>
            on reporte ensuite la longueur{" "}
            <span className="text-ltr-cr">MO</span> avec le compas et on place
            ainsi le point <span className="text-ltr-cr">M'</span> sur la
            demi-droite.{" "}
          </li>
          <li>
            on n'oublie pas de coder la figure (nommer les points) et on laisse
            les traits de construction.
          </li>
        </ul>
      </div> :
      <div dir="rtl" className="mr-6 mt-2">
      <p className="text-xl font-normal">
      لانشاء  نظير النقط{" "}
        <span className="text-ltr-cr">M</span>  بالنسبة الى النقطة : {" "}
        <span className="text-ltr-cr">O</span> :
      </p>
      <ul className="ml-10 text-xl font-normal list-disc">
        <li>
         نبدا برسم النصف مستقيم {" "}
          <span className="text-ltr-cr">[MO)</span> .
        </li>
        <li>
        باستخدام المدور نضع النقطة <span className="text-ltr-cr">M'</span> على النصف المستقيم مع المحافظة على المسافة <span className="text-ltr-cr"> MO</span>
        </li>
        <li>
       لا ننسى تسمية النقاط المشكلة وترك مراحل انشاء
        </li>
      </ul>
    </div> }
      <div className="mt-16 flex justify-center">
        <video
          width="460"
          height="110"
          controls="controls"
          autoplay="true"
          src={video1}
        ></video>
      </div>
      <div className="mt-6">
        {fr? <p className="underline decoration-solid text-2xl text-red-600 font-semibold">
          Remarque :{" "}
        </p>:<p dir="rtl" className="underline decoration-solid text-2xl text-red-600 font-semibold">
        ملاحظة:{" "}
        </p>}
       { fr? <p className="ml-6 text-xl font-normal">
          Ce procédé est très important : il est à la base de tout ce qui va
          suivre. Si il n'est pas acquis, il est nécessaire de l'approfondir en
          faisant plusieurs exercices.
        </p>: <p dir="rtl" className="mr-6 text-xl font-normal">       
              هذه الطريقة جد مهمة:  هي اساس  كل ما هو اتي.
            اذا لم تستوعب من الضروري  التركيز عليها  من خلال القيام بعدة تمارين.
        </p>}
      </div>
    </div>
  );
};

export default Courp3;
