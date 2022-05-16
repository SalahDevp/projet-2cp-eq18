/**
 * stores page num (to be resotred if user exit and then later reopen the course)
 *  and sets the new cpt
 * @param {number} value -value to setCpt with
 * @param {'cour-axiale'|'cour-centrale'} courseType
 */
export default function changeCpt(courseType, value, setCpt, teacherMode) {
  //store cpt
  window.electronAPI.storeSet(
    `${courseType}.${teacherMode ? "teacher" : "student"}`,
    value
  );
  //set cpt
  setCpt(value);
}
