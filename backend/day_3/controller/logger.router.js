const fs = require("fs")

const logger = (req, res, next) => {
  fs.appendFileSync(
    "./log.txt",
    `User has visited ${req.url} and method was ${
      req.method
    } date is ${Date()}\n`
  );
  next();
};


module.exports = logger;