const { response } = require("express");
const jwt = require("jsonwebtoken");
const User = require("../models/userSchema");

const SECRET_KEY = 'KAUSHIKBANSODE_KAUSHIKBANSODE09_KAUSHIKBANSODE092000';
const Authenticate = async (req, res, next) => {
    try {

        const token = req.cookies.jwtoken;
        const verifyToken = jwt.verify(token, SECRET_KEY);

        const rootUser = await User.findOne({_id:verifyToken._id,"tokens.token":token})

        if(!rootUser) {
            throw new Error('User not Found')
        }

        req.token = token;
        req.rootUser = rootUser;
        req.userID = rootUser._id;

        next();

    } catch(err) {
        response.status.send('Unauthorized: No token provide');
        console.log(err);
    }
}

module.exports = Authenticate;