import React from "react";
import Box from "components/menu-mode/Box";
import imgT from "assets/userMode/teacher.png";
import imgE from "assets/userMode/etudiant.png";
import { useTranslation } from "react-i18next";
import { useUserMode } from "AppContext";
import { useNavigate } from "react-router-dom";

const UserMode = () => {
  const { setTeacherMode } = useUserMode();
  const navigate = useNavigate();
  const { t } = useTranslation();
  const handleTeacherMode = () => {
    //navigte to password page.
    navigate("/teacher-password");
  };
  const handleStudentMode = () => {
    setTeacherMode(false);
    //navigate to menu
    navigate("/menu");
  };
  return (
    <div
      className=" absolute top-1/2 left-1/2
     -translate-x-1/2 -translate-y-1/2 
      h-96 w-128 flex items-center justify-between "
    >
      <Box image={imgT} title={t("teacher")} handleClick={handleTeacherMode} />
      <Box image={imgE} title={t("student")} handleClick={handleStudentMode} />
    </div>
  );
};

export default UserMode;
