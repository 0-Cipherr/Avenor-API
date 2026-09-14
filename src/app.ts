//flow for selecting ehich bridge to se is a adapter interfaces of different bridges
//  all following same standard and functioins like wr doing on solifity
//but instead we doing in typescript
//index.ts
import type { Application, Request, Response } from "express";
import express from "express";

const app: Application = express();
app.use("/bridge");
app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

app.listen(3000);
//set up classses for bridge follwinf interface standard

// every thing mus have a type thats why we using ts
