
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

app.use("/", require('./router/register'));
app.use("/register", require('./router/register_data'));

app.use("/activeUser", require('./router/Active_user/active_user'));

app.use("/login", require('./router/Login/loginpage'));

app.use('/forgotpassword', require('./router/forgotPassword/forgotpassword'));

// app.use('/forgotpassword',require('./router/forgotPassword/forgotpassword'));

// app.use('*',require('./router/NotFound/notfound'));


// Task 1
app.use("/dynamic_table", require('./router/Dynamic_table/dynamic_table'));

//Task 2
app.use("/kuku_kube", require('./router/kuku_kube/kuku_cube'));

// Task 3
app.use("/tic_tac_toe", require('./router/Tic_Tac_Toe/tic_tac_toe'));

// Task 4
app.use("/event_table", require('./router/event_table/event_table'));

// Task 5
app.use("/getData", require('./router/dynamic_grid_view/route1'));

// Task 6
app.use("/delimineter_search", require('./router/delimineterSearch/getData'));




// app.use("/getbyid",require('./router/dynamic_grid_view/getuser'));

// app.use("/getAllDetail",require('./router/dynamic_grid_view/getAllDetail'));





app.use("/home", require('./router/home'));


app.listen(3000, () => {

    console.log("server started at port 3000 !!");

});
