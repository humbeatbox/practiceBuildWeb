const express = require("express");
const app = express(); //get a server object

//middlewares
app.use(express.static("public"));
app.set("view engine", "ejs"); //can prevent use the .ejs in the rest document

//get , callback function
app.get("/", (req, res) => {
  //res.status(200);
  //res.sendFile(__dirname + "/index2.html");
  //can be like this method chaining
  //res.status(200).sendFile(__dirname + "/index2.html");

  const languages = [
    { name: "Java", rating: 9.5, popularity: 5 },
    { name: "C++", rating: 8, popularity: 6 },
    { name: "Python", rating: 7, popularity: 9 },
  ];
  res.render("index", { languages }); //.ejs");
});

//use the GET method to send the request to data to server
//and use the EJS template called response in view directory to response the request
app.get("/example", (req, res) => {
  let { name, age } = req.query;
  res.render("response", { name, age });
});

app.get("/fruit/:name", (req, res) => {
  let { name } = req.params;
  //in the JS , set the name as name
  //res.render("index", { name: name });
  //can ignore set name
  res.render("index", { name });
});

//port, callbacks
app.listen(3000, () => {
  console.log("server listen port 3000s");
});
