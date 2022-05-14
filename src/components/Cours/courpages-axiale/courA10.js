import React from "react";
import img1 from "assets/cour/P-axiale/p10-A.png";
import img2 from "assets/cour/P-axiale/p10-B.png";

import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react";
import i18n from "utils/translation/i18n";

const CourA10 = () => {
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
        Cas de symétrie d’une droite:{" "}
      </h1> :
      <h1 dir="rtl" className="underline decoration-solid text-2xl font-bold">
   حالات خاصة : </h1>  }
     {fr? <div className="ml-6 mt-2">
        <p className="text-xl font-medium">
          1) Dans le cas où la droite <span className="text-ltr-cr">(AB)</span>{" "}
          et la droite <span className="text-ltr-cr">(d)</span> sont parallèles
        </p>
        <div className="mt-2 flex justify-center">
          <img className="h-48 w-96" src={img1} alt="" />
        </div>
        <ul className="ml-10 text-xl font-normal list-disc">
          <li>
            La droite <span className="text-ltr-cr">(AB)</span> et la droite{" "}
            <span className="text-ltr-cr">(A’B’)</span> sont aussi parallèles.
          </li>
        </ul>
      </div> :
       <div dir="rtl" className="mr-4 mt-2">
       <p className="text-xl font-medium">
    1)   في حالة مستقيمان(AB)  و (d)  متوازيان :
       </p>
       <div className="mt-2 flex justify-center">
         <img className="h-48 w-96" src={img1} alt="" />
       </div>
       <ul className="mr-12 text-xl font-normal list-disc">
         <li>
         المستقيم  (AB) و المستقيم(A'B') متوازيان ايضا.
         </li>
       </ul>
     </div>  
      }

     {fr?  <div className="ml-6 mt-2">
        <p className="text-xl font-medium">
          2) Dans le cas où la droite <span className="text-ltr-cr">(AB) </span>
          et la droite <span className="text-ltr-cr">(d)</span> sont parallèles
        </p>
        <div className="mt-2 flex justify-center">
          <img className="h-56 w-96" src={img2} alt="" />
        </div>
        <ul className="ml-10 text-xl font-normal list-disc">
          <li>
            La droite <span className="text-ltr-cr">(AB)</span> et la droite{" "}
            <span className="text-ltr-cr">(A’B’)</span> sont aussi parallèles.
          </li>
        </ul>
      </div> 
      : 
      <div dir="rtl" className="mr-4 mt-4">
        <p className="text-xl font-medium">
      2)  في حالة المستقيمان (AB)  و (d) متعامدان.
        </p>
        <div className="mt-2 flex justify-center">
          <img className="h-48 w-96" src={img2} alt="" />
        </div>
        <ul className="mr-12 text-xl font-normal list-disc">
          <li>
          المستقيم  (AB) و المستقيم('A'B) متطابقان.
          </li>
        </ul>
      </div>
       }
    </div>
  );
};

export default CourA10;
