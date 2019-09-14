// database configuration
const Mongoose = require('mongoose');

const db = {
    // database connect
    Connect: () => {
        Mongoose.connect('mongodb+srv://geovani:ati25144@cluster0-jvwp7.mongodb.net/grillo?retryWrites=true&w=majority');
    },
    // person collection
    PersonModel: Mongoose.model('person', {
        name: String,
        email: String,
        password: String
    })
};

module.exports = db;