// person model import
const PersonModel = require('../models/db').PersonModel;

const createUser = async (request, response) => {
    try {
        const person = new PersonModel(request.body);
        const result = await person.save();
        response.send(result);
    } catch (error) {
        response.status(500).send(error);
    }
}

module.exports = createUser;