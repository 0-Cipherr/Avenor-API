//we gonna use debridge initially
const express = require("express");
const router = express.Router({ caseSensitive: true, strict: true });

router.get("/all", (req, res) => {
  res.send("events");
});

router.get("/quote/:bridge/:quoteparams", (req, res) => {
  const { bridge, quoteParams } = req.params;
  console.log(bridge, quoteParams);
  res.json(200).send();
});
