const { app, BrowserWindow } = require("electron");

const path = require("path");
const isDev = require("electron-is-dev");
const store = require("./electron-utils/store");
//ipc
const initStoreMain = require("./electron-utils/ipc/initStoreMain");
const { initSaveNewCourseMain } = require("./electron-utils/ipc/saveNewCourse");

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
  //store.openInEditor();
  createWindow();
});

// Quit when all windows are closed.
app.on("window-all-closed", () => app.quit());
