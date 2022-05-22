import React from "react";
import sortir from "../components/nouveau-protype-component/sortir.png";
import teacher from "../components/nouveau-protype-component/teacher.png";
import student from "../components/nouveau-protype-component/student.png";
import teacherall from "../components/nouveau-protype-component/teacherall.png";
import studentall from "../components/nouveau-protype-component/s.png";
import retour from "../components/nouveau-protype-component/retour.png";
import imgfr from "../components/nouveau-protype-component/vousetes.png";
import imgar from "../components/nouveau-protype-component/أنت.png";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useUserMode } from "AppContext";

const NUserMode = () => {
  const { t } = useTranslation();
  const { i18n } = useTranslation();
  const [fr, setFR] = useState(true);
  const { setTeacherMode } = useUserMode();

  useEffect(() => {
    if (i18n.language === "ar") {
      setFR(false);
    }
  }, [i18n.language]);

  const handleStudentMode = () => {
    setTeacherMode(false);
    navigate("/NMenu");
  };

  function nanaTE() {
    const divT = document.getElementById("teacher");
    const divS = document.getElementById("student");
    const teacherALL = document.getElementById("teacherALL");
    teacherALL.style.display = "inline";
    divT.style.display = "none";
    divS.style.display = "none";
  }
  function nanaTL() {
    const divT = document.getElementById("teacher");
    const divS = document.getElementById("student");
    const teacherALL = document.getElementById("teacherALL");
    teacherALL.style.display = "none";
    divT.style.display = "inline";

    divS.style.display = "inline";
  }
  function nanaSE() {
    const divT = document.getElementById("teacher");
    const divS = document.getElementById("student");
    const studentALL = document.getElementById("studentALL");
    studentALL.style.display = "inline";
    divT.style.display = "none";
    divS.style.display = "none";
  }
  function nanaSL() {
    const divT = document.getElementById("teacher");
    const divS = document.getElementById("student");
    const studentALL = document.getElementById("studentALL");
    studentALL.style.display = "none";

    divT.style.display = "inline";

    divS.style.display = "inline";
  }
  const navigate = useNavigate();

  const Routeur = () => {
    navigate("/");
  };
  return (
    <div className="bg-beige h-screen w-screen flex">
      {/* coté violé */}
      <div className="relative overflow-hidden  w-1/3 h-screen rounded-r-2xl bg-violet flex justify-center items-center">
        <img
          className="absolute top-9 left-10 h-10 w-10 "
          src={retour}
          alt=""
          onClick={Routeur}
        />
        {fr ? (
          <img className="h-2/4 w-full" src={imgfr} alt="" />
        ) : (
          <img className="h-2/4 w-full" src={imgar} alt="" />
        )}
      </div>
      <div className=" relative w-2/3 h-screen flex justify-center items-center">
        <div className="left-1/3 absolute h-screen w-1 bg-v-clair z-0"></div>
        <img
          className="absolute top-9 right-10 h-11 w-11 "
          src={sortir}
          alt="sortir"
        />

        <div className="transition flex justify-between px-8 py-5 z-10 bg-white shadow-md	 border-jeune border-2 border-solid w-98 h-96 rounded-3xl">
          {/* div for teacher */}
          <div
            id="teacher"
            className=" cursor-pointer overflow-hidden pt-2 pb-12 px-4 border-px border-gray-500 w-52 rounded-xl h-full"
            onMouseEnter={nanaTE}
          >
            <p className="text-center text-2xl">{t("teacher")}</p>
            <img className="h-full w-full mt-2" src={teacher} alt="" />
          </div>
          {/* div for student */}
          <div
            id="student"
            className="cursor-pointer overflow-hidden pt-2 pb-12 px-5  border-px border-gray-500 w-52 rounded-xl h-full"
            onMouseEnter={nanaSE}
          >
            <p className="text-center text-2xl">{t("student")}</p>
            <img className="h-full w-56 mt-2" src={student} alt="" />
          </div>
          {/* div full space */}

          <div
            id="teacherALL"
            className="  cursor-pointer px-4 py-2  hidden overflow-hidden border-px border-gray-500 w-full rounded-xl"
            onMouseLeave={nanaTL}
            onClick={() => navigate("/TeacherPassword")}
          >
            <p dir={fr ? "ltr" : "rtl"} className="text-start text-2xl">
              {t("teacher")}
            </p>
            <img className="h-72 w-96 text-center" src={teacherall} alt="" />
          </div>

          <div
            id="studentALL"
            className=" cursor-pointer px-4 pt-2 hidden overflow-hidden border-px border-gray-500 w-full rounded-xl"
            onMouseLeave={nanaSL}
            onClick={handleStudentMode}
          >
            <p dir={fr ? "ltr" : "rtl"} className="text-start text-2xl">
              {t("student")}
            </p>
            <img className=" w-96 text-center" src={studentall} alt="bf" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NUserMode;
