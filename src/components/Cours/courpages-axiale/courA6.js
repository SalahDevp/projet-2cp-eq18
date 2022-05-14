import React from "react";
import img2 from "assets/cour/P-axiale/p6.png";

import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react";
import i18n from "utils/translation/i18n";

const CourA6 = () => {
  const { i18n } = useTranslation();
  const [fr, setFR] = useState(true);

  useEffect(() => {
    if (i18n.language === "ar") {
      setFR(false);
    }
  }, [i18n.language]);
  return (
    <>
     {fr? <div className="mt-3">
        <p className="underline decoration-solid text-2xl text-red-600 font-semibold">
          Remarque :{" "}
        </p>
        <p className="ml-6 text-xl font-normal">
          Si le point <span className="text-ltr-cr">A</span> appartient à la
          droite <span className="text-ltr-cr">(d)</span>, alors{" "}
          <span className="text-ltr-cr">A</span> et{" "}
          <span className="text-ltr-cr">A’</span> sont confondus.
        </p>
        <div className="mt-3 flex justify-center">
          <img className="w-80 h-56" src={img2} alt="" />
        </div>
        <p className="ml-6 mt-8 text-xl font-normal">
          Dans ce cas, <span className="text-ltr-cr">A</span> est son propre
          symétrique par rapport à <span className="text-ltr-cr">(d)</span>.
        </p>
        <div className="mt-6">
          <p className="underline decoration-solid text-2xl text-red-600 font-semibold">
            Remarque :{" "}
          </p>
          <p className="ml-6 text-xl font-normal">
            Ces deux procédés sont très importants : ils sont à la base de tout
            ce qui va suivre. Si ils ne sont pas acquis, il est nécessaire de
            les approfondir en faisant plusieurs exercices.
          </p>
        </div>
      </div>
      : <div dir="rtl" className="mt-3">
      <p className="underline decoration-solid text-2xl text-red-600 font-semibold">
      ملاحظة :
      </p>
      <p className="mr-6 text-xl font-normal">
       اذا  النقطة A  تنتمي الى المستقيم (d)  فان A  و 'A  متطابقان .

      </p>
      <div className="mt-8 flex justify-center">
        <img className="w-80 h-64" src={img2} alt="" />
      </div>
      <p className="mr-6 mt-8 text-xl font-normal">
      في هذه الحالة A  هو نظير نفسه بالنسبة الى المستقيم (d)
      </p>
      <div className="mt-6">
        <p className="underline decoration-solid text-2xl text-red-600 font-semibold">
        ملاحظة :
        </p>
        <p className="mr-6 text-xl font-normal">
      الطريقتان السابقتان  جد مهمة: فهي اساس كل ما هو اتي .<br/>
       اذا لم تستوعب من الضروري  التركيز عليها  من خلال القيام بعدة تمارين.
        </p>
      </div>
    </div>}
   </>
  );
};

export default CourA6;
