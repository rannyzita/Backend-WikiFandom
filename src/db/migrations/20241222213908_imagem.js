const { v4: uuidv4 } = require('uuid');
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable("Imagem", function(table) {
        table.uuid("id").primary().defaultTo(uuidv4());
        table.string("titulo", 45).notNullable();
        table.datetime("data_criacao").defaultTo(knex.fn.now());
        table.text("url_post", 500).notNullable();
	    table.string("categoria", 45).notNullable();
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable("Imagem");
};
