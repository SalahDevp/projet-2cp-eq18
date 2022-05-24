import closeIcon from "assets/cour/close-icon.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddExoDialogue = ({ setDialogueOpened, shapes }) => {
  //input state
  const [option, setOption] = useState("");

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
      <div className="relative w-2/5 h-60 m-auto bg-white flex flex-col justify-between p-4 border-2 border-nav rounded-lg">
        {/*close button*/}
        <button
          className="absolute top-0 right-0 p-2"
          onClick={() => setDialogueOpened(false)}
        >
          <img className="h-4" src={closeIcon} alt="close" />
        </button>

        <h6 className="text-3xl">mode de symetrie:</h6>
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
            <label className="text-xl">centrale</label>
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
            <label className="text-xl">axiale horizentale</label>
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
            <label className="text-xl">axiale verticale</label>
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
