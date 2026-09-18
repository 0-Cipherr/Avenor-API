import type {
  AllAssets,
  BridgePost,
  BridgeQuote,
  BridgeReciept,
  QuoteParams,
} from "../types/BridgeTypes.js";

interface BridgeQueryRules {
  queries: any;
  postBridge(
    bridgeCode: any,
    bridge: BridgePost,
    bridgeConstructor: any,
  ): Promise<boolean>; //only team members can access this
  getBridgeWhere(where: any[]): any;
  constructQuery(query: string, condition: any, where: any[]): string;
  getBridgeByCondition(
    condition: any,
    whereCollection: any[],
    params: any[],
  ): Promise<any>;
  getAllBridges(): any;
  dbConnect(): Promise<boolean>;
  dbDisconnect(): Promise<boolean>;
}

//polymorphism methodology

interface Bridge {
  bridgeName: string;
  chainsAvailable: Array<number>; //array of 4 digit numbers chain id
  baseUrl: string;
  API_KEY: string;
  volume: string;
  initInstance(instance: any): any;
  bridge(): BridgeReciept;
  quote(params: QuoteParams): Promise<BridgeQuote>;
  getAllAssets(): AllAssets;
}

export type { Bridge, BridgeQueryRules };
