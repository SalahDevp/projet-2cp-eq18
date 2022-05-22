const { ipcMain, ipcRenderer, dialog } = require("electron");
const fs = require("fs");

function initSavePaintDrawingMain() {
  ipcMain.on("save-paint-drawing", async (evnt, shapesStr) => {
    try {
      const dialogRes = await dialog.showSaveDialog({
        title: "sauvegarder le dessin",
        defaultPath: "mon-dessin",
      });
      if (dialogRes.canceled) return;
      fs.promises.writeFile(dialogRes.filePath, shapesStr, "utf-8");
    } catch (e) {
      throw new Error(e);
    }
  });
}

function initSavePaintDrawingRender() {
  return {
    savePaintDrawing: (shapes) =>
      ipcRenderer.send("save-paint-drawing", shapes),
  };
}

module.exports = { initSavePaintDrawingMain, initSavePaintDrawingRender };
