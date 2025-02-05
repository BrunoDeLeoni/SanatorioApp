const { app, BrowserWindow } = require('electron');
const os = require('os');

function createWindow() { 
    const pc = os.hostname();
    const win = new BrowserWindow({
        webPreferences: {
            nodeIntegration: false
        }
    });
    win.maximize(),
    win.setMenu(null);
    win.loadURL('http://sistema.sanatorioprivado.com.ar:10500/sistema/?args=PC:' + pc);
}

app.whenReady().then(() => {
    createWindow();

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) createWindow();
    });

});

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit();
});
