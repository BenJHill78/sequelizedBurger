var express = require("express");

var router = express.Router();

var db = require("../models")['Burger'];

router.get("/", function(req, res) {    
    db.Burger.findAll({})
    .then(function(dbBurgers) {
      res.render("index", {Burger: dbBurgers});
    });
});

router.put("/burgers/update").post(function(req,res){
	var Burger = req.body;
	db.Burger.update({
		devoured: Burger.devoured
	},{
		where: {id: Burger.id}
	}).then(function(dbBurgers){
        
        res.redirect("/");
    });
});

router.post("/burgers/insert").post(function(req,res){
	var Burger = req.body;
	db.Burger.create({
		burger_name: Burger.name,
		devoured: false
	}).then(function(dbBurgers){
        res.redirect("/");
    });
});

module.exports = router;