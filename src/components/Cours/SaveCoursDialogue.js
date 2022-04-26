import { convertToRaw } from "draft-js";
import draftToHtml from "draftjs-to-html";

import closeIcon from "assets/cour/close-icon.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SaveCoursDialogue = ({ setDialogueOpened, editorState }) => {
  //input state
  const [title, setTitle] = useState("");
  const navigate = useNavigate();

  const saveCour = async () => {
    const contentAsHtml = draftToHtml(
      convertToRaw(editorState.getCurrentContent()),
      undefined,
      true,
      ({ type, data }) => {
        //to fix -image doesnt align in the center-
        if (type === "IMAGE") {
          const textAlign = data.alignment || "center";
          return `
                <p style="text-align:${textAlign};">
                    <img src="${data.src}" alt="${
            data.alt || ""
          }" style="height: ${data.height};width: ${data.width}"/>
                </p>
            `;
        }
      }
    );
    const fileSaved = await window.electronAPI.saveNewCourse(
      title,
      contentAsHtml
    );
    if (fileSaved) navigate("/menu-cour");
  };

  return (
    <div className="fixed inset-0 z-50 bg-smoke-light flex ">
      {/*dialogue box*/}
      <div className="relative w-auto h-auto m-auto bg-white flex flex-col p-4 rounded-lg">
        {/*close button*/}
        <button
          className="absolute top-0 right-0 p-2"
          onClick={() => setDialogueOpened(false)}
        >
          <img className="h-3" src={closeIcon} alt="close" />
        </button>

        <h6 className="text-3xl">titre de cour:</h6>
        <input
          type="text"
          value={title}
          autoFocus
          onChange={(e) => setTitle(e.target.value)}
          className="w-96 p-2 text-xl my-4 border-2 rounded border-nav outline-none"
        />
        <button
          onClick={saveCour}
          className="bg-green-500 text-white w-20 text-lg rounded"
        >
          save
        </button>
      </div>
    </div>
  );
};

export default SaveCoursDialogue;
