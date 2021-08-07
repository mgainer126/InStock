const express = require("express");
const router = express.Router();
const fs = require("fs");
const dbInventories = "./data/inventories.json";
let inventories = JSON.parse(fs.readFileSync(dbInventories, "utf8"));

router.get("", (req, res) => {
  res.status(200).json(inventories);
});

router.get("/:wareHouseId", (req, res) => {
  const { wareHouseId } = req.params;
  if (wareHouseId) {
    const inventoriesFiltered = inventories.filter(
      (inventory) => inventory.warehouseID === wareHouseId
    );
    res.status(200).json(inventoriesFiltered);
  } else {
    res.status(400).json({ message: "warehouseId is required" });
  }
});

router.delete("/:inventoryId", (req, res) => {
  const { inventoryId } = req.params;
  const inventoriesFiltered = inventories.filter(
    (inventory) => inventory.id !== inventoryId
  );
  fs.writeFileSync(dbInventories, JSON.stringify(inventoriesFiltered));
  res.status(200).json(inventoriesFiltered);
});

module.exports = router;
