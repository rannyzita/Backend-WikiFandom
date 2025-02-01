const knex = require('knex');
const config = require('../knexfile'); // Importando a configuração correta

const connection = knex(config.development); // Pegando a config de desenvolvimento

module.exports = connection;
