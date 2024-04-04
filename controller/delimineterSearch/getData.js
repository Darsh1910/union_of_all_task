const express = require('express');
const con = require('../../database/db');
const verfiyToken = require('../../middleware/Auth');
;

// _ ^  $ { } :
 function delimiter_search(req, res) {
    try {

        let key = []

        let object = {};
        // var del = /[$_{}^]/;

        var data = req.query.input_data;


        if (data === undefined) {
            res.render('delimineterSearch/viewgrid', { result: [], data: [], err: "" });
        }

        var data1 = data.split(/['_','^','$','{','}']/);





        console.log("data1 ", data1);


        let sqlQuery = {
            '_': "first_name",
            '^': "last_name",
            "$": "email",
            '{': "city",
            "}": "country"

        };

        let keysStr = data;

        var replaceData = data1.map((a) => {
            keysStr = keysStr.replace(a, "");

            key.push(keysStr);
        })

        console.log("keysstr --> ", keysStr);

        console.log("key ---> ", key);




        for (let i = 0; i < keysStr.length; i++) {

            if (object.hasOwnProperty(keysStr[i])) {
                object[keysStr[i]].push(data1[i + 1])
            } else {
                object[keysStr[i]] = [data1[i + 1]]
            }

        }



        console.log("object -->", object);

        console.log("sqlQuery -->", sqlQuery);
        console.log(object[keysStr[0]]);
        console.log("length ::", key.length);



        var query_string = "select *from student_info where ";

        let check_is = 1;

        for (let key in object) {


            if (sqlQuery.hasOwnProperty(key)) {

                if (object[key].length > 2) {
                    check_is = 2;

                    query_string = query_string + "( ";

                    temp_2 = query_string + "AND (";

                    for (let i = 0; i < object[key].length; i++) {

                        if (i == object[key].length - 1) {
                            console.log("key : ", key);
                            query_string = query_string + "( " + sqlQuery[key] + " like " + `'%${object[key][i]}%'` + ")";

                        }

                        else {

                            query_string = query_string + "( " + sqlQuery[key] + " like " + `'%${object[key][i]}%'` + ")" + " OR ";

                        }
                    }
                }

                else {
                    if (check_is == 1) {
                        check_is = 2;
                        query_string = query_string + sqlQuery[key] + " like " + `'%${object[key][0]}%'`;
                    }
                    else {
                        query_string = query_string + " AND " + sqlQuery[key] + " like " + `'%${object[key][0]}%'`;
                    }
                }
            }
        }


        console.log("query ::: ", query_string);



        con.query(query_string, function (err, result) {
            if(err) throw err;
            if (result.length === 0) {
                res.render('delimineterSearch/viewgrid', { result:[], data: [], err: "Data not found in table" });
            } else {
                res.render('delimineterSearch/viewgrid', { result: result, data: data, err: "" });
            }




        })

    }

    catch (error) {
        console.error(error);
    }


}


module.exports = delimiter_search;