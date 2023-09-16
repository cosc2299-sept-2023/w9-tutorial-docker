var express = require('express');
var router = express.Router();
var Controllers = require("../controllers");

router.post('/createUser', function(req,res,next){
    Controllers.userController.createUser(req,res);
})

router.get('/', function(req,res,next){
    Controllers.userController.getUser(req,res);
})

router.put('/updateUser',function(req,res,next){
    Controllers.userController.updateUser(req,res);
})

router.delete('/:id',function(req,res){
    Controllers.userController.deleteUser(req,res);
})

module.exports = router;