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
          student: "ÉLEVE",
          teacher: "ENSEIGNANT",
          courses: "COURS",
          grid: "GRILLE", //la grille
          exercices: "EXERCICES",
          password: "Mot de passe",
          CurrentPassword :" Mot de passe actuel : ",
          NewPassword  :"Nouveau mot de passe :",
          Passwordconfirmation :"Confirmation mot de passe :",
          pleaseEnterPassword: "Veuillez entrer votre mot de passe",
          changePassword: "changer le mot de passe",
          showPassword: "afficher le mot de passe",
          hidePassword: "masquer le mot de passe",
          confirm:"confirmer",
        },
      },
      ar: {
        translation: {
          student: "تلميذ",
          teacher: "أستاذ",
          courses: "دروس",
          grid: "المرصوفة", //la grille
          exercices: "تمارين",
          password: "كلمة السر",
          CurrentPassword :"كلمة السر الحالية :",
          NewPassword  :" كلمة المرور الجديدة :",
          Passwordconfirmation :" تأكيد كلمة المرور :",
          pleaseEnterPassword: "يرجى ادخال كلمة السر",
          changePassword: "تغيير كلمة السر",
          showPassword: "اظهار كلمة المرور",
          hidePassword: "اخفاء كلمة المرور",
          confirm :"تأكيد",
        },
      },
    },
  });

export default i18n;
