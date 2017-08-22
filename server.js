var express = require("express");
var mo = require("method-override");
var bodyParser = require("body-parser");
var mysql = require("mysql");

var port = process.env.port || 8080;


var app = express();

app.use(express.static("public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.use(mo("_method"));

var hbs = require("express-handlebars");
app.engine("handlebars", hbs({ defaultLayout: "main"}));
app.set("view engine", "handlebars");

var routes = require("./controllers/burgers_controller.js");

app.use("/", routes);

var db = require("./models");

db.sequelize.sync().then(function() {
  app.listen(port, function() {
    console.log("App listening on PORT " + port);
  });
});