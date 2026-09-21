import express from "express";
import BridgeQueries from "../db/bridge-handler/bridgeQueries.js";
import type { BridgeQueryRules } from "../interfaces/bridge-interfaces.js";

const vaultRouter = express.Router();
const bridgeQueries: BridgeQueryRules = new BridgeQueries();

//get all vaults available
vaultRouter.get("all", (req, res) => {});

//first thing to run before we test and use api
vaultRouter.post("/vault/:vaultInfo", (req: any, res: any) => {
  try {
    const { vaultInfo: any } = req;
    console.log("Running  ");
    res.status(200).send({ message: "Vault sccessfully added !" });
  } catch (error) {
    console.log(error);

    res.status(500).send({ message: "unexpected error" });
  }
});
