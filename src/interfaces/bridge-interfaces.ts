import type {
  AllAssets,
  BridgePost,
  BridgeQuote,
  BridgeReciept,
  QuoteParams,
} from "../types/BridgeTypes.js";

interface BridgeQueryRules {
  postBridge(bridge: BridgePost): Promise<boolean>;
  getBridgeWhere(where: any[]): any;
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
  bridge(): BridgeReciept;
  quote(params: QuoteParams): Promise<BridgeQuote>;
  getAllAssets(): AllAssets;
}

export type { Bridge, BridgeQueryRules };
