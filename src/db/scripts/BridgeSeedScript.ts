import fs from "fs";
import path from "path";
async function getAllBridges(): Promise<any> {
  const bridges = [];
  for (const file of fs.readdirSync("./bridges")) {
    const fileTypeValid: boolean = file.endsWith(".ts");
    if (fileTypeValid) {
      const bridge = await import(path.resolve("./bridges", file));
      bridges.push(bridge.default);
    }
  }

  return bridges;
}

async function seedBridges(bridges: any) {
  for (const Bridge of bridges) {
    const bridgeInstance = new Bridge();
    console.log(bridgeInstance.toString());
  }
}

const res = getAllBridges();
seedBridges(res);
