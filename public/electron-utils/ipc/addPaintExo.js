const { ipcMain, ipcRenderer, app } = require("electron");
const fs = require("fs");
const path = require("path");

function initAddPaintExoMain() {
  ipcMain.handle("add-paint-exo", async (evnt, jsonString) => {
    const exoGrilleDirPath = path.join(app.getPath("userData"), "exoGrille");
    if (!fs.existsSync(exoGrilleDirPath)) fs.mkdirSync(exoGrilleDirPath); //if dir doesnt exits create one
    const fileNames = await fs.promises.readdir(exoGrilleDirPath);
    const newFileName = `question${fileNames.length + 1}.json`;
    try {
      await fs.promises.writeFile(
        path.join(exoGrilleDirPath, newFileName),
        jsonString
      ); //writes the file
    } catch (err) {
      throw err;
    }
  });
}

function initAddPaintExoRender() {
  return {
    addPaintExo: (jsonString) =>
      ipcRenderer.invoke("add-paint-exo", jsonString),
  };
}

module.exports = { initAddPaintExoMain, initAddPaintExoRender };
