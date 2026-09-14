import type {
  AllAssets,
  BridgeQuote,
  BridgeReciept,
  QuoteParams,
} from "../types/BridgeTypes.js";

interface BridgeQueryRules {
  postBridge(): any;
  getBridge(): any;
  getAllBridges(): any;
  dbConnect(): Promise<boolean>;
  dbDisconnect(): Promise<boolean>;
}

interface Bridge {
  bridgeName: string;
  chainsAvailable: Array<number>; //array of 4 digit numbers chain id
  bridge(): BridgeReciept;
  quote(params: QuoteParams): Promise<BridgeQuote>;
  getAllAssets(): AllAssets;
}

export type { Bridge, BridgeQueryRules };
