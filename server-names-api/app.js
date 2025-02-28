const mongoose = require('mongoose');
const Person = require('./person.js');
const bodyParser  = require('body-parser');
const cors = require('cors');
const express = require('express');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());

mongoose.connect('mongodb://localhost:27017/namesdb', {useNewUrlParser: true, useUnifiedTopology: true});

app.get('/', ( req, res) => {
    Person.find({}).lean().exec((err, data) => {
        if(err) {
            return res.status(500).json({
                error: err,
                message: 'Internal error.' 
            });
        }
        return res.status(200).json(data);
    });
});


app.get('/:text', ( req, res) => {

    let text = req.params.text;
    var query = {
        $or: [
            {fistname: { $regex: text, $options: 'i' }},
            {lasttname: { $regex: text, $options: 'i' }},
            {country: { $regex: text, $options: 'i' }},
            {email: { $regex: text, $options: 'i' }},
            {city: { $regex: text, $options: 'i' }},
        ]
    };

    Person.find(query).lean().exec((err, data) => {
        if(err) {
            return res.status(500).json({
                error: err,
                message: 'Internal error.' 
            });
        }
        setTimeout(() => {return res.status(200).json(data)}, 2000)
    });
});

app.use (function(req, res, next) {
    res.status(400).send('Route does not exist.');
});

app.listen(9000);