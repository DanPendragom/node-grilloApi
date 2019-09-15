// database configuration
const Mongoose = require('mongoose');

const db = {
    // database connect
    Connect: () => {
        Mongoose.connect('mongodb+srv://geovani:ati25144@cluster0-jvwp7.mongodb.net/grillo?retryWrites=true&w=majority');
    },
    // person collection
    UsuarioModel: Mongoose.model('usuarios', {
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
    })
};

module.exports = db;