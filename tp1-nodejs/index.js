const express = require("express");
const app = express();
const config = require("./config");
const toolkit = require("./toolkit");
const port = config.web.port;
const bodyparser = require('body-parser');

//////////////////////////////
// les routers
const usersRouter = require("./routers/users.js");
const Routers1 = require("./routers/routers1.js");
const Routers2 = require("./routers/routers2.js");

//////////////////////////////


app.get("/", (req, res) => {
  res.send("Hello World! function ajouter: " + toolkit.ajouter(1,3));
});
app.use(bodyparser.json());
app.use("/users", usersRouter);
app.use("/router1", Routers1);
app.use("/router2", Routers2);
// appel des json encode
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.put("/:id", (req, res) => {
  console.log("params : ", req.params);
  console.log("body : ", req.body);
  res.send('OK');
});

/***
app.get("/", function (req, res) {
  res.send("Hello World!");
});
*/
 
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

console.log(toolkit.ajouter(1,3));

//http://localhost:4000/addition/1/5