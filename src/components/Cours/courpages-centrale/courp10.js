import React from "react";
import img10 from "assets/cour/p10-img.png";
import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react";
import i18n from "utils/translation/i18n";
const Courp10 = () => {

const { i18n } = useTranslation();
const [fr, setFR] = useState(true);

useEffect(() => {
  if (i18n.language === "ar") {
    setFR(false);
  }
}, [i18n.language]);
  return (
    <div>
      {fr ?<h1 className="mt-2 ml-3 underline decoration-solid text-nav font-extrabold text-2xl">
        III. Centre de symétrie : 
      </h1>:
      <h1 dir="rtl" className="mt-2 ml-3 underline decoration-solid text-nav font-extrabold text-2xl">
      III.  مركز التناظر :
    </h1>}
      <div className="ml-6 mt-2">
       {fr? <p className=" text-xl font-normal">
          {" "}
          <span className="underline decoration-solid text-2xl font-bold">
            Définition :
          </span>{" "}
          On dit qu'une figure admet un centre de symétrie si lorsque l'on
          effectue un demi-tour autour d'un point, on obtient deux figures
          superposables ; Ce point est appelé centre de symétrie
        </p> : 
        <p dir="rtl" className="text-xl font-normal" >   
          <span className="underline decoration-solid text-2xl font-bold">  تعريف:</span>  نقول عن شكل انه يقبل مركز تناظر اذا  لما نقوم بنصف دوره  حول نقطة نتحصل على شكلان  متطابقان  نسمي هذه النقطة  بمركز التناظر
          </p>}
        <div className="flex justify-center h-80 mt-10 ">
          {" "}
          <img src={img10} alt="" />
        </div>
       {fr?  <ul className="ml-10 list-disc font-normal text-xl ">
          <li>
            Le point <span className="text-ltr-cr">O</span> est appelé centre de
            symétrie.
          </li>
        </ul> : 
        <ul dir="rtl" className="mr-10 list-disc font-normal text-xl ">
        <li>
        النقطة <span className="text-ltr-cr">O</span>  هي مركز التناظر .
        </li>
      </ul>  }
      </div>
    </div>
  );
};

export default Courp10;
