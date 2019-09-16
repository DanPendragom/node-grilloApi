// path module
const path = require('path');

// upload and resize file modules
const Resize = require('../models/resize');

// upload actions
const Upload = {

    // uploading image on the server
    photo: async (request, response) => {
        const imagePath = path.join('../../public');
        const fileUpload = new Resize(imagePath);
        if (!req.file) {
            res.status(401).json({error: 'Please provide an image'});
        }
        const filename = await fileUpload.save(req.file.buffer);
        return res.status(200).json({ name: filename });
    }
};

module.exports = Upload;