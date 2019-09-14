const Express = require('express');
const BodyParser = require('body-parser');

// database config module
const db = require('./src/models/db');

// controllers modules
const User = require('./src/controllers/user');

const app = Express();

// database connect
db.Connect();

// BodyParser config
app.use(BodyParser.json());
app.use(BodyParser.urlencoded({ extended: true }));

// creating person data
app.post('/person', User.create);

// having people data
app.get('/people', User.getPeople);

// getting a single document based on id
app.get('/person/:id', User.getPerson);

// updating a data based on id
app.put('/person/:id', User.setPerson);

// deleting a data based on id
app.delete('/person/:id', User.deletePerson);

// server run config
app.listen(3000, () => {
    console.log('Listenning at :3000');
});