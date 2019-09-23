// database configuration
const Mongoose = require('mongoose');

// post model
const Postagem = new Mongoose.Schema({
    Autor: {
        usuario_id: String,
        nome: String
    },
    descricao: String,
    imagem: {
        nome: String,
        tamanho: String,
        key: String,
        url: String
    },
    criacao: {
        type: Date,
        default: Date.now
    }
});

module.exports = Mongoose.model('postagem', Postagem);