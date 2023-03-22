const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");

//routes
const userRoutes = require('./event_routes')


//initilizing
const app = express();
dotenv.config();
app.use(express.json({extended: true}));
app.use(express.urlencoded({extended: true}));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);
    // Pass to next layer of middleware
    next();
});

//db connection
mongoose.connect(process.env.DB).then(() => {
    console.log('Db connected')
}).catch(err => {
    console.log(err.message, 'oops err');
});

//express app
app.use('/user', userRoutes)

app.get('/', (req, res) => {
    res.send("KEC User Portal")
});


//port
const port = process.env.port || 8088
app.listen(port, () => {
    console.log(`Server is running at port ${port}`)
});
