var con = require('../database/db');


function getAllRecord(data) {

    return new Promise((resolve, reject) => {

        con.query(data, function (err, result) {

            if (err) {
 
                return reject(err);
            }
            else {
                console.log("length:: "+result.length);
                console.log("ceil :: "+Math.ceil(result.length/ 20));
                
                return resolve(Math.ceil(result.length/ 20));

            }


        });


    });





}

module.exports = getAllRecord;