import { useUserMode } from "AppContext";
import confirmationIcon from "assets/password/confirmation.png";
import Nav from "components/Nav";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const TeacherPassword = () => {
  const [password, setPassword] = useState("");
  const { setTeacherMode } = useUserMode();
  const navigate = useNavigate();
  const { t } = useTranslation();
  const handleSubmit = async () => {
    //get the stored password
    const storedPassword = await window.electronAPI.storeGet("teacherPassword");
    //check if the password is correct
    if (password === storedPassword) {
      setTeacherMode(true);
      console.log("success!");
      //navigate to menu
      navigate("/menu");
    } else {
      console.log("wrong password!");
      setPassword("");
    }
  };
  window.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
      navigate("/user-mode");
    }
  });
  return (
    <div>
      <Nav title="se connecter" pathAvant="/user-mode" aff={false} />
      <div className="h-100 w-screen flex items-center justify-center">
        <div className="w-1/2">
          <span className="font-semibold text-lg pl-2">
            {t("pleaseEnterPassword")}
          </span>
          <div className="h-36 bg-[#B9FFFC] rounded-xl grid grid-cols-4 px-4 border-2 border-[#A9A1A1]">
            <input
              className="focus:outline-none border-b-2 rounded border-[#a3d8f4] h-4/6 col-span-3 my-auto bg-inherit text-5xl pl-2"
              type="text"
              placeholder={t("password")}
              maxLength={14}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handleSubmit} className="my-auto ml-auto">
              <img src={confirmationIcon} alt="" className="h-4/6" />
            </button>
          </div>
          <div className="flex justify-between px-2">
            <span>{t("showPassword")}</span>
            <span className="text-[#0066FF] font-semibold">
              {t("changePassword")}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeacherPassword;
