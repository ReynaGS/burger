var express = require("express");

var router = express.Router();

var burger = require("../models/burger.js");

router.get("/", function (req, res) {
  var hbsObject = {};
  res.render("index", hbsObject);
  //   cat.all(function(data) {
  //     var hbsObject = {
  //       cats: data
  //     };
  //     console.log(hbsObject);
  //   
  //   });
});
router.post("/api/addburger", function (req, res) {
  console.log(req.body)
  burger.create(["burger_name"], [req.body.burgerName], function (result) { res.json({ id: result.insertId }) })


})

module.exports = router;