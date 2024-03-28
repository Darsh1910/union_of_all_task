const express = require('express');
const con = require('../../../database/db');

const router = express.Router();



router.post("/", function (req, res) {
    try {


         console.log(req.body);


         res.send("basic details updated !!!");

        var id = req.body.id;


        var firstname = req.body.firstname;
        var lastname = req.body.lastname;
        var designation = req.body.designation;
        var email = req.body.email;
        var phonenumber = req.body.phonenumber;


        var address1 = req.body.address1;
        var address2 = req.body.address2;
        var city = req.body.city;
        var state = req.body.state;
        var gender = req.body.gender;
        var zipcode = req.body.zipcode;

        var rel_status = req.body.relationship_status;
        var dateOfBirth = req.body.dateOfBirth;



        // update record 

        // basic details

        var basic_detail = `update basic_detail set first_name='${firstname}',last_name='${lastname}',
        Designation='${designation}',Email='${email}',phone_number='${phonenumber}',Address1='${address1}',
        Address2='${address2}',city='${city}',state='${state}',gender='${gender}',ZipCode='${zipcode}',
        Relationship_status='${rel_status}',Date_Of_Birth='${dateOfBirth}' where emp_id=${id};`;



        con.query(basic_detail, function (err, result) {
            if (err) throw err;
            console.log(result);
            console.log("updated basic details education details  !!!!");
        });








    } catch (error) {
        console.error(error);
    }


});


module.exports = router;