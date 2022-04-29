import { useRef, useState } from "react";
//images
import rightArrow from "assets/cour/flecheD.png";
import leftArrow from "assets/cour/flecheL.png";
import addIcon from "assets/cour/add.png";
import editIcon from "assets/cour/edit.png";
import deleteIcon from "assets/cour/delete.png";
//routing
import { useNavigate } from "react-router-dom";

const CourControls = ({
  pagesLength,
  cpt,
  setCpt,
  type,
  defaultPagesLength,
}) => {
  const timer = useRef();
  const mouseOnControl = useRef(false); //if the mouse is on a one of the controls
  //state
  const [showControls, setShowControls] = useState(true);
  //navigation
  const navigate = useNavigate();

  const handleMouseMove = () => {
    if (!showControls) setShowControls(true);
    clearTimeout(timer.current);
    timer.current = setTimeout(() => {
      //only hide controls if mouse is not on one of them
      if (!mouseOnControl.current) setShowControls(false);
    }, 4000);
  };

  return (
    <div className="absolute inset-0" onMouseMove={handleMouseMove}>
      {showControls && (
        <>
          {cpt > 0 && (
            <img
              onMouseEnter={() => {
                mouseOnControl.current = true;
              }}
              onMouseLeave={() => {
                mouseOnControl.current = false;
              }}
              src={leftArrow}
              className="cursor-pointer absolute top-1/2 left-6 w-10 h-8"
              onClick={() => setCpt(cpt - 1)}
              alt="previous"
            />
          )}

          {cpt < pagesLength - 1 && (
            <img
              onMouseEnter={() => {
                mouseOnControl.current = true;
              }}
              onMouseLeave={() => {
                mouseOnControl.current = false;
              }}
              src={rightArrow}
              className="cursor-pointer absolute top-1/2 right-6 w-10 h-8"
              onClick={() => setCpt(cpt + 1)}
              alt="next"
            />
          )}
          {cpt === pagesLength - 1 && (
            <img
              onMouseEnter={() => {
                mouseOnControl.current = true;
              }}
              onMouseLeave={() => {
                mouseOnControl.current = false;
              }}
              src={addIcon}
              className="cursor-pointer absolute top-1/2 right-6 w-10 h-8"
              onClick={() => navigate(`/edit-cour/${type}`)}
              alt="add"
            />
          )}
          {cpt >= defaultPagesLength && (
            <div className="absolute -translate-x-1/2 bottom-12 left-1/2 flex justify-between w-40">
              <button
                className="border rounded-full bg-gray-200 p-3"
                onClick={() =>
                  navigate(
                    `/edit-cour/${type}?edit=true&pageNum=${
                      cpt - defaultPagesLength + 1
                    }`
                  )
                }
              >
                <img className="h-7" src={editIcon} alt="edit" />
              </button>
              <button className="border rounded-full bg-gray-200 p-3">
                <img className="h-7" src={deleteIcon} alt="delete" />
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default CourControls;
