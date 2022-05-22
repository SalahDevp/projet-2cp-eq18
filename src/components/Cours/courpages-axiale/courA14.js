import React from "react";
import img1 from "assets/cour/P-axiale/p14.png";

import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react";
import i18n from "utils/translation/i18n";

const CourA14 = () => {
  const { i18n } = useTranslation();
  const [fr, setFR] = useState(true);

  useEffect(() => {
    if (i18n.language === "ar") {
      setFR(false);
    }
  }, [i18n.language]);
  return (
    <div>
     {fr? <h1 className="underline decoration-solid text-nav font-black text-3xl">
        5. Symétrique d'un angle:
      </h1>: 
       <h1 dir='rtl' className="underline decoration-solid text-nav font-black text-3xl">
          5.  نظير زاوية :
     </h1>
      }

     {fr? <div className="ml-6 mt-4">
        <p className="  text-xl font-normal">
          Le symétrique d’un angle par rapport à une droite{" "}
          <span className="text-ltr-cr">(d)</span> est{" "}
          <span className="text-ltr-cr"> un angle de même mesure</span>.
        </p>
        <ul className="ml-10 mt-2 list-disc  text-xl font-normal">
          <li>
            L’angle <span className="text-ltr-cr">BÂC</span> et l’angle{" "}
            <span className="text-ltr-cr">B’Â’C’</span> ont la même mesure.
          </li>
        </ul>
      </div>:
       <div  dir="rtl" className="mr-6 mt-4">
       <p className="  text-xl font-normal">
       نظير زاوية بالنسبة الى المستقيم <span className="text-ltr-cr">(d)</span> هي  زاوية <span className="text-ltr-cr">  لها نفس  القيس  </span>   .
       </p>
       <ul className="mr-10 mt-2 list-disc  text-xl font-normal">
         <li>
         الزاوية <span className="text-ltr-cr">BÂC</span> والزاوية <span className="text-ltr-cr">'B'Â'C</span> لهما نفس القيس .
         </li>
       </ul>
     </div>
      }
      <div className="mt-3 flex justify-center">
        <img className="h-72 w-96" src={img1} alt="" />
      </div>
      <ul dir={fr? "ltr": "rtl" } className={fr? "list-disc ml-10 mt-8 font-normal text-xl"
         : "list-disc  mr-7 mt-8 font-normal text-xl"}>
        {fr?<li>
          On dit que la symétrie axiale{" "}
          <span className="text-ltr-cr">conserve les angles</span>.
        </li>: 
        <p >
           نقول ان التناظر المحوري  <span className="text-ltr-cr">يحفظ الزوايا</span> .
          </p>}
      </ul>
    </div>
  );
};

export default CourA14;
