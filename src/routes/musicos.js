const routes = require('express').Router();
const fs = require('fs');

// Musician collection database import
const Musicos = require('../models/MusicosModel');
// Person collection database import
const Usuarios = require('../models/UsuariosModel');

// creating musician data
routes.post('/musico', async (req, res) => {
    try {            
        // saving on dataset
        const musico = await Musicos.create(req.body);

        // setting the images
        const usuario = await Usuarios.findById({ _id: req.body.usuario_id });
        const imagens = {
            imagemPerfil: {
                url: usuario.imagemPerfil.url
            },
            imagemBanner: {
                url: usuario.imagemBanner.url
            }
        }
        musico.set(imagens);
        const result = await musico.save();

        return res.status(201).json(result);
    } catch (error) {
        return res.status(500).json(error);
    }
});

// getting all musicians
routes.get('/musicos', async (req, res) => {
    try {            
        // getting on the database
        const result = await Musicos.find().exec();

        return res.status(200).json(result);
    } catch (error) {
        return res.status(500).json(error);
    }
});

// getting a single musician
routes.get('/musico/:id', async (req, res) => {
    try {            
        // searching on dataset
        const musicos = await Musicos.findById(req.params.id).exec();
        const result = await musicos.save();

        return res.status(200).json(result);
    } catch (error) {
        return res.status(500).json(error);
    }
});

// updating a musician
routes.put('/musico/:id', async (req, res) => {
    try {            
        // searching on dataset
        const musico = await Musicos.findById(req.params.id).exec();
        // updating...
        musico.set(req.body);
        const result = await musico.save();

        return res.status(200).json(result);
    } catch (error) {
        return res.status(500).json(error);
    }
});

// deleting a musician
routes.delete('/musico/:id', async (req, res) => {
    try {
        // deleting profile image
        const musico = await Musicos.findById(req.params.id).exec();
        if (musico.imagemPerfil.url) {
            fs.unlink(musico.imagemPerfil.url, err => {
                if (err) throw err;
            });
        }
        if (musico.imagemBanner.url) {
            fs.unlink(musico.imagemBanner.url, err => {
                if (err) throw err;
            });
        }

        // deleting on dataset
        const result = await Musicos.deleteOne({ _id: req.params.id }).exec();

        return res.status(200).json(result);
    } catch (error) {
        return res.status(500).json(error);
    }
});

// exporting routes
module.exports = routes;