const express = require('express');
const con = require('../../database/db');
const md5 = require('md5');
var jwt = require('jsonwebtoken');
require('dotenv').config();
// let secret = 'Secret';

const router = express.Router();

router.get("/", function (req, res) {
    try {
        res.render('login', { err: "" });
    } catch (error) {
        console.error(error);
    }
});


router.post("/", function (req, res) {
    try {

        var email = req.body.email;
        var login_password = req.body.password;
        console.log(login_password);

        var getPassword = `select salt,password from register where email='${email}'`;

        con.query(getPassword, async function (err, result) {

            if (err) throw err;

            if (result.length !== 0) {
                // console.log(result[0].password);

                var s_pass = login_password + result[0].salt;
                // console.log(result[0].salt);
                // console.log(s_pass);
                var md5_password = await md5(s_pass);

                // console.log(md5_password);
                // console.log(result[0].password);

                if (result[0].password === md5_password) {
                    console.log("login successfully ");
                    // res.redirect('/home');

                    var token = jwt.sign({ email: email, password: login_password }, process.env.Secret);

                    // localStorage.setItem('token', token);

                    // res.json({success:true, message:'You have logged in correctly!', token: token });

                    console.log(token);

                    res.cookie("token", token, {
                        httpOnly: true,
                        secure: true,
                        expires: new Date(Date.now() + 1000 * 60 * 30)
                    });


                    res.redirect('/home');
                }
                else {
                    var err = "Invalid Credential !!!";
                    res.render('login', { err: err })
                }

            }
            else {
                var err = "Invalid Credential !!!";
                res.render('login', { err: err })

            }

        });
        // res.send("invalid email")





    } catch (error) {
        console.error(error);
    }
})

module.exports = router;