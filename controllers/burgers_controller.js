var express = require("express");

var router = express.Router();

var db = require("../models");

router.get("/", function(req, res) {    
    db.Burger.findAll({})
    .then(function(dbBurgers) {
      res.render("index", {Burger: dbBurgers});
    });
});

router.put("/:id", function(req,res){
	var burger = req.body;
    console.log("id: ", req.params.id);
	db.Burger.update({
		devoured: burger.devoured
	},{
		where: {id: req.params.id}
	}).then(function(dbBurgers){
        
        res.redirect("/");
    });
});

router.post("/", function(req,res){
	var burger = req.body;
    
    console.log("burger:", burger);
    
    db.Burger.create({
		burger_name: burger.burger_name,
		devoured: false
	}).then(function(dbBurgers){
        res.redirect("/");
    });
});

module.exports = router;