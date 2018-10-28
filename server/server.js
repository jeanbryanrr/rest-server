require('./config/config');

var express = require('express');
var app = express();
var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

app.get('/usuario', function(req, res) {
    res.json('get usuario')
})
app.post('/usuario', function(req, res) {

    const body = req.body;
    res.json({
        body
    });
});

app.listen(process.env.PORT, () => {
    console.log("Escuchando !!" + process.env.PORT);
})