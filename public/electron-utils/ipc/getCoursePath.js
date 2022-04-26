const { ipcMain, ipcRenderer, app } = require("electron");
const path = require("path");

function initGetCoursePathMain() {
  ipcMain.handle("get-course-path", (evnt, title) => {
    const coursesDirPath = path.join(app.getPath("userData"), "courses");

    return path.join("file:/", coursesDirPath, title + ".html");
  });
}

function initGetCoursePathRender() {
  return {
    getCoursePath: (title) => ipcRenderer.invoke("get-course-path", title),
  };
}

module.exports = { initGetCoursePathMain, initGetCoursePathRender };
