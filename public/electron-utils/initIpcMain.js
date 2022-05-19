const initStoreMain = require("./ipc/initStoreMain");
const { initSaveCoursePageMain } = require("./ipc/saveCoursePage");
const { initDeleteCoursePageMain } = require("./ipc/deleteCoursePage");
const { initGetCoursePageContentMain } = require("./ipc/getCoursePageContent");
const { initGetCoursePagesMain } = require("./ipc/getCoursePages");
const { initGetQuizQuestionMain } = require("./ipc/getQuizQuestion");
const { initGetImageQCMQustionMain } = require("./ipc/getImageQCMQuestion");
const { initSavePaintDrawingMain } = require("./ipc/savePaintDrawing");
const { initGetPaintDrawingMain } = require("./ipc/getPaintDrawing");
const { initGetPaintExoQstMain } = require("./ipc/getPaintExoQst");

function initIpcMain() {
  initStoreMain();
  initSaveCoursePageMain();
  initDeleteCoursePageMain();
  initGetCoursePageContentMain();
  initGetCoursePagesMain();
  initGetQuizQuestionMain();
  initGetImageQCMQustionMain();
  initSavePaintDrawingMain();
  initGetPaintDrawingMain();
  initGetPaintExoQstMain();
}

module.exports = initIpcMain;
