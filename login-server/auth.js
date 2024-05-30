const express = require('express');
const router = express.Router();
const bcrypt = require("bcrypt");
const User = require('./models/User');
const salt = 10;
const jwt = require("jsonwebtoken");
const cors = require('cors')
const fetchuser = require("./middleware/fetchuser")
router.use(cors());

router.post('/signup',async (req,res)=>{
    const {name, email , password} = req.body;
    const hashPass =  bcrypt.hashSync(password , salt);
    const user = await User.create({
     name:name,
     email:email,
     password:hashPass
    })
    res.send(user)
    console.log(user)
 })

router.post('/login' , async (req,res)=>{
    const {name,email,password} = req.body;
    const user = await User.findOne({email});
    if(!user){
        const success = false;
        return res.status(400).json({success,error:"User not found"})
    }

    const comparepass = bcrypt.compare(password , user.password);
    if(!comparepass){
        const success = false;
        return res.status(400).json({success ,error:"Password is incorrect"})
    }

    const data = {
        user:{
            id:user._id,
            name:user.name,
        }
    }
    const jwtToken = jwt.sign(data, process.env.TOKEN_KEY);
    success = true;
    console.log(jwtToken)
    res.json({success,jwtToken})
})


router.post('/getuser' , fetchuser ,async(req ,res)=>{
    try {
        const userID = req.user.id;
        const user = await User.findById(userID).select("-password")
        res.send(JSON.stringify(user));
        console.log(user)
    } catch (error) {
        console.log(error)
        res.status(500).send("internel server error")
    }
})
 module.exports = router;
 