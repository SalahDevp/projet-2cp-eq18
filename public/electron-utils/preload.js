const { contextBridge } = require("electron");
const initStoreRender = require("./data/initStoreRender");
const { initGetImageRender } = require("./InitGetImage");

//load -store api- in window object
contextBridge.exposeInMainWorld("electronAPI", {
  ...initStoreRender,
  initGetImageRender,
});
