// import type { BridgeReciept, QuoteParams } from "../types/BridgeTypes.js";
// const oxApiUrl = "https://api.0x.org/cross-chain/";
// async function getQuote(quoteParams: QuoteParams): BridgeReciept {
//   const quotesParams = new URLSearchParams({
//     originChain: quoteParams.originChain, // Base mainnet
//     destinationChain: "42161", // Arbitrum mainnet
//     sellToken: quoteParams.sellToken, // WETH on Base
//     buyToken: quoteParams.butToken, // USDC on Arbitrum
//     sellAmount: quoteParams.sellAmount, // Amount of sellToken in base units
//     originAddress: quoteParams.originAdress, // Address that will make the trade
//     sortQuotesBy: quoteParams.sortQuotesBy, // Prefer the quote that will result in the best price / output
//     maxNumQuotes: quoteParams.maxNumQuotes, // only the best quote
//   });
//   const headers = {
//     "0x-api-key": "[api-key]", // Get your live API key from the 0x Dashboard (https://dashboard.0x.org/apps)
//   };
//   const quoteResponse = await fetch(
//     "https://api.0x.org/cross-chain/" + "quotes?" + quotesParams.toString(),
//     { headers },
//   );
//   console.log(await quoteResponse.json());
//   return await quoteResponse.json();

//   return
// }

// async function bridgeAssets(quoteResponse) {
//   const approveTxHash = await walletClient.writeContract({
//     address: quoteResponse.sellToken,
//     abi: erc20Abi,
//     functionName: "approve",
//     args: [
//       quotesResponse.quotes[0].issues.allowance.spender,
//       BigInt(quoteResponse.sellAmount),
//     ],
//   });
//   await walletClient.waitForTransactionReceipt({
//     hash: approveTxHash,
//     confirmations: 1,
//   });
// }

// async function determineBridge(bridge) {}

// async function verifyParameters(quoteParams) {}
