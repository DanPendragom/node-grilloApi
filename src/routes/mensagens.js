const routes = require('express').Router();
const fs = require('fs');

// chat collection database import
const Conversa = require('../models/ConversaModel');

// creating message
routes.post('/conversa', async (req, res) => {
    try {
        // saving on database
        const conversa = await Conversa.create(req.body);
        const result = await conversa.save();

        return res.status(200).json(result);
    } catch (error) {
        return res.status(500).json(error);
    }
});

// getting all conversations
routes.get('/conversas', async (req, res) => {
    try {
        // getting data message
        const result = await Conversa.find().exec();

        return res.status(200).json(result);
    } catch (error) {
        return res.status(500).json(error);
    }
});

// getting a single message
routes.get('/conversa/:id', async (req, res) => {
    try {
        // searching on dataset
        const conversa = await Conversa.findById(req.params.id).exec();
        const result = await conversa.save();

        return res.status(200).json(result);
    } catch (error) {
        return res.status(500).json(error);
    }
});

// sending a message
routes.put('/conversa/:id', async (req, res) => {
    try {
        // searching on database
        const conversa = await Conversa.findById(req.params.id).exec();
        // updating...
        conversa.set(req.body);
        const result = await conversa.save();

        return res.status(200).json(result);
    } catch (error) {
        return res.status(500).json(error);
    }
});

// deleting a message
routes.delete('/conversa/:id', async (req, res) => {
    try {
        // deleting on database
        const result = await Conversa.deleteOne({ _id: req.params.id });

        return res.status(200).json(result);
    } catch (error) {
        return res.status(500).json(error);
    }
});

module.exports = routes;