// person model import
const PersonModel = require('../models/db').PersonModel;

const getPerson = async (request, response) => {
    try {
        const person = await PersonModel.findById(request.params.id).exec();
        person.set(request.body);
        const result = await personalbar.save();
        response.send(result);
    } catch (error) {
        response.status(500).send(error);
    }
}

module.exports = getPerson;