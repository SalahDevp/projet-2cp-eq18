const { ipcMain, ipcRenderer } = require("electron");
const fs = require("fs");
const path = require("path");

function initGetPaintExoQstMain() {
  ipcMain.handle("get-paint-qst", async (evnt, qstNum) => {
    const questionsPath = path.join(__dirname, "../..", "exercices", "grille");
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
    getPaintExoQst: (qstNum) => ipcRenderer.invoke("get-paint-qst", qstNum),
  };
}
module.exports = { initGetPaintExoQstMain, initGetPaintExoQstRender };
