import { create } from "kubo-rpc-client";
import type { IPFSHTTPClient } from "kubo-rpc-client";

let client: IPFSHTTPClient;
(function createClient() {
  client = create({
    host: "127.0.0.1",
    port: 5001,
  });
  return client;
})()

const uploadFile = async (file: File) => {
  try {
    const name = file.name;
    const data2 = file.arrayBuffer.toString();
    const formData = new FormData();
    formData.append(name, data2);
    client.files.write(`/${name}`, data2, { create: true });

    let info = [];
    for await (const file of client.files.ls(`/${name}`)) {
      info.push(file);
    }
    console.log(info[0].cid.toString());
  } catch (e) {
    console.log(e);
  }
};

export { uploadFile };
