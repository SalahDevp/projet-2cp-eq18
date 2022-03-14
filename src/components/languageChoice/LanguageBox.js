import { useLanguage } from "AppContext";
import { useTranslation } from "react-i18next";

import React from "react";

const LanguageBox = ({ text, languageCode, image }) => {
  const { setLanguage } = useLanguage();
  const { i18n } = useTranslation();
  //func that changes the lng
  const changeLanguage = () => {
    i18n.changeLanguage(languageCode);
    setLanguage(languageCode);
    //store the language choice
    window.electronAPI.storeSet("language", languageCode);
    //TODO: navigate to user mode page
  };

  return (
    <div
      className="bg-[#B9FFFC] cursor-pointer h-1/5 w-1/2 shadow-xl flex items-center "
      style={{ borderRadius: "100px" }}
      onClick={() => changeLanguage()}
    >
      {/* external div (flex) */}
      <div className="grid grid-cols-4 w-full">
        {/*internal div (grid)*/}
        <span
          className={`text-7xl col-span-2 col-start-2 mx-auto ${
            languageCode === "fr" ? "my-auto" : ""
          }`}
        >
          {text}
        </span>
        <img src={image} alt="" className="h-4/5 my-auto" />
      </div>
    </div>
  );
};

export default LanguageBox;
