const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const authConfig = require('../config/auth');

function generateToken(params= {}) {
    return jwt.sign(params, authConfig.secret, {
        expiresIn: 1000,
    });
};

module.exports = {

    async store(req, res) {
        
        const { email, password } = req.body;

        const user = await User.findOne({
            where: {
                email
            }
        });
        
        if (!user)
            return res.status(400).send({
                message: 'Usuario no válido'
            });

        if (!await bcrypt.compare(password, user.password))
            return res.status(400).send({ message: 'Clave no válida' })

            user.password= undefined;
            user.password_reset_token= undefined;

        res.send({
            user, 
            token: generateToken({ id: user.id}),
        });


    }
}
