const logEvent = require('./logEvent')

const logger = (req,res,next)=>{
    const msg = `${req.method}\t ${req.originalUrl}\t${req.ip}`;
    logEvent(msg,'reqLogs.txt');
    next();
}

module.exports = logger