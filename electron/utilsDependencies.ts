import path from "path";
import { shell } from "electron";
import {readFile, writeFile, existsSync} from 'fs';
import AdmZip from "adm-zip";


async function criarArquivo(caminho: string) {
    if (!existsSync(caminho)) {
        const conteudoInicial = JSON.stringify({installed: true, IPFS_version: "0.33.0"}, null, 2)
        writeFile(caminho, conteudoInicial, () => {});
        console.log('Arquivo criado com sucesso.');
    }
}

function installDependencies(caminho: string) {
    shell.openPath(path.join(process.env.ROOT!, `${caminho}IPFS-Desktop-0.33.0.exe`));
    let zip = new AdmZip(path.join(process.env.ROOT!, `${caminho}ipfs-cluster-service_v1.0.8_windows-amd64.zip`));
    zip.extractAllTo(path.join(process.env.ROOT!, `${caminho}`));
    shell.openPath(path.join(process.env.ROOT!, `${caminho}ipfs-cluster-service/ipfs-cluster-service.exe`));
}

export { criarArquivo, installDependencies }