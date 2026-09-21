CREATE TABLE IF NOT EXISTS Bridges{
  vault_id PRIMARY Key,
  API_KEY TEXT NOT NULL,
  bridgeName VARCHAR(100) NOT NULL,
  chainsAvailable INTEGER[] NOT NULL,
  baseUrl TEXT NOT NULL
};


CREATE TABLE Vaults if NOT EXISTS{
 id PRIMARY key,
  vaultName TEXT;
  vaultChains Array(NUMBER),
  creator TEXT NOT NULL
  lastUpated: timestamp,
  asset TEXT NOT NULL,

}

CREATE TABLE VaultMetrics if NOT EXISTS {
  FOREIGN KEY (vault_id) REFERENCES Vault(vault_id),
  atr number NOT NULL,
  #/alltime rewards 
}


INSERT INTO Bridges (API_KEY , bridgeName,chainsAvailable, baseUrl) VALUES ('Test', [], 'https://wtf.com');