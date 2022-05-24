import React from "react";
import sortir from "../components/nouveau-protype-component/sortir.png";

const Sortir = () => {
  const quit = () => {
    window.close();
  };
  return (
    <div>
      <img
        className="cursor-pointer absolute top-9 right-10 h-11 w-11 "
        src={sortir}
        alt="sortir"
        onClick={quit}
      />
    </div>
  );
};

export default Sortir;
