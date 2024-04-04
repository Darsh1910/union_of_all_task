const express = require('express');
const con = require('../../../database/db');
const verfiyToken = require('../../../middleware/Auth');



const router = express.Router();


router.post("/",function (req, res) {
    try {

        console.log(req.body);

        var id = req.body.id;

        var tech_lan_1 = req.body.php;
        var tech_lan_2 = req.body.mysql;
        var tech_lan_3 = req.body.laravel;
        var tech_lan_4 = req.body.oracle;




        var tech_del_query = `delete from technology_known where t_id = ${id}`;


        con.query(tech_del_query, function (err, result) {

            if (err) throw err;

            console.log("delete records before update technology known !!");

        });





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

       
        res.send("value updated successfully !!");








    } catch (error) {
        console.error(error);
    }


});


module.exports = router;