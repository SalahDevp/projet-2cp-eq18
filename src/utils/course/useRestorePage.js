import { useEffect } from "react";
/**
 * sets cpt to the previously stored page if exits
 * @param {'cour-axiale'|'cour-centrale'} courseType
 * @param {Function} setCpt
 * @returns
 */
export default function useRestorePage(courseType, setCpt) {
  return useEffect(() => {
    //async bloc
    (async () => {
      try {
        const pageExits = await window.electronAPI.storeHas(courseType);
        //if no page num is stored exit
        if (!pageExits) return;
        const pageNum = await window.electronAPI.storeGet(courseType);
        setCpt(pageNum);
      } catch (e) {
        console.error(e);
      }
    })();
  }, []);
}
