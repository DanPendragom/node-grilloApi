// database configuration
const Mongoose = require('mongoose');

// user model
const Usuarios = new Mongoose.Schema({
    nome: String,
    estado: String,
    descricao: String,
    endereco: String,
    generoFavorito: [{
        genero: String
    }],
    numeroDocumento: [{
        rg: String,
        cpf: String
    }],
    login: String,
    senha: String,
    imagemPerfil: {
        nome: String,
        tamanho: Number,
        key: String,
        url: String
    },
    imagemBanner: {
        nome: String,
        tamanho: String,
        key: String,
        url: String
    }
});

module.exports = Mongoose.model('usuarios', Usuarios);