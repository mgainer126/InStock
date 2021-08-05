const express = require("express");
const router = express.Router();
const fs = require("fs");
const dbInventories = "./data/inventories.json";
let inventories = JSON.parse(fs.readFileSync(dbInventories, "utf8"));

router.get("", (req, res) => {
  res.status(200).json(inventories);
});

module.exports = router;
