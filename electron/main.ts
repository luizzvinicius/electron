import { app, BrowserWindow, ipcMain } from "electron";
import path from "path";
import { exec } from "child_process";
import { fileURLToPath } from "url";
import isDev from "electron-is-dev";
import { installDependencies, createIfNotExists } from "./utilsDependencies";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const createWindow = () => {
  return new BrowserWindow({
    width: 1000,
    height: 600,
    webPreferences: {
      preload,
      nodeIntegrationInWorker: true,
      contextIsolation: false,
      nodeIntegration: true,
      webSecurity: false,
    },
  });
};
process.env.ROOT = path.join(__dirname, "..");
process.env.DIST = path.join(process.env.ROOT, "dist-electron");
process.env.VITE_PUBLIC = process.env.VITE_DEV_SERVER_URL
  ? path.join(process.env.ROOT, "public")
  : path.join(process.env.ROOT, ".output/public");
process.env["ELECTRON_DISABLE_SECURITY_WARNINGS"] = "true";

const preload: string = path.join(process.env.DIST, "preload.js");

const pathToEXE: string = isDev ? "release/win-unpacked/resources/downloads/" : "../../resources/downloads/"
app.whenReady().then(async () => {  
  let exists: Promise<boolean> = createIfNotExists(path.join(process.env.ROOT!, pathToEXE, 'infoDependencies.json'))
  if ( await exists ) installDependencies(pathToEXE)
  
  const main: BrowserWindow = createWindow();  
  process.env.VITE_DEV_SERVER_URL
    ? main.loadURL(process.env.VITE_DEV_SERVER_URL)
    : main.loadFile(path.join(process.env.VITE_PUBLIC!, "index.html"));

  let init = exec(
    `${path.join(process.env.ROOT!, `${pathToEXE}ipfs-cluster-service/ipfs-cluster-service.exe`)} init -f ${process.env.CLUSTER_CONFIG_URL}`,
    (error, stdout: string, stderr: string) => {
      console.log(error), console.log(stderr), console.log(stdout);
    }
  );
  let bootstrap = exec(
    `${path.join(process.env.ROOT!, `${pathToEXE}ipfs-cluster-service/ipfs-cluster-service.exe`)} -f daemon --bootstrap /ip4/${process.env.IPFS_URL}/tcp/9092/p2p/12D3KooWR8MxQgHGLF5vx1ShZy3Dkb5ZMjgm5MjVpJaDpi1Qqpwp`,
    (error, stdout: string, stderr: string) => {
      console.log(error), console.log(stderr), console.log(stdout);
    }
  );
});

// ipcMain.on("click", (event, args) => {
//   console.log(args);
//   event.sender.send("click", "teste");
// });
