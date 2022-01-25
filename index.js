const { app, BrowserWindow } = require("electron");
const path = require("path");

let win;

const createWindow = () => {
  win = new BrowserWindow({
    width: 320,
    height: 500,
    webPreferences: {
      
      preload: path.join(__dirname, "preload.js"),
    },
  });
  win.loadFile("index.html");
};

app.whenReady().then(createWindow);
