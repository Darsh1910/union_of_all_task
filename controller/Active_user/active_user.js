const express = require('express');
const con = require('../../database/db');

const router = express.Router();



async function active_user(req, res) {
    try {
        console.log(req.query);

        var email = req.query.email;
        var activation_code = req.query.token;

        var check_user = `select email,activation_code from register where email='${email}'`;

        await con.query(check_user,function(err,result){

            if(err) throw err;
            if(result.length ===0){
                res.render('NotFound/notfound');
            }
            else
            {
                res.render('activeuser');
            }



        })




        var update_time = `update register set status=1 where email='${email}' and activation_code='${activation_code}'`;

        await con.query(update_time, function (err, result) {
            if (err) {
                console.log("invalid creditial ");
            }

            console.log("status updated in register table ");

        });

        var check_time = `select created_at from register where email='${email}' and activation_code='${activation_code}'`;


        await con.query(check_time, async function (err, result) {

            if (result.length !== 0) {

                var date = new Date();

                console.log(result);
                var newDate = new Date(result[0].created_at);
                console.log(newDate);
                console.log(date);

                if (((date - newDate) / (60 * 1000)) > 60) {
                    var err = "Verification code is expired !!!";
                    console.log(err);
                    var update_time = `delete from register where email='${email}';`;

                    await con.query(update_time, function (err, result) {

                        console.log("status updated in register table ");

                    });

                    res.render('deactivelink');

                }
                else {
                    res.render('activeuser');
                }


            }


        });

    } catch (error) {

        console.error(error);

    }



}





module.exports = active_user;
