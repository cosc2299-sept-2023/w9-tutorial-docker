var express = require('express');
var router = express.Router();
var Controllers = require("../controllers");

router.get('/addNumbers', function(req,res,next){
    Controllers.calculatorController.addNumbers(req,res)
})

module.exports = router;