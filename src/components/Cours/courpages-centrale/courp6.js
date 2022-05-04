import React from "react";
import img2 from "assets/cour/p2-img2.png";
const Courp6 = () => {
  return (
    <div>
      <div>
        <h2 className="mt-2 ml-3 underline decoration-solid text-nav font-extrabold text-2xl">
          3. Symétrique d'une droite :
        </h2>
        <div className="ml-6 mt-2">
          <p className="font-normal text-xl ">
            Le symétrique d'une droite par rapport à un point est une droite
            parallèle.
          </p>
          <ul className="list-disc ml-10 mt-2 font-normal text-xl">
            <li>
              {" "}
              <span className="text-ltr-cr">A'</span> est le symétrique de{" "}
              <span className="text-ltr-cr">A</span> par{" "}
              <span className="text-ltr-cr">O</span> .
            </li>
            <li>
              {" "}
              <span className="text-ltr-cr">B'</span> est le symétrique de{" "}
              <span className="text-ltr-cr">B</span> par{" "}
              <span className="text-ltr-cr">O</span> .
            </li>
            <li>
              Le symétrique de la droite{" "}
              <span className="text-ltr-cr">(AB)</span> est la droite{" "}
              <span className="text-ltr-cr">(A’B’)</span>.
            </li>
          </ul>
        </div>
        <div className="mt-14 flex justify-center  ">
          <img className="h-72 w-100 " src={img2} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Courp6;
