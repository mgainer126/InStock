//To start any of this you need to do the following:
//1. Go the the folder that this document is saved
//2. In terminal: npm init
//3. ipm install express -- save
//4. node <file name in this case its server.js>
//5. Confirm that all is working use postman to verify
//the paths that are set up are working

const express = require("express");
const router = express.Router();

const fs = require("fs");
const path = require("path");

const displayInventoryDetails = () => {
  const inventoryDetailsData = fs.readFileSync(
    path.resolve(__dirname, "../data/inventories.json")
  );
  const parsedInventoryDetails = JSON.parse(inventoryDetailsData);
  console.log(parsedInventoryDetails);
  return parsedInventoryDetails;
};

router.get("/inventory", (req, res) => {
  const inventoryDetails = displayInventoryDetails();
  res.json(inventoryDetails);
  console.log(inventoryDetails);
});

module.exports = router;
