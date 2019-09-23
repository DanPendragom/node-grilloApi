const routes = require('express').Router();
const multer = require('multer');
const multerConfig = require('../config/multer');
const sharp = require('sharp');

const path = require('path');
const fs = require('fs');

// Person collection database import
const Usuarios = require('../models/UsuariosModel');
// Post Database import
const PostModel = require('../models/PostModel');

// uploading a profille image
routes.post('/cadastro/imagem/:user_id', multer(multerConfig).single('file'), async (req, res) => {
    try {

        const usuario = await Usuarios.findById(req.params.user_id).exec();
        if (usuario.imagemPerfil.url) {
            fs.unlink(usuario.imagemPerfil.url, err => {
                if (err) throw err;
            });
        }

        // simplifying the file properties
        const { originalname: nome, tamanho, filename: key } = req.file;

        // file url config
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
        
        // uploading the url file on the database
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

// uploading a post image
routes.post('/postagem/imagem/:id', multer(multerConfig).single('file'), async (req, res) => {
    try {
        // getting post data
        const post = await PostModel.findById(req.params.id).exec();
        if (post.imagem.url) {
            fs.unlink(post.imagem.url, err => {
                if (err) throw err;
            });
        }

        // simplifying the file properties
        const { oroginalname: nome, tamanho, filename: key } = req.file;

        // file data
        const fileData = {
            nome,
            tamanho,
            key,
            url: path.resolve(__dirname, '..', '..', 'public', key)
        };

        // uploading the url file on yhe database
        post.set({ imagem: fileData });
        const result = await post.save();

        return res.status(200).json(result);
    } catch (error) {
        return res.status(500).json(error);        
    }
});

// getting a post image
routes.get('/postagem/imagem/:id', async (req, res) => {
    try {
        // getting url image
        const post = await PostModel.findById(req.params.id).exec();
        const image = post.imagem.url;

        return res.status(200).sendFile(image);
    } catch (error) {
        return res.status(500).json(error);
    }
});

module.exports = routes;