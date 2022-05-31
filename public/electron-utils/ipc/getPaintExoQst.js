const { ipcMain, ipcRenderer, app } = require("electron");
const fs = require("fs");
const path = require("path");

function initGetPaintExoQstMain() {
  ipcMain.handle("get-paint-qst", async (evnt, qstNum, customEx) => {
    const questionsPath = customEx
      ? path.join(app.getPath("userData"), "exoGrille")
      : path.join(__dirname, "../..", "exercices", "grille");
    try {
      const jsonContent = await fs.promises.readFile(
        path.join(questionsPath, `question${qstNum}.json`),
        "utf-8"
      );
      const questionObj = JSON.parse(jsonContent);
      return questionObj;
    } catch (e) {
      console.error(e);
      throw new Error(e);
    }
  });
}

function initGetPaintExoQstRender() {
  return {
    getPaintExoQst: (qstNum, customEx) =>
      ipcRenderer.invoke("get-paint-qst", qstNum, customEx),
  };
}
module.exports = { initGetPaintExoQstMain, initGetPaintExoQstRender };
