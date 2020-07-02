const User = require("../models/User");


checkEmail = (req, res, next) => {

    // -> Check Email is already in use
    User.findOne({
        where: {
            email: req.body.email
        }
    }).then(user => {
        if (user) {
            res.status(400).send("El correo ya esta en uso");
            return;
        }

        next();
    });

}
const signUpVerify = {};
signUpVerify.checkEmail = checkEmail;
 
module.exports = signUpVerify;