const User = require('../models/User');
const crypto = require('crypto');
const mailer = require('@sendgrid/mail');



module.exports = {

    async store(req, res) {

        const { email } = req.body;


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

            const token = crypto.randomBytes(20).toString('hex')

            const now = new Date();
            now.setHours(now.getHours() + 1);

            try {
                await User.update({
                    password_reset_token: token,
                    password_reset_expires: now
                },
                    {
                        where: { email }
                    }
                )

                const link = "http://" + req.headers.host + "/reset_password/" + user.password_reset_token
                    
                

                mailer.setApiKey(process.env.SENDGRID_API_KEY);
                const msg = {
                    to: email,
                    from: 'managerclooud@gmail.com',
                    subject: 'Support Cloud Manager',
                    text: 'Reestablecer',
                    html: 'Recuperar Seña',
                    templateId: 'd-a6c3547416ee414a8f660825841dd359',
                    dynamic_template_data: {
                      subject: 'Reestablecer Contraseña',
                      name: user.name,
                      token: token,
                      link: link
                    },
                    headers:{
                        'X-CustomHeader': 'Support Cloud Manager',
                    },
                };
                mailer.send(msg);

                return res.send()
            }
            catch (error) {
                res.status(400).send({ error: 'ID no define' });
            }

        } catch (err) {
            res.status(400).send({ error: 'Error en forgot password, try again' });
        }

    }
}
