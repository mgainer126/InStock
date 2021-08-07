const express = require("express");
const router = express.Router();
const fs = require("fs");
const dbInventories = "./data/inventories.json";
let inventories = JSON.parse(fs.readFileSync(dbInventories, "utf8"));

router.get("", (req, res) => {
  res.status(200).json(inventories);
});

router.get("/:id", (req, res) => {
  const singleItem = items.find((item) => item.id === req.params.id);
  res.send(singleItem);
});

// Matts APIs
const displayInventoryDetails = () => {
  const inventoryDetailsData = fs.readFileSync(
    path.resolve(__dirname, "../data/inventories.json")
  );
  const parsedInventoryDetails = JSON.parse(inventoryDetailsData);
  console.log(parsedInventoryDetails);
  return parsedInventoryDetails;
};

router.get("/", (req, res) => {
  const inventoryDetails = displayInventoryDetails();
  res.json(inventoryDetails);
  console.log(inventoryDetails);
});

module.exports = router;
