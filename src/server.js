const cloudinary = require('cloudinary').v2;
const express = require('express');
const cors = require('cors')
const path = require('path');
const routes = require('./routes');
require('./database');


cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
    api_key:  process.env.CLOUDINARY_API_KEY, 
    api_secret:  process.env.CLOUDINARY_API_SECRET
})

const app = express();
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({extended: true}))
app.use('/files', express.static(path.resolve(__dirname,'..','public','uploads')));
app.use(routes);

app.listen(3333);