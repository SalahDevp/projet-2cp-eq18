const { app, BrowserWindow } = require("electron");

const path = require("path");
const isDev = require("electron-is-dev");
const initStoreMain = require("./electron-utils/data/initStoreMain");
const store = require("./electron-utils/data/store");
const { ALL } = require("dns");

function createWindow() {
  // Create the browser window.
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, "/electron-utils/preload.js"),
    },
    //frame:false,
  });

  win.loadURL(
    isDev
      ? "http://localhost:3000"
      : `file://${path.join(__dirname, "../build/index.html")}`
  );
}

app.whenReady().then(() => {
  initStoreMain();
  //store.openInEditor();
  createWindow();
});

// Quit when all windows are closed.
app.on("window-all-closed", () => app.quit());
