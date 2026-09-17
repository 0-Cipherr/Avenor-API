import express from "express";
import type { QueryResult } from "pg";
import BridgeQueries from "../db/bridge-handler/bridgeQueries.js";
import type { BridgeQueryRules } from "../interfaces/bridge-interfaces.js";

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
  res.status(status).send(filterByName);
});

_chainsAvailable: (Array<number>,
  bridgeRouter.get("/chains/:chainSearch", async (req, res) => {
    //get rbidge by the chains i am using
    const { chainSearch } = req.body;
  }));

bridgeRouter.get("/chain/", async (req, res) => {
  //get chains by me
  const { chainSearch } = req.body;
});

bridgeRouter.post("/quote/:bridgeName/:bridgeParams", async (req, res) => {
  //get bridge quote
  const { bridgeId, bridgeParams } = req.body;
});

//execute bridge
bridgeRouter.post("/bridge/:bridgeId/:quoteParams", async (req, res) => {
  const { bridgeId, quoteParams } = req.body;
});

function filterByName(bridges: any) {
  const names: string[] = [];

  for (const bridge in bridges) {
    names.push(bridges[bridge].name);
  }

  return names;
}

export { bridgeRouter };
