import React from "react";
import img1 from "assets/cour/p2-img1.png";
import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react";
import i18n from "utils/translation/i18n";
const CourpR = () => {
  const { i18n } = useTranslation();
  const [fr, setFR] = useState(true);

  useEffect(() => {
    if (i18n.language === "ar") {
      setFR(false);
    }
  }, [i18n.language]);
  return (
    <div className="">
      <div>
        {fr? <h2 className="mt-2 ml-3 underline decoration-solid text-nav font-extrabold text-2xl ">
          2. Symétrique d'un segment :
        </h2>:<h2 dir="rtl" className="mt-2 ml-3 underline decoration-solid text-nav font-extrabold text-2xl ">
        2. نظير قطعة مستقيمة </h2> }
        <div className="ml-6 mt-2">
         {fr?<p className="font-normal text-xl ">
            Le symétrique d'un segment par rapport à un point est un segment
            parallèle et de même longueur.{" "}
          </p>:<p  dir="rtl" className="font-normal text-xl ">
          نظير قطعة مستقيمة بالنسبة الى نقطة هي قطعة مستقيمة موازية لها و لها نفس الطول.{" "}
          </p>}
         {fr ? <ul className="list-disc ml-10 mt-2 font-normal text-xl ">
            <li>
              {" "}
              <span className="text-ltr-cr">A'</span> est le symétrique de{" "}
              <span className="text-ltr-cr">A</span> par{" "}
              <span className="text-ltr-cr">O</span>{" "}
            </li>
            <li>
              {" "}
              <span className="text-ltr-cr">B'</span> est le symétrique de{" "}
              <span className="text-ltr-cr">B</span> par{" "}
              <span className="text-ltr-cr">O</span>.
            </li>
            <li>
              {" "}
              <span className="text-ltr-cr">AB = A’B’</span>{" "}
            </li>
          </ul> :
           <ul dir="rtl" className="list-disc mr-10 mt-2 font-normal text-xl ">
           <li>
             {" "}
             النقطة <span className="text-ltr-cr">'A</span> نظير النقطة <span className="text-ltr-cr">A</span>  بالنسبة الى النقطة <span className="text-ltr-cr">O</span>
           </li>
           <li>
             {" "}
             النقطة <span className="text-ltr-cr">'B</span> نظير النقطة <span className="text-ltr-cr">B</span>  بالنسبة الى النقطة <span className="text-ltr-cr">O</span>
           </li>
           <li dir="rtl">
             {" "}
             <span className="text-ltr-cr">’AB = A’B</span>{" "}
           </li>
         </ul>}
        </div>

        <div className="mt-12 flex justify-center">
          <img className="h-72 w-98" src={img1} alt="" />
        </div>
      </div>
    </div>
  );
};

export default CourpR;
