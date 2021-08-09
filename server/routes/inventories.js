const express = require("express");
const router = express.Router();
const fs = require("fs");
const uniqid = require("uniqid");
const dbInventories = "./data/inventories.json";
const path = require("path");

let inventories = JSON.parse(fs.readFileSync(dbInventories, "utf8"));
console.log(inventories);
router.get("", (req, res) => {
  res.status(200).json(inventories);
});

router.get("/:id", (req, res) => {
  const singleItem = items.find((item) => item.id === req.params.id);
  res.send(singleItem);
});

// // Matts APIs
// const displayInventoryDetails = () => {
//   const inventoryDetailsData = fs.readFileSync(
//     path.resolve(__dirname, { dbInventories })
//   );
//   const parsedInventoryDetails = JSON.parse(inventoryDetailsData);
//   // console.log(parsedInventoryDetails);
//   return parsedInventoryDetails;
// };

router.get("/", (req, res) => {
  // const inventoryDetails = displayInventoryDetails();
  const inventoryDetails = inventories;
  res.json(inventoryDetails);
  console.log(inventoryDetails);
});

router.post("/item", (req, res) => {
  // const inventoryDetails = displayInventoryDetails();
  const inventoryDetails = inventories;
  console.log(req.body);
  const newInventoryItem = {
    id: uniqid(),
    warehouseID: uniqid(),
    warehouseName: req.body.warehouseName,
    itemName: req.body.itemName,
    description: req.body.description,
    category: req.body.category,
    quantity: req.body.quantity,
  };
  console.log(newInventoryItem);
  inventoryDetails.push(newInventoryItem);

  fs.writeFileSync("./data/inventories.json", JSON.stringify(inventoryDetails));
  res.json(inventoryDetails);
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
