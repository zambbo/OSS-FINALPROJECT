const {app,BrowserWindow} = require("electron");
const { process } = require("ipaddr.js");
const path = require("path");
const {ipcMain} = require('electron');


let win;

function createWindow() {
    win = new BrowserWindow({
        width:800,
        height:600,
        nodeIntegration: true, // renderer process에서 node.js api 접근 가능.
        webPreferences: {
            preload: path.join(__dirname,"preload.js"),
        },
    });

    win.setMenuBarVisibility(false);
    win.loadFile("index.html");
}

app.whenReady().then(() =>{
    createWindow();

    app.on("activate", () =>{
        if(BrowserWindow.getAllWindows().length === 0){
            createWindow();
        }
    });
});

app.on("window-all-closed",() =>{
    if(process.platform !== "darwin"){
        app.quit();
    }
});