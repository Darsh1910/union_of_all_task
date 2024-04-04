const express = require('express');
const con = require('../../../database/db');
const verfiyToken = require('../../../middleware/Auth');


const router = express.Router();

function updateReferences(req, res) {
    try {

        var id = req.body.id;

        var ref_name = req.body.ref_name;
        var ref_contact = req.body.ref_contact;
        var ref_relation = req.body.ref_relation;


        var reference_select = `select id from reference_contact where name='${ref_name[0]}' and re_id=${id}`;


        con.query(reference_select, function (err, result) {

            if (err) throw err;

            data = Number(result[0].id);

            console.log("data:: " + data);

            var references = `update reference_contact set name=?,Contact_numeber=?,Relation=? where re_id=${id} and id=?;`;

            for (let i = 0; i < ref_name.length; i++) {
                con.query(references, [ref_name[i], ref_contact[i], ref_relation[i],data], function (err, result) {

                    console.log("Data inserted into Refences table  !!!");

                });

                data++;

            }


        })




        console.log("work experience :: ", req.body);
        res.send("work experience details saved succeessfully !!! ");

    } catch (error) {
        console.error(error);
    }
}


module.exports = updateReferences;
