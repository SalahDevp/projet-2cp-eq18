const initStoreMain = require("./ipc/initStoreMain");
const { initSaveCoursePageMain } = require("./ipc/saveCoursePage");
const { initDeleteCoursePageMain } = require("./ipc/deleteCoursePage");
const { initGetCoursePageContentMain } = require("./ipc/getCoursePageContent");
const { initGetCoursePagesMain } = require("./ipc/getCoursePages");
const { initGetQuizQustionMain } = require("./ipc/getQuizQuestion");

function initIpcMain() {
  initStoreMain();
  initSaveCoursePageMain();
  initDeleteCoursePageMain();
  initGetCoursePageContentMain();
  initGetCoursePagesMain();
  initGetQuizQustionMain();
}

module.exports = initIpcMain;
