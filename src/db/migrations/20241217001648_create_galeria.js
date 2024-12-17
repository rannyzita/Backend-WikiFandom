const { v4: uuidv4 } = require('uuid');
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable("Galeria", function(table) {
        table.uuid("id").primary().defaultTo(uuidv4());
        table.string("nome_imagem", 45).notNullable();
        table.string("descricao", 100).notNullable();
        table.date("data_envio").notNullable();
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable("Galeria");
};
