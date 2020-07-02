const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken');
const authConfig = require('../config/auth');

function generateToken(params= {}) {
    return jwt.sign(params, authConfig.secret, {
        expiresIn: 1000,
    });
};

module.exports = {

   
async index(req, res) {
    
    const user = await User.findAll();
    return res.json(user)      
    
},

async store(req, res) {

    try {
        //toma los datos ingresados por el usuario
        const { name, email, password } = req.body;

        //registra un usuario con los datos ingresados
        const user = await User.create({
            name,
            email,
            password: await bcrypt.hash(password, 10)
        });

        return res.send({
            user,
            token: generateToken({ id: user.id}),
        });

    } catch (err) {
        return res.status(400).send({ error: err });
    }


}

}
