var express = require("express");
var mo = require("method-override");
var bp = require("body-parser");
var mysql = require("mysql");

var port = process.env.PORT || 3000;

var app = express();

app.use(express.static("public"));
app.use(bp.urlencoded({ extended: false }));

app.use(mo("_method"));

var hbs = require("express-handlebars");
app.engine("handlebars", hbs({ defaultLayout: "main"}));
app.set("view engine", "handlebars");

var routes = require("./controllers/burgers_controller.js");

app.use("/", routes);
app.listen(port);
console.log("listening on port " + port);
