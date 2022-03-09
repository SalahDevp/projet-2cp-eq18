import { useLanguage } from "AppContext";
import { useTranslation } from "react-i18next";

import React from "react";

const LanguageBox = ({ text, languageCode, logo }) => {
  const { setLanguage } = useLanguage();
  const { i18n } = useTranslation();
  //func that changes the lng
  const changeLanguage = () => {
    i18n.changeLanguage(languageCode);
    setLanguage(languageCode);
    //store the language choice
    window.electronAPI.storeSet("language", languageCode);
  };

  return (
    <div
      className="bg-green-400 cursor-pointer w-3/5 "
      onClick={() => changeLanguage()}
    >
      <p>{text}</p>
    </div>
  );
};

export default LanguageBox;
