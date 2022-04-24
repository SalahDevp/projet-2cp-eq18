import Nav from "components/Nav";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const CustomCourse = () => {
  const { title } = useParams();
  const [content, setContent] = useState("");
  useEffect(() => {
    window.electronAPI.getCourseContent(title).then((cont) => setContent(cont));
  }, []);
  return (
    <div>
      <Nav title={title.replace(/_/g, " ")} pathAvant="/menu-cour" />
      <div
        className="bg-white prose max-w-none h-100 w-screen p-2"
        dangerouslySetInnerHTML={{ __html: content }}
      ></div>
    </div>
  );
};

export default CustomCourse;
