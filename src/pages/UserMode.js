import React from "react";
import Box from "components/menu-mode/Box";
import imgT from "assets/userMode/teacher.png";
import imgE from "assets/userMode/etudiant.png";
import { useUserMode } from "AppContext";
import { useNavigate } from "react-router-dom";
import Nav from "components/Nav"

const UserMode = () => {
  const { setTeacherMode } = useUserMode();
  const navigate = useNavigate();
  const handleTeacherMode = () => {
    //navigte to password page.
    navigate("/teacher-password");
  };
  const handleStudentMode = () => {
    setTeacherMode(false);
    //navigate to menu
    navigate("/menu");
  };
  window.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
      navigate("/");
    }
    
  });
  return (
    <div>
    <Nav />
    <div
      className=" absolute top-1/2 left-1/2
     -translate-x-1/2 -translate-y-1/2 
      h-96 w-128 flex items-center justify-between "
    >
      <Box image={imgT} title="PROFESSEUR" handleClick={handleTeacherMode} />
      <Box image={imgE} title="ÉLEVE" handleClick={handleStudentMode} />
    </div>
    </div>
  );
};

export default UserMode;
