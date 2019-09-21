const routes = require('express').Router();
const multer = require('multer');
const multerConfig = require('../config/multer');

const path = require('path');
const fs = require('fs');

// Person collection database import
const Usuarios = require('../models/UsuariosModel');

// uploading a image
routes.post('/cadastro/:user_id', multer(multerConfig).single('file'), async (req, res) => {
    try {
        const usuario = await Usuarios.findById(req.params.user_id).exec();

        const { originalname: nome, tamanho, filename: key } = req.file;

        // file data
        const fileData = {
            nome,
            tamanho,
            key,
            url: path.resolve(__dirname, '..', '..', 'public', key)
        };
        
        // inserting the filedata on database
        usuario.set({ imagemPerfil: fileData });
        const result = await usuario.save();

        return res.status(200).json(result);
    } catch (error) {
        return res.status(500).json(error);
    }
});

// getting a profile image
routes.get('/usuario/imagem/:id', async (req, res) => {
    try {            
        // searching on dataset
        const usuario = await Usuarios.findById(req.params.id).exec();
        const result = usuario.imagemPerfil.url;

        console.log(result);

        return res.status(200).sendFile(result);
    } catch (error) {
        return res.status(500).json(error);
    }
});

module.exports = routes;