const express = require('express');
const verfiyToken = require('../middleware/Auth');

var jwt = require('jsonwebtoken');
require('dotenv').config();
// let secret = 'Secret';
const router = express.Router();

// function ensureCreditials(req, res, next) {

//        if (!req.cookies.token) {
//               res.status(401).json({
//                      err: "invalid Token !!!"
//               })
//        }
//        else {
//               res.render('Home');
//               console.log("inside next function !!");
//               next();
//        }

// }



router.get("/", verfiyToken, function (req, res) {
       try {

              res.render('Home');
             console.log("welcome to Home Page !!!");

       } catch (error) {
              console.log(error);
       }

       // console.log("cookie  : " + req.cookies.token);
       // if (!req.cookies.token) {
       //        res.status(401).json({
       //               err: "invalid Token !!!"
       //        })
       // }
       // else {
       //        try {
       //               jwt.verify(req.cookies.token, secret);

       //        } catch (error) {
       //               res.status(401).json({
       //                      err: "invalid Token !!!"
       //               })
       //        }

       //        res.render('Home');
       //        // next();
       // }

});

// router.get("*",function(req,res){

//        res.render('Home');
// });


module.exports = router;

