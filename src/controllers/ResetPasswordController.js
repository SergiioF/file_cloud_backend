const User = require('../models/User');
const bcrypt = require('bcryptjs');
const mailer = require('@sendgrid/mail');


module.exports = {

    async store(req, res) {
        
        const { email } = req.body;
        const token = req.params.token;

        try {

            const user = await User.findOne({
                where: {
                    email
                }
            });
            
            if (!user)
                return res.status(400).send({
                    message: 'Usuario no válido'
                });

            if (token !== user.password_reset_token)
                return res.status(400).send({
                    message: 'Token invalid'
                });

            const now = new Date();

            if (now > user.password_reset_expires)
                return res.status(400).send({
                    message: 'Token expired, generate a new one'
                });

            try {
                //cambio de seña
                await User.update({
                    password: await bcrypt.hash(password, 10)
                },
                    {
                        where: { email }
                    }
                )

            }
            catch (error) {
                res.status(400).send({ error: 'ID no define' });
            }
            user.password_reset_token = undefined;
            user.password_reset_expires = undefined;

            await user.save();


            // send email
            mailer.setApiKey(process.env.SENDGRID_API_KEY);
            const msg = {
                to: email,
                from: 'managerclooud@gmail.com',
                subject: 'Support Cloud Manager',
                text: `Hi ${user.name} \n 
                    This is a confirmation that the password for your account ${user.email} has just been changed.\n`

            };
            mailer.send(msg);
            res.send();
            
        } catch (err) {
            res.status(400).send({ error: 'Error en forgot password, try again' });
        }

    }
}



