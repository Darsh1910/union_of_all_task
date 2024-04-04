const express = require('express');
const con = require('../../database/db');

const router = express.Router();

function saveWorkExperience(req,res){
    try {
         
        var id = req.body.id;
        var company_name = req.body.company_name;
        var company_designation = req.body.company_designation;
        var Date_from = req.body.Date_from;
        var Date_to = req.body.Date_to;

        for (let i = 0; i < company_name.length; i++) {

            var query3 = `insert into work_experience (id,company_name,designation,from_date,to_date) values (?,?,?,?,?)`;


            con.query(query3, [id, company_name[i], company_designation[i], Date_from[i], Date_to[i]], function (err, result) {

                console.log("Data inserted into Work Experience !!!");

            });

        }


        console.log("work experience :: ",req.body);
        res.send("work experience details saved succeessfully !!! ");
        
    } catch (error) {
        console.error(error);
    }
}


module.exports = saveWorkExperience;