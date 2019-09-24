// database configuration
const Mongoose = require('mongoose');

// vacancy model
const Vagas = new Mongoose.Schema({
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
    validade: Date,
    inscritos: [{
        usuario_id: String,
        nome: String
    }]
});

module.exports = Mongoose.model('vagas', Vagas);