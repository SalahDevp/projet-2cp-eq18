const { ipcMain, ipcRenderer } = require("electron");
const fs = require("fs");
const path = require("path");

function initGetQuizQuestionMain() {
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

function initGetQuizQuestionRender() {
  return {
    getQuizQuestion: (type, questionNum, language) =>
      ipcRenderer.invoke("get-quiz-question", type, questionNum, language),
  };
}

module.exports = { initGetQuizQuestionMain, initGetQuizQuestionRender };
