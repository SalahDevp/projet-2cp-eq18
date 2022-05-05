import { useState, useEffect } from "react";
//components
import * as courPages from "components/Cours/courpages-centrale";
import Nav from "components/Nav";
import CustomCourse from "components/Cours/CustomCourse";
import CourControls from "components/Cours/CourControls";

const CourCentrale = () => {
  const [cpt, setCpt] = useState(0); //page counter
  const [pages, setPages] = useState([]); //pages array
  const [rerender, setRerender] = useState(false); //this var is toggled when techer deletes a page to reexecute useEffect

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
        <CustomCourse path={path} />
      ));
      setPages([...tab, ...customPages]);
    })();
  }, [rerender]);

  return (
    <div className="bg-white h-screen flex flex-col">
      {/*<Nav title="Cour" pathAvant="/Menu-Cour" />*/}

      <div className="relative pl-20 pr-20 pt-5 pb-7 flex-grow">
        <CourControls
          pagesLength={pages.length}
          cpt={cpt}
          setCpt={setCpt}
          type="centrale"
          defaultPagesLength={tab.length}
          setRerender={setRerender}
        />
        {pages[cpt]}
        {cpt > 0 && (
          <p className="absolute left-1/2 bottom-2 -translate-x-1/2">{cpt}</p>
        )}
      </div>
    </div>
  );
};

export default CourCentrale;