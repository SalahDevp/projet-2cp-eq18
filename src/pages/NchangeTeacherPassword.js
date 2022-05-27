import React from "react";
import retour from "../components/nouveau-protype-component/retour.png";
import img1 from "../components/nouveau-protype-component/changeTpass.png";
import { useNavigate } from "react-router-dom";
import ok from "../components/nouveau-protype-component/ok.png";
import i18n from "utils/translation/i18n";
import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react";
import ErrorMessage from "components/password/ErrorMessage";
import img2 from "../components/nouveau-protype-component/ar.png";
import Triangle from "components/triangle";
import Rectangle from "components/rectabgle";
import Sortir from "components/sortir";
const NchangeTeacherpassword = () => {
  const { i18n } = useTranslation();

  //password states
  const [currentPass, setCurrentPass] = useState();
  const [newPass, setNewPass] = useState();
  const [confirmedPass, setConfirmedPass] = useState();
  //password validation
  const [wrongPassword, setWrongPassword] = useState(false);
  const [passwordLength, setPasswordLength] = useState(false);
  const [passwordDifferent, setpasswordDifferent] = useState(false);

  const [fr, setFR] = useState(true);

  const handleSubmit = async () => {
    //if one of the three fields is empty exit fnc
    if (currentPass === "" || newPass === "" || confirmedPass === "") return;
    //set all validation states to false
    setpasswordDifferent(false);
    setPasswordLength(false);
    setWrongPassword(false);
    //get the stored password
    const storedPassword = await window.electronAPI.storeGet("teacherPassword");
    //check if the password is correct
    if (currentPass === storedPassword) {
      //check if new password and confirmed password are identical
      if (newPass === confirmedPass) {
        //password length has to be >= 4
        if (newPass.length >= 4) {
          //set the new password
          window.electronAPI.storeSet("teacherPassword", newPass);
          navigate("/TeacherPassword");
        } else {
          //new pass length < 4
          setNewPass("");
          setConfirmedPass("");
          setPasswordLength(true);
        }
      } else {
        //new pass and confirmed pass are diffrent
        setNewPass("");
        setConfirmedPass("");
        setpasswordDifferent(true);
      }
    } else {
      //current pass is wrong
      setCurrentPass("");
      setWrongPassword(true);
    }
  };

  useEffect(() => {
    if (i18n.language === "ar") {
      setFR(false);
    }
  }, [i18n.language]);
  const { t } = useTranslation();
  const navigate = useNavigate();

  const Routeur = () => {
    navigate(-1);
  };

  return (
    <div className="bg-beige h-screen w-screen flex ">
      <div className="w-1/3 h-screen rounded-r-2xl bg-violet flex justify-center items-center">
        <img
          className="cursor-pointer absolute top-9 left-10 h-10 w-10 "
          src={retour}
          alt=""
          onClick={Routeur}
        />
        <img className="h-2/4 w-3/4" src={fr ? img1 : img2} alt="" />
      </div>
      <div className="relative bg-beige  w-2/3 h-screen flex justify-center items-center">
        <div className="left-1/3 absolute h-screen w-1 bg-v-clair z-0"></div>
        <Rectangle />
        <Triangle />

        <Sortir />

        <div className=" px-10 py-5  z-10 overflow-hidden bg-white shadow-md	 border-jeune border-2 border-solid w-98 rounded-3xl">
          <p
            dir={fr ? "ltr" : "rtl"}
            for="pwd"
            className={fr ? "-ml-0  text-2xl" : "-mr-0  text-2xl"}
          >
            {t("password.current")}
          </p>
          <input
            dir={fr ? "ltr" : "rtl"}
            placeholder={t("password.current")}
            className="mt-1 px-4 text-2xl w-full h-12 rounded-xl border-1 border-rouze outline-2"
            type="password"
            name="password"
            id="pwd"
            value={currentPass}
            onChange={(e) => setCurrentPass(e.target.value)}
          />
          {wrongPassword && <ErrorMessage fr={fr} msg={t("password.wrong")} />}
          <div className="mt-2">
            <p
              dir={fr ? "ltr" : "rtl"}
              for="pwd"
              className={fr ? "-ml-0  text-2xl" : "-mr-0  text-2xl"}
            >
              {t("password.new")}
            </p>
            <input
              dir={fr ? "ltr" : "rtl"}
              placeholder={t("password.new")}
              className="mt-1 px-4 text-2xl w-full h-12 rounded-xl border-1 border-rouze outline-2"
              type="password"
              name="password"
              id="pwd"
              value={newPass}
              onChange={(e) => setNewPass(e.target.value)}
            />
            {passwordLength && (
              <ErrorMessage fr={fr} msg={t("password.length")} />
            )}
          </div>
          <div className="mt-2">
            <p
              dir={fr ? "ltr" : "rtl"}
              for="pwd"
              className={fr ? "-ml-0  text-2xl" : "-mr-0  text-2xl"}
            >
              {" "}
              {t("password.confirm")}
            </p>
            <input
              dir={fr ? "ltr" : "rtl"}
              placeholder={t("password.confirm")}
              className="mt-1 px-4 text-2xl w-full h-12 rounded-xl border-1 border-rouze outline-2"
              type="password"
              name="password"
              id="pwd"
              value={confirmedPass}
              onChange={(e) => setConfirmedPass(e.target.value)}
            />
            {passwordDifferent && (
              <ErrorMessage fr={fr} msg={t("password.different")} />
            )}
          </div>
          <button
            onClick={handleSubmit}
            className={fr ? "-mr-7 float-right" : "-ml-7 float-left"}
          >
            <img className=" h-28 w-28 -mb-10" src={ok} alt="" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default NchangeTeacherpassword;
