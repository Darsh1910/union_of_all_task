const express = require('express');
const con = require('../../../database/db');
const verfiyToken = require('../../../middleware/Auth');


const router = express.Router();


router.post('/',function (req, res) {
    try {

        console.log(req.body);


        var id = req.body.id;
        var lan_1 = req.body.hindi;

       
        var lan_2 = req.body.english;
        var lan_3 = req.body.gujarati;


        // delete record before insert 


        var delCheckfield = `delete from language_known where id = ${id};`;

        con.query(delCheckfield,function(err,result){
             
              if(err) throw err;

              console.log("delete records before update !!");

        });





        var query4 = `insert into language_known (id,lan,lan_type) values (?,?,?);`;

        if (lan_1 !== undefined) {

            var arr1 = [];

            for (let i = 1; i < lan_1.length; i++) {
                arr1.push(lan_1[i]);
            }

            console.log(arr1);

            for (let i = 0; i < arr1.length; i++) {

                con.query(query4, [id,'Hindi', arr1[i]], function (err, result) {

                    console.log("Data updated into lan 1 !!!");

                });

            }


        }

        if (lan_2 !== undefined) {

            var arr2 = [];

            for (let i = 1; i < lan_2.length; i++) {
                arr2.push(lan_2[i]);

            }

            console.log(arr2);

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

            console.log(arr3);

            for (let i = 0; i < arr3.length; i++) {

                con.query(query4, [id, 'Gujarati', arr3[i]], function (err, result) {

                    console.log("Data inserted into lan 3 !!!");

                });

            }


        }





        res.send("language known !!!");


    } catch (error) {
        console.error(error);
    }


});


module.exports = router;