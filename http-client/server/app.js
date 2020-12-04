const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const Product = require('./product.js');

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());

mongoose.connect(
    'mongodb://localhost:27017/http_client',
    {useNewUrlParser: true, useUnifiedTopology: true}
);

var myLogger = function (req, res, next) { 
    console.log(req.body);
    next();
}
app.use(myLogger);


app.get('/productserr', function(req, res) {
    setTimeout(
        () => {
            res.status(500).send({
                msg: "Error message from the server"
            });
        }, 2000); 
});

app.listen(3000);