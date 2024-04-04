const express = require('express');
const con = require('../../database/db');
var md5 = require('md5');
const router = express.Router();


router.get("/", function (req, res) {

    var email = req.query.email;
    var activation_code = req.query.activation_code;
    console.log(activation_code);



    var refresh_activation_code = `update register set activation_code='${activation_code}' where email='${email}'`;


    con.query(refresh_activation_code,function(err,result){
        if(err) throw err;

        console.log("activation code refresh !!!");

        var getActionCode = `select activation_code from register where email='${email} and activation_code='${activation_code}';`;  


    });




      

    console.log(email);

    res.render('resetpassword', { email: email });


});


router.post("/", async function (req, res) {

    var email = req.body.email;



    var salt = `select salt from register where email='${email}';`;
    var password = req.body.created_password;

    var salt_data = new Promise((resolve, reject) => {

        con.query(salt, function (err, result) {

            if (err) throw err;

            if (result.length !== 0) {
                return resolve(result);
            }
            else {
                return;
            }

        });


    });

    var getSalt = await salt_data;

    var salt_password = password + getSalt[0].salt;

    var saltedPassword = await md5(salt_password);

    var update_password = `update register set password ='${saltedPassword}' where email='${email}'`;

    await con.query(update_password, function (err, result) {

        if (err) throw err;

        console.log("password updated into register table !!!!");

    });




});

module.exports = router;