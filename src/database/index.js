const Sequelize = require('sequelize');
const dbconfig = require('../config/database');

const User = require('../models/User');
const Box = require('../models/Box');
const File = require('../models/File');
const SubBox = require('../models/Sub_box');
const Video = require('../models/Video');

const connection = new Sequelize(dbconfig);

Box.init(connection);
SubBox.init(connection);
File.init(connection); 
Video.init(connection);
User.init(connection); 

Box.associate(connection.models);
File.associate(connection.models);
SubBox.associate(connection.models);
Video.associate(connection.models);

module.exports = connection;