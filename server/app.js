const express = require("express");
const cors = require("cors");
const routesWarehouse = require('./routes/warehouses')
const routesInventories = require('./routes/inventories')
const app = express();

// setup app
const port = 8080;

//Middleware
app.use(express.json());
app.use(express.static("public"));
app.use(cors());
app.use('/api/warehouse',routesWarehouse)
app.use('/api/inventory',routesInventories)

app.listen(port, () => {
  console.log(`In stock is running on port ${port}`);
});
