var express = require("express");

var router = express.Router();

var burger = require("../models/burger.js");

router.get("/", function (req, res) {


  burger.all(function (data) {
    var hbsObject = {
      burgers: data,
      name: "hola",
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});
router.post("/api/addburger", function (req, res) {
  console.log(req.body)
  burger.create(["burger_name"], [req.body.burgerName], function (result) { res.json({ id: result.insertId }) })


})

router.post("/api/devouredburger", function (req, res) {
  var condition = "id = " + req.body.id;
  console.log(req.body)
  burger.update({
    devoured: true
  },
    condition, function (result) { res.send("ok") })
})

module.exports = router;