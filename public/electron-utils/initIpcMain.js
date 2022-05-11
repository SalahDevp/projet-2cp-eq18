const initStoreMain = require("./ipc/initStoreMain");
const { initSaveCoursePageMain } = require("./ipc/saveCoursePage");
const { initDeleteCoursePageMain } = require("./ipc/deleteCoursePage");
const { initGetCoursePageContentMain } = require("./ipc/getCoursePageContent");
const { initGetCoursePagesMain } = require("./ipc/getCoursePages");
const { initGetQuizQuestionMain } = require("./ipc/getQuizQuestion");
const { initGetImageQCMQustionMain } = require("./ipc/getImageQCMQuestion");

function initIpcMain() {
  initStoreMain();
  initSaveCoursePageMain();
  initDeleteCoursePageMain();
  initGetCoursePageContentMain();
  initGetCoursePagesMain();
  initGetQuizQuestionMain();
  initGetImageQCMQustionMain();
}

module.exports = initIpcMain;
