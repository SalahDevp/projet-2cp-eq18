import React from "react";
import img1 from "assets/cour/P-axiale/p7.png";
const CourA7 = () => {
  return (
    <div>
      <h1 className="underline decoration-solid text-nav font-black text-3xl">
        2. Symétrique d'un segment :
      </h1>

      <div className="ml-6 mt-2">
        <p className="  text-xl font-normal">
          Le symétrique d’un segment par rapport à une droite{" "}
          <span className="text-ltr-cr">(d)</span> est{" "}
          <span className="text-ltr-cr">un segment de même longueur</span>.
        </p>
        <ul className="ml-10 list-disc  text-xl font-normal">
          <li>
            <span className="text-ltr-cr">A’</span> est le symétrique de{" "}
            <span className="text-ltr-cr">A</span> par rapport à{" "}
            <span className="text-ltr-cr">(d)</span>.
          </li>
          <li>
            <span className="text-ltr-cr">B’</span> est le symétrique de{" "}
            <span className="text-ltr-cr">B</span> par rapport à{" "}
            <span className="text-ltr-cr"> (d)</span>.{" "}
          </li>
          <li>
            Le segment <span className="text-ltr-cr">[A’B’] </span>est le
            symétrique du segment <span className="text-ltr-cr">[AB]</span> par
            rapport à <span className="text-ltr-cr"> (d)</span>.
          </li>
          <li>
            On a <span className="text-ltr-cr">A'B' = AB</span>
          </li>
        </ul>
      </div>
      <div className="mt-3 flex justify-center">
        <img className="h-64 w-96" src={img1} alt="" />
      </div>
      <ul className="list-disc ml-10 mt-8 font-normal text-xl ">
        <li>
          On dit que la symétrie axiale{" "}
          <span className="text-ltr-cr">conserve les longueurs</span>.
        </li>
      </ul>
    </div>
  );
};

export default CourA7;
