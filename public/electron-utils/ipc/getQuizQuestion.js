const { ipcMain, ipcRenderer } = require("electron");
const fs = require("fs");
const path = require("path");

function initGetQuizQustionMain() {
  ipcMain.handle(
    "get-quiz-question",
    async (evnt, type, questionNum, language = "fr") => {
      const questionsPath = path.join(
        __dirname,
        "../..",
        "exercices",
        type,
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
          image: path.join(
            "file:",
            questionsPath,
            "..",
            "images",
            questionObj.image
          ),
          options: questionObj.options[language],
          rightOptions: questionObj.rightOptions,
        };
      } catch (e) {
        console.error(e);
        throw new Error(e);
      }
    }
  );
}

function initGetQuizQustionRender() {
  return {
    getQuizQuestion: (type, questionNum) =>
      ipcRenderer.invoke("get-quiz-question", type, questionNum),
  };
}

module.exports = { initGetQuizQustionMain, initGetQuizQustionRender };
