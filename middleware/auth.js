const jwt = require('jsonwebtoken');
const secret = require('../config/index').secretOrKey;

module.exports = function(req, res, next) {
    const token = req.header('x-auth-token');
    if (!token) return res.status(401).json('Access denied.')

    try {
        const decoded = jwt.verify(token, secret);
        req.user = decoded;
        next();
    }
    catch (ex) {
        res.status(400).json('Invalid token.');
    } 
}