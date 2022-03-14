import { useUserMode } from "AppContext";
import React from "react";

const UserMode = () => {
  const { setTeacherMode } = useUserMode();
  const handleTeacherMode = () => {
    //TODO: navigte to password page.
  };
  const handleStudentMode = () => {
    setTeacherMode(false);
    //TODO: navigate to menu
  };
  return (
    <div className="h-screen w-screen flex items-center justify-around">
      <div className="bg-red-500 w-1/5 cursor-pointer">techer</div>
      <div className="bg-green-500 w-1/5 cursor-pointer">student</div>
    </div>
  );
};

export default UserMode;
