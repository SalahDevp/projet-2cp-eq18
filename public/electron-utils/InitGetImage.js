const { dialog } = require("electron");
const { ipcMain, ipcRenderer } = require("electron");

function initGetImageMain() {
  ipcMain.handle("open-image", (event) =>
    dialog.showOpenDialog({ properties: ["openFile"] })
  );
}
const initGetImageRender = {
  getImage: () => ipcRenderer.invoke("open-image"),
};

module.exports = { initGetImageMain, initGetImageRender };
