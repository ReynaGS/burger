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
  res.json({ "test": "testing" })

})

module.exports = router;