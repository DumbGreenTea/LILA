const { app, BrowserWindow } = require('electron')

function createWindow () {
  //cuando escribo new BrowserWindow creo un nuevo objeto al cual le puedo dar propiedades
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    minWidth: 400,
    minHeight:400,
    backgroundColor: '#6873E3',
    webPreferences: {
      nodeIntegration: true
    }
  })

  //le voy a decir que cargue mi archivo html para mostrar el contenido de la ventana
  win.loadFile('src/views/app.html')
}

/*Cuando tu escribes app.on(), tienes entre parentesis un montón de eventos que puedes "escuchar" de a ventana, como por ejemplo detectar cuando
se cierran todas las ventanas*/
app.whenReady().then(() => {
  //cuando la app esté lista le voy a pedir que inicialice un objeto ventana
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
