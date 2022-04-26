const { ipcMain, ipcRenderer, app } = require("electron");
const fs = require("fs");
const path = require("path");

function initGetCourseContentMain() {
  ipcMain.handle("get-course-content", async (evnt, title) => {
    const coursesDirPath = path.join(app.getPath("userData"), "courses");
    //read course file
    const content = await fs.promises.readFile(
      path.join(coursesDirPath, title + ".html"),
      "utf-8"
    );
    return content;
  });
}

function initGetCourseContentRender() {
  return {
    getCourseContent: (title) =>
      ipcRenderer.invoke("get-course-content", title),
  };
}

module.exports = { initGetCourseContentMain, initGetCourseContentRender };
