// database configuration
const Mongoose = require('mongoose');

const UsuarioSchema = new Mongoose.Schema({
    nome: String,
    estado_id: Number,
    endereco: String,
    instrumento: String,
    generoFavorito: [{
        genero: String
    }],
    numeroDocumento: [{
        rg: String,
        cpf: String
    }],
    login: String,
    senha: String    
});

module.exports = Mongoose.model('Usuarios', UsuarioSchema);