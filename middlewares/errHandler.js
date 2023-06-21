const logEvent = require('./logEvent')

const errHandler = (err,req,res,next)=>{
    logEvent(`${err.name}\t ${err.message}`, "errLogs.txt");
    res.status(500).send(err.message);
}

module.exports = errHandler