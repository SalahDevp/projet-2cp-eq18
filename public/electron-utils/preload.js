const { contextBridge } = require("electron");
const initStoreRender = require("./ipc/initStoreRender");
const { initSaveNewCourseRender } = require("./ipc/saveNewCourse");

//load -store api- in window object
contextBridge.exposeInMainWorld("electronAPI", {
  ...initSaveNewCourseRender(),
  ...initStoreRender(),
});
