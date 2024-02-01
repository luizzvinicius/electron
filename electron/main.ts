import { app, BrowserWindow } from 'electron'

app.whenReady().then(() => {
  return new BrowserWindow().loadURL(process.env.VITE_DEV_SERVER_URL!)
})