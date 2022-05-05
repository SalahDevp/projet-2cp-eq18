const initStoreMain = require("./ipc/initStoreMain");
const { initSaveCoursePageMain } = require("./ipc/saveCoursePage");
const { initDeleteCoursePageMain } = require("./ipc/deleteCoursePage");
const { initGetCoursePageContentMain } = require("./ipc/getCoursePageContent");
const { initGetCoursePagesMain } = require("./ipc/getCoursePages");
const { initGetQCSQustionMain } = require("./ipc/getQCSQuestion");

function initIpcMain() {
  initStoreMain();
  initSaveCoursePageMain();
  initDeleteCoursePageMain();
  initGetCoursePageContentMain();
  initGetCoursePagesMain();
  initGetQCSQustionMain();
}

module.exports = initIpcMain;
