// person model import
const PersonModel = require('../models/db').PersonModel;

const getPeople = async (request, response) => {
    try {
        const result = await PersonModel.find().exec();
        response.send(result);
    } catch (error) {
        response.status(500).send(error);
    }
}

module.exports = getPeople;