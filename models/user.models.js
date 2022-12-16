const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: {
        type: String,
        required : true
    },
    surname: {
        type: String,
        required : true
    },
    email : {
        type: String,
        required : true,
        unique : true,
    },
    password : {
        type : String,
        minlength : 6,
        required : true,
    },
    role : {
        type : String,
        default : "Basic",
    },
    created_at : {
        type : Date,
        dafault : Date.now,
    },
    updated_at : {
        type : Date,
        default : Date.now,
    }
});

UserSchema.methods.createHash = async function (plainTextPassword){
    const saltRounds = 10;
    const salt = await bcrypt.genSalt(saltRounds);
    return await bcrypt.hash(plainTextPassword, salt);
};

UserSchema.methods.validatePassword = async function (candidatePassword) {
    return await bcrypt.compare(candidatePassword, this.password);
};
  
const User = mongoose.model("User", UserSchema);
module.exports = User;