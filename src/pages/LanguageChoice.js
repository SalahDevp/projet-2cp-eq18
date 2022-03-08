import LanguageBox from "components/languageChoice/LanguageBox";

import React from "react";

const LanguageChoice = () => {
  return (
    <div className="flex flex-col h-screen w-screen justify-around items-center">
      <LanguageBox text={"arabic"} languageCode="ar" />
      <LanguageBox text={"french"} languageCode="fr" />
    </div>
  );
};

export default LanguageChoice;
