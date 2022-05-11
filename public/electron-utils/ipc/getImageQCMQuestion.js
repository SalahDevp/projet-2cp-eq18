const { ipcMain, ipcRenderer } = require("electron");
const fs = require("fs");
const path = require("path");

function initGetImageQCMQustionMain() {
  ipcMain.handle(
    "get-image-qcm-question",
    async (evnt, questionNum, language = "fr") => {
      const questionsPath = path.join(
        __dirname,
        "../..",
        "exercices",
        "ImageQCM",
        "questions"
      );
      try {
        const jsonContent = await fs.promises.readFile(
          path.join(questionsPath, `question${questionNum}.json`),
          "utf-8"
        );
        const questionObj = JSON.parse(jsonContent);
        return {
          question: questionObj.question[language],
          optionsSrc: questionObj.options.map((opt) =>
            path.join("file:", questionsPath, "..", "images", opt)
          ),
          rightOptions: questionObj.rightOptions,
        };
      } catch (e) {
        console.error(e);
        throw new Error(e);
      }
    }
  );
}

function initGetImageQCMQustionRender() {
  return {
    getImageQCMQuestion: (questionNum) =>
      ipcRenderer.invoke("get-image-qcm-question", questionNum),
  };
}

module.exports = { initGetImageQCMQustionMain, initGetImageQCMQustionRender };
