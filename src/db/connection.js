const knex = require("knex");
const configuration = require("./db/connection.js");

const connection = knex(configuration.development);

module.exports = connection;