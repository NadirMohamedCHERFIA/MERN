const allowedOrigins = require('./allowedOrigins');

const corsOptions = {
    origin : (origin,callback)=>{
        if(allowedOrigins.indexOf(origin) !==-1 || !origin){
            callback(null,true);
        }else{
            console.log(new Error("Access denied blocked by CORS"));
        }
    },
    optionSuccessStatus : 200
}

module.exports = corsOptions