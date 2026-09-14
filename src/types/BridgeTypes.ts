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

type BridgeReciept = {
  transactionHash: string;
  amountPaid: number;
  assetPaidIn: string;
  bridgeUsed: string;
};

type AllAssets = {};
export type { AllAssets, BridgeReciept, QuoteParams };

//heres how we do it make classes for each bridge they implement a main bridge class that all bridges follow this standard all classes sotred in an array and referenced byt their sritng name ex:

// array<bridgeName, bridge class instance>

//we will have a way for users to propose their own brides and users can vote if or if not the wanna use it
