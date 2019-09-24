const routes = require('express').Router();
const fs = require('fs');

// Event collection database import
const Vagas = require('../models/VagasModel');

// creating vacancy
routes.post('/vaga', async (req, res) => {
    try {
        // saving on database
        const vaga = await Vagas.create(req.body);
        const result = await vaga.save();

        return res.status(200).json(result);
    } catch (error) {
        return res.status(500).json(error);
    }
});

// getting all vacancy
routes.get('/vagas', async (req, res) => {
    try {
        // getting data events
        const result = await Vagas.find().exec();

        return res.status(200).json(result);
    } catch (error) {
        return res.status(500).json(error);
    }
});

// getting a single vacancy
routes.get('/vaga/:id', async (req, res) => {
    try {
        // searching on dataset
        const vaga = await Vagas.findById(req.params.id).exec();
        const result = await vaga.save();

        return res.status(200).json(result);
    } catch (error) {
        return res.status(500).json(error);
    }
});

// updating a vacancy
routes.put('/vaga/:id', async (req, res) => {
    try {
        // searching on database
        const vaga = await Vagas.findById(req.params.id).exec();
        // updating...
        vaga.set(req.body);
        const result = await vaga.save();

        return res.status(200).json(result);
    } catch (error) {
        return res.status(500).json(error);
    }
});

// deleting a vacancy
routes.delete('/vaga/:id', async (req, res) => {
    try {
        // deleting a vacancy file if exists
        const vaga = await Vagas.findById(req.params.id).exec();
        if (vaga.imagem.url) {
            fs.unlink(vaga.imagem.url, err => {
                if (err) throw err;
            });
        }
        // deleting on database
        const result = await Vagas.deleteOne({ _id: req.params.id });

        return res.status(200).json(result);
    } catch (error) {
        return res.status(500).json(error);
    }
});

module.exports = routes;