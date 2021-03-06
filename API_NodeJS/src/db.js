const { Sequelize } = require('sequelize');
const fs = require('fs');
const path = require('path');
const DB_USER = 'userpruebayuba'; 
const DB_PASSWORD = 'passpruebayuba';
const DB_HOST = '127.0.0.1';
const DB_BDNAME = 'dbpruebayuba';


const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_BDNAME}`, {
  logging: false, 
  native: false, 
});

const modelDefiners = [];

fs.readdirSync(path.join(__dirname, '/model'))
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, '/model', file)));
  });

modelDefiners.forEach(model => model(sequelize));
let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [entry[0][0].toUpperCase() + entry[0].slice(1), entry[1]]);
sequelize.models = Object.fromEntries(capsEntries);


const { Departamento } = sequelize.models;


module.exports = {
  ...sequelize.models, 
  connect: sequelize,     
};