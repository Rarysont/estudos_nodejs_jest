const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const Products = require('../models/Products');
const Client = require('../models/Client');
const Seller = require('../models/Seller');

const connection = new Sequelize(dbConfig);

Products.init(connection);
Seller.init(connection);
Client.init(connection);

module.exports = connection;