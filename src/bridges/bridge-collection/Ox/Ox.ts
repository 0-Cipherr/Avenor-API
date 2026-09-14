import axios, { type AxiosResponse } from "axios";
import type { Bridge } from "../../../interfaces/bridge-interfaces.js";
import type {
  AllAssets,
  ApiURL,
  BridgeQuote,
  BridgeReciept,
  BridgeRequest,
  QuoteParams,
} from "../../../types/BridgeTypes.ts";

class Ox implements Bridge {
  constructor() {}

  chainsAvailable: Array<number> = []; //chain ids go here
  bridgeName: string = "Ox";
  baseUrl: ApiURL = "https://api.0x.org/cross-chain/";

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

  quotes(params: QuoteParams): BridgeQuote {
    req: BridgeRequest = {
      urlParameters: this.baseUrl,
      parameters: this.baseUrl,
      method: "GET",
      data: "", //supposed to be an obj
    };
    // AxiosResponse bridgeResponse =await  callBridge(bridgeRequest);
    return {};
  }

  getAllAssets(): AllAssets {
    return {};
  }

  async callBridge(requestParams: BridgeRequest): Promise<AxiosResponse> {
    const result = await axios({
      method: requestParams.method,
      url: this.baseUrl + requestParams.urlParameters,
      data: requestParams.data,
    });

    return (await result.data) as Promise<AxiosResponse>;
  }
}

///store the class instances as strings in a db retrieve in backend decode as class and store all info

//in a array of classes
