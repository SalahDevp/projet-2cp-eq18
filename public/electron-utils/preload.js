const { contextBridge } = require("electron");
const initStoreRender = require("./ipc/initStoreRender");
const { initSaveCoursePageRender } = require("./ipc/saveCoursePage");
const {
  initGetCoursePageContentRender,
} = require("./ipc/getCoursePageContent");
const { initGetCoursePagesRender } = require("./ipc/getCoursePages");

//load -store api- in window object
contextBridge.exposeInMainWorld("electronAPI", {
  ...initSaveCoursePageRender(),
  ...initStoreRender(),
  ...initGetCoursePageContentRender(),
  ...initGetCoursePagesRender(),
});
