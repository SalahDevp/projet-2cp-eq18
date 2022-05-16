import { useEffect } from "react";
/**
 * sets cpt to the previously stored page if exits
 * @param {'cour-axiale'|'cour-centrale'} courseType
 * @param {Function} setCpt
 * @returns
 */
export default function useRestorePage(courseType, setCpt, teacherMode) {
  return useEffect(() => {
    const storeString = `${courseType}.${teacherMode ? "teacher" : "student"}`;
    //async bloc
    (async () => {
      try {
        const pageExits = await window.electronAPI.storeHas(storeString);
        //if no page num is stored exit
        if (!pageExits) return;
        const pageNum = await window.electronAPI.storeGet(storeString);
        setCpt(pageNum);
      } catch (e) {
        console.error(e);
      }
    })();
  }, [teacherMode]);
}
