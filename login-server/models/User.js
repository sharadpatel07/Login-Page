const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    name:{type:String},
    email:{type:String},
    password:{type:String}
})

const UserData = mongoose.model("UserData" , UserSchema);
module.exports = UserData;