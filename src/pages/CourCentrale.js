import { useState, useEffect } from "react";
//components
import * as courPages from "components/Cours/courpages-centrale";
import Nav from "components/Nav";
import CustomCoursePage from "components/Cours/CustomCoursePage";
import CourControls from "components/Cours/CourControls";

const CourCentrale = () => {
  const [cpt, setCpt] = useState(0); //page counter
  const [pages, setPages] = useState([]); //pages array

  const tab = [
    <courPages.TBMC />,
    <courPages.Courp1 />,
    <courPages.Courp2 />,
    <courPages.Courp3 />,
    <courPages.Courp4 />,
    <courPages.Courp5 />,
    <courPages.Courp6 />,
    <courPages.Courp7 />,
    <courPages.Courp8 />,
    <courPages.Courp9 />,
    <courPages.Courp10 />,
  ];
  useEffect(() => {
    //async block
    (async () => {
      //get pages created by the teacher
      const customPagesPathes = await window.electronAPI.getCoursePages(
        "centrale"
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
          type="centrale"
        />
        {pages[cpt]}
        {cpt > 0 && <p className="absolute left-1/2 bottom-2">{cpt}</p>}
      </div>
    </div>
  );
};

export default CourCentrale;
