import { useState, useEffect } from "react";
//components
import * as courPages from "components/Cours/courpages-axiale";
import Nav from "components/Nav";
import CustomCoursePage from "components/Cours/CustomCoursePage";
import CourControls from "components/Cours/CourControls";

const CourAxiale = () => {
  const [cpt, setCpt] = useState(0);
  const [pages, setPages] = useState([]);

  const tab = [
    <courPages.TBMA />,
    <courPages.CourA1 />,
    <courPages.CourA2 />,
    <courPages.CourA3 />,
    <courPages.CourA4 />,
    <courPages.CourA5 />,
    <courPages.CourA6 />,
    <courPages.CourA7 />,
    <courPages.CourA8 />,
    <courPages.CourA9 />,
    <courPages.CourA10 />,
    <courPages.CourA11 />,
    <courPages.CourA12 />,
    <courPages.CourA13 />,
    <courPages.CourA14 />,
    <courPages.CourA15 />,
  ];

  useEffect(() => {
    //async block
    (async () => {
      //get pages created by the teacher
      const customPagesPathes = await window.electronAPI.getCoursePages(
        "axiale"
      );
      const customPages = customPagesPathes.map((path) => (
        <CustomCoursePage path={path} />
      ));
      setPages([...tab, ...customPages]);
    })();
  }, []);

  return (
    <div className="bg-white h-screen flex flex-col">
      <Nav title="Cour" pathAvant="/Menu-Cour" />

      <div className="relative pl-20 pr-20 pt-5 flex-grow">
        <CourControls
          pagesLength={pages.length}
          cpt={cpt}
          setCpt={setCpt}
          type="axiale"
        />
        {pages[cpt]}
        {cpt > 0 && <p className="absolute left-1/2 bottom-2">{cpt}</p>}
      </div>
    </div>
  );
};
export default CourAxiale;
