const express = require('express');
const con = require('../../database/db');


const router = express.Router();

router.post('/', function (req, res) {
    try {
        console.log("language known :: ", req.body);

        var id = req.body.id;
        var lan_1 = req.body.hindi;

       
        var lan_2 = req.body.english;
        var lan_3 = req.body.gujarati;


        var query4 = `insert into language_known (id,lan,lan_type) values (?,?,?);`;

        if (lan_1 !== undefined) {

            var arr1 = [];

            for (let i = 1; i < lan_1.length; i++) {
                arr1.push(lan_1[i]);
            }

            
            for (let i = 0; i < arr1.length; i++) {

                con.query(query4, [id, 'Hindi', arr1[i]], function (err, result) {

                    console.log("Data inserted into lan 1 !!!");

                });

            }


        }

        if (lan_2 !== undefined) {

            var arr2 = [];

            for (let i = 1; i < lan_2.length; i++) {
                arr2.push(lan_2[i]);

            }


            for (let i = 0; i < arr2.length; i++) {

                con.query(query4, [id, 'English', arr2[i]], function (err, result) {

                    console.log("Data inserted into lan 2 !!!");

                });

            }
        }


        if (lan_3 !== undefined) {

            var arr3 = [];

            for (let i = 1; i < lan_3.length; i++) {
                arr3.push(lan_3[i]);

            }

           

            for (let i = 0; i < arr3.length; i++) {

                con.query(query4, [id, 'Gujarati', arr3[i]], function (err, result) {

                    console.log("Data inserted into lan 3 !!!");

                });

            }


        }

        res.send("language known saved succeessfully !!! ");



    } catch (error) {
        console.error(error);
    }

});


module.exports = router;