import closeIcon from "assets/cour/close-icon.png";
import { useState } from "react";
import { useTranslation } from "react-i18next";

const AddExoDialogue = ({ setDialogueOpened, shapes }) => {
  //input state
  const [option, setOption] = useState("");
  const { t, i18n } = useTranslation();
  const handleSubmit = async () => {
    const exoObj = {
      exoShapes: shapes,
      mode: option,
    };
    try {
      await window.electronAPI.addPaintExo(JSON.stringify(exoObj));
      setDialogueOpened(false);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-smoke-light flex ">
      {/*dialogue box*/}
      <div
        dir={i18n.language === "fr" ? "ltr" : "rtl"}
        className="relative w-2/5 h-60 m-auto bg-white flex flex-col justify-between p-4 border-2 border-nav rounded-lg"
      >
        {/*close button*/}
        <button
          className={`absolute top-0 ${
            i18n.language === "fr" ? "right-0" : "left-0"
          } p-2`}
          onClick={() => setDialogueOpened(false)}
        >
          <img className="h-4" src={closeIcon} alt="close" />
        </button>

        <h6 className="text-3xl">{t("paintDialogue.symetryMode")}</h6>
        {/*inputs*/}
        <form className="flex justify-between w-full border-2 rounded px-2 py-4">
          <div className="flex flex-col items-center">
            <input
              checked={option === "centrale"}
              onChange={() => setOption("centrale")}
              className="h-6 w-6"
              type="radio"
              name="type"
              id="centrale"
            />
            <label className="text-xl">{t("paintDialogue.central")}</label>
          </div>
          <div className="flex flex-col items-center">
            <input
              checked={option === "axiale-horizentale"}
              onChange={() => setOption("axiale-horizentale")}
              className="h-6 w-6"
              type="radio"
              name="type"
              id="axialeH"
            />
            <label className="text-xl">{t("paintDialogue.axialH")}</label>
          </div>
          <div className="flex flex-col items-center">
            <input
              checked={option === "axiale-verticale"}
              onChange={() => setOption("axiale-verticale")}
              className="h-6 w-6"
              type="radio"
              name="type"
              id="axialeV"
            />
            <label className="text-xl">{t("paintDialogue.axialV")}</label>
          </div>
        </form>
        <button
          onClick={handleSubmit}
          className="bg-green-500 rounded p-2 w-fit self-end mr-2"
        >
          <img src="./images/check-mark.svg" alt="" className="h-6" />
        </button>
      </div>
    </div>
  );
};

export default AddExoDialogue;
