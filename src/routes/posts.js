const routes = require('express').Router();
const fs = require('fs');

// Post collection database import
const PostModel = require('../models/PostModel');

// creating a post
routes.post('/postagem', async (req, res) => {
    try {
        // saving on dataset
        const post = await PostModel.create(req.body);
        const result = await post.save();

        return res.status(200).json(result);
    } catch (error) {
        return res.status(500).json(error);
    }
});

// getting a post
routes.get('/postagens', async (req, res) => {
    try {
        // getting on database
        const result = await PostModel.find().exec();

        return res.status(200).json(result);
    } catch (error) {
        return res.status(500).json(error);
    }
});

// getting a single post
routes.get('/postagem/:id', async (req, res) => {
    try {
        // getting data
        const post = await PostModel.findById(req.params.id).exec();
        const result = await post.save();

        return res.status(200).json(result);
    } catch (error) {
        return res.status(500).json(error);
    }
});

// updating a post
routes.put('/postagem/:id', async (req, res) => {
    try {
        // getting current data
        const post = await PostModel.findById(req.params.id).exec();
        // updating...
        post.set(req.body);
        const result = await post.save();

        return res.status(200).json(result);
    } catch (error) {
        return res.status(500).json(error);
    }
});

// deleting a post
routes.delete('/postagem/:id', async (req, res) => {
    try {
        // deleting post image if exists
        const post = await PostModel.findById(req.params.id).exec();
        if (post.imagem.url) {
            fs.unlink(post.imagem.url, err => {
                if (err) throw err;
            });
        }
        // deleting on dataset
        const result = await PostModel.deleteOne({ _id: req.params.id }).exec();

        return res.status(200).json(result);
    } catch (error) {
        return res.status(500).json(error);
    }
});

module.exports = routes;