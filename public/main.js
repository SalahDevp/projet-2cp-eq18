const { app, BrowserWindow } = require("electron");

const path = require("path");
const isDev = require("electron-is-dev");

//ipc
const initStoreMain = require("./electron-utils/ipc/initStoreMain");
const { initSaveNewCourseMain } = require("./electron-utils/ipc/saveNewCourse");
const {
  initGetCourseTitlesMain,
} = require("./electron-utils/ipc/GetCourseTitles");
const {
  initGetCourseContentMain,
} = require("./electron-utils/ipc/getCourseContent");
const { initGetCoursePathMain } = require("./electron-utils/ipc/getCoursePath");

let win;

function createWindow() {
  // Create the browser window.
  win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, "/electron-utils/preload.js"),
      webSecurity: isDev ? false : true,
    },
    // frame:false,
  });

  win.loadURL(
    isDev
      ? "http://localhost:3000"
      : `file://${path.join(__dirname, "../build/index.html")}`
  );
}

app.whenReady().then(() => {
  initStoreMain();
  initSaveNewCourseMain();
  initGetCourseTitlesMain();
  initGetCourseContentMain();
  initGetCoursePathMain();
  //store.openInEditor();
  createWindow();
});

// Quit when all windows are closed.
app.on("window-all-closed", () => app.quit());
