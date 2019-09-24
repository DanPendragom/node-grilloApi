const routes = require('express').Router();
const fs = require('fs');

// Person collection database import
const Usuarios = require('../models/UsuariosModel');

// creating user data
routes.post('/cadastro', async (req, res) => {
    try {            
        // saving on dataset
        const usuario = await Usuarios.create(req.body);
        const result = await usuario.save();

        return res.status(201).json(result);
    } catch (error) {
        return res.status(500).json(error);
    }
});

// getting all users
routes.get('/usuarios', async (req, res) => {
    try {            
        // getting on the database
        const result = await Usuarios.find().exec();

        return res.status(200).json(result);
    } catch (error) {
        return res.status(500).json(error);
    }
});

// getting a single user
routes.get('/usuario/:id', async (req, res) => {
    try {            
        // searching on dataset
        const usuario = await Usuarios.findById(req.params.id).exec();
        const result = await usuario.save();

        return res.status(200).json(result);
    } catch (error) {
        return res.status(500).json(error);
    }
});

// updating a user
routes.put('/usuario/:id', async (req, res) => {
    try {            
        // searching on dataset
        const usuario = await Usuarios.findById(req.params.id).exec();
        // updating...
        usuario.set(req.body);
        const result = await usuario.save();

        return res.status(200).json(result);
    } catch (error) {
        return res.status(500).json(error);
    }
});

// deleting a user
routes.delete('/usuario/:id', async (req, res) => {
    try {
        // deleting profile image
        const usuario = await Usuarios.findById(req.params.id).exec();
        if (usuario.imagemPerfil.url) {
            fs.unlink(usuario.imagemPerfil.url, err => {
                if (err) throw err;
            });
        }
        if (usuario.imagemBanner.url) {
            fs.unlink(usuario.imagemBanner.url, err => {
                if (err) throw err;
            });
        }
        // deleting on dataset
        const result = await Usuarios.deleteOne({ _id: req.params.id }).exec();

        return res.status(200).json(result);
    } catch (error) {
        return res.status(500).json(error);
    }
});

// exporting routes
module.exports = routes;