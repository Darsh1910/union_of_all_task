var jwt = require('jsonwebtoken');
require('dotenv').config();
// let secret = 'Secret';

async function verfiyToken(req, res, next) {

    try {
        console.log("cookie  : " + req.cookies.token);
        if (!req.cookies.token) {
            res.status(401).json({
                err: "invalid Token !!!"
            })
        }
        else {
            try {
                jwt.verify(req.cookies.token, process.env.Secret);

            } catch (error) {
                res.status(401).json({
                    err: "invalid Token !!!"
                });
            }
            next();
            res.render('Home');

        }



    } catch (error) {
        console.error(error);
    }

}

module.exports = verfiyToken;
