const { ipcMain, ipcRenderer, app } = require("electron");
const fs = require("fs");
const path = require("path");

function initGetCustomPaintExoNumMain() {
  ipcMain.handle("get-custom-paint-num", async () => {
    const questionsPath = path.join(app.getPath("userData"), "exoGrille");
    if (!fs.existsSync(questionsPath)) return 0;
    try {
      const exoNum = (await fs.promises.readdir(questionsPath, "utf-8")).length;
      return exoNum;
    } catch (e) {
      console.error(e);
      throw new Error(e);
    }
  });
}

function initGetCustomPaintExoNumRender() {
  return {
    getCustomPaintExoNum: () => ipcRenderer.invoke("get-custom-paint-num"),
  };
}
module.exports = {
  initGetCustomPaintExoNumMain,
  initGetCustomPaintExoNumRender,
};
