const { ipcMain, ipcRenderer, app } = require("electron");
const fs = require("fs");
const path = require("path");

function initSaveNewCourseMain() {
  ipcMain.handle("save-new-course", async (evnt, courseTitle, htmlContent) => {
    const coursesDirPath = path.join(app.getPath("userData"), "courses");
    if (!fs.existsSync(coursesDirPath)) fs.mkdirSync(coursesDirPath); //if dir doesnt exits create one
    const newFileName = courseTitle.trim().replace(/\s/g, "_") + ".html";
    try {
      await fs.promises.writeFile(
        path.join(coursesDirPath, newFileName),
        htmlContent
      ); //writes the file
      return true;
    } catch (err) {
      return false;
    }
  });
}

function initSaveNewCourseRender() {
  return {
    saveNewCourse: (title, htmlContent) =>
      ipcRenderer.invoke("save-new-course", title, htmlContent),
  };
}

module.exports = { initSaveNewCourseMain, initSaveNewCourseRender };
