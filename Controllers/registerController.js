const bcrypt = require('bcrypt');
const User = require('../model/User');

const handleNewUser = async (req,res)=>{
    const {user,pwd} = req.body;
    console.log(req.body)
    if(!user || !pwd) return res.status(400).json({message:"Username and password are required"});
    const duplicate = await User.findOne({userName:user}).exec();
    if(duplicate) return res.sendStatus(409);// Conflict
    try{
        const hashedPassword = await bcrypt.hash(pwd,10);
        const result = await User.create({
            userName : user,
            password : hashedPassword,
            roles:{
                "User":2001
            },
        })

        // const newUser = new User();
        // const result = await newUser.save();

        console.log(result);

        res.status(201).json({message:"Success user added Successfully"});
    }catch (err){
        res.status(500).json({message:err.message});
    }
}

module.exports = {handleNewUser}