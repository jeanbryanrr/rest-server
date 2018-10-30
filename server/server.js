require('./config/config');
const express = require('express');
const app = express();
const mongoose = require('mongoose');

var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

app.use(require('./rutas/usuario'));


mongoose.connect(process.env.URLDB, (error, resp) => {
    if (error) throw error;
    console.log('base de datos online');
});


app.listen(process.env.PORT, () => {
    console.log("Escuchando !!" + process.env.PORT);
});