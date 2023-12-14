const helloMiddleWare = (req, res, next) => {
  console.log("Hello! Middleware");
  next();
};

module.exports = helloMiddleWare;
