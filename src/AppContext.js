import React, { useState, useContext } from "react";

const languageContext = React.createContext();
const userModeContext = React.createContext();
const soundContext = React.createContext();
const musicContext = React.createContext();

export function useLanguage() {
  return useContext(languageContext);
}
export function useUserMode() {
  return useContext(userModeContext);
}
export function useSoundLevel() {
  return useContext(soundContext);
}
export function useMusicLevel() {
  return useContext(musicContext);
}

const AppContext = ({ children }) => {
  const [language, setLanguage] = useState("fr");
  const [teacherMode, setTeacherMode] = useState(false);
  const [soundLevel, setSoundLevel] = useState(1);
  const [musicLevel, setMusicLevel] = useState(1);
  return (
    <languageContext.Provider value={{ language, setLanguage }}>
      <soundContext.Provider value={{ soundLevel, setSoundLevel }}>
        <musicContext.Provider value={{ musicLevel, setMusicLevel }}>
          <userModeContext.Provider value={{ teacherMode, setTeacherMode }}>
            {children}
          </userModeContext.Provider>
        </musicContext.Provider>
      </soundContext.Provider>
    </languageContext.Provider>
  );
};

export default AppContext;
