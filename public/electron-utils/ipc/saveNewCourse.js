const { ipcMain, ipcRenderer, app } = require("electron");
const fs = require("fs");
const path = require("path");

function initSaveNewCourseMain() {
  ipcMain.on("save-new-course", async (evnt, htmlContent) => {
    const coursesDirPath = path.join(app.getPath("userData"), "courses");
    if (!fs.existsSync(coursesDirPath)) fs.mkdirSync(coursesDirPath); //if dir doesnt exits create one
    const coursesArr = await fs.promises.readdir(coursesDirPath); //returns array of all files names in the dir
    const newFileName = "course" + coursesArr.length + 1 + ".html";
    fs.promises.writeFile(path.join(coursesDirPath, newFileName), htmlContent); //writes the file
  });
}

function initSaveNewCourseRender() {
  return {
    saveNewCourse: (htmlContent) =>
      ipcRenderer.send("save-new-course", htmlContent),
  };
}

module.exports = { initSaveNewCourseMain, initSaveNewCourseRender };
