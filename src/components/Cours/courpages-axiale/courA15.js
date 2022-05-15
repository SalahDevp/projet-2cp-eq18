import React from "react";
import img1 from "assets/cour/P-axiale/p15.png";

import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react";
import i18n from "utils/translation/i18n";

const CourA15 = () => {
  const { i18n } = useTranslation();
  const [fr, setFR] = useState(true);

  useEffect(() => {
    if (i18n.language === "ar") {
      setFR(false);
    }
  }, [i18n.language]);
  return (
    <>
     {fr? <h1 className="underline decoration-solid text-nav font-black text-3xl">
        6. Symétrique des points alignés:
      </h1> :
      <h1 dir="rtl" className="underline decoration-solid text-nav font-black text-3xl">
           6. نظائر نقاط في استقامة واحدة :
    </h1>
       }

     {fr? <div className="ml-6 mt-2">
        <p className="  text-xl font-normal">
          Les symétriques de trois points alignés par rapport à une droite{" "}
          <span className="text-ltr-cr">(d)</span> sont{" "}
          <span className="text-ltr-cr">trois points alignés</span>.
        </p>
        <ul className="ml-10 list-disc  text-xl font-normal">
          <li>
            Les points <span className="text-ltr-cr">A</span>,
            <span className="text-ltr-cr">B</span> et{" "}
            <span className="text-ltr-cr">C</span> sont alignés.
          </li>
          <li>
            Les points <span className="text-ltr-cr">A’</span>,{" "}
            <span className="text-ltr-cr">B’</span> et{" "}
            <span className="text-ltr-cr">C’</span> sont aussi alignés.
          </li>
        </ul>
      </div> :
      <div dir="rtl" className="mr-6 mt-2">
      <p className="text-xl font-normal">
      نظائر ثلاثة نقاط في استقامة واحدة بالنسبة الى المستقيم (d) هي ثلاثة نقاط في استقامة واحدة .      </p>
      <ul className="mr-10 list-disc  text-xl font-normal">
        <li>
        النقاط  A , B و C  في استقامة واحدة .
        </li>
        <li>
      النقاط 'A' , B  و 'C ايضا في استقامة واحدة .
        </li>
      </ul>
    </div> 
       }
      <div className="mt-3 flex justify-center">
        <img className="h-72 w-96" src={img1} alt="" />
      </div>
      {fr?<ul className="list-disc ml-10 mt-8 font-normal text-xl ">
        <li>
          On dit que la symétrie axiale{" "}
          <span className="text-ltr-cr">conserve l’alignement</span>.
        </li>
      </ul>:
      <ul dir='rtl' className="list-disc mr-10 mt-8 font-normal text-xl ">
      <li>
      نقول ان التناظر المحوري يحفظ الاستقامة .
      </li>
    </ul>
      }
    </>
  );
};

export default CourA15;
