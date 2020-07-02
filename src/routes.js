const express = require('express');
const multer = require('multer');
const multerConfig = require('./config/multer');
const verifyUser = require('./controllers/verifyUser');
const authMiddleware = require('./middlewares/auth');


const BoxController = require('./controllers/BoxController');
const FileController = require('./controllers/FileController');
const LoginController = require('./controllers/LoginController');
const RegisterController = require('./controllers/RegisterController');
const VideoController = require('./controllers/VideoController');
const SubBoxController = require('./controllers/SubBoxController');
const ForgotPasswordController = require('./controllers/ForgotPasswordController');
const ResetPasswordController = require('./controllers/ResetPasswordController');
const routes = express.Router();



//Rutas para Box
routes.get('/box',  BoxController.indexbox);//Esto enlista carpetas
routes.get('/box/:box_id',  BoxController.indexfile); //Esto enlista archivos dentro de las carpetas
routes.post('/box', authMiddleware, BoxController.store); //Esto es para cargar nuevos archivos

//Rutas para SubBox
routes.get('/subbox', authMiddleware, SubBoxController.indexsubbox);//Esto enlista carpetas
routes.get('/subbox/:sub_box_id', authMiddleware, SubBoxController.indexvideo); //Esto enlista archivos dentro de las carpetas
routes.post('/subbox', authMiddleware, SubBoxController.store); //Esto es para cargar nuevos archivos


//Rutas para Video
routes.post('/subbox/:sub_box_id/video', authMiddleware, VideoController.store);

//Rutas para File
//routes.get('/box/:box_id/file', FileController.index); 
routes.post('/box/:box_id/file',  multer(multerConfig).single('file'), FileController.store);

//Rutas para registro
routes.get('/register', RegisterController.index);
routes.post('/register', [verifyUser.checkEmail], RegisterController.store);

//Rutas para ingreso
routes.post('/login', LoginController.store);

//Rutas para recuperar seña
routes.post('/forgot_password', ForgotPasswordController.store);
routes.post('/reset_password/:token', ResetPasswordController.store);


module.exports = routes; 