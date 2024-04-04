const express = require('express');
const con = require('../../database/db');


const router = express.Router();

function savetechlanguage(req, res) {
    try {
        console.log("technology details ::", req.body);

        var id = req.body.id;

        var tech_lan_1 = req.body.php;
        var tech_lan_2 = req.body.mysql;
        var tech_lan_3 = req.body.laravel;
        var tech_lan_4 = req.body.oracle;


        var query5 = `insert into technology_known (t_id,technology_known,tech_level) values (?,?,?);`;


        if (tech_lan_1 !== undefined) {

            con.query(query5, [id, tech_lan_1[0], tech_lan_1[1]], function (err, result) {

                console.log("Data inserted into technology language - 1 !!!");

            });
        }



        if (tech_lan_2 !== undefined) {

            con.query(query5, [id, tech_lan_2[0], tech_lan_2[1]], function (err, result) {

                console.log("Data inserted into technology language - 2 !!!");

            });
        }



        if (tech_lan_3 !== undefined) {

            con.query(query5, [id, tech_lan_3[0], tech_lan_3[1]], function (err, result) {

                console.log("Data inserted into technology language - 3 !!!");

            });
        }



        if (tech_lan_4 !== undefined) {

            con.query(query5, [id, tech_lan_4[0], tech_lan_4[1]], function (err, result) {

                console.log("Data inserted into technology language - 4 !!!");

            });
        }








        res.send("technology details details saved succeessfully !!! ");

    } catch (error) {
        console.error(error);
    }

}


module.exports = savetechlanguage;
