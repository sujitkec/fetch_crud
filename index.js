const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
// const cors = require("cors");

//routes
const userRoutes = require('./event_routes')


//initilizing
const app = express();
dotenv.config();
app.use(express.json({extended: true}));
app.use(express.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use((req, res, next) => {
    console.log("request", req.originalUrl)
    res.header('Access-Control-Allow-Origin', '*');
    res.header(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type,Accept,Authorization,Accept-Language,Accept-Encoding'
    );
    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS,PATCH');
        return res.status(200).json({});

    }
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
