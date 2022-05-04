const initStoreMain = require("./ipc/initStoreMain");
const { initSaveCoursePageMain } = require("./ipc/saveCoursePage");
const { initDeleteCoursePageMain } = require("./ipc/deleteCoursePage");
const { initGetCoursePageContentMain } = require("./ipc/getCoursePageContent");
const { initGetCoursePagesMain } = require("./ipc/getCoursePages");

function initIpcMain() {
  initStoreMain();
  initSaveCoursePageMain();
  initDeleteCoursePageMain();
  initGetCoursePageContentMain();
  initGetCoursePagesMain();
}

module.exports = initIpcMain;
