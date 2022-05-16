import React, { useState } from "react";
import ToggleSwitch from "./ToggleSwitch";
//images
import musicIcon from "assets/parametre/music.png";
import soundOn from "assets/parametre/sound-on.png";
import soundOff from "assets/parametre/sound-off.png";
import languageIcon from "assets/parametre/language.png";
import { useTranslation } from "react-i18next";
import { useMusicLevel, useSoundLevel } from "AppContext";

const STEP = 5;

const SettingsBox = () => {
  //music
  const { musicLevel, setMusicLevel } = useMusicLevel();
  const [musicActivated, setMusicActivated] = useState(musicLevel !== 0);
  //sound
  const { soundLevel, setSoundLevel } = useSoundLevel();
  const [soundActivated, setSoundActivated] = useState(soundLevel !== 0);
  //language
  const { i18n, t } = useTranslation();
  //handlers
  const handleAudioLevelChange = (e, setLevelState) => {
    if (e.target.value >= STEP) setLevelState(e.target.value / 100);
  };
  const handleAudioToggle = (
    audioActivated,
    setAudioActivated,
    setAudioLevel
  ) => {
    setAudioLevel(audioActivated ? 0 : STEP / 100);
    setAudioActivated(!audioActivated);
  };
  return (
    <div className="relative flex-grow mx-12 px-14 py-14  z-10 bg-white shadow-md border-black border-2 border-solid w-auto h-100 rounded-3xl bg-[url('./assets/parametre/settings-background.png')] bg-no-repeat bg-right-bottom bg-origin-border bg-clip-border">
      <div className="grid grid-cols-2 gap-32">
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between w-full h-24">
            <img
              title={t("settings.music")}
              src={musicIcon}
              alt=""
              className="h-9/10"
            />
            <ToggleSwitch
              checked={musicActivated}
              handleChange={() =>
                handleAudioToggle(
                  musicActivated,
                  setMusicActivated,
                  setMusicLevel
                )
              }
            />
          </div>
          <input
            type="range"
            disabled={!musicActivated}
            min={0}
            step={STEP}
            max={100}
            className="mx-10 mt-8 accent-settingsLightGreen"
            value={musicLevel * 100}
            onChange={(e) => handleAudioLevelChange(e, setMusicLevel)}
          />
        </div>
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between w-full h-24">
            <img
              title={t("settings.sound")}
              src={soundActivated ? soundOn : soundOff}
              alt=""
              className="h-9/10"
            />
            <ToggleSwitch
              checked={soundActivated}
              handleChange={() =>
                handleAudioToggle(
                  soundActivated,
                  setSoundActivated,
                  setSoundLevel
                )
              }
            />
          </div>
          <input
            type="range"
            disabled={!soundActivated}
            min={0}
            max={100}
            step={STEP}
            className="mx-10 mt-8 accent-settingsLightGreen"
            value={soundLevel * 100}
            onChange={(e) => handleAudioLevelChange(e, setSoundLevel)}
          />
        </div>
      </div>
      <div className="absolute bottom-1/3 flex justify-between items-center">
        <img src={languageIcon} alt="" className="h-12 mr-4" />
        <select
          onChange={(e) => i18n.changeLanguage(e.target.value)}
          className="cursor-pointer h-20 w-72 px-2 border-2 outline-none rounded-xl border-gray-500 text-4xl font-bold "
        >
          <option selected={i18n.language === "fr"} value="fr">
            Français
          </option>
          <option selected={i18n.language === "ar"} value="ar">
            العربية
          </option>
        </select>
      </div>
      <div className="absolute bottom-0 left-0 pb-4 pl-4">
        <p className="cursor-pointer font-bold text-xl text-settingsLightGreen mb-3">
          {t("changePassword")}
        </p>
        <p className="cursor-pointer font-bold text-xl text-settingsLightGreen">
          {t("settings.changeUserMode")}
        </p>
      </div>
    </div>
  );
};

export default SettingsBox;
