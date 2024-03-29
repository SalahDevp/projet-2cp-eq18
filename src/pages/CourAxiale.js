import { useState, useEffect } from "react";
//components
import * as courPages from "components/Cours/courpages-axiale";
import CustomCourse from "components/Cours/CustomCourse";
import CourControls from "components/Cours/CourControls";
//translation
import { useTranslation } from "react-i18next";
import useRestorePage from "utils/course/useRestorePage";
import changeCpt from "utils/course/changeCpt";
import { useUserMode } from "AppContext";

const CourAxiale = () => {
  //state
  const [cpt, setCpt] = useState(0); //page counter
  const [pages, setPages] = useState([]);
  const [rerender, setRerender] = useState(false); //this var is toggled when techer deletes a page to reexecute useEffect
  //tarnslation
  const { i18n } = useTranslation();
  //user mode
  const { teacherMode } = useUserMode();

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
  useRestorePage("cour-axiale", setCpt, teacherMode, i18n.language); //get the stored page num
  useEffect(() => {
    //async block
    (async () => {
      //get pages created by the teacher
      const customPagesPathes = await window.electronAPI.getCoursePages(
        "axiale",
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
      <div className="relative pl-20 pr-20 pt-20 pb-7 flex-grow">
        <CourControls
          pagesLength={pages.length}
          cpt={cpt}
          setCpt={(value) =>
            changeCpt("cour-axiale", value, setCpt, teacherMode, i18n.language)
          }
          type="axiale"
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
export default CourAxiale;
