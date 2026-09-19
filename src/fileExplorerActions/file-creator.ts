import fs from "fs";
import path from "path";
import type { Bridge } from "../interfaces/bridge-interfaces.js";

export async function findBridgeByName(
  bridgeName: string,
): Promise<Bridge | any> {
  try {
    const pathName = path.join(
      "src",
      "bridges",
      "bridge-collection",
      bridgeName + ".ts",
    );
    const code = fs.readFileSync(pathName);
    const loadedClass: Bridge = await require(pathName);
    console.log(code);

    return loadedClass;
  } catch (error) {
    return null;
  }
}
async function createBridge(bridgeCode: string, constructorParams: any) {
  try {
    const pathName = path.join(
      process.cwd(),
      "src",
      "bridges",
      "bridge-collection",
      "DeBridge",
    );
    console.log(pathName);
    await fs.mkdir(pathName, (err) => {});
    fs.writeFileSync(
      path.resolve(path.join(pathName, constructorParams.bridgeName)),
      bridgeCode,
      "utf8",
    );
  } catch (error) {
    console.log(error);
  }
}

// createBridge(
//   `
//     import axios, { type AxiosResponse } from "axios";
// import type { Bridge } from "../../../interfaces/bridge-interfaces.js";
// import type {
//   AllAssets,
//   ApiURL,
//   BridgeQuote,
//   BridgeReciept,
//   BridgeRequest,
//   QuoteParams,
// } from "../../../types/BridgeTypes.ts";

// export class Debridge implements Bridge {
//   chainsAvailable: Array<number> = []; //chain ids go here
//   bridgeName: string = "Ox";
//   baseUrl: ApiURL = "https://api.0x.org/cross-chain/";
//   API_KEY: string;
//   volume: string;
//   constructor(
//     _API_Key: string,
//     _bridgeName: string,
//     _chainsAvailable: Array<number>,
//     baseUrl: string,
//     _volume: string,
//   ) {
//     this.API_KEY = _API_Key;
//     this.volume = _volume;
//   }

//   bridge(): BridgeReciept {
//     return {
//       transactionHash: "",
//       amountPaid: 0,
//       assetPaidIn: "",
//       bridgeUsed: "",
//       originChain: "",
//       destinationChain: "",
//     };
//   }

//   getUrlSearchParams(params: QuoteParams): URLSearchParams {
//     return new URLSearchParams({
//       ...params,
//     });
//   }

//   //params must be in the structure in quote params for all bridges
//   async quote(params: QuoteParams): Promise<BridgeQuote> {
//     const urlSearchParams: URLSearchParams = this.getUrlSearchParams(params);
//     const reqParams: BridgeRequest = {
//       urlParameters: "/quotes?" + urlSearchParams.toString(),
//       parameters: this.baseUrl,
//       method: "GET",
//       data: {}, //supposed to be an objempty cuz we convert params t string
//     };

//     // AxiosResponse bridgeResponse =await  callBridge(bridgeRequest);
//     return {} as Promise<BridgeQuote>;
//   }

//   getAllAssets(): AllAssets {
//     return {};
//   }

//   async callBridge(requestParams: BridgeRequest): Promise<AxiosResponse> {
//     const result = await axios({
//       method: requestParams.method,
//       url: this.baseUrl + requestParams.urlParameters,
//       data: requestParams.data,
//     });

//     return (await result.data) as Promise<AxiosResponse>;
//   }
// }

// ///store the class instances as strings in a db retrieve in backend decode as class and store all info

// //in a array of classes

//     `,
//   { bridgeName: "debridge.ts" },
// );
