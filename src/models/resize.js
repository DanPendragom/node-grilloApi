// importing modules to resize the file
const sharp = require('sharp');
const uuidv4 = require('uuid/v4');
const path = require('path');

class Resize {
    constructor(folder) {
        this.folder = folder;
    }

    // saving buffer file method
    async save(buffer) {
        const filename = Resize.filename();
        const filepath = this.filepath(filename);

        await sharp(buffer)
            .resize(300, 300, {
                fit: sharp.fit.inside,
                withoutEnlargement: true
            })
            .toFile(filepath);
        
        return filename;
    }

    // filename static method
    static filename() {
        return `${uuidv4()}.png`;
    }

    // filepath method
    filepath(filename) {
        return path.resolve(`${this.folder}/${filename}`);
    }
}

module.exports = Resize;