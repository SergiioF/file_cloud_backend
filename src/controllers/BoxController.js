const Box = require('../models/Box');

module.exports = {
    async indexbox(req, res) {
       
        const box = await Box.findAll();
        return res.json(box)                        
       
    },

    async indexfile(req, res) {
       const { box_id } = req.params;

       const box = await Box.findByPk(box_id, {
           include: { association: 'archivos'}
       });

        return res.json(box);
    },
    async store(req, res) {
        const { name } = req.body;

        const box = await Box.create({
            name
        });

        return res.json(box);
    }
};