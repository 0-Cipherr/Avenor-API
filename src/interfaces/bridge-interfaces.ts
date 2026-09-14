import type {
  AllAssets,
  BridgeReciept,
  QuoteParams,
} from "../types/BridgeTypes.js";

interface Bridge {
  bridgeName: string;
  bridge(): BridgeReciept;
  quote(): QuoteParams;
  getAllAssets(): AllAssets;
}

export type { Bridge };
