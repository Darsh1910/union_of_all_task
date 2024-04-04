const express = require('express');
var md5 = require('md5');
const con = require('../database/db');


async function register_data(req, res) {

    try {

        console.log(req.body);

        var firstname = req.body.firstname;
        var lastname = req.body.lastname;
        var email = req.body.email;
        var password = req.body.password;
        var salt = req.body.salt;
        var activationcode = req.body.activationcode;
    
    
        var saltedPassword = password+salt;
    
        var md5_password = md5(saltedPassword);


        var check_email_exist = `select email from register where email='${email}';`;

        await con.query(check_email_exist,function(err,result){
             if(err) throw err;
             
             if(result.length === 0)
             {

                var insertIntoRegister = `insert into register (firstname,lastname,email,salt,password,activation_code) values(?,?,?,?,?,?);`;
    
                con.query(insertIntoRegister,[firstname,lastname,email,salt,md5_password,activationcode],function(err,result){
                    if(err) throw err;
                    console.log("insert into register !!!");
                    var err_message ='';
                    res.json({id:err_message});
        
                });
                  
             }
             else
             {
                var err_msg = 'Email Already Exists !!!';
                res.json({id:err_msg});    
                
             }


            // res.render('register',{err:""});
              
        });


    
    
       
    
    
       
        
    } catch (error) {
        console.error(error);
    }

 

}

module.exports = register_data;


