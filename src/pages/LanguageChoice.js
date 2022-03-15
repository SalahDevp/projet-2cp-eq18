import LanguageBox from "components/languageChoice/LanguageBox";
import ksaFlag from "assets/languageChoice/ksa-flag.png";
import franceFlag from "assets/languageChoice/france-flag.png";
import Nav from "components/Nav"
import React from "react";

const LanguageChoice = () => {
  return (
    <div>
      <Nav />
    <div className="flex flex-col h-screen w-screen justify-around items-center">
      <LanguageBox text={"العربية"} languageCode="ar" image={ksaFlag} />
      <LanguageBox text={"français"} languageCode="fr" image={franceFlag} />
    </div>
    </div>
  );
};

export default LanguageChoice;
