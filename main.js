const { app, BrowserWindow } = require("electron");
const path = require("path");

let win;

function createWindow() {
    win = new BrowserWindow({
        width: 880,
        height: 700,
        webPreferences: {
            nodeIntegration: true, // renderer process에서 node.js api 접근 가능.
            contextIsolation: false, // node.js api 쓰기위해서.
            preload: path.join(__dirname, "preload.js"),
        },
    });

    win.setMenuBarVisibility(false);
    win.loadFile("index.html");
}

app.whenReady().then(() => {
    createWindow();

    app.on("activate", () => {
        if (BrowserWindow.getAllWindows().length === 0) {
            createWindow();
        }
    });
});

app.on("window-all-closed", () => {
    if (process.platform !== "darwin") {
        app.quit();
    }
});
