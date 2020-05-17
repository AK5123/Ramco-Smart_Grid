const express = require("express");
const app = express();
const bodyparser = require("body-parser");
var cors = require('cors')
const fs = require('fs');
const http = require('http');
var server = app.listen(process.env.PORT || 3000);
const axios = require('axios');
const controller = require('./controller.js');
app.use(cors());

app.use(bodyparser.json());

app.use(bodyparser.urlencoded({
    extended: true
}));



app.get("/order", (req, res) => {
    console.log(req.query)
    let lat = req.query.lat[1];
    let lng = req.query.lng[1];
    controller.brain(lat,lng)
    res.send("Thanks");
}); //


