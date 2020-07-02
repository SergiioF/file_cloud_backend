//aqui se haran verificaciones del token

const jwt = require('jsonwebtoken');
const authConfig = require('../config/auth');


module.exports = (req, res, next) => {
    const authHeader = req.headers.authorization;

    /*if(pay.exp <= moment().unix()){
        return res.status(401).send({message:'Token expirado'});
      }*/
       
    if (!authHeader)
        return res.status(401).send({ error: "No posee token" });

    const parts = authHeader.split(' ');

    if (!parts.length === 2)
        return res.status(401).send({ error: "token error" });

    const [scheme, token] = parts;

    if (!/^Bearer$/i.test(scheme))
        return res.status(401).send({ error: "token sin formato" });


    jwt.verify(token, authConfig.secret, (err, decoded) => {
       if (err) return res.status(401).send({error: "token invalido"});
       
       
       req.user = decoded.id;
       return next();
    })

       
}
