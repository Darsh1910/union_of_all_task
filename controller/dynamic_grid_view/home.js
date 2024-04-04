const express = require('express');

const router = express.Router();



router.get("/", function (req, res) {
    try {
        res.send("Home page !!!! ");
    } catch (error) {
        console.error(error);
    }

});


module.exports = router;