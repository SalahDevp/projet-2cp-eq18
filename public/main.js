const { app, BrowserWindow } = require("electron");

const path = require("path");
const isDev = require("electron-is-dev");
//ipc
const initIpcMain = require("./electron-utils/initIpcMain");

function createWindow() {
  // Create the browser window.
  const win = new BrowserWindow({
    fullscreen: true,
    resizable: false,
    show: false,
    webPreferences: {
      preload: path.join(__dirname, "/electron-utils/preload.js"),
      webSecurity: isDev ? false : true,
    },
  });

  win.loadURL(
    isDev
      ? "http://localhost:3000"
      : `file://${path.join(__dirname, "../build/index.html")}`
  );
  //loading screen
  const loadingWindow = new BrowserWindow({
    fullscreen: true,
    resizable: false,
    alwaysOnTop: true,
    frame: false,
  });
  loadingWindow.loadFile(path.join(__dirname, "loadingScreen/index.html"));
  win.once("ready-to-show", () => {
    setTimeout(() => {
      loadingWindow.close();
      win.show();
    }, 5000);
  });
}

app.whenReady().then(() => {
  initIpcMain();
  createWindow();
});

// Quit when all windows are closed.
app.on("window-all-closed", () => app.quit());
