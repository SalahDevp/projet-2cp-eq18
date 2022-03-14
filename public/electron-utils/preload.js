const { contextBridge } = require("electron");
const initStoreRender = require("./data/initStoreRender");

//load -store api- in window object
contextBridge.exposeInMainWorld("electronAPI", initStoreRender);
