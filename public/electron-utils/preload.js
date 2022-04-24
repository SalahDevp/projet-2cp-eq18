const { contextBridge } = require("electron");
const initStoreRender = require("./ipc/initStoreRender");
const { initSaveNewCourseRender } = require("./ipc/saveNewCourse");
const { initGetCourseTitlesRender } = require("./ipc/getCourseTitles");
const { initGetCourseContentRender } = require("./ipc/getCourseContent");

//load -store api- in window object
contextBridge.exposeInMainWorld("electronAPI", {
  ...initSaveNewCourseRender(),
  ...initStoreRender(),
  ...initGetCourseTitlesRender(),
  ...initGetCourseContentRender(),
});
