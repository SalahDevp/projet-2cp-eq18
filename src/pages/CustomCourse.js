import Nav from "components/Nav";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const CustomCourse = () => {
  const { title } = useParams(); //title is the same as file name ('_' instead of ' ')
  const [path, setPath] = useState("");
  useEffect(() => {
    window.electronAPI.getCoursePath(title).then((path) => setPath(path));
  }, []);
  return (
    <div className="flex flex-col w-screen min-h-screen">
      <Nav title={title.replace(/_/g, " ")} pathAvant="/menu-cour" />
      <iframe
        title="custom-cour"
        src={path}
        className="bg-white w-full flex-grow"
      ></iframe>
    </div>
  );
};

export default CustomCourse;
