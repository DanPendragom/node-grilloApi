// path module
const path = require('path');

// File collection data
const File = require('../models/File');

// upload actions
const Upload = {
    // uploading image on the server
    photo: async (request, response) => {
        // destructuring req to make a simple read
        const { originalname: name, size, filename: key } = request.file;

        // json storage object info
        const post = await File.create({
            name,
            size,
            key,
            url: ''
        });
        
        return res.json(post);
    }
};

module.exports = Upload;