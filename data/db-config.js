//Import knex package
const knex = require('knex');

//Get config object from knexfile
const config = require('../knexfile.js');

//assign the dev config object to the db export
const db = knex(config.development);

//export the db object
module.exports = db;