import fs from "node:fs";
import path from "node:path";
import BridgeQueries from "../bridge-handler/bridgeQueries.js";
async function getAllBridges(): Promise<any[]> {
  try {
    const collectionPath = path.resolve("src/bridges/bridge-collection");

    const bridges: any[] = [];

    const bridgeDirectories = fs.readdirSync(collectionPath, {
      withFileTypes: true,
    });

    console.log("Current directory======================");
    console.log(collectionPath);
    console.log("==============");

    for (const directory of bridgeDirectories) {
      console.log(directory);
      if (!directory.isDirectory()) continue;
      const bridgePath = path.join(collectionPath, directory.name);

      const files = fs.readdirSync(bridgePath);
      console.log("FIles found,", files);
      for (const file of files) {
        if (!file.endsWith(".ts")) continue;

        const filePath = path.join(bridgePath, file);

        console.log("Loading:", filePath);

        const module = await import(filePath);

        console.log("Exports:", Object.keys(module));
        bridges.push(module);
      }
    }

    return bridges;
  } catch (error) {
    console.log(error);
    return [];
  }
}

async function seedBridges(bridges: any[]): Promise<any[]> {
  // use appropriate type or Record if needed
  try {
    console.log("Bridges:", bridges);
    const instances: any[] = [];
    for (const bridgeModule of bridges) {
      console.log("BridgeModule: ", bridgeModule);
      // 1. Extract the class constructor from the module object
      // This grabs 'Ox' (or whatever the class name is) dynamically
      const className = Object.keys(bridgeModule)[0]; //get class name of file
      const BridgeClass = bridgeModule[String(className)];
      // 1. Find the exact key in process.env that includes "OX" (case-insensitive)
      const envKey = Object.keys(process.env).find((key) =>
        key.toLowerCase().includes(String(className).toLowerCase()),
      );

      // 2. Get the value if found
      const configValue = envKey ? process.env[envKey] : undefined;

      // 2. Safely look up the environment variable using a string key
      // Example: if className is "Ox", this looks up process.env["Ox"]

      // 3. Instantiate the class correctly
      const bridgeInstance = new BridgeClass(configValue);
      console.log("Bridge instance:", bridgeInstance);
      const testValue = JSON.stringify(bridgeInstance); //all implement bridges and variables so we gucci
      console.log("Instance encoded: ", testValue);
      instances.push(testValue);
    }
    return instances;
  } catch (error) {
    console.log(error);
    return [];
  }
}



async function start() {
  const bridges = await getAllBridges();

  const instances = await seedBridges(bridges);
  const bridgeQueries: BridgeQueries = new BridgeQueries();

  for (const instance in instances) {
    await bridgeQueries.postBridge(instances[instance]);
  }
}

start();
