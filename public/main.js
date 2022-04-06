const { app, BrowserWindow, dialog } = require("electron");

const path = require("path");
const isDev = require("electron-is-dev");
const store = require("./electron-utils/data/store");
//ipc
const initStoreMain = require("./electron-utils/data/initStoreMain");
const { initGetImageMain } = require("./electron-utils/InitGetImage");

let win;

function createWindow() {
  // Create the browser window.
  win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, "/electron-utils/preload.js"),
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
  //store.openInEditor();
  createWindow();
  console.log(dialog.showOpenDialogSync({ properties: ["openFile"] }));
});

// Quit when all windows are closed.
app.on("window-all-closed", () => app.quit());
