const { Mongoose } = require('mongoose');
const Models = require('../models');

const createUser = (req,res) => {
    let userData = req.body;
    Models.User.create(userData,(err,data) =>{
        if(err) {
            res.json({message: err.message, statusCode: 400}).status(400)
        }
        else{
            res.json({message: "Succesfully Created", data: data, statusCode: 201}).status(201)
        }
    })
}

const getUser = (req,res) => {
    let emailId = req.query.emailId
    let criteria = {}
    if(emailId){
        criteria = {
            emailId: emailId
        }
    }
    Models.User.find(criteria,(err,data) =>{
        res.json({message: "Success", data: data, statusCode: 200}).status(200)
    })
}

const updateUser = (req,res) => {
    let emailId = req.body.emailId;
    let age = req.body.age;
    Models.User.find({
        emailId: emailId
    },(err,data) =>{
        if(data.length == 0) {
            res.json({message: "User does not exist", statusCode: 400}).status(400)
        }
        else {
            Models.User.findOneAndUpdate({
                emailId: emailId
            },{
                $set:{
                    age: age
                }
            },{},(err,data) => {
                if(err) {
                    res.json({message: err.message, statusCode: 400}).status(400)
                }
                else {
                    res.json({message: "Succesfully Updated", statusCode: 200}).status(200) 
                }
            })
        }
    })
    
}

const deleteUser = (req,res) => {
    let userId = req.params.id;
    Models.User.findOneAndDelete({
        _id: userId
    },{},(err,data) => {
        if(err) {
            res.json({message: err.message, statusCode: 400}).status(400)
        }
        else {
            res.json({message: "Succesfully Deleted",data: data, statusCode: 200}).status(200) 
        }
    })
}

module.exports = {
    createUser,
    getUser,
    updateUser,
    deleteUser
}