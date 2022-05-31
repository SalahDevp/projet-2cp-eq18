const { ipcMain, ipcRenderer, app } = require("electron");
const fs = require("fs");
const path = require("path");
const sortPages = require("../sortPages");

//returns pages absolute paths
function initDeleteCoursePageMain() {
  ipcMain.handle(
    "delete-course-page",
    async (evnt, type, pageNum, language = "fr") => {
      const coursesDirPath = path.join(
        app.getPath("userData"),
        "courses",
        type,
        language
      );
      try {
        //delete file
        await fs.promises.unlink(
          path.join(coursesDirPath, `page${pageNum}.html`)
        );
        const files = await fs.promises.readdir(coursesDirPath);
        //sort
        sortPages(files);
        //rename all next pages
        for (let i = pageNum - 1; i < files.length; i++) {
          await fs.promises.rename(
            path.join(coursesDirPath, files[i]),
            path.join(coursesDirPath, `page${i + 1}.html`)
          );
        }
      } catch (e) {
        console.error(e);
      }
    }
  );
}

function initDeleteCoursePageRender() {
  return {
    deleteCoursePage: (type, pageNum, language) =>
      ipcRenderer.invoke("delete-course-page", type, pageNum, language),
  };
}

module.exports = { initDeleteCoursePageMain, initDeleteCoursePageRender };
