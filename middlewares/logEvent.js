const path = require('path');
const fsPromises = require('fs').promises;

const {format} = require('date-fns');
const {v4:uuid} = require('uuid');


const logEvent =async(msg,filePath)=>{
    try{
        const log = `${format(new Date(),'yyyy/MM/dd HH:mm:ss')}\t${uuid()}\t ${msg}\n`;
        await fsPromises.appendFile(path.join(__dirname,'..','logs',filePath),log);
    }catch(err){
        console.log(err);
    }
}

module.exports = logEvent