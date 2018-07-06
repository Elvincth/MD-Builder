
const {app, BrowserWindow,} = require('electron');
const path = require("path");
const url = require("url");
let mainWindow

app.setName("MD Builder");

function createWindow () {

  mainWindow = new BrowserWindow({frame: false ,width: 1200, height: 750,backgroundColor: '#fff',icon:'./icon.png' })


  mainWindow.loadURL(
    url.format({
      pathname: path.join(__dirname, "index.html"),
      protocol: "file:",
      slashes: true
    })
  );

  mainWindow.on('closed', function () {
    mainWindow = null
  })
}


app.on('ready', createWindow)

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') {
    app.quit();
  }
})

app.on('activate', function () {
  if (mainWindow === null) {
    createWindow();
  }
})


