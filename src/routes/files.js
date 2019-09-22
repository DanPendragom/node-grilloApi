const routes = require('express').Router();
const multer = require('multer');
const multerConfig = require('../config/multer');
const sharp = require('sharp');

const path = require('path');
const fs = require('fs');

// Person collection database import
const Usuarios = require('../models/UsuariosModel');

// uploading a profille image
routes.post('/cadastro/imagem/:user_id', multer(multerConfig).single('file'), async (req, res) => {
    try {

        const usuario = await Usuarios.findById(req.params.user_id).exec();
        if (usuario.imagemPerfil.url) {
            fs.unlink(usuario.imagemPerfil.url, err => {
                if (err) throw err;
            });
        }

        const { originalname: nome, tamanho, filename: key } = req.file;

        const inputFile = path.resolve(__dirname, '..', '..', 'public', key);
        const url = path.resolve(__dirname, '..', '..', 'public', '640'+key);

        // resizing the image to the correct resolution
        sharp(inputFile).resize(640,640).toFile(url)
            .then(newFileInfo => {
                fs.unlink(inputFile, err => {
                    if (err) throw err;
                });
            });
            
        // file data
        const fileData = {
            nome,
            tamanho,
            key,
            url: path.resolve(__dirname, '..', '..', 'public', url)
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
        const image = usuario.imagemPerfil.url;

        return res.status(200).sendFile(image);
    } catch (error) {
        return res.status(500).json(error);
    }
});

module.exports = routes;