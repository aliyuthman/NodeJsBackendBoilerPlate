const express = require("express");
const findById = require("../services/userServices");
const router = express.Router();


router.get("/users", (req, res) => {
  res.send("Users route");
});

router.get("/users/:id", (req, res) => {
  res.send(findById(req.params.id));
});

router.post("/users", (req, res) => {
  console.log(req.body);
  res.send("Created user");
});

module.exports = router;
