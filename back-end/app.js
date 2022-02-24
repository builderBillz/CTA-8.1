// DEPENDENCIES
const cors = require("cors");
const express = require("express");
const laptopController = require("./controllers/laptopController")

// CONFIGURATION
const app = express();

// MIDDLEWARE
app.use(cors());
app.use(express.json()); // Parse incoming JSON
app.use("/laptops", laptopController)

// ROUTES
app.get("/", (req, res) => {
  res.send("Hello, world!");
});

app.get("*", (request,response) => {
  response.status(404).json({error: "page not found"})
})




// EXPORT
module.exports = app;
