const Express = require('express');
const BodyParser = require('body-parser');

// database config module
const db = require('./src/models/db');

// controllers modules
const createUser = require('./src/controllers/createUser');
const getPeople = require('./src/controllers/getPeople');
const getPerson = require('./src/controllers/getPerson');
const updatePerson = require('./src/controllers/updatePerson');
const deletePerson = require('./src/controllers/deletePerson');

const app = Express();

// database connect
db.Connect();

// BodyParser config
app.use(BodyParser.json());
app.use(BodyParser.urlencoded({ extended: true }));

// creating data
app.post('/person', createUser);

// having data
app.get('/people', getPeople);

// getting a single document based on id
app.get('/person/:id', getPerson);

// updating a data based on id
app.put('/person/:id', updatePerson);

// deleting a data based on id
app.delete('/person/:id', deletePerson);

// server run config
app.listen(3000, () => {
    console.log('Listenning at :3000');
});