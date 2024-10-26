1. First install electron inside a folder after npm init

2. 

const { app, BrowserWindow } = require('electron/main')

# Instance of a window to show on the screen
function createWindow () {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    }
  })

  win.loadFile('index.html')
}


# To create the windown function we use whenready event
app.whenReady().then(() => {
  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })
})


# Also for running the app
{
  "scripts": {
    "start": "electron ."
  }
}
then npm start

# For database connectivity you can use preload.js file



3. BrowserWindow Methods and Properties
# ready-to-show , close , hide
# width , height
# resizable , moveable
# alwaysonTop , modal , fullscreen
# title
# close() , maximize() , setContentBounds() , moveTop()

4. WebContents
# loadUrl() , loadFile()
# did-finish-load-event
# dom-ready
# setUserAgent()
# printtoPdf()