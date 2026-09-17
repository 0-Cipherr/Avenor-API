import type { Bridge } from "../../../interfaces/bridge-interfaces.js";
import type {
  AllAssets,
  BridgeQuote,
  BridgeReciept,
  QuoteParams,
} from "../../../types/BridgeTypes.js";

export class SkeletonBridge implements Bridge {
  API_KEY: string = "";
  bridgeName: string = "";
  chainsAvailable: number[] = [];
  baseUrl: string = "";
  volume: string = "";

  initInstance(instance: any) {
    this.chainsAvailable = instance.chainsAvailable;
    this.bridgeName = instance.bridgeName;
    this.baseUrl = instance.baseUrl;
    this.API_KEY = instance.API_KEY;
    this.volume = instance.volume;
  }

  async quote(params: QuoteParams): Promise<BridgeQuote> {
    return await {
      quote: "",
      quoteId: "",
      transaction: "",
      allowance: "",
      buyAmount: "",
    };
  }

  getAllAssets(): AllAssets {
    return {};
  }

  bridge(): BridgeReciept {
    return {
      transactionHash: "",
      amountPaid: 0,
      assetPaidIn: "",
      bridgeUsed: "",
      originChain: "",
      destinationChain: "",
    };
  }
}
