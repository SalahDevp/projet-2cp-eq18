import { useRef, useState } from "react";
//images
import rightArrow from "assets/cour/right-arrow.png";
import leftArrow from "assets/cour/left-arrow.png";
import addIcon from "assets/cour/add.png";
import editIcon from "assets/cour/edit.png";
import deleteIcon from "assets/cour/delete.png";
import backIcon from "components/nouveau-protype-component/retour.png";
//routing
import { useNavigate } from "react-router-dom";
//translation
import { useTranslation } from "react-i18next";
//user mode
import { useUserMode } from "AppContext";

const CourControls = ({
  pagesLength,
  cpt,
  setCpt,
  type,
  defaultPagesLength,
  setRerender,
}) => {
  const timer = useRef();
  const mouseOnControl = useRef(false); //if the mouse is on a one of the controls
  //state
  const [showControls, setShowControls] = useState(true);
  //navigation
  const navigate = useNavigate();
  //translation
  const { i18n } = useTranslation();
  //user mode
  const { teacherMode } = useUserMode();

  const handleMouseMove = () => {
    if (!showControls) setShowControls(true);
    clearTimeout(timer.current);
    timer.current = setTimeout(() => {
      //only hide controls if mouse is not on one of them
      if (!mouseOnControl.current) setShowControls(false);
    }, 3000);
  };

  const handleDeletePage = async () => {
    const pageNum = cpt - defaultPagesLength + 1;
    await window.electronAPI.deleteCoursePage(type, pageNum, i18n.language);
    setCpt(cpt - 1);
    setRerender((prv) => !prv);
  };

  return (
    <div className="absolute inset-0" onMouseMove={handleMouseMove}>
      {showControls && (
        <>
          <button
            className="absolute top-4 left-4 p-2 rounded-full hover:bg-gray-200"
            onClick={() => navigate("/Menu-Cour")}
          >
            <img src={backIcon} alt="" className="h-10" />
          </button>
          {cpt > 0 && (
            <button
              className={`cursor-pointer absolute top-1/2 ${
                i18n.language === "fr" ? "left-6" : "right-6"
              } p-3 rounded-full hover:bg-gray-200`}
              onMouseEnter={() => {
                mouseOnControl.current = true;
              }}
              onMouseLeave={() => {
                mouseOnControl.current = false;
              }}
            >
              <img
                src={i18n.language === "fr" ? leftArrow : rightArrow}
                className="h-11"
                onClick={() => setCpt(cpt - 1)}
                alt="previous"
              />
            </button>
          )}

          {cpt < pagesLength - 1 && (
            <button
              className={`cursor-pointer absolute top-1/2 ${
                i18n.language === "fr" ? "right-6" : "left-6"
              } p-3 rounded-full hover:bg-gray-200`}
              onMouseEnter={() => {
                mouseOnControl.current = true;
              }}
              onMouseLeave={() => {
                mouseOnControl.current = false;
              }}
            >
              <img
                src={i18n.language === "fr" ? rightArrow : leftArrow}
                className="h-11"
                onClick={() => setCpt(cpt + 1)}
                alt="next"
              />
            </button>
          )}
          {cpt === pagesLength - 1 && teacherMode && (
            <button
              className={`cursor-pointer absolute top-1/2 ${
                i18n.language === "fr" ? "right-6" : "left-6"
              } p-3 rounded-full hover:bg-gray-200`}
              onMouseEnter={() => {
                mouseOnControl.current = true;
              }}
              onMouseLeave={() => {
                mouseOnControl.current = false;
              }}
            >
              <img
                src={addIcon}
                className="h-11"
                onClick={() => navigate(`/edit-cour/${type}`)}
                alt="add"
              />
            </button>
          )}
          {cpt >= defaultPagesLength && teacherMode && (
            <div className="absolute -translate-x-1/2 bottom-12 left-1/2 flex justify-between w-48">
              {/*edit btn*/}
              <button
                className="rounded-full p-3 hover:bg-gray-200"
                onClick={() =>
                  navigate(
                    `/edit-cour/${type}?edit=true&pageNum=${
                      cpt - defaultPagesLength + 1
                    }`
                  )
                }
              >
                <img className="h-9" src={editIcon} alt="edit" />
              </button>
              {/*delete btn*/}
              <button
                className="rounded-full p-3 hover:bg-gray-200"
                onClick={handleDeletePage}
              >
                <img className="h-9" src={deleteIcon} alt="delete" />
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default CourControls;
