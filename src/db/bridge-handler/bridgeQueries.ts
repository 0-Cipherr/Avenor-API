import pg from "pg";
import type { BridgeQueryRules } from "../../interfaces/bridge-interfaces.js";
import pool from "../pool.js";
class BridgeQueries implements BridgeQueryRules {
  dbPool: pg.Pool = pool;
  constructor() {}

  async dbConnect(): Promise<boolean> {
    //true indicating that connciton is successful

    return true;
  }

  async dbDisconnect(): Promise<boolean> {
    //true value means that db has been killed and dsconnected

    return true;
  }

  async postBridge() {
    const response = await pool;
  }

  async getBridge() {}

  async getAllBridges() {}
}
