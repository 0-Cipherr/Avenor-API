import fs from "node:fs";
import path from "node:path";

async function getAllBridges(): Promise<any[]> {
  const collectionPath = path.resolve("src/bridges/bridge-collection");

  const bridges: any[] = [];

  const bridgeDirectories = fs.readdirSync(collectionPath, {
    withFileTypes: true,
  });

  for (const directory of bridgeDirectories) {
    if (!directory.isDirectory()) continue;

    const bridgePath = path.join(collectionPath, directory.name);

    const files = fs.readdirSync(bridgePath);

    for (const file of files) {
      if (!file.endsWith(".ts")) continue;

      const filePath = path.join(bridgePath, file);

      console.log("Loading:", filePath);

      const module = await import(filePath);

      console.log("Exports:", Object.keys(module));

      if (module.default) {
        bridges.push(module.default);
      }
    }
  }

  return bridges;
}

async function seedBridges(bridges: any[]) {
  console.log("Bridges:", bridges);

  for (const Bridge of bridges) {
    console.log("env: ", process.env[Bridge]);
    const bridgeInstance = new Bridge(process.env[Bridge]);

    console.log("Bridge instance:", bridgeInstance);
  }
}

async function start() {
  const bridges = await getAllBridges();

  await seedBridges(bridges);
}

start();
