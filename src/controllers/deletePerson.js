// person model import
const PersonModel = require('../models/db').PersonModel;

const deletePerson = async (request, response) => {
    try {
        const result = await db.PersonModel.deleteOne({ _id: request.params.id }).exec();
        response.send(result);
    } catch (error) {
        response.status(500).send(error);
    }
}

module.exports = deletePerson;