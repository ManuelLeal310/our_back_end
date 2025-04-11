const jwt = require('jsonwebtoken');

function isAuthenticated (req, res, next) {
    try {
     if(req.headers.authorization && 
        req.headers.authorization.split(' ')[0] === 'Bearer' &&
        req.headers.authorization.split(' ')[1])
        {
        
        const tokenInHeaders = req.headers.authorization.split(' ')[1];
        const dataInToken = jwt.verify(tokenInHeaders, process.env.TOKEN_SECRET);
        req.payload = dataInToken;

        next();

        } else {
            res.status(400).json({ error: 'Token not in Headers'});
        }
        
    } catch (error) {
        res.status(500).json({ error: 'Token Invalid' });
    }
}

module.exports = { isAuthenticated };