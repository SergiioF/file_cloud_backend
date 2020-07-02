const Video = require('../models/Video');
const Sub_box = require('../models/Sub_box');



module.exports = {
 
    async store(req, res) {

        //Busca la carpeta para almacenar en ella el archivo
        const { sub_box_id } = req.params;
        const subbox = await Sub_box.findByPk(sub_box_id);

        if (!sub_box_id) {
            return res.status(400).json({ error: 'Carpeta no encontrada' });

        }
        const { name, link } = req.body;
        //Almacena los datos en la tabla video
        const video = await Video.create({
            name,
            link,
            sub_box_id
        });
       
        await subbox.save();
       
        return res.json(video);
    }
};