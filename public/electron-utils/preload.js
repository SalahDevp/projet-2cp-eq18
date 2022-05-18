const { contextBridge } = require("electron");
const initStoreRender = require("./ipc/initStoreRender");
const { initSaveCoursePageRender } = require("./ipc/saveCoursePage");
const { initDeleteCoursePageRender } = require("./ipc/deleteCoursePage");
const {
  initGetCoursePageContentRender,
} = require("./ipc/getCoursePageContent");
const { initGetCoursePagesRender } = require("./ipc/getCoursePages");
const { initGetQuizQuestionRender } = require("./ipc/getQuizQuestion");
const { initGetImageQCMQustionRender } = require("./ipc/getImageQCMQuestion");
const { initSavePaintDrawingRender } = require("./ipc/savePaintDrawing");
const { initGetPaintDrawingRender } = require("./ipc/getPaintDrawing");

//load -store api- in window object
contextBridge.exposeInMainWorld("electronAPI", {
  ...initSaveCoursePageRender(),
  ...initDeleteCoursePageRender(),
  ...initStoreRender(),
  ...initGetCoursePageContentRender(),
  ...initGetCoursePagesRender(),
  ...initGetQuizQuestionRender(),
  ...initGetImageQCMQustionRender(),
  ...initSavePaintDrawingRender(),
  ...initGetPaintDrawingRender(),
});
