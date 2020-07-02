const File = require('../models/File');
const Box = require('../models/Box');
const cloudinary = require('cloudinary').v2;



module.exports = {
   
    async store(req, res) {
        //case use cloudinary, must be enabled the public_id:
        //const imgUpload = await cloudinary.uploader.upload(req.file.path);

        //Busca la carpeta para almacenar en ella el archivo
        const { box_id } = req.params;
        const box = await Box.findByPk(box_id);

        if (!box_id) {
            return res.status(400).json({ error: 'Carpeta no encontrada' });

        }

        const url = req.protocol + '://' + req.get('host');
        
        //Almacena los datos en la tabla file
        const file = await File.create({
                name: req.file.originalname,
                path: req.file.key,
                image_url: url + '/files/' + req.file.key,
               // public_id:  imgUpload.public_id, 
                box_id
            });

            await box.save();

            return res.json(file);
        }
};