CREATE TABLE IF NOT EXISTS Bridges{
  id PRIMARY Key,
  API_KEY TEXT NOT NULL,
  bridgeName VARCHAR(100) NOT NULL,
  chainsAvailable INTEGER[] NOT NULL,
  baseUrl TEXT NOT NULL
};


CREATE TABLE if NOT EXISTS{
 id PRIMARY key,
 
}


INSERT INTO Bridges (API_KEY , bridgeName,chainsAvailable, baseUrl) VALUES ('Test', [], 'https://wtf.com');