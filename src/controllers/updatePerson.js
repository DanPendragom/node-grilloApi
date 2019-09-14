// person model import
const PersonModel = require('../models/db').PersonModel;

const updatePerson = async (request, response) => {
    try {
        const person = await db.PersonModel.findById(request.params.id).exec();
        person.set(request.body);
        const result = await person.save();
        response.send(result);
    } catch (error) {
        response.status(500).send(error);
    }
}

module.exports = updatePerson;