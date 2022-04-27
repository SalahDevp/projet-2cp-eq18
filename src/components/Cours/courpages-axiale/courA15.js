import React from "react";
import img1 from "assets/cour/P-axiale/p15.png";

const CourA15 = () => {
  return (
    <div>
      <h1 className="underline decoration-solid text-nav font-black text-3xl">
        6. Symétrique des points alignés:
      </h1>

      <div className="ml-6 mt-2">
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
      </div>
      <div className="mt-3 flex justify-center">
        <img className="h-72 w-96" src={img1} alt="" />
      </div>
      <ul className="list-disc ml-10 mt-8 font-normal text-xl ">
        <li>
          On dit que la symétrie axiale{" "}
          <span className="text-ltr-cr">conserve l’alignement</span>.
        </li>
      </ul>
    </div>
  );
};

export default CourA15;
