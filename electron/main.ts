import { app, BrowserWindow, ipcMain } from "electron";
import { shell } from "electron";
import path from 'path'

// let client: IPFSHTTPClient | undefined = undefined;
// import("kubo-rpc-client")
//   .then(({ create }) => {
//     client = create({
//       host: "127.0.0.1",
//       port: 5001,
//     });
//   })
//   .catch(() => console.log("erro no dynamic import"));

app.whenReady().then(() => {
  try {
    // shell.openPath(path.join(__dirname, "../executables/IPFS-Desktop-0.33.0.exe"));
  } catch (e) {
    console.log(e);
  }
  return new BrowserWindow({
    width: 1000,
    height: 600,
    webPreferences: { nodeIntegration: true },
  }).loadURL(process.env.VITE_DEV_SERVER_URL!);
});

// escutar envento e chamar IPFS
ipcMain.on("click", (event, args) => {
  console.log(args);
  event.sender.send("click", "teste");
});
