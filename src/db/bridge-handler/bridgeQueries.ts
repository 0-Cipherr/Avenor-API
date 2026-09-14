interface BridgeQueryRules {
  postBridge(): any;
  getBridge(): any;
  getAllBridges(): any;
}

class BridgeQueries implements BridgeQueryRules {
  constructor() {}

  async dbConnect() {}

  async dbDisconnect() {}

  async postBridge() {}

  async getBridge() {}

  async getAllBridges() {}
}
