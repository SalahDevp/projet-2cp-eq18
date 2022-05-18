const { ipcMain, ipcRenderer, dialog } = require("electron");
const fs = require("fs");

function initGetPaintDrawingMain() {
  ipcMain.handle("get-paint-drawing", async (evnt) => {
    try {
      const dialogRes = await dialog.showOpenDialog({
        title: "charger un dessin",
        properties: ["openFile"],
      });
      if (dialogRes.canceled) return;
      const fileContent = await fs.promises.readFile(
        dialogRes.filePaths[0],
        "utf-8"
      );
      return fileContent;
    } catch (e) {
      throw new Error(e);
    }
  });
}

function initGetPaintDrawingRender() {
  return {
    getPaintDrawing: () => ipcRenderer.invoke("get-paint-drawing"),
  };
}

module.exports = { initGetPaintDrawingMain, initGetPaintDrawingRender };
