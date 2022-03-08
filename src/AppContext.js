import React, { useState, useContext } from "react";

const languageContext = React.createContext();
const userModeContext = React.createContext();

export function useLanguageContext() {
  return useContext(languageContext);
}
export function useUserModeContext() {
  return useContext(userModeContext);
}

const AppContext = ({ children }) => {
  const [language, setLanguage] = useState("fr");
  const [teacherMode, setTeacherMode] = useState(false);
  return (
    <languageContext.Provider value={{ language, setLanguage }}>
      <userModeContext.Provider value={{ teacherMode, setTeacherMode }}>
        {children}
      </userModeContext.Provider>
    </languageContext.Provider>
  );
};

export default AppContext;
