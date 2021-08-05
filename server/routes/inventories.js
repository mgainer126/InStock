const express = require("express");
const router = express.Router();
const fs = require("fs");
const dbInventories = "./data/inventories.json";
let inventories = JSON.parse(fs.readFileSync(dbInventories, "utf8"));

router.get('/:wareHouseId',(req,res) => {
    const {wareHouseId} = req.params;
    if(wareHouseId){
        const inventoriesFiltered = inventories.filter(inventory => inventory.warehouseID === wareHouseId)
        res.status(200).json(inventoriesFiltered);
    }else {
        res.status(400).json({message:'warehouseId is required'});
    }
    
})

module.exports = router;