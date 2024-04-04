
const express = require('express');


// var bodyParser = require('body-parser');


const app = express();
const cookieParser = require('cookie-parser')

const port = 3000;

app.set('view engine', 'ejs');

app.use(express.static('public'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

const mainRoute = require('./route');

app.use(mainRoute);


app.listen(3000, () => {
    console.log("server started at port 3000 !!");
});
