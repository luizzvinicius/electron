import { app, BrowserWindow, ipcMain } from "electron";
import { shell } from "electron";
import { exec } from "child_process";
import path from "path";

const createWindow = () => {
  return new BrowserWindow({
    width: 1000,
    height: 600,
    webPreferences: { nodeIntegration: true },
  });
};

app.whenReady().then(() => {
  try {
    // shell.openPath(path.join(__dirname, "../executables/IPFS-Desktop-0.33.0.exe"));
  } catch (e) {
    console.log(e);
  }
  const main = createWindow();
  // const cluster = createWindow()
  // cluster.webContents.downloadURL("https://dist.ipfs.tech/ipfs-cluster-service/v1.0.8/ipfs-cluster-service_v1.0.8_windows-amd64.zip")

  let init = exec(
    `C:/Users/vinic/ipfs-cluster-service.exe init -f http://bafybeigq7gjeusrv3tu7kaiv5yirr3vb76xqysjalwlec5fwkmudqx2bh4.ipfs.localhost:8080/`,
    (error, stdout: string, stderr: string) => {
      console.log(error), console.log(stderr), console.log(stdout);
    }
  );
  let bootstrap = exec(
    `C:/Users/vinic/ipfs-cluster-service.exe daemon --bootstrap /ip4/172.19.0.6/tcp/9096/p2p/12D3KooWR8MxQgHGLF5vx1ShZy3Dkb5ZMjgm5MjVpJaDpi1Qqpwp`,
    (error, stdout: string, stderr: string) => {
      console.log(error), console.log(stderr), console.log(stdout);
    }
  );
  main.loadURL(process.env.VITE_DEV_SERVER_URL!);
});

// escutar envento e chamar IPFS
ipcMain.on("click", (event, args) => {
  console.log(args);
  event.sender.send("click", "teste");
});
