const { ipcMain, ipcRenderer, app } = require("electron");
const fs = require("fs");
const path = require("path");

function initGetCoursePageContentMain() {
  ipcMain.handle(
    "get-course-content",
    async (evnt, courseType, pageNum, language = "fr") => {
      const coursesDirPath = path.join(
        app.getPath("userData"),
        "courses",
        courseType,
        language
      );
      try {
        const content = await fs.promises.readFile(
          path.join(coursesDirPath, `page${pageNum}.html`),
          "utf-8"
        );
        return content;
      } catch (e) {
        throw new Error("file doesn't exist");
      }
    }
  );
}

function initGetCoursePageContentRender() {
  return {
    getCoursePageContent: (courseType, pageNum, language) =>
      ipcRenderer.invoke("get-course-content", courseType, pageNum, language),
  };
}

module.exports = {
  initGetCoursePageContentMain,
  initGetCoursePageContentRender,
};
