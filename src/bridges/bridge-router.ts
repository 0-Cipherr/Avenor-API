import express from "express";
import type { QueryResult } from "pg";
import BridgeQueries from "../db/bridge-handler/bridgeQueries.js";
import { findBridge } from "../fileExplorerActions/file-creator.js";
import type {
  Bridge,
  BridgeQueryRules,
} from "../interfaces/bridge-interfaces.js";

const bridgeRouter = express.Router();
const bridgeQueries: BridgeQueryRules = new BridgeQueries();

bridgeRouter.get("/all", async (req, res) => {
  //get all
  const allBridges: Promise<QueryResult<any>> =
    await bridgeQueries.getAllBridges();
  const status: number = allBridges !== null ? 200 : 500;
  res.status(status).send(allBridges);
});

bridgeRouter.get("/all/name", async (req, res) => {
  //get all bridges by name
  const allBridges: Promise<QueryResult<any>> =
    await bridgeQueries.getAllBridges();
  const status: number = allBridges !== null ? 200 : 500;
  const filteredNames = filterByName(allBridges);
  res.status(status).send({ bridges: filterByName });
});

_chainsAvailable: (Array<number>,
  bridgeRouter.get("/chains/:chainSearch", async (req, res) => {
    //get rbidge by the chains i am using
    const { chainSearch } = req.body;
  }));

bridgeRouter.get("/chain/", async (req, res) => {
  //get chains by me
  const { chainSearch } = req.body;
  const allBridges: Promise<QueryResult<any>> =
    await bridgeQueries.getAllBridges();
  const chains = getChainsAvailable(allBridges);
  const status: number = allBridges !== null ? 200 : 500;
  res.status(status).send(chains);
});

bridgeRouter.post(
  "/quote/:bridgeSearchParams/:bridgeParams",
  async (req, res) => {
    //get bridge quote
    const { bridgeSearchParams, bridgeParams } = req.body;
    const doesExist = await verifyBridgeExists(bridgeSearchParams);
    if (doesExist == true) {
      const bridgeFound: Promise<Bridge> = await findBridge(bridgeSearchParams);
    }
  },
);

//execute bridge
bridgeRouter.post("/bridge/:bridgeId/:quoteParams", async (req, res) => {
  const { bridgeId, quoteParams } = req.body;
});

function verifyBridgeExists(bridgeSearchParams: any): any {
  try {
    const query = bridgeQueries.queries.getAllBridges;
    const result = bridgeQueries.getBridgeByCondition(
      query,
      ["WHERE name"],
      [bridgeSearchParams.bridgeName],
    );
  } catch (error) {
    return null;
  }
}

function getChainsAvailable(bridges: any): number[] {
  const chains: number[] = [];

  for (const bridge in bridges) {
    chains.push(...bridges[bridge].chainsAvailable);
  }
  return chains;
}

function filterByName(bridges: any) {
  const names: string[] = [];

  for (const bridge in bridges) {
    names.push(bridges[bridge].name);
  }

  return names;
}

export { bridgeRouter };
