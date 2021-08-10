const express = require("express");
const cors = require("cors");

const app = express();

// setup app
const port = 8080;

//Middleware
app.use(express.json());
app.use(express.static("public"));
app.use(cors());

app.listen(port, () => {
  console.log(`In stock is running on port ${port}`);
});
