import React from "react";
import img1 from "assets/cour/P-axiale/p3.png";

const CourA3 = () => {
  return (
    <div>
      <h2 className="mt-2 ml-3 underline decoration-solid text-nav font-extrabold text-3xl ">
        1. Symétrique d'un point :
      </h2>
      <div className="ml-6 mt-4">
        <p className="font-normal text-xl ">
          Deux points <span className="text-ltr-cr">A</span> et{" "}
          <span className="text-ltr-cr">B</span> sont symétriques par rapport à
          une droite <span className="text-ltr-cr">(d)</span> s’ils{" "}
          <span className="text-ltr-cr">se superposent</span> par pliage le long
          de cette droite.{" "}
        </p>
      </div>

      <div className="mt-20 flex justify-center">
        <img className="h-60 w-98" src={img1} alt="" />
      </div>

      <ul className="list-disc ml-10 mt-14 font-normal text-xl ">
        <li>
          On dit que le point <span className="text-ltr-cr">B</span> est le
          symétrique du point <span className="text-ltr-cr">A</span> par rapport
          à une droite <span className="text-ltr-cr">(d)</span> si la droite{" "}
          <span className="text-ltr-cr">(d)</span> est{" "}
          <span className="text-ltr-cr">la médiatrice</span> du segment{" "}
          <span className="text-ltr-cr">[AB]</span>.
        </li>
      </ul>
    </div>
  );
};

export default CourA3;
