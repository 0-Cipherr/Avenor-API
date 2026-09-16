import pg, { type QueryResult } from "pg";
import type { BridgeQueryRules } from "../../interfaces/bridge-interfaces.js";
import type { BridgePost } from "../../types/BridgeTypes.js";
import pool from "../pool.js";

export default class BridgeQueries implements BridgeQueryRules {
  dbPool: pg.Pool = pool;
  constructor() {
    //instantly connect upon initialization
    this.dbConnect();
  }

  async dbConnect(): Promise<boolean> {
    pool.connect();
    //true indicating that connciton is successful

    return true;
  }

  //disconnect when doen
  async dbDisconnect(): Promise<boolean> {
    pool.end();
    //true value means that db has been killed and dsconnected

    return true;
  }

  async postBridge(bridge: BridgePost): Promise<boolean> {
    try {
      const result = await this.dbPool.query(
        "INSERT INTO Bridges VALUES($1,$2,$3,$4);",
        [
          bridge.API_KEY,
          bridge.baseUrl,
          bridge.bridgeName,
          bridge.chainsAvailable,
        ],
      );
      console.log("Instance posted to db!:");
      console.log(result.rows);
      console.log("====================================");
      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  }

  async getBridgeWhere(where: any[]): Promise<QueryResult<any>> {
    const response: any = await this.dbPool.query(
      "SELECT * FROM Bridges where $1",
      [where],
    );

    return response.rows;
  }

  async getAllBridges(): Promise<QueryResult<any>> {
    const response: any = await this.dbPool.query("SELECT * FROM BRIDGES;");
    return response.rows;
  }
}
