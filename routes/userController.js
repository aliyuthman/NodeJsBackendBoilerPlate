const express = require("express");
const findById = require("../services/userServices");
const router = express.Router();
const helloMiddleWare = require("../middleware/helloMiddleware");

router.use(helloMiddleWare); //all router will be affected by the function of middleware

router.get("/users", helloMiddleWare, (req, res) => {
  //only this route will be affected by the function of the helloMiddleware. Once the it placed at top router level, no need to placed it at specific router level. This is just for demonstration.
  res.send("Users route");
});

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
