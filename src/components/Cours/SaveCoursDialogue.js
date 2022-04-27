import closeIcon from "assets/cour/close-icon.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

//TODO: remove component if not used
const SaveCoursDialogue = ({ setDialogueOpened, editorState }) => {
  //input state
  const [title, setTitle] = useState("");
  const navigate = useNavigate();

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
        <button className="bg-green-500 text-white w-20 text-lg rounded">
          save
        </button>
      </div>
    </div>
  );
};

export default SaveCoursDialogue;
