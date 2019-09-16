// user controller module
const User = require('../controllers/user');

// user routes config
const userRoute = app => {
    // creating person data
    app.post('/createUser', User.createPerson);

    // having people data
    app.get('/getPeople', User.getPeople);

    // getting a single document based on id
    app.get('/getUser/:id', User.getPerson);

    // updating a data based on id
    app.put('/setUser/:id', User.setPerson);

    // deleting a data based on id
    app.delete('/deleteUser/:id', User.deletePerson);
};

module.exports = userRoute;