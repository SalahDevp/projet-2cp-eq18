import React, { useState, useContext, useEffect } from "react";

const languageContext = React.createContext();
const userModeContext = React.createContext();
const soundContext = React.createContext();
const musicContext = React.createContext();
const exoScoreContext = React.createContext();

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
export function useExoScore() {
  return useContext(exoScoreContext);
}

const AppContext = ({ children }) => {
  const [language, setLanguage] = useState("fr");
  const [teacherMode, setTeacherMode] = useState(false);
  const [soundLevel, setSoundLevel] = useState(0);
  const [musicLevel, setMusicLevel] = useState(0);
  const [exoScore, setExoScore] = useState([]);
  //funcs
  /**
   *
   * @param {'sound'|'music'} type
   * @param {number} value
   * @param {Function} setLevel
   */
  const changeAudioLevel = (type, value, setLevel) => {
    //save Audio level
    window.electronAPI.storeSet(type, value);
    setLevel(value);
  };
  //
  const changeExoScore = (level, correctAnswers, maxQst) => {
    const score = Math.floor((correctAnswers / maxQst) * 3);
    if (score <= exoScore[level - 1]) return;
    const newScores = [...exoScore];
    newScores[level - 1] = score;
    window.electronAPI.storeSet("exoScore", newScores);
    setExoScore(newScores);
  };
  //get saved music and sound levels
  useEffect(() => {
    (async () => {
      try {
        const sound = await window.electronAPI.storeGet("sound");
        const music = await window.electronAPI.storeGet("music");
        const score = await window.electronAPI.storeGet("exoScore");
        setSoundLevel(sound);
        setMusicLevel(music);
        setExoScore(score);
      } catch (e) {
        console.error(e);
      }
    })();
  }, []);

  return (
    <languageContext.Provider value={{ language, setLanguage }}>
      <exoScoreContext.Provider
        value={{
          exoScore,
          setExoScore: (level, correctAnswers, maxQst) =>
            changeExoScore(level, correctAnswers, maxQst),
        }}
      >
        <soundContext.Provider
          value={{
            soundLevel,
            setSoundLevel: (value) =>
              changeAudioLevel("sound", value, setSoundLevel),
          }}
        >
          <musicContext.Provider
            value={{
              musicLevel,
              setMusicLevel: (value) =>
                changeAudioLevel("music", value, setMusicLevel),
            }}
          >
            <userModeContext.Provider value={{ teacherMode, setTeacherMode }}>
              {children}
            </userModeContext.Provider>
          </musicContext.Provider>
        </soundContext.Provider>
      </exoScoreContext.Provider>
    </languageContext.Provider>
  );
};

export default AppContext;
