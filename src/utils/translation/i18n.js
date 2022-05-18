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
          password: {
            password: "Mot de passe",
            current: " Mot de passe actuel : ",
            new: "Nouveau mot de passe :",
            confirm: "Confirmation mot de passe :",
            pleaseEnter: "Veuillez entrer votre mot de passe",
            change: "changer le mot de passe",
            show: "afficher le mot de passe",
            hide: "masquer le mot de passe",
            wrong: "mot de passe incorrect",
            length: "le mot de passe doit comporter au moins 4 caractères",
            different: "Les mots de passe ne correspondent pas",
          },
          confirm: "confirmer",
          settings: {
            changeUserMode: "changer mode d’utilisateur",
            sound: "le son",
            music: "la musique",
          },
          editCourse: {
            editor: "Editeur de Cours",
            save: "sauvegarder",
          },
        },
      },
      ar: {
        translation: {
          student: "تلميذ",
          teacher: "أستاذ",
          courses: "دروس",
          grid: "المرصوفة", //la grille
          exercices: "تمارين",
          confirm: "تأكيد",
          password: {
            password: "كلمة المرور",
            current: "كلمة المرور الحالية :",
            new: " كلمة المرور الجديدة :",
            confirm: " تأكيد كلمة المرور :",
            pleaseEnter: "يرجى ادخال كلمة السر",
            change: "تغيير كلمة المرور",
            show: "اظهار كلمة المرور",
            hide: "اخفاء كلمة المرور",
            wrong: "كلمة المرور خاطئة",
            length: "يجب أن تتكون كلمة المرور من 4 أحرف على الأقل",
            different: "كلمات المرور غير متطابقة",
          },
          settings: {
            changeUserMode: "تغيير وضع المستخدم",
            sound: "الصوت",
            music: "الموسيقى",
          },
          editCourse: {
            editor: "محرر الدروس",
            save: "حفظ",
          },
        },
      },
    },
  });

export default i18n;
