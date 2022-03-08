const { ipcRenderer } = require("electron");

module.exports = {
  storeSet: (key, value) => ipcRenderer.send("store:set", key, value),
  storeGet: (key) => ipcRenderer.invoke("store:set", key),
  storeHas: (key) => ipcRenderer.invoke("store:has", key),
};
