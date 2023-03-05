const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  if (req.url == "/") {
    res.setHeader("Content-type", "text/html");
    res.end("<h1>Home Page</h1>");
  } else if (req.url == "/about") {
    res.end("Welcome To My About Page");
  } else if (req.url === "/data") {
    fs.readFile("./db.json","utf-8",(err, data) => {
        if (err) {
          res.end(err);
        } else {
         res.setHeader("Content-type","application/json");
          res.end(data);
        }
      });
  } else {
    res.end("Page Not Found");
  }
});

server.listen(4500, () => {
  console.log("server is running successfully");
});

// "/"
// "/about"
// "/contact"
