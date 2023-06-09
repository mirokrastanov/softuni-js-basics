const jwt = require('../lib/jwt');
const { SECRET } = require('../config/config');


exports.auth = async (req, res, next) => {
    const token = req.cookies['auth'];

    if (token) {
        try {
            const user = await jwt.verify(token, SECRET);

            req.user = user; // save info about the user inside the request object as it is transfered futher to the next function as well

            next();
        } catch (error) {
            res.clearCookie('auth');
            
            res.redirect('/users/login');
        }
    } else {
        next();
    }
};