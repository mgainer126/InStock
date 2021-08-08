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

module.exports = router;
