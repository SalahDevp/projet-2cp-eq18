import React from "react";
import img8 from "assets/cour/p8-img.png";
const courp8 = () => {
  return (
    <div>
      <div>
        <h2 className="mt-2 ml-3 underline decoration-solid text-nav font-extrabold text-2xl">
          4. Symétrique d'un cercle :
        </h2>
        <div className="ml-6 mt-2">
          <p className="font-normal text-xl ">
            Le symétrique d'un cercle par rapport à un point est un cercle de
            même rayon.
          </p>
          <ul className="list-disc ml-10 mt-2 font-normal text-xl">
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
        </div>
        <div className="mt-14 flex justify-center  ">
          <img className="h-60 w-98 " src={img8} alt="" />
        </div>
      </div>
    </div>
  );
};

export default courp8;
