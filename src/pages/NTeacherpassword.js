import React from "react";
import retour from "../components/nouveau-protype-component/retour.png";
import img1 from "../components/nouveau-protype-component/Tpass.png";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useUserMode } from "AppContext";

import sortir from "../components/nouveau-protype-component/sortir.png";
import cadna from "../components/nouveau-protype-component/cadna.png";
import i18n from "utils/translation/i18n";
import ErrorMessage from "components/password/ErrorMessage";

const NTeacherpassword = () => {
  //state
  const [password, setPassword] = useState("");
  const [fr, setFR] = useState(true);
  const { setTeacherMode } = useUserMode();
  const [wrongPassword, setWrongPassword] = useState(false);

  const { t } = useTranslation();
  const navigate = useNavigate();
  //password logic
  const handleChange = (e) => {
    setPassword(e.target.value);
  };
  const handleSubmit = async () => {
    //if password field empty exit fnc
    if (password === "") return;
    //get the stored password
    const storedPassword = await window.electronAPI.storeGet("teacherPassword");
    //check if the password is correct
    if (password === storedPassword) {
      setTeacherMode(true);
      //navigate to menu
      navigate("/NMenu");
    } else {
      //wrong password
      setWrongPassword(true);
      setPassword("");
    }
  };
  useEffect(() => {
    if (i18n.language === "ar") {
      setFR(false);
    }
  }, [i18n.language]);

  const Routeur = () => {
    navigate("/userMode");
  };
  const quit = () => {
    window.close();
  };
  return (
    <div className="bg-beige h-screen w-screen flex ">
      <div className="w-1/3 h-screen rounded-r-2xl bg-violet flex justify-center items-center">
        <img
          className="absolute top-9 left-10 h-10 w-10 "
          src={retour}
          alt=""
          onClick={Routeur}
        />
        <img className="h-2/4 w-4/5" src={img1} alt="" />
      </div>
      <div className="relative bg-beige  w-2/3 h-screen flex justify-center items-center">
        <div className="left-1/3 absolute h-screen w-1 bg-v-clair z-0"></div>
        <img
          className="absolute top-9 right-10 h-11 w-11 "
          src={sortir}
          alt="sortir"
          onClick={quit}
        />
        <div
          className={`pb-14 pt-20 px-14  z-10 ${
            wrongPassword ? "bg-red-200" : "bg-white"
          } shadow-md overflow-hidden	 border-jeune border-2 border-solid w-98 h-96 rounded-3xl`}
        >
          <p
            dir={fr ? "ltr" : "rtl"}
            for="pwd"
            className={fr ? "-ml-0  text-4xl" : " -mr-0   text-4xl"}
          >
            {t("password.password")}
          </p>
          <input
            dir={fr ? "ltr" : "rtl"}
            className={`mt-5 px-5 w-full h-16 bg-white text-2xl rounded-xl border-1 ${
              wrongPassword ? "border-red-500" : "border-rouze"
            } outline-none`}
            placeholder={t("password.password")}
            type="password"
            name="password"
            id="pwd"
            value={password}
            onChange={handleChange}
          />
          {wrongPassword && <ErrorMessage fr={fr} msg={t("password.wrong")} />}
          <p
            className="cursor-pointer  float-right mt-3 text-xl text-vert"
            onClick={() => navigate("/NchangeTeacherPassword")}
          >
            {" "}
            {t("password.change")}
          </p>
          <div
            dir={fr ? "lrt" : "rtl"}
            className=" flex justify-end items-end w-full h-24   "
          >
            <img
              className={fr ? "h-16   mr-7" : "h-16   ml-7"}
              src={cadna}
              alt=""
            />
            <button
              onClick={handleSubmit}
              className="w-28 h-14 rounded-xl bg-white border-px   border-vert text-xl"
            >
              {t("confirm")}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NTeacherpassword;
