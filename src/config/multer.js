const multer = require('multer');
const path = require('path');
// hash generator module
const crypto = require('crypto');

module.exports = {
    // path destination
    dest: path.resolve(__dirname, '..', '..', 'public'),
    // storaging image
    storage: multer.diskStorage({
        // destination file config
        destination: (req, file, cb) => {
            cb(null, path.resolve(__dirname, '..', '..', 'public'));
        },
        // filename definition
        filename: (req, file, cb) => {
            // hashing filename
            crypto.randomBytes(16, (err, hash) => {
                if (err) cb(err);

                const filename = `${hash.toString('hex')}-${file.originalname}`;

                cb(null, filename);
            })
        },
    }),
    limits: {
        fileSize: 2 * 1024 * 1024,
    },
    fileFilter: (req, file, cb) => {
        const allowedMimes = [
            'image/jpeg',
            'image/pjpeg',
            'image/png',
            'image/gif'
        ];

        if (allowedMimes.includes(file.mimetype)) {
            cb(null, true);
        }
        else {
            cb(new Error('Invalid file type'));
        }
    }
};