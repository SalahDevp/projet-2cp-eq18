const { contextBridge } = require("electron");
const initStoreRender = require("./data/initStoreRender");

//load -store api- in the render process window object
contextBridge.exposeInMainWorld("electronAPI", initStoreRender);
