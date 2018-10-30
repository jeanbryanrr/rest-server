const express = require('express');
const bcrypt = require('bcrypt');
const _ = require('underscore');
const app = express();

const Usuario = require('../modelo/usuario');



app.get('/usuario', (req, res) => {

    let desde = req.query.desde || 0;
    desde = Number(desde);
    Usuario.find({}, 'nombre')
        .skip(desde)
        .limit(5)
        .exec((err, usuarios) => {
            if (err) {
                return res.status(400).json({
                    ok: false,
                    err: err
                })
            }
            res.json({
                ok: true,
                usuarios: usuarios
            });
        })
})
app.post('/usuario', function(req, res) {
    const body = req.body;
    let usuario = new Usuario({
        nombre: body.nombre,
        email: body.email,
        password: bcrypt.hashSync(body.password, 10),
        role: body.role
    });

    usuario.save((err, usuarioBD) => {
        if (err) {
            return res.status(400).json({
                ok: false,
                err: err
            })
        }
        res.json({
            ok: true,
            usuario: usuarioBD
        });
    });

});

app.put('/usuario/:id', (req, res) => {
    let id = req.params.id;

    let body = _.pick(req.body, ['nombre', 'email', 'img', 'role', 'estado']);
    Usuario.findByIdAndUpdate(id, body, { new: true }, (err, usuarioBD) => {
        if (err) {
            return res.status(400).json({
                ok: false,
                err: err
            })
        }
        res.json({
            ok: true,
            usuario: usuarioBD
        });
    });

});



module.exports = app;