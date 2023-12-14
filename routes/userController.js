const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Hello! NodeJs");
});

router.get("/users", (req, res) => {
  res.send("Users route");
});

router.post("/users", (req, res) => {
  res.send("Created user");
});

module.exports = router;
