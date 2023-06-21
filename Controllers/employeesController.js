const Employee = require('../model/Employee');
const User = require('../model/User');


const handleNewEmployee = async(req,res)=>{
    const {firstName,familyName} = req.body;
    const duplicate = Employee.findOne({firstName,familyName}).exec();
    if(duplicate) return res.status(409).json({message:"User already exists in the database"});
    try{
        const result = await User.create({
            firstName ,
            familyName,
        })

        console.log(result);
        res.status(201).json({message:'Employee added successfully'});
    }catch(err){
        res.status(500).json({message:err.message});
    }
}

module.exports = {handleNewEmployee}