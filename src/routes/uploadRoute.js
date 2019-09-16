// upload files module
const Upload = require('../controllers/Upload');

// upload file module
const uploadMiddleware = require('../models/uploadMiddleware');

// upload route config
const uploadRoute = app => {
    // storage a image on the system
    app.post('/uploadPhoto', uploadMiddleware.single('image'), Upload.photo);
};

module.exports = uploadRoute;

