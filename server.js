
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

app.use("/",require('./router/register'));
app.use("/register",require('./router/register_data'));

app.use("/activeUser",require('./router/Active_user/active_user'));

app.use("/login",require('./router/Login/loginpage'));

app.use('/forgotpassword',require('./router/forgotPassword/forgotpassword'));

// app.use('/forgotpassword',require('./router/forgotPassword/forgotpassword'));

// app.use('*',require('./router/NotFound/notfound'));

app.use("/dynamic_table",require('./router/Dynamic_table/dynamic_table'));


// app.use("/register",require('./router/afterRegister'));

// app.use("/login",require('./router/login'));


app.use("/home",require('./router/home'));


app.listen(3000,()=>{

    console.log("server started at port 3000 !!");

});
