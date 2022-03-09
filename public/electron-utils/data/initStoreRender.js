const { ipcRenderer } = require("electron");

module.exports = {
  storeSet: (key, value) => ipcRenderer.send("store:set", key, value), //returns void
  storeGet: (key) => ipcRenderer.invoke("store:set", key), //returns promise<any>
  storeHas: (key) => ipcRenderer.invoke("store:has", key), //returns promise<bool>
};
