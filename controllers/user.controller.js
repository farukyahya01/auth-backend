const User = require("../models/user.models");
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');

module.exports = {
    login: async (req, res) => {
        const { email, password } = req.body;
        
        try {
            const getUser = await User.findOne({email: email});
            let let_user = {
                "_id" : getUser._id,
                "role" : getUser.role 
            }
            if (getUser) {
                bcrypt.compare(password, getUser.password, function(err, result) {
                if (result) {
                    const token = jwt.sign(let_user, "THISISEXAMPLE", {
                        expiresIn: 300,
                    }); 
                    return [
                        res.status(200).json({ message: "Login Successfuly", token: token })
                    ]
                }else{
                    return [
                        res.status(400).json({ message: "The email or password wrong!" })
                    ]
                }
                });
            }else{
                return [
                    res.status(400).json({ message: "The email or password wrong!" })
                ]
            }

        } catch (e) {
            return [
                res.status(500).json({
                    code: 500,
                    status: false,
                    message: e.message
                })
            ]
        }
    },

    register: async (req, res) => {
        const { name, surname, email, password } = req.body;
        bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(password, salt, function(err, hash) {
            let password_hashing = hash;
            User.create({
                name: name,
                surname: surname,
                email: email,
                password: password_hashing
                }).then((user) => {
                    return [
                        res.status(200).json({ message: "The user successfuly registered!" })
                    ]
    
                }).catch((err) => {
                    let message = err.code == 11000 ? "The email already used!" : err.message;
                    return [
                        res.status(500).json({ message: message })
                    ]
                });
        });
        });  
    },
}