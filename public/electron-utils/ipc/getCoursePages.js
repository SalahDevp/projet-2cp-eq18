const { ipcMain, ipcRenderer, app } = require("electron");
const fs = require("fs");
const path = require("path");
const sortPages = require("../sortPages");

//returns pages absolute paths
function initGetCoursePagesMain() {
  ipcMain.handle("get-course-pages", async (evnt, type, language = "fr") => {
    const coursesDirPath = path.join(
      app.getPath("userData"),
      "courses",
      type,
      language
    );
    if (!fs.existsSync(coursesDirPath)) return []; //if folder doesn't exit
    try {
      const fileNames = await fs.promises.readdir(coursesDirPath);
      //sort
      sortPages(fileNames);
      //get all pages content
      const pagesPath = fileNames.map((fileName) =>
        path.join(coursesDirPath, fileName)
      );
      return pagesPath;
    } catch (e) {
      throw e;
    }
  });
}

function initGetCoursePagesRender() {
  return {
    getCoursePages: (type, language) =>
      ipcRenderer.invoke("get-course-pages", type, language),
  };
}

module.exports = { initGetCoursePagesMain, initGetCoursePagesRender };
