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
  SkeletonBridge(
    _API_KEY: string,
    _bridgeName: string,
    _chainsAvailable: number[],
    _baseUrl: string,
  ) {
    this.API_KEY = _API_KEY;
    this.bridgeName = _bridgeName;
    this.chainsAvailable = _chainsAvailable;
    this.baseUrl = _baseUrl;
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
