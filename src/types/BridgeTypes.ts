type QuoteParams = {
  originChain: string;
  destinationChain: string;
  sellToken: string;
  buyToken: string;
  sellAmount: string;
  originAddress: string;
  reciever: string;
  sortQuotesBy: string;
};

type BridgeQuote = {
  quote: unknown;
  quoteId: string;
  transaction: unknown;
  allowance: unknown;
  buyAmount: string;
};

type BridgeReciept = {
  transactionHash: string;
  amountPaid: number;
  assetPaidIn: string; //contract address
  bridgeUsed: string;
  originChain: string;
  destinationChain: string;
};

type BridgeRequest = {
  urlParameters: string;
  parameters: string;
  method: string;
  data: unknown; //supposed to be an obj
};

type AllAssets = {};

//|logical or
type ApiURL = `https://${string}` | `Https://${string}`; //this is how u can type stirngs
export type {
  AllAssets,
  ApiURL,
  BridgeQuote,
  BridgeReciept,
  BridgeRequest,
  QuoteParams,
};

//heres how we do it make classes for each bridge they implement a main bridge class that all bridges follow this standard all classes sotred in an array and referenced byt their sritng name ex:

// array<bridgeName, bridge class instance>

//we will have a way for users to propose their own brides and users can vote if or if not the wanna use it
//to add new brdiges we acces our db and add it in there with queries to need to stress about
//how to handle it with ts
