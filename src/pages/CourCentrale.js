import { useState, useEffect } from "react";
//components
import * as courPages from "components/Cours/courpages-centrale";
import CustomCourse from "components/Cours/CustomCourse";
import CourControls from "components/Cours/CourControls";
//translation
import { useTranslation } from "react-i18next";
import changeCpt from "utils/course/changeCpt";
import useRestorePage from "utils/course/useRestorePage";
import { useUserMode } from "AppContext";

const CourCentrale = () => {
  //state
  const [cpt, setCpt] = useState(0); //page counter
  const [pages, setPages] = useState([]); //pages array
  const [rerender, setRerender] = useState(false); //this var is toggled when techer deletes a page to reexecute useEffect
  //translation
  const { i18n } = useTranslation();
  //userMode
  const { teacherMode } = useUserMode();

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

  useRestorePage("cour-centrale", setCpt, teacherMode, i18n.language); //get the stored page num
  useEffect(() => {
    //async block
    (async () => {
      //get pages created by the teacher
      const customPagesPathes = await window.electronAPI.getCoursePages(
        "centrale",
        i18n.language
      );
      const customPages = customPagesPathes.map((path) => (
        <CustomCourse path={path} />
      ));
      setPages([...tab, ...customPages]);
    })();
  }, [rerender, i18n.language]);

  return (
    <div
      className={
        cpt === 0
          ? "bg-beige h-screen flex flex-col"
          : "bg-white h-screen flex flex-col"
      }
    >
      {/*<Nav title="Cour" pathAvant="/Menu-Cour" />*/}

      <div className="relative pl-20 pr-20 pt-20 pb-7 flex-grow">
        <CourControls
          pagesLength={pages.length}
          cpt={cpt}
          setCpt={(value) =>
            changeCpt(
              "cour-centrale",
              value,
              setCpt,
              teacherMode,
              i18n.language
            )
          }
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
