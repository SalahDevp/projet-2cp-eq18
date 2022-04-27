const { ipcMain, ipcRenderer, app } = require("electron");
const fs = require("fs");
const path = require("path");

function initSaveNewCoursePageMain() {
  ipcMain.handle("save-new-course-page", async (evnt, type, htmlContent) => {
    const coursesDirPath = path.join(app.getPath("userData"), "courses", type);
    if (!fs.existsSync(coursesDirPath)) fs.mkdirSync(coursesDirPath); //if dir doesnt exits create one
    const fileNames = await fs.promises.readdir(coursesDirPath);
    const newFileName = `page${fileNames.length + 1}.html`;
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

function initSaveNewCoursePageRender() {
  return {
    /**
     *
     * @param {'axiale'|'centrale'} type -on wich course should the page be saved
     *
     */
    saveNewCoursePage: (type, htmlContent) =>
      ipcRenderer.invoke("save-new-course-page", type, htmlContent),
  };
}

module.exports = { initSaveNewCoursePageMain, initSaveNewCoursePageRender };
