const multer = require('multer');
const path = require('path');
const crypto = require('crypto');

module.exports = {
    dest: path.resolve(__dirname, '..', '..', 'public', 'uploads'),
    //Esto va almacenar los archivos en el disco local 
    storage: multer.diskStorage({
        destination: (req, file, cb) => {
            cb(null, path.resolve(__dirname, '..', '..', 'public', 'uploads'));
        },
        filename: (req, file, cb) => {
            crypto.randomBytes(7, (err, hash) => {
                if (err) cb(err);

                file.key = `${hash.toString('hex')}-${file.originalname}`;

                cb(null, file.key);
            })
        }

    })
};