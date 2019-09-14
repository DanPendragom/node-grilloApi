// Person collection database import
const PersonModel = require('../models/db').PersonModel;

// ações do usuario
const User = {
    create: async (request, response) => {
        try {
            const person = new PersonModel(request.body);
            const result = await person.save();
            response.send(result);
        } catch (error) {
            response.status(500).send(error);
        }
    },
    getPeople: async (request, response) => {
        try {
            const result = await PersonModel.find().exec();
            response.send(result);
        } catch (error) {
            response.status(500).send(error);
        }
    },
    getPerson: async (request, response) => {
        try {
            const person = await PersonModel.findById(request.params.id).exec();
            person.set(request.body);
            const result = await person.save();
            response.send(result);
        } catch (error) {
            response.status(500).send(error);
        }
    },
    setPerson: async (request, response) => {
        try {
            const person = await PersonModel.findById(request.params.id).exec();
            person.set(request.body);
            const result = await person.save();
            response.send(result);
        } catch (error) {
            response.status(500).send(error);
        }
    },
    deletePerson: async (request, response) => {
        try {
            const result = await PersonModel.deleteOne({ _id: request.params.id }).exec();
            response.send(result);
        } catch (error) {
            response.status(500).send(error);
        }
    }
};

module.exports = User;