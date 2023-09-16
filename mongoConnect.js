/**
 * Created by Navit
 */

 'use strict';
 var Mongoose = require('mongoose'); 
 const mongoURI = "mongodb+srv://navit:lqURsEDvDeeMECnN@cloudbootcamp.bv4zn.mongodb.net/CloudBootcamp?retryWrites=true&w=majority"
 
 //Connect to MongoDB
 Mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true },(err) =>{
     if (err) {
         console.log("DB Error: ", err);
         process.exit(1);
     } else {
         console.log('MongoDB Connected');
     }
 });
 
 exports.Mongoose = Mongoose;
 