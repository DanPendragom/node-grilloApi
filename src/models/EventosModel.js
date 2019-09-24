// database configuration
const Mongoose = require('mongoose');

// event model
const Eventos = new Mongoose.Schema({
    autor: {
        usuario_id: String,
        nome: String
    },
    titulo: String,
    endereco: String,
    descricao: String,
    imagem: {
        nome: String,
        tamanho: String,
        key: String,
        url: String
    },
    criacao: {
        type: Date,
        defautl: Date.now
    },
    participantes: [{
        usuario_id: String,
        nome: String
    }]
});

module.exports = Mongoose.model('eventos', Eventos);