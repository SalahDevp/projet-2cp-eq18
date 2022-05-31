const { ipcMain, ipcRenderer, app } = require("electron");
const fs = require("fs");
const path = require("path");

function initSaveCoursePageMain() {
  ipcMain.handle(
    "save-course-page",
    async (evnt, type, htmlContent, pageNum, language = "fr") => {
      const coursesDirPath = path.join(
        app.getPath("userData"),
        "courses",
        type,
        language
      );
      if (!fs.existsSync(coursesDirPath))
        fs.mkdirSync(coursesDirPath, { recursive: true }); //if dir doesnt exits create one
      const fileNames = await fs.promises.readdir(coursesDirPath);
      const newFileName = `page${pageNum || fileNames.length + 1}.html`;
      try {
        await fs.promises.writeFile(
          path.join(coursesDirPath, newFileName),
          htmlContent
        ); //writes the file
        return true;
      } catch (err) {
        return false;
      }
    }
  );
}

function initSaveCoursePageRender() {
  return {
    /**
     *
     * @param {'axiale'|'centrale'} type -on wich course should the page be saved
     * @param pageNum -if not specified if creates a new page
     *
     */
    saveCoursePage: (type, htmlContent, pageNum, language) =>
      ipcRenderer.invoke(
        "save-course-page",
        type,
        htmlContent,
        pageNum,
        language
      ),
  };
}

module.exports = { initSaveCoursePageMain, initSaveCoursePageRender };
