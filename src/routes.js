const routes = require('express').Router();
const multer = require('multer');

// internal modules
const User = require('./controllers/User');
const multerConfig = require('./config/multer');
const Upload = require('./controllers/Upload');

// creating person data
routes.post('/createUser', User.createPerson);

// having people data
routes.get('/getPeople', User.getPeople);

// getting a single document based on id
routes.get('/getUser/:id', User.getPerson);

// updating a data based on id
routes.put('/setUser/:id', User.setPerson);

// deleting a data based on id
routes.delete('/deleteUser/:id', User.deletePerson);

// uploading a file
routes.post('/uploadFile', multer(multerConfig).single('file'), Upload.photo);


// exporting routes
module.exports = routes;