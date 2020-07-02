const Sub_box = require('../models/Sub_box');

module.exports = {
    async indexsubbox(req, res) {
       
        const subbox = await Sub_box.findAll();
        return res.json(subbox)                        
       
    },

    async indexvideo(req, res) {
       const { sub_box_id } = req.params;

       const subbox = await Sub_box.findByPk(sub_box_id, {
           include: { association: 'videos'}
       });

        return res.json(subbox);
    },
    async store(req, res) {
        const { name } = req.body;

        const subbox = await Sub_box.create({
            name
        });

        return res.json(subbox);
    }
};