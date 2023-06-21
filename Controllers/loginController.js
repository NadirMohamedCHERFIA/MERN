const jwt = require('jsonwebtoken');
const User = require('../model/User');
const bcrypt = require('bcrypt');

const handleLogin = async(req,res)=>{
    const {user,pwd} = req.body;
    const foundUser = User.findOne({userName:user}).exec();
    if(!foundUser) return res.status(400).json({message:'User not found'});
    const match = bcrypt.compare(pwd,faoundUser.password);
    if(match){
        const accessToken = jwt.sign(
            {"userName":foundUser.userName},
            process.env.ACCESS_TOKEN_SECRET,
            {expiresIn:'30s'}
            );
        const refreshToken = jwt.sign(
            {"userName":foundUser.userName},
            process.env.REFRESH_TOKEN_SECRET,
            {expiresIn:'1d'}
            )
        res.cookie('jwt',refreshToken,{httpOnly:true,sameSite:'None',maxAge:'24*60*60*1000',secure : true})
    }
}