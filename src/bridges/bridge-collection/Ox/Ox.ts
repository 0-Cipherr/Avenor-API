import type { Bridge } from "../../../interfaces/bridge-interfaces.js";
import type {
  AllAssets,
  BridgeReciept,
  QuoteParams,
} from "../../../types/BridgeTypes.ts";

class Ox implements Bridge {
  constructor() {}

  bridgeName = "Ox";

  bridge(): BridgeReciept {}

  quote(): QuoteParams {}

  getAllAssets(): AllAssets {
    return {};
  }
}

///store the class instances as strings in a db retrieve in backend decode as class and store all info

//in a array of classes
