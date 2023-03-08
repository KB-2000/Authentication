const jwt = require('jsonwebtoken');
const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const authenticate = require('../middleware/authenticate');

require('../db/conn');
const User = require('../models/userSchema');

router.get('/', (req, res) => {
    res.send(`Hello world from server router js`);
})


// using async await

router.post('/register', async (req,res) => {
    const {name, email, phone, work, password, cpassword} = req.body;
    
    if(!name || !email || !phone || !work || !password || !cpassword) {
        return res.status(422).json({error: "All details are mandatory"});

    }

    if(password != cpassword) {
        return res.status(422).json({error: "Password Mismatch"});
    }


    try {
       const userExist = await User.findOne({email:email})

       if(userExist) {
        return res.status(422).json({error: "User already exists"});
        }

        const user = new User({name, email, phone, work, password, cpassword});
        
        await user.save();
        res.status(201).json({message: "user registered successfully" });

        

    } catch(err) {
        console.log(err);
    }

    
});

// Login route

router.post('/signin',async (req,res) => {
    try {
        let token;
        const {email, password} = req.body;
        if(!email || !password) {
            return res.status(400).json({error: "fill all fields"});
        }

        const userLogin = await User.findOne({email:email});

        // console.log(userLogin);
        
        
        if(userLogin) {
            const isMatch = await bcrypt.compare(password, userLogin.password);
            token = await userLogin.generateAuthToken();
            res.cookie("jwttoken", token, {
                expires: new Date(Date.now() + 25892000000),
                httpOnly: true
            });
           
            console.log(token);

            if(!isMatch) {
                res.status(400).json({error: "Invalid Credentials"});
            } else {
                res.json({message:"user signin successfully"});
            }
    } else {
        res.status(400).json({error: "Invalid Credentials"});
    }
        
    } catch(err) {
        console.log(err);
    }

    
});

// About

router.get('/about', authenticate, (req, res) => {
    res.send(req.rootUser);
});

// Logout

router.get('/logout', (req, res) => {
    res.clearCookie('jwtoken',{path:'/'});
    res.status(200).send('User Logout');
});


module.exports = router;