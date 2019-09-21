const Express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');

const app = Express();

/**
 * Database setup
 */
mongoose.connect(
    'mongodb+srv://geovani:geovani123@cluster0-jvwp7.mongodb.net/grillo?retryWrites=true&w=majority',
    {
        useNewUrlParser: true
    }
);

// BodyParser config
app.use(Express.json());
app.use(Express.urlencoded({ extended: true }));
// morgan config
app.use(morgan('dev'));

// routes init
app.use(require('./routes/user'));
app.use(require('./routes/files'));

// server run config
app.listen(3000, () => {
    console.log('Listenning at :3000');
});