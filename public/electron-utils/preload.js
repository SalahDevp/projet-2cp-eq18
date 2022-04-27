const { contextBridge } = require("electron");
const initStoreRender = require("./ipc/initStoreRender");
const { initSaveNewCoursePageRender } = require("./ipc/saveNewCoursePage");
const { initGetCourseTitlesRender } = require("./ipc/getCourseTitles");
const { initGetCoursePagesRender } = require("./ipc/getCoursePages");
const { initGetCoursePathRender } = require("./ipc/getCoursePath");

//load -store api- in window object
contextBridge.exposeInMainWorld("electronAPI", {
  ...initSaveNewCoursePageRender(),
  ...initStoreRender(),
  ...initGetCourseTitlesRender(),
  ...initGetCoursePagesRender(),
  ...initGetCoursePathRender(),
});
