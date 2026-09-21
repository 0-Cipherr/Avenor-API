import express from "express";
import BridgeQueries from "../db/bridge-handler/bridgeQueries.js";
import type { BridgeQueryRules } from "../interfaces/bridge-interfaces.js";

const vaultRouter = express.Router();
const bridgeQueries: BridgeQueryRules = new BridgeQueries();

//get all vaults available
vaultRouter.get("all", (req, res) => {});

//first thing to run before we test and use api
vaultRouter.post("/vault/:vaultInfo", (req, res) => {
  console.log("Running  ");
});
