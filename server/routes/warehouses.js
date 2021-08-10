const express = require("express");
const router = express.Router();
const phoneUtil =
  require("google-libphonenumber").PhoneNumberUtil.getInstance();
const fs = require("fs");
const dbWarehouses = "./data/warehouses.json";
let warehouses = JSON.parse(fs.readFileSync(dbWarehouses, "utf8"));
const path = require("path");

router.post("/", (req, res) => {
  const { id, address, city, country, contact } = req.body;
  if (
    id &&
    address &&
    city &&
    country &&
    contact?.name &&
    contact?.position &&
    contact?.email &&
    contact?.phone
  ) {
    const number = phoneUtil.parseAndKeepRawInput(contact.phone, "US");
    const isValidPhone = phoneUtil.isValidNumber(number);
    if (!isValidPhone) {
      return res.status(400).json({ message: "invalid phone number" });
    } else if (!validateEmail(contact.email)) {
      return res.status(400).json({ message: "invalid email" });
    } else {
      const newWarehouse = {
        id,
        address,
        city,
        country,
        contact,
      };
      warehouses.push(newWarehouse);
      const warehousesString = JSON.stringify(warehouses);
      fs.writeFileSync(dbWarehouses, warehousesString);
      return res.status(200).json({ message: "success", data: warehouses });
    }
  }
  res.status(400).json({ message: "invalid format request" });
});

const validateEmail = (email) => {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

const displayWarehouseDetails = () => {
  const WarehouseDetailsData = fs.readFileSync(
    path.resolve(__dirname, "../data/warehouses.json")
  );
  const parsedWarehouseDetails = JSON.parse(WarehouseDetailsData);
  console.log(parsedWarehouseDetails);
  return parsedWarehouseDetails;
};
//Betty - API to GET a Single Warehouse
const singleWarehouse = () => {
  const warehouse = fs.readFileSync("./data/warehouses.json");
  const parsedWarehouseData = JSON.parse(warehouse);
  return parsedWarehouseData;
};
router.get("/", (req, res) => {
  const warehouse = singleWarehouse();
  console.log("warehouse");
  res.json(warehouse);
});

//Betty - API to PUT/PATCH/EDIT a Warehouse
router.patch("/:id", (req, res) => {
  const warehouseDetails = singleWarehouse();
  const warehouse = warehouseDetails.find(
    (warehouse) => warehouse.id === req.params.id
  );
  if (!warehouse) return res.status(404).json({ message: "Not Found" });

  if (!warehouse) {
    throw new Error("Please supply a valid input.");
  } else {
    warehouse.name = req.body.name;
    warehouse.address = req.body.address;
    warehouse.city = req.body.city;
    warehouse.country = req.body.country;
    warehouse.contact.name = req.body.contactName;
    warehouse.contact.position = req.body.contactPosition;
    warehouse.contact.phone = req.body.contactPhone;
    warehouse.contact.email = req.body.contactEmail;

    fs.writeFileSync(
      "./data/warehouses.json",
      JSON.stringify(warehouseDetails)
    );
    res.json(warehouse);
  }

  console.log(req.params.id);
});

// Matts APIs
const displayInventoryDetails = () => {
  const inventoryDetailsData = fs.readFileSync(
    path.resolve(__dirname, "../data/inventories.json")
  );
  const parsedWarehouseDetails = JSON.parse(WarehouseDetailsData);
  console.log(parsedWarehouseDetails);
  return parsedWarehouseDetails;
};
router.get("/", (req, res) => {
  const WarehouseDetails = displayWarehouseDetails();
  //   res.json(WarehouseDetails);
  //   console.log(WarehouseDetails);
  const inventoryDetails = displayInventoryDetails();
  res.json({ inventoryDetails, WarehouseDetails });
  // console.log(inventoryDetails);
});

module.exports = router;
