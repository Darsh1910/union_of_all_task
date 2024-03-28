const express = require('express');
const con = require('../../database/db');

const router = express.Router();

router.post('/', function (req, res) {
    try {


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


        var query = `insert into basic_detail (first_name,last_name,Designation,Email,phone_number,Address1,Address2
            ,city,state,gender,ZipCode,Relationship_status,Date_Of_Birth)
             values('${firstname}','${lastname}','${designation}','${email}','${phonenumber}',
             '${address1}','${address2}','${city}','${state}','${gender}','${zipcode}','${rel_status}','${dateOfBirth}');`;

        console.log("query :: " + query);

        con.query(query, function (err, result) {


            console.log(err);
            console.log("Data inserted into Basic Details !!!");
            var id = result.insertId;
            console.log(id);

            res.json({id:result.insertId})
            console.log("result ",result);
            
        });

    




    } catch (error) {
        console.error(error);
    }
});


module.exports = router;


