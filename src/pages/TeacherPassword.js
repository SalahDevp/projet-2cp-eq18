import { useUserMode } from "AppContext";
import confirmationIcon from "assets/password/confirmation.png";
import Nav from "components/Nav";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const TeacherPassword = () => {
  const [password, setPassword] = useState("");
  const { setTeacherMode } = useUserMode();
  const navigate = useNavigate();

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
      <Nav />
   
    <div className="h-screen w-screen flex items-center justify-center">
      <div className="w-1/2">
        <span className="font-semibold text-lg pl-2">
          Veuillez entrer votre mot de passe
        </span>
        <div className="h-36 bg-[#B9FFFC] rounded-xl grid grid-cols-4 px-4 border-2 border-[#A9A1A1]">
          <input
            className="focus:outline-none border-b-2 rounded border-[#a3d8f4] h-4/6 col-span-3 my-auto bg-inherit text-5xl pl-2"
            type="text"
            placeholder="Mot de passe"
            maxLength={14}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={handleSubmit} className="my-auto ml-auto">
            <img src={confirmationIcon} alt="" className="h-4/6" />
          </button>
        </div>
        <div className="flex justify-between px-2">
          <span>afficher mots de passe</span>
          <span className="text-[#0066FF] font-semibold">
            changer le mot de passe
          </span>
        </div>
      </div>
    </div>
    </div>
  );
};

export default TeacherPassword;
