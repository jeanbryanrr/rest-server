const mongoose = require('mongoose');
let Schema = mongoose.Schema;

let uniqueValidator = require('mongoose-unique-validator');

let rolesValidos = {
    values: ['ADMIN_ROLE', 'USER_ROLE'],
    message: '{VALUE} no es un rol valido'
};

let usuarioSquema = new Schema({
    nombre: {
        type: String,
        required: [true, 'el nombre es necesario']
    },
    email: {
        type: String,
        required: [true, 'correo necesario'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'password necesario']
    },
    img: {
        type: String
    },
    role: {
        type: String,
        default: 'USE_ROLE',
        enum: rolesValidos
    },
    estado: {
        type: Boolean,
        default: true

    },
    google: {
        type: Boolean,
        default: false
    }
});
usuarioSquema.plugin(uniqueValidator, { message: '{PATH} debe de ser unico' });
module.exports = mongoose.model('Usuario', usuarioSquema);