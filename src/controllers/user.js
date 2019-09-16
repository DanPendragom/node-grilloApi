// Person collection database import
const UsuarioSchema = require('../models/UsuarioSchema').UsuarioSchema;

// User actions
const User = {
    createPerson: async (request, response) => {
        try {            
            // creating a document on the database
            const person = new UsuarioSchema(request.body);
            const result = await person.save();
            response.send(result);
        } catch (error) {
            response.status(500).send(error);
        }
    },
    getPeople: async (request, response) => {
        try {
            const result = await UsuarioSchema.find().exec();
            response.send(result);
        } catch (error) {
            response.status(500).send(error);
        }
    },
    getPerson: async (request, response) => {
        try {
            const person = await UsuarioSchema.findById(request.params.id).exec();
            person.set(request.body);
            const result = await person.save();
            response.send(result);
        } catch (error) {
            response.status(500).send(error);
        }
    },
    setPerson: async (request, response) => {
        try {
            const person = await UsuarioSchema.findById(request.params.id).exec();
            person.set(request.body);
            const result = await person.save();
            response.send(result);
        } catch (error) {
            response.status(500).send(error);
        }
    },
    deletePerson: async (request, response) => {
        try {
            const result = await UsuarioSchema.deleteOne({ _id: request.params.id }).exec();
            response.send(result);
        } catch (error) {
            response.status(500).send(error);
        }
    }
};

module.exports = User;