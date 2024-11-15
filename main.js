const { app, BrowserWindow } = require('electron')
const path = require('path')

function createWindow() {
    const win = new BrowserWindow({
        width: 800,
        height: 900,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false
        },
        icon: path.join(__dirname, 'icons/icon.png')
    })

    // Load your HTML file
    win.loadFile('index.html')
    
    // Remove the menu bar
    win.setMenuBarVisibility(false)

    // Add this inside the createWindow function to enable DevTools in development
    if (process.env.NODE_ENV === 'development') {
        win.webContents.openDevTools()
    }

    // Add this to handle window state
    win.on('minimize', function (event) {
        event.preventDefault()
        win.minimize()
    })

    win.on('maximize', function (event) {
        event.preventDefault()
        win.maximize()
    })
}

app.whenReady().then(() => {
    createWindow()

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) {
            createWindow()
        }
    })
})

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
}) 