CREATE TABLE IF NOT EXISTS Bridges{
<<<<<<< HEAD
  vault_id PRIMARY Key,
=======
  id PRIMARY Key,
>>>>>>> 28e5ad1d2478268bc3c1c68479ae748832f9c07b
  API_KEY TEXT NOT NULL,
  bridgeName VARCHAR(100) NOT NULL,
  chainsAvailable INTEGER[] NOT NULL,
  baseUrl TEXT NOT NULL
};


CREATE TABLE Vaults if NOT EXISTS{
 id PRIMARY key,
<<<<<<< HEAD
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
=======
vaultName TEXT;
vaultChains Array(NUMBER),
lastUpated: timestamp
}

CREATE TABLE VaultMetrics
>>>>>>> 28e5ad1d2478268bc3c1c68479ae748832f9c07b


INSERT INTO Bridges (API_KEY , bridgeName,chainsAvailable, baseUrl) VALUES ('Test', [], 'https://wtf.com');