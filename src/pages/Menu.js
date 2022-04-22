import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Box from "components/menu-mode/Box";
import img1 from "assets/menu/grille.png";
import img2 from "assets/menu/online-course.png";
import img3 from "assets/menu/online-exercice.png";
import Nav from "components/Nav";
import { useTranslation } from "react-i18next";

const Menu = () => {
  //NOTE: for testing only
  const navigate = useNavigate();
  const { t } = useTranslation();
  useEffect(
    () =>
      window.addEventListener("keydown", function (event) {
        if (event.key === "Escape") {
          navigate("/");
        }
      }),
    [navigate]
  );
  const handleCour = () => {
    //navigte to password page.
    navigate("/Menu-Cour");
  };
  return (
    <>
      <Nav title="Menu" pathAvant="/user-mode" aff={false} />
      <div
        className=" absolute top-1/2 left-1/2
        -translate-x-1/2 -translate-y-1/2 
        h-96 w-328 flex items-center justify-between "
      >
        <Box image={img1} title={t("grid")} />
        <Box image={img2} title={t("courses")} handleClick={handleCour} />
        <Box image={img3} title={t("exercices")} />
      </div>
    </>
  );
};

export default Menu;
