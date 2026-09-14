import type {
  AllAssets,
  BridgeQuote,
  BridgeReciept,
} from "../types/BridgeTypes.js";

interface Bridge {
  bridgeName: string;
  chainsAvailable: Array<number>; //array of 4 digit numbers chain id
  bridge(): BridgeReciept;
  quote(): BridgeQuote;
  getAllAssets(): AllAssets;
}

export type { Bridge };
