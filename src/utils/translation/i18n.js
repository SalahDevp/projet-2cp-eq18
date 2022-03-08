import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n
  .use(initReactI18next)
  // init i18next
  .init({
    debug: true,
    fallbackLng: "fr",
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources: {
      fr: {
        translation: {
          test: "bienvenue sur notre application",
        },
      },
      ar: {
        translation: {
          test: "مرحبا بكم في تطبيقنا",
        },
      },
    },
  });

export default i18n;
