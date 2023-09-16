let mongoose = require('mongoose')

let userSchema = new mongoose.Schema({
  firstName: {type: String, required: true},
  lastName: {type: String, required: true},
  emailId: {type: String, required: true, unique: true},
  age: {type: Number}
})

module.exports = mongoose.model('User', userSchema)