import React from "react";
import img8 from "assets/cour/p8-img.png";
import { useTranslation } from "react-i18next";
import i18n from "utils/translation/i18n";
import { useState,useEffect } from "react";

const Courp8 = () => {
  const { i18n } = useTranslation();
  const [fr, setFR] = useState(true);

  useEffect(() => {
    if (i18n.language === "ar") {
      setFR(false);
    }
  }, [i18n.language]);
 
  return (
     <div>
      <div>
       {fr ? <h2 className="mt-2 ml-3 underline decoration-solid text-nav font-extrabold text-2xl">
          4. Symétrique d'un cercle :
        </h2>: <h2 dir="rtl" className="mt-2 ml-3 underline decoration-solid text-nav font-extrabold text-2xl">
        4. نظير دائرة :  </h2>
        }
        <div className="ml-6 mt-2">
          {fr ?<p className="font-normal text-xl ">
            Le symétrique d'un cercle par rapport à un point est un cercle de
            même rayon.
          </p> : <p dir="rtl" className="font-normal text-xl ">
          نظير دائرة بالنسبة الى نقطة هي دائرة لها نفس القطر.
          </p>}
          {fr ?<ul className="list-disc ml-10 mt-2 font-normal text-xl">
            <li>
              le centre <span className="text-ltr-cr">A’</span> est le
              symétrique du centre <span className="text-ltr-cr">A</span> par{" "}
              <span className="text-ltr-cr">O</span>.
            </li>
            <li>
              les rayons des deux cercles sont égales{" "}
              <span className="text-ltr-cr">AB = A’B’</span> .
            </li>
          </ul>
           :<ul dir="rtl" className="list-disc mr-10 mt-2 font-normal text-xl">
            <li>
            المركز <span className="text-ltr-cr">'A</span> هو نظير المركز <span className="text-ltr-cr">A</span> بالنسبة الى <span className="text-ltr-cr">O</span> .
            </li>

            <li>
            قطرا الدائرتان متساويان .
            </li>
          </ul>}
        </div>
        <div className="mt-14 flex justify-center  ">
          <img className="h-60 w-98 " src={img8} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Courp8;
