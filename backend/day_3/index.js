const express = require("express");
const fs = require("fs");
const logger = require("./controller/logger.router")

// middlerware
const app = express();
app.use(express.json());
app.use(logger)

//end point
app.post("/",(req,res)=>{
  res.send("Hello")
})

app.get("/",(req,res)=>{
  const movie = req.query.movie
  let data = JSON.parse(fs.readFileSync("./db.json","utf-8"));
  let response =data.movies.filter((ele)=>{
    return ele.name === movie
  })
if(response.length>0){
  res.send(response[0])
}else{
  res.send("No such movie found")
}
})


app.listen(8080,()=>{
  console.log("server running")
})
