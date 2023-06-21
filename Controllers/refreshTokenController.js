const jwt = require('jsonwebtoken');
const User = require('../model/User')


const handleRefreshToken = async(req,res)=>{
    const cookie = req.cookie;
    if(!cookie?.jwt) return res.sendStatus(401);
    const refreshToken = cookie.jwt;
    const foundUser = User.findOne({refreshToken}).exec();
    if(!foundUser) return res.sendStatus(403);//forbidden
    jwt.verify(
        refreshToken,
        process.env.REFRESH_TOKEN_SECRET,
        {expiresIn : "24*60*60*1000",sameSite:'None',secure:true}
        )
}

module.exports = handleRefreshToken