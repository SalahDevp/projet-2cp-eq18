const { ipcMain, ipcRenderer, app } = require("electron");
const fs = require("fs");
const path = require("path");

function initGetCourseTitlesMain() {
  ipcMain.handle("get-course-titles", async (evnt) => {
    const coursesDirPath = path.join(app.getPath("userData"), "courses");
    const files = await fs.promises.readdir(coursesDirPath);
    //remove file extension and replace '_' with spaces from file names then return the array
    return files.map((fileName) =>
      path.parse(fileName).name.replace(/_/g, " ")
    );
  });
}

function initGetCourseTitlesRender() {
  return {
    getCourseTitles: () => ipcRenderer.invoke("get-course-titles"),
  };
}

module.exports = { initGetCourseTitlesMain, initGetCourseTitlesRender };
