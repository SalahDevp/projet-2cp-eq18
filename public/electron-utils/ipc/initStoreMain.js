const store = require("../store");

const { ipcMain } = require("electron");

//init ipcMain event handelers
function initStoreMain() {
  ipcMain.on("store:set", (event, key, value) => store.set(key, value));
  ipcMain.handle("store:get", (event, key) => store.get(key, undefined));
  ipcMain.handle("store:has", (event, key) => store.has(key));
}
module.exports = initStoreMain;
