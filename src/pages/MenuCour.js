import React, { useEffect, useState } from "react";
import Nav from "components/Nav";
import { useNavigate } from "react-router-dom";
import Box from "components/menu-mode/Box";

const MenuCour = () => {
  const navigate = useNavigate();
  const [customCourseTitles, setCustomCourseTitles] = useState([]);
  useEffect(() => {
    window.electronAPI
      .getCourseTitles()
      .then((titles) => setCustomCourseTitles(titles));
  }, []);
  return (
    <div>
      <Nav title="Cour" pathAvant="/menu" />
      <div className="">
        <div
          className=" absolute top-1/2 left-1/2
        -translate-x-1/2 -translate-y-1/2 
        h-96 min-w-fit flex items-center justify-between "
        >
          <div className="m-4">
            <Box
              // image={}
              title="Centale"
              handleClick={() => navigate("/cour-centrale")}
            />
          </div>
          <div className="m-4">
            <Box
              //  image={}
              title="Axiale"
              handleClick={() => navigate("/cour-axiale")}
            />
          </div>
          {customCourseTitles.map((title) => (
            <div className="m-4">
              <Box
                key={title}
                title={title}
                handleClick={() =>
                  navigate(`/custom-course/${title.replace(/\s/g, "_")}`)
                }
              />
            </div>
          ))}
          <button onClick={() => navigate("/edit-cour")}>add</button>
        </div>
      </div>
    </div>
  );
};

export default MenuCour;
