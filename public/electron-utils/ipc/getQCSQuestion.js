const { ipcMain, ipcRenderer } = require("electron");
const fs = require("fs");
const path = require("path");

function initGetQCSQustionMain() {
  ipcMain.handle("get-QCS-question", async (evnt, questionNum) => {
    const questionsPath = path.join(
      __dirname,
      "../..",
      "exercices",
      "QCS",
      "questions"
    );
    try {
      const jsonContent = await fs.promises.readFile(
        path.join(questionsPath, `question${questionNum}.json`),
        "utf-8"
      );
      const questionObj = JSON.parse(jsonContent);
      questionObj.image = path.join(
        "file:",
        questionsPath,
        "..",
        "images",
        questionObj.image
      );
      return questionObj;
    } catch (e) {
      console.error(e);
      throw new Error(e);
    }
  });
}

function initGetQCSQustionRender() {
  return {
    getQCSQuestion: (questionNum) =>
      ipcRenderer.invoke("get-QCS-question", questionNum),
  };
}

module.exports = { initGetQCSQustionMain, initGetQCSQustionRender };
