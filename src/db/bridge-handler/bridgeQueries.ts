import pg, { type QueryResult } from "pg";
import type { BridgeQueryRules } from "../../interfaces/bridge-interfaces.js";
import pool from "../pool.js";

interface BridgeReuslt {}
class BridgeQueries implements BridgeQueryRules {
  dbPool: pg.Pool = pool;
  constructor() {}

  async dbConnect(): Promise<boolean> {
    pool.connect();
    //true indicating that connciton is successful

    return true;
  }

  async dbDisconnect(): Promise<boolean> {
    pool.end();
    //true value means that db has been killed and dsconnected

    return true;
  }

  async postBridge() {
    const result = await this.dbPool.query("");

    return result.rows;
  }

  async getBridge(): Promise<QueryResult<any>> {
    const response: any = await this.dbPool.query("");

    return response.rows;
  }

  async getAllBridges(): Promise<QueryResult<any>> {
    const response: any = await this.dbPool.query("");
    return response.rows;
  }
}
